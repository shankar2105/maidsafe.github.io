/*global window:false */
var $ = window.$;
var jQuery = window.jQuery;
var d3 = window.d3;
var document = window.document;

var DESKTOP_BREAKPOINT = 1134;

var NAV_ID = 'RoadmapNav';
var CHART_ID = 'RoadmapChart';
var SVG_ID = 'RoadmapSvg';
var SVG_BOX_GRP_ID = 'RoadmapSvgBoxGrp';
var TASK_TITLE_ID = 'TaskTitle';
var TASK_DESC_ID = 'TaskDesc';
var BREADCUM_ID = 'Breadcum';
var MOBILE_MENU_ID = 'Mobile_menu';
var MOBILE_CHART_ID = 'Mobile_chart';
var SUB_FEATURES_ID = 'Sub_feature';
var RELIED_ON_FEATURES_ID = 'Relied_on_features';
var RELY_THIS_FEATURES_ID = 'Rely_this_features';

var NAV_PREFIX = 'NAV_';
var BOX_PREFIX = 'BOX_';
var ARROW_PREFIX = 'ARROW_';
var BOX_PATTERN_PREFIX = 'BOX_PATTERN_';
var CONNECTION_PREFIX = 'CONNECTION_';
var FEATURES_PREFIX = 'FEATURE_';

var EXCLUDED_TASKS = ['EXTERNAL', 'DOWN_STREAM'];
var END_TASK_TARGET = 'END';

var TASK_FEATURE_TYPE = {
  SUB_FEATURES: 'sub_features',
  RELIED_ON_FEATURES: 'relied_on_features',
  RELY_THIS_FEATURES: 'rely_this_features'
};

var infoIconOpen = '<svg class="info-icon opened" version="1.1" id="Layer_1" x="0px" y="0px"' +
  ' viewBox="0 0 39 24" fill="#2A98EA" enable-background="new 0 0 39 24" ><path d="M11,' +
  '17h2v-6h-2V17z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,' +
  '20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z M11,9h2V7h-2V9z"/><polygon ' +
  'points="31.3,13.2 26.8,8.7 25.8,9.8 31.3,15.3 36.8,9.8 35.7,8.7 "/></svg>';

var infoIconClose = '<svg class="info-icon closed" version="1.1" id="Layer_1" x="0px" y="0px"' +
  ' viewBox="0 0 39 24" fill="#2A98EA" enable-background="new 0 0 39 24">' +
  '<polygon points="31.3,11.1 35.7,15.5 36.8,14.5 31.3,9 25.8,14.5 26.8,15.5 "/>' +
  '<path d="M12,2.3c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S17.5,2.3,12,2.3z"/>' +
  '<path fill="#FFFFFF" d="M11,17.3h2v-6h-2V17.3z M11,9.3h2v-2h-2V9.3z"/></svg>';

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

var TASK_COLORS = ['blue-1', 'blue-2', 'blue-3', 'orange-1', 'orange-2', 'orange-3',
  'coral-1', 'coral-2', 'coral-3', 'pink-1', 'pink-2', 'pink-3',
  'green-1', 'green-2', 'green-3', 'indigo-1', 'indigo-2', 'indigo-3',
  'cyan-1', 'cyan-2', 'cyan-3', 'turquoise-1', 'turquoise-2', 'turquoise-3',
  'grey-1', 'grey-2', 'grey-3', 'purple-1', 'purple-2', 'purple-3', ''
];

var BOX_PATTERN_PATH = '22,0 0,22 43,22 62,0';

var CONNECTION_ARROW = {
  title: 'Connection_Arrows',
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
  SVG: 'svg-',
  CHART_HEADER: 'roadmapChart-h',
  CHART_HEADER_TITLE: 'roadmapChart-h-t',
  CHART_HEADER_DESC: 'roadmapChart-h-desc',
  BREADCUM: 'roadmapBreadcrumb',
  BREADCUM_ITEM: 'breadcrumb-i',
  PROGRESSBAR_BG: 'svg-blue-3',
  PROGRESSBAR_STRIPE: 'svg-blue-2',
  FEATURES: 'features-',
};

