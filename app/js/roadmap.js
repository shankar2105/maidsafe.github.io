/*global window:false */
var $ = window.$;
var jQuery = window.jQuery;
var d3 = window.d3;
var document = window.document;

var NAV_ID = 'RoadmapNav';
var CHART_ID = 'RoadmapChart';
var SVG_ID = 'RoadmapSvg';

var NAV_PREFIX = 'NAV_';
var BOX_PREFIX = 'BOX_';
var ARROW_PREFIX = 'ARROW_';

var EXCLUDED_TASKS = ['EXTERNAL', 'DOWN_STREAM'];
var END_TASK_TARGET = 'END';

var TASK_STATUS = {
  NAME: 'Status_Patterns',
  COMPLETE: {
    id: 'STATUS_COMPLETE',
    path: '14.9,4.9 7.7,12.1 4.9,9.2 3.5,10.6 7.7,14.9 16.3,6.3',
    color: '#FFFFFF'
  },
  OPEN: {
    id: 'STATUS_OPEN',
    path: 'M15.2,13.3l-4.5-4.5c0.4-1.1,0.2-2.5-0.7-3.4c-1-1-2.5-1.2-3.6-0.6' +
      'l2.1,2.1L7,8.4L4.8,6.3C4.2,7.4,4.5,8.9,5.5,9.9c0.9,0.9,2.3,1.2,3.4,' +
      '0.7l4.5,4.5c0.2,0.2,0.5,0.2,0.7,0l1.1-1.1C15.4,13.8,15.4,13.4,15.2,13.3z',
    color: '#FFFFFF'
  }
};

var TASK_COLORS = [ 'blue-1', 'blue-2', 'blue-3', 'orange-1', 'orange-2', 'orange-3',
  'coral-1', 'coral-2', 'coral-3', 'pink-1', 'pink-2', 'pink-3',
  'green-1', 'green-2', 'green-3', 'indigo-1', 'indigo-2', 'indigo-3',
  'cyan-1', 'cyan-2', 'cyan-3', 'turquoise-1', 'turquoise-2', 'turquoise-3',
  'grey-1', 'grey-2', 'grey-3', 'purple-1', 'purple-2', 'purple-3', ''
];

var CONNECTION_ARROW = {
  name: 'Connection_Arrows',
  refX: 12,
  refY: 10,
  markerWidth: 6,
  markerHeight: 6,
  fill: 'none',
  strokeWidth: 3,
  path: 'M 0 20L 10 10 L 0 0'
};

var CSS_CLASS = {
  LIST_TITLE: 'listTitle',
  LIST_BASE: 'listBase',
  LIST_PADDING: 'listPadding',
  LIST_CLOSED: 'listClose',
  NAV_BASE: 'roadmapNav',
  CHART: 'roadmapChart',
  CHART_BASE: 'roadmapChart-b',
  LINE: 'line-',
};

var print = function(title, data) {
  console.log(title + ' ::');
  console.log(data);
};

/**
 * Utilities
 */
var Utils = function() {};

// formate date to YYYY-MM-DD
Utils.parseDate = function(dateStr) {
  var makeDouble = function(digit) {
    return ("0" + digit).slice(-2);
  };
  var date = dateStr ? new Date(dateStr) : new Date();
  return date.getFullYear() + '-' + makeDouble(date.getMonth() + 1) + '-' + makeDouble(date.getDate());
};

// create div element
// return jQuery element
Utils.createDiv = function(id, classList, text) {
  id = id || '';
  text = text || '';
  var classNames = (typeof classList === 'object') ? classList.join(' ') : '';
  var ele = '<div id="::id::" class="::class::">::text::</div>';
  ele = ele.replace('::id::', id)
    .replace('::class::', classNames)
    .replace('::text::', text);
  return $(ele);
};

// parse name as jQuery id selector
Utils.parseId = function(idName) {
  if (!idName) {
    return;
  }
  return idName.indexOf('#') === 0 ? idName : '#' + idName;
};

// set location hash
Utils.setLocationHash = function(taskId) {
  if (!taskId) {
    return;
  }
  window.location.assign('#' + taskId.toLowerCase());
};