var roadmapTasks = [];

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

Utils.addDate = function(dateStr, value) {
  if (isNaN(value)) {
    throw 'value is not Numeric';
  }
  var date = new Date(dateStr);
  var newDate = new Date(date.getTime() + (parseInt(value) * 24 * 60 * 60 * 1000));
  return Utils.parseDate(newDate.toDateString());
};

Utils.subDate = function(dateStr, value) {
  if (isNaN(value)) {
    throw 'value is not Numeric';
  }
  var date = new Date(dateStr);
  var newDate = new Date(date.getTime() - (parseInt(value) * 24 * 60 * 60 * 1000));
  return Utils.parseDate(newDate.toDateString());
};

Utils.getTask = function(taskId) {
  var self = this;
  var targetTask = null;
  roadmapTasks.forEach(function(task) {
    if (task.id !== taskId) {
      return;
    }
    targetTask = task;
  });
  return targetTask;
};

Utils.addSvgClass = function(targetId, className) {
  var classNames = $(targetId).attr('class');
  if (!classNames) {
    return;
  }
  var classList = classNames.split(' ');
  if (classList.indexOf(className) !== -1) {
    return;
  }
  classList.unshift(className);
  $(targetId).attr('class', classList.join(' '));
};

Utils.removeSvgClass = function(targetId, className) {
  var classNames = $(targetId).attr('class');
  if (!classNames) {
    return;
  }
  var classList = classNames.split(' ');
  if (classList.indexOf(className) === -1) {
    return;
  }
  classList.splice(classList.indexOf(className), 1);
  $(targetId).attr('class', classList.join(' '));
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

Utils.isDesktopScreen = function() {
  return $(window).width() > DESKTOP_BREAKPOINT;
};

var Connection = function(taskId, sourceId) {
  this.sourceId = sourceId;
  this.targetId = taskId;
  this.id = CONNECTION_PREFIX + taskId + '_' + sourceId;
  this.start = { x: 0, y: 0 };
  this.interStart = { x: 0, y: 0 };
  this.interEnd = { x: 0, y: 0 };
  this.end = { x: 0, y: 0 };
  this.color = '';
};

Connection.prototype.setPath = function(start, interStart, interEnd, end) {
  var self = this;
  self.start = start;
  self.interStart = interStart;
  self.interEnd = interEnd;
  self.end = end;
};

Connection.prototype.setColor = function(color) {
  this.color = color;
};

var TaskFeature = function(taskId, type) {
  this.id = FEATURES_PREFIX + taskId;
  this.taskId = taskId;
  this.type = type;
};

TaskFeature.prototype.onClick = function() {
  var self = this;
  return function(e) {
    var task = Utils.getTask(self.taskId);
    Utils.setLocationHash(task.id);
    $(window).scrollTop(0);
  };
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
    self.mouseOver(this);
    var task = Utils.getTask(self.taskId);
    task.box.mouseOver();
  };
};

TaskNav.prototype.onMouseOut = function() {
  var self = this;
  return function(e) {
    e.stopPropagation();
    self.mouseOut(this);
    var task = Utils.getTask(self.taskId);
    task.box.mouseOut();
  };
};

TaskNav.prototype.mouseOut = function(target) {
  var self = this;
  if (!target) {
    target = Utils.parseId(self.id);
  }
  $(target).removeClass('highlight');
};

TaskNav.prototype.mouseOver = function(target) {
  var self = this;
  if (!target) {
    target = Utils.parseId(self.id);
  }
  $(target).addClass('highlight');
};

/**
 * Task Box
 */
var TaskBox = function(taskId) {
  this.taskId = taskId;
  this.id = BOX_PREFIX + taskId;
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.statusX = 0;
};

TaskBox.prototype.setParams = function(x, y, width, statusX) {
  var self = this;
  self.x = x;
  self.y = y;
  self.width = width;
  self.statusX = statusX;
};

TaskBox.prototype.onClick = function () {
  var self = this;
  return function() {
    Utils.setLocationHash(self.taskId);
  };
};

TaskBox.prototype.onMouseOver = function() {
  var self = this;
  return function() {
    self.mouseOver();
  };
};

TaskBox.prototype.onMouseOut = function() {
  var self = this;
  return function() {
    self.mouseOut();
  };
};

TaskBox.prototype.mouseOver = function() {
  var self = this;
  var task = Utils.getTask(self.taskId);
  task.nav.mouseOver();
  Utils.addSvgClass(Utils.parseId(self.id), 'highlight');
  task.target.forEach(function(targetId) {
    var targetTask = Utils.getTask(targetId);
    if (!targetTask) { return; }
    targetTask.connections.forEach(function(connection) {
      if (connection.sourceId === self.taskId) {
        Utils.addSvgClass(Utils.parseId(connection.id), 'highlight');
      }
    });
  });
};

TaskBox.prototype.mouseOut = function(target) {
  var self = this;
  var task = Utils.getTask(self.taskId);
  task.nav.mouseOut();
  Utils.removeSvgClass(Utils.parseId(self.id), 'highlight');
  task.target.forEach(function(targetId) {
    var targetTask = Utils.getTask(targetId);
    if (!targetTask) { return; }
    targetTask.connections.forEach(function(connection) {
      if (connection.sourceId === self.taskId) {
        Utils.removeSvgClass(Utils.parseId(connection.id), 'highlight');
      }
    });
  });
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
  this.order = payload.order || 1;
  this.section = payload.section || 1;
  this.offset = payload.offset || 0;
  this.nav = new TaskNav(this.id, isRoot);
  this.box = new TaskBox(this.id);
  this.connections = [];
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
  this.isChartReady = false;
  this.dateFormat = d3.time.format('%Y-%m-%d');
  this.startDates = [];
  this.sectionCurrentIncomingCounts = [];
  this.activeTasks = [];
  this.svg = {
    width: 0,
    height: 600,
    padding: 20
  };
  this.progressBar = {
    height: 10
  };
  this.box = {
    width: 0,
    height: 22,
    strokeWidth: 2
  };
};

Roadmap.prototype.getPerUnit = function() {
  var self = this;
  var task = self.activeTasks[0];
  return (self.timeScale(self.dateFormat.parse(task.startDate)) - self.timeScale(self.dateFormat.parse(Utils.subDate(task.startDate, 1))))
};

Roadmap.prototype.init = function() {
  var self = this;
  $(window).on('hashchange', function() {
    var hash = Utils.getLocationHash();
    self.drawChart(hash);
    self.updateNav(hash);
  });
};

Roadmap.prototype.prepareTasks = function() {
  var self = this;

  var setTask = function(task) {
    if (!task.hasOwnProperty('children')) {
      return;
    }
    task.children.forEach(function(child) {
      roadmapTasks.push(new Task(child, Utils.getTask(task.id), false));
      if (child.hasOwnProperty('children')) {
        setTask(child);
      }
    });
  };

  roadmapTasks.push(new Task(self.plainData, null, true));
  setTask(self.plainData);
  print('Task', roadmapTasks);
};

Roadmap.prototype.timeScale = function(val) {
  var self = this;
  return (d3.time.scale()
    .domain([ d3.min(self.activeTasks, function(d) {
        return self.dateFormat.parse(d.startDate);
      }),
      d3.max(self.activeTasks, function(d) {
        return self.dateFormat.parse(d.endDate);
      })
    ])
    .range([ 0, (self.svg.width - (self.svg.padding * 2)) ]))(val);
};