Utils.getLocationHash = function() {
  return window.location.hash.toUpperCase().replace('#', '');
};

Utils.resetLocationHash = function() {
  window.location.hash = '';
};

/**
 * Task Nav
 */
var TaskNav = function(taskId, isRoot) {
  this.taskId = taskId;
  this.id = NAV_PREFIX + taskId;
  this.isRoot = isRoot;
};

TaskNav.prototype.onClick = function() {
  var self = this;
  return function(e) {
    e.stopPropagation();
    if (self.isRoot) {
      $(this).children().addClass(CSS_CLASS.LIST_CLOSED);
    } else {
      $(this).siblings().addClass(CSS_CLASS.LIST_CLOSED);
      $(this).removeClass(CSS_CLASS.LIST_CLOSED);
    }
    Utils.setLocationHash(self.taskId);
  };
};

TaskNav.prototype.onMouseOver = function() {
  var self = this;
  return function(e) {
    e.stopPropagation();
    $(this).addClass('highlight');
  };
};

TaskNav.prototype.onMouseOut = function() {
  var self = this;
  return function(e) {
    e.stopPropagation();
    $(this).removeClass('highlight');
  };
};

/**
 * Task Box
 */
var TaskBox = function(taskId) {
  this.taskId = taskId;
  this.id = BOX_PREFIX + taskId;
};

/**
 * Task
 */
var Task = function(payload, parent, isRoot) {
  this.name = payload.name;
  this.id = payload.id;
  this.desc = payload.desc;
  this.parent = parent;
  this.target = payload.target;
  this.source = payload.source || null;
  this.color = payload.color;
  this.status = payload.status;
  this.startDate = Utils.parseDate(payload.startDate);
  this.daysCompleted = payload.daysCompleted || 0;
  this.order = payload.order || 0;
  this.section = payload.section || 0;
  this.offset = payload.offset || 0;
  this.nav = new TaskNav(this.id, isRoot);
  this.box = new TaskBox(this.id);
};

Task.prototype.isExcluded = function() {
  var self = this;
  return EXCLUDED_TASKS.indexOf(self.name) !== -1;
};

/**
 * Roadmap
 */
var Roadmap = function(payload) {
  this.plainData = payload.data;
  this.targetId = payload.target;
  this.interval = payload.interval;
  this.tasks = [];
  this.svg = {
    width: 0,
    height: 600,
    padding: 20
  };
  this.progressbar = {
    height: 10
  };
  this.box = {
    width: 0,
    height: 22,
    strokeWidth: 2
  };
};

Roadmap.prototype.getTask = function(taskId) {
  var self = this;
  var targetTask = null;
  self.tasks.forEach(function(task) {
    if (task.id !== taskId) {
      return;
    }
    targetTask = task;
  });
  return targetTask;
};

Roadmap.prototype.init = function() {
  var self = this;
  $(window).on('hashchange', function() {
    self.drawChart(Utils.getLocationHash());
  });
};

Roadmap.prototype.prepareTasks = function() {
  var self = this;

  var setTask = function(task) {
    if (!task.hasOwnProperty('children')) {
      return;
    }
    task.children.forEach(function(child) {
      self.tasks.push(new Task(child, self.getTask(task.id), false));
      if (child.hasOwnProperty('children')) {
        setTask(child);
      }
    });
  };

  self.tasks.push(new Task(self.plainData, null, true));
  setTask(self.plainData);
  print('Task', self.tasks);
};