Roadmap.prototype.setNav = function() {
  var self = this;
  var prepareNavBase = function() {
    var navBase = Utils.createDiv(null, [CSS_CLASS.NAV_BASE]);
    var navBaseCtx = Utils.createDiv(NAV_ID, [ 'roadmapNav-b' ]);
    $(Utils.parseId(self.targetId)).append(navBase.append(navBaseCtx));
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
  roadmapTasks.forEach(setNavList);
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
      .attr('class', 'roadmapSvg')
      .append('g')
      .attr('id', SVG_BOX_GRP_ID)
      .attr('transform', 'translate(' + self.svg.padding + ', ' + self.svg.padding + ')')
  };

  var defineTaskStatus = function() {
    var status = d3.select(Utils.parseId(SVG_ID));

    // status complete
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

  var setChartHeader = function() {
    var chartHeader = Utils.createDiv(null, [CSS_CLASS.CHART_HEADER]);
    var chartHeaderTitle = Utils.createDiv(null, [CSS_CLASS.CHART_HEADER_TITLE]);
    var chartHeaderTitleCtx = Utils.createDiv(TASK_TITLE_ID, []);
    var chartHeaderDesc = Utils.createDiv(null, [CSS_CLASS.CHART_HEADER_DESC]);
    var chartHeaderDescCtx = Utils.createDiv(TASK_DESC_ID);
    var chartHeaderTitleIcon = Utils.createDiv(null, [ 'roadmapChart-h-menu' ]);
    var menuicon = Utils.createDiv(MOBILE_MENU_ID, [ 'roadmapChart-h-menu' ]);
    chartHeader.append(menuicon);
    chartHeaderTitle.append(infoIconOpen);
    chartHeaderTitle.append(infoIconClose);
    chartHeader.append(chartHeaderTitle.append(chartHeaderTitleCtx));
    chartHeader.append(chartHeaderDesc.append(chartHeaderDescCtx));
    $(Utils.parseId(CHART_ID)).append(chartHeader);

    // Toggle Description
    chartHeaderTitle.on('click', function(e) {
      e.stopPropagation();
      $(this).toggleClass('active');
    });

    menuicon.on('click', function(e) {
      e.stopPropagation();
      $(Utils.parseId(NAV_ID)).parent().addClass('open');
    });

    $('.roadmapNav').on('click', function(e) {
      e.stopPropagation();
      if (e.target !== this) {
        return;
      }
      $(this).removeClass('open');
    });
  };

  var setBreadcum = function() {
    var breadcum = Utils.createDiv(BREADCUM_ID, [CSS_CLASS.BREADCUM]);
    $(Utils.parseId(CHART_ID)).append(breadcum);
  };

  setChartBase();
  setBreadcum();
  setChartHeader();
  setSvg();
  defineTaskStatus();
  defineConnectionArrows();
  self.isChartReady = true;
};

Roadmap.prototype.updateBreadcum = function(activeTask) {
  var self = this;
  var breadcumList = [];
  var breadcum = $(Utils.parseId(BREADCUM_ID));
  var resetBreadcum = function() {
    breadcum.html('');
  };

  var getParentTask = function(task) {
    var parentTask = null;
    roadmapTasks.forEach(function(item) {
      if (item.id === task.id) {
        parentTask = item.parent;
      }
    });
    return parentTask;
  };

  var updateBreadcumList = function(task) {
    breadcumList.push(task);
    var parentTask = getParentTask(task);
    if (parentTask) {
      updateBreadcumList(parentTask);
    }
  };

  resetBreadcum();
  updateBreadcumList(activeTask);
  breadcumList.push({
    name: 'SAFE Network',
    id: null
  });
  breadcumList.reverse();
  var breadcumItem = null;
  breadcumList.forEach(function(task) {
    breadcumItem = Utils.createDiv(null, [CSS_CLASS.BREADCUM_ITEM], task.name);
    breadcumItem.on('click', function(e) {
      Utils.setLocationHash(task.id);
    });
    breadcum.append(breadcumItem);
  });
};

Roadmap.prototype.updateChartHeader = function(activeTask) {
  $(Utils.parseId(TASK_TITLE_ID)).text(activeTask.name).parent().removeClass()
    .addClass(activeTask.color + ' text roadmapChart-h-t');
  $(Utils.parseId(TASK_DESC_ID)).text(activeTask.desc);
};

Roadmap.prototype.defineBoxPattern = function(data) {
  var self = this;
  var patternId = BOX_PATTERN_PREFIX + data.name;
  if ($(Utils.parseId(patternId)).is('pattern')) {
    return;
  }
  var boxPattern = d3.select(Utils.parseId(SVG_ID))
    .select('g')
    .append('pattern')
    .attr('id', patternId)
    .attr('x', data.x)
    .attr('y', data.y)
    .attr('width', 80)
    .attr('height', self.box.height)
    .attr('patternUnits', 'userSpaceOnUse')
    .append('g');

  boxPattern.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('class', data.className)
    .attr('width', data.width)
    .attr('height', data.height)
    .attr('opacity', 0.8);

  boxPattern.append('polygon')
    .attr('class', data.className)
    .attr('points', BOX_PATTERN_PATH);
};

Roadmap.prototype.drawProgressBar = function(activeTask) {
  var self = this;
  var minStartVal = 0;

  if (!activeTask.daysCompleted) {
    return;
  }

  self.defineBoxPattern({
    name: activeTask.id,
    x: 0,
    y: -self.svg.padding,
    width: self.svg.width - (self.svg.padding * 2),
    height: self.progressBar.height,
    className: CSS_CLASS.SVG + activeTask.color
  });

  var progressBar = d3.select(Utils.parseId(SVG_BOX_GRP_ID))
    .append('g');

  // header base
  progressBar.append('rect')
    .attr('class', 'chart-progress-b')
    .attr('x', 0)
    .attr('y', -self.svg.padding)
    .attr('width', self.svg.width - (self.svg.padding * 2))
    .attr('height', self.progressBar.height)
    .attr('style', 'fill: url(' + Utils.parseId(BOX_PATTERN_PREFIX + activeTask.id) + ')');

  // progress
  progressBar.append('rect')
    .attr('class', CSS_CLASS.SVG + activeTask.color)
    .attr('x', 0)
    .attr('y', -self.svg.padding)
    .attr('width', self.timeScale(self.dateFormat.parse(Utils.addDate(activeTask.startDate, activeTask.daysCompleted))))
    .attr('height', self.progressBar.height);
};

Roadmap.prototype.drawBoxes = function () {
  var self = this;
  var box = d3.select(Utils.parseId(SVG_ID))
  .select('g')
  .selectAll('rect')
  .data(self.activeTasks)
  .enter();

  box.append('defs').each(function(d) {
    if (!d.status) {
      self.defineBoxPattern({
        name: d.id,
        x: d.box.x,
        y: d.box.y,
        width: d.box.width,
        height: self.box.height,
        className: CSS_CLASS.SVG + d.color
      });
    }
    $(this).remove();
  });

  var boxBase = box.append('g')
  .attr('class', function(d) {
    return 'boxBase ' + ('svg-' + d.color);
  })
  .attr('id', function(d) {
    return d.box.id;
  });

  boxBase.each(function(d) {
    var boxGrp = d3.select(this);
    boxGrp.on('click', (d.box.onClick)());
    boxGrp.on('mouseover', (d.box.onMouseOver)());
    boxGrp.on('mouseout', (d.box.onMouseOut)());
  });

  boxBase.append('rect')
  .attr('x', function(d) {
    return d.box.x;
  })
  .attr('y', function(d) {
    return d.box.y;
  })
  .attr('width', function(d) {
    return d.box.width;
  })
  .attr('height', self.box.height)
  .attr('class', 'box')
  .attr('style', function(d) {
    if (!d.status) {
      return 'fill: url(' + Utils.parseId(BOX_PATTERN_PREFIX + d.id) + ')';
    }
  })
  .attr('stroke', 'none');

  // status
  boxBase.append('rect')
    .attr('x', function(d) {
      return d.box.statusX;
    })
    .attr('y', function(d) {
      return (self.activeTasks.length !== 1) ? d.box.y : 0;
    })
    .attr('width', self.box.height)
    .attr('height', self.box.height)
    .attr('class', 'statusBox')
    .style('fill', function(d) {
      return d.status ? 'url(' + Utils.parseId(TASK_STATUS.COMPLETE.id) + ')' : 'url(' + Utils.parseId(TASK_STATUS.OPEN.id) + ')';
    });

    // text
    boxBase.append('text')
      .text(function(d) {
        return d.name;
      })
      .attr('x', function(d) {
        return ((self.box.height / 2) + d.box.x);
      })
      .attr('y', function(d) {
        return (self.activeTasks.length !== 1) ? ((d.box.y) +
          (self.box.height / 1.3)) : (self.box.height / 1.3);
      })
      .attr('class', 'taskText');
};

Roadmap.prototype.prepareBoxes = function(activeTask) {
  var self = this;
  var getIncomingTasks = function(targetTask) {
    var incomingTasks = [];
    roadmapTasks.forEach(function(task) {
      if (task.target.indexOf(targetTask.id) !== -1) {
        incomingTasks.push(task);
      }
    });
    return incomingTasks;
  };

  var getIncomingNodesForSection = function(section) {
    var incomingCount = 0;
    var incomingTasks = [];
    roadmapTasks.forEach(function(task, i) {
      if (task.section === section) {
        incomingTasks = getIncomingTasks(task);
        task.incomingTasks = incomingTasks;
        incomingCount += incomingTasks.length;
      }
    });
    return incomingCount;
  };

  var setStartDates = function() {
    var startDate = 0;
    roadmapTasks.forEach(function(task) {
      if (self.startDates[task.section - 1]) {
        return;
      }
      if (task.section === 1) {
        startDate = task.startDate;
      } else {
         startDate = Utils.addDate(self.startDates[task.section - 2], self.interval);
      }
      self.startDates[task.section - 1] = Utils.addDate(startDate,
        (getIncomingNodesForSection(task.section) + task.target.length));
    });
  };

  var setActiveTasks = function() {
    var activeTasks = [];
    console.log(activeTask);
    roadmapTasks.forEach(function(task) {
      if (EXCLUDED_TASKS.indexOf(task.name) !== -1) {
        return;
      }
      if (!task.parent) {
        return;
      }
      if (task.parent.id === activeTask.id) {
        activeTasks.push(task);
      }
    });
    if (activeTasks.length === 0) {
      return self.activeTasks.push(activeTask);
    }
    self.activeTasks = activeTasks;
  };

  var setBoxParams = function() {
    roadmapTasks.forEach(function(task) {
      var scaledStart = self.timeScale(self.dateFormat.parse(task.startDate));
      var scaledEnd =  self.timeScale(self.dateFormat.parse(task.endDate));
      var boxYPos = ((task.order - 1) * self.box.height * 2);
      if (self.activeTasks.length === 1) {
        boxYPos = 0;
      }
      task.box.setParams(scaledStart,
        boxYPos,
        (scaledEnd - scaledStart),
        (scaledEnd - self.box.height));
    });
  };

  setStartDates();

  roadmapTasks.forEach(function(task, i) {
    task.startDate = self.startDates[task.section - 1];
    task.endDate = Utils.addDate(task.startDate, self.interval);
  });

  setActiveTasks(activeTask);
  setBoxParams();
  self.drawBoxes();
};

Roadmap.prototype.drawConnections = function () {
  var self = this;

  var line = d3.svg.line()
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  })
  .interpolate('linear');

  var drawConnection = function(connection) {
    var path = [ connection.start, connection.interStart, connection.interEnd, connection.end ];

      d3.select(Utils.parseId(SVG_ID))
      .select('g')
      .datum(path)
      .append('path')
      .attr('id', connection.id)
      .attr('class', CSS_CLASS.LINE + connection.color)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke-width', 2)
      .attr('marker-start', function() {
        return connection.color ? 'url(#' + ARROW_PREFIX + connection.color + ')' : 'url(#' + ARROW_PREFIX + ')';
      });
  };

  self.activeTasks.forEach(function(task, index) {
    if(task.connections.length === 0) {
      return;
    }
    task.connections.forEach(function(connection, index) {
      if ($(Utils.parseId(connection.id)).is('path')) {
        return;
      }
      drawConnection(connection);
    });
  });
};

Roadmap.prototype.prepareConnections = function(activeTask) {
  var self = this;
  if (self.activeTasks.length === 1) {
    return;
  }
  var splitTask = function(targetTask) {
    var upperTasks = [];
    var lowerTasks = [];
    if (!targetTask) {
      return;
    }
    var incomings = targetTask.incomingTasks;
    incomings.forEach(function(incoming) {
      if (incoming.order > targetTask.order) {
        lowerTasks.unshift(incoming);
      } else {
        upperTasks.unshift(incoming)
      }
    });
    lowerTasks.sort(function(a, b) {
      return a.order > b.order;
    });
    upperTasks.sort(function(a, b) {
      return a.order > b.order;
    });
    return { lowerTasks: lowerTasks, upperTasks: upperTasks };
  };

  self.activeTasks.forEach(function(task) {
    var incomingCountIndex = task.section - 1;
    var splitTasks = splitTask(task);

    var incSecCount = function() {
      if (isNaN(self.sectionCurrentIncomingCounts[task.section - 1])) {
        self.sectionCurrentIncomingCounts[incomingCountIndex] = 1;
      } else {
        self.sectionCurrentIncomingCounts[incomingCountIndex] += 1;
      }
    };

    var createConnection = function(targetId, start, interStart, interEnd, end, color) {
      var connection = new Connection(task.id, targetId);
      connection.setPath(start, interStart, interEnd, end);
      connection.setColor(color);
      task.connections.push(connection);
    };

    // draw upper tasks
    splitTasks.upperTasks.forEach(function(upperTask, index) {
      incSecCount();
      var start = { x:0, y:0 };
      var end = { x:0, y:0 };
      var interStart = { x:0, y:0 };
      var interEnd = { x:0, y:0 };

      if (task.connections.length === 0 || (index === 0)) {
        start.x = task.box.x - (index * self.getPerUnit());
        start.y = task.box.y + (self.box.height / 2) - (index * self.getPerUnit());
      } else {
        start.x = task.connections[index - 1].interStart.x;
        start.y = task.connections[index - 1].interStart.y - (index * self.getPerUnit());
      }

      end.x = upperTask.box.x + upperTask.box.width;
      end.y = upperTask.box.y + (self.box.height / 2);

      if (index > 0) {
        interStart.x = start.x - self.getPerUnit();
      } else {
        interStart.x = start.x - (self.sectionCurrentIncomingCounts[incomingCountIndex] * self.getPerUnit());
      }
      interStart.y = start.y;

      interEnd.x = interStart.x;
      interEnd.y = end.y;

      createConnection(upperTask.id, start, interStart, interEnd, end, upperTask.color);
    });

    // draw lower tasks
    splitTasks.lowerTasks.forEach(function(lowerTask, index) {
      incSecCount();
      var start = { x:0, y:0 };
      var end = { x:0, y:0 };
      var interStart = { x:0, y:0 };
      var interEnd = { x:0, y:0 };
      index += splitTasks.upperTasks.length;

      if (task.connections.length === 0 || (index === 0)) {
        start.x = task.box.x - (index * self.getPerUnit());
        start.y = task.box.y + (self.box.height / 2) + (index * self.getPerUnit());
      } else {
        start.x = task.connections[index - 1].interStart.x;
        start.y = task.connections[index - 1].interStart.y - (index * self.getPerUnit());
      }

      if ((index - splitTasks.upperTasks.length) !== 0) {
        start.y += ((splitTasks.lowerTasks.length + (index - splitTasks.upperTasks.length)) * self.getPerUnit());
      }

      end.x = lowerTask.box.x + lowerTask.box.width;
      end.y = lowerTask.box.y + (self.box.height / 2);

      if (index > 0) {
        interStart.x = start.x - self.getPerUnit();
      } else {
        interStart.x = start.x - (self.sectionCurrentIncomingCounts[incomingCountIndex] * self.getPerUnit());
      }
      interStart.y = start.y;

      interEnd.x = interStart.x;
      interEnd.y = end.y;

      createConnection(lowerTask.id, start, interStart, interEnd, end, lowerTask.color);
    });
  });
  self.drawConnections();
};