Roadmap.prototype.setNav = function() {
  var self = this;
  var prepareNavBase = function() {
    var navBase = Utils.createDiv(NAV_ID, [CSS_CLASS.NAV_BASE]);
    $(Utils.parseId(self.targetId)).append(navBase);
  };

  var setNavList = function(task) {
    if (task.isExcluded()) {
      return;
    }
    var parentNavList = !task.parent ? $(Utils.parseId(NAV_ID)) : $(Utils.parseId(task.parent.nav.id));
    var listClasses = [task.color];
    if (task.nav.isRoot) {
      listClasses.push(CSS_CLASS.LIST_TITLE);
    } else {
      parentNavList.addClass(CSS_CLASS.LIST_CLOSED);
      listClasses.push(CSS_CLASS.LIST_BASE);
    }
    var navList = Utils.createDiv(task.nav.id, listClasses);
    navList.append('<span class="' + CSS_CLASS.LIST_PADDING + '">' + task.name + '</span>');
    navList.on('click', (task.nav.onClick)());
    navList.on('mouseover', (task.nav.onMouseOver)());
    navList.on('mouseout', (task.nav.onMouseOut)());
    parentNavList.append(navList);
  };

  prepareNavBase();
  self.tasks.forEach(setNavList);
};

Roadmap.prototype.prepareChart = function() {
  var self = this;
  var setChartBase = function() {
    var chart = Utils.createDiv(null, [CSS_CLASS.CHART]);
    var chartBase = Utils.createDiv(CHART_ID, [CSS_CLASS.CHART_BASE]);
    $(Utils.parseId(self.targetId)).append(chart.append(chartBase));
    self.svg.width = chartBase.width();
  };

  var setSvg = function() {
    d3.selectAll(Utils.parseId(CHART_ID))
      .append('svg')
      .attr('id', SVG_ID)
      .attr('width', self.svg.width)
      .attr('height', self.svg.height)
      .append('g')
      .attr('transform', 'translate(' + self.svg.padding + ',' + (self.svg.padding + self.progressbar.height) + ')');
  };

  var defineTaskStatus = function() {
    var status = d3.select(Utils.parseId(SVG_ID))
    .append('g')
    .attr('data-name', TASK_STATUS.NAME);

    status.append('svg:pattern')
      .attr('id', TASK_STATUS.COMPLETE.id)
      .attr('patternUnits', 'objectBoundingBox')
      .attr('width', self.box.height)
      .attr('height', self.box.height)
      .append('polygon')
      .attr('fill', TASK_STATUS.COMPLETE.color)
      .attr('points', TASK_STATUS.COMPLETE.path);

    // status open
    status.append('svg:pattern')
      .attr('id', TASK_STATUS.OPEN.id)
      .attr('patternUnits', 'objectBoundingBox')
      .attr('width', self.box.height)
      .attr('height', self.box.height)
      .append('path')
      .attr('fill', TASK_STATUS.OPEN.color)
      .attr('d', TASK_STATUS.OPEN.path);
  };

  var defineConnectionArrows = function() {
    var connectionArrows = d3.select(Utils.parseId(SVG_ID))
    .selectAll('marker')
    .data(TASK_COLORS)
    .enter()
    .append('svg:marker')
    .attr('id', function(d) {
      return ARROW_PREFIX + d;
    })
    .attr('class', function(d) {
      return CSS_CLASS.LINE + d;
    })
    .attr('viewBox', '0 0 20 20')
    .attr('refX', CONNECTION_ARROW.refX)
    .attr('refY', CONNECTION_ARROW.refY)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', CONNECTION_ARROW.markerWidth)
    .attr('markerHeight', CONNECTION_ARROW.markerHeight)
    .attr('fill', CONNECTION_ARROW.fill)
    .append('svg:path')
    .attr('stroke-width', CONNECTION_ARROW.strokeWidth)
    .attr('d', CONNECTION_ARROW.path);
  };

  setChartBase();
  setSvg();
  defineTaskStatus();
  defineConnectionArrows();
};

Roadmap.prototype.drawChart = function(taskId) {
  var self = this;
  taskId = taskId || self.tasks[0].id;
  var task = self.getTask(taskId);
  self.prepareChart();
  console.log(task);
};

Roadmap.prototype.draw = function() {
  var self = this;
  Utils.resetLocationHash();
  self.init();
  self.prepareTasks();
  self.setNav();
  self.drawChart();
};

$(function() {
  // $.get('data/roadmapData.json', function(data) {
  //   new Roadmap({
  //     data: data,
  //     target: '#Roadmap',
  //     interval: 10
  //   }).draw();
  // });
  new Roadmap({
    data: jsonData,
    target: '#Roadmap',
    interval: 10
  }).draw();
});