Roadmap.prototype.resetChart = function() {
  var self = this;
  $(Utils.parseId(SVG_BOX_GRP_ID)).children().remove();
  self.startDates = [];
  self.sectionCurrentIncomingCounts = [];
  self.activeTasks = [];
};

Roadmap.prototype.drawChart = function(taskId) {
  var self = this;
  var locationHash = Utils.getLocationHash();
  if (locationHash) {
    taskId = locationHash;
  }
  taskId = taskId || roadmapTasks[0].id;
  var task = Utils.getTask(taskId);
  if (!self.isChartReady) {
    self.prepareChart();
  }
  self.resetChart();
  self.updateBreadcum(task);
  self.updateChartHeader(task);
  if (!Utils.isDesktopScreen()) {
    return self.drawMobileChart(task);
  }
  self.prepareBoxes(task);
  self.prepareConnections(task);
  self.drawProgressBar(task);
};

Roadmap.prototype.updateNav = function(taskId) {
  var self = this;
  taskId = taskId || roadmapTasks[0].id;
  var task = Utils.getTask(taskId);
  $(Utils.parseId(task.nav.id)).click();
  $('.roadmapNav').removeClass('open');
};

Roadmap.prototype.addFeatures = function(activeTask) {
  var self = this;
  var features = {
    sub: [],
    reliedOn: [],
    relyThis: []
  };

  var mobileChartBase = $(Utils.parseId(MOBILE_CHART_ID))

  var createBase = function(listId) {
    if (!$(Utils.parseId(listId)).is(Utils.parseId(listId))) {
      mobileChartBase.append(Utils.createDiv(listId, [ 'features-list' ]));
    }
  };

  var addTitle = function(title, listId) {
    if (!$(Utils.parseId(listId)).is(Utils.parseId(listId))) {
      return;
    }
    $(Utils.parseId(listId)).append('<h3 class="features-list-h">' + title + '</h3>');
  };

  var addList = function(title, list, listId) {
    createBase(listId);
    addTitle(title, listId);
    var listBase = $('#' + listId);
    list.forEach(function(item) {
      var task = Utils.getTask(item.taskId);
      var name = EXCLUDED_TASKS.indexOf(item.name) !== -1 ? item.id : item.name;
      var listEle = Utils.createDiv(item.id,
        [ 'features-list-i', CSS_CLASS.FEATURES + task.color ]);
      listEle.text(task.name);
      listEle.on('click', (item.onClick)());
      listBase.append(listEle);
    });
  };

  roadmapTasks.forEach(function(task) {
    if (!task.parent) {
      return;
    }
    if ((task.parent.id === activeTask.id) && (task.id === EXCLUDED_TASKS[0])) {
      return features.reliedOn.push(new TaskFeature(task.id, TASK_FEATURE_TYPE.RELIED_ON_FEATURES));
    }
    if ((task.parent.id === activeTask.id) && (task.id === EXCLUDED_TASKS[1])) {
      return features.relyThis.push(new TaskFeature(task.id, TASK_FEATURE_TYPE.RELY_THIS_FEATURES));
    }
    if (task.parent.id === activeTask.id) {
      return features.sub.push(new TaskFeature(task.id, TASK_FEATURE_TYPE.SUB_FEATURES));
    }
  });
  if (features.sub.length > 0) {
    addList('Sub-fetures:', features.sub, SUB_FEATURES_ID);
  }
  if (features.reliedOn.length > 0) {
    addList('Features relied on:', features.reliedOn, RELIED_ON_FEATURES_ID);
  }
  if (features.relyThis.length > 0) {
    addList('Features that rely this:', features.relyThis, RELY_THIS_FEATURES_ID);
  }
};

Roadmap.prototype.setMobileView = function() {
  var mobileChart = Utils.createDiv(MOBILE_CHART_ID, [ 'roadmapChartMobile-b' ]);
  $(Utils.parseId(CHART_ID)).append(mobileChart);
};

Roadmap.prototype.resetMobileView = function() {
  $(Utils.parseId(MOBILE_CHART_ID)).remove();
};

Roadmap.prototype.drawMobileChart = function(task) {
  var self = this;
  self.resetMobileView();
  self.setMobileView();
  self.addFeatures(task);
};

Roadmap.prototype.draw = function() {
  var self = this;
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
