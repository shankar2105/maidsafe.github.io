/*global window:false */
var $ = window.$;
var jQuery = window.jQuery;
var d3 = window.d3;
var document = window.document;

var NAV_ID = 'RoadmapNav';

var NAV_PREFIX = 'NAV_';
var BOX_PREFIX = 'BOX_';

var EXCLUDED_TASKS = [ 'EXTERNAL', 'DOWN_STREAM' ];
var END_TASK_TARGET = 'END';

var CSS_CLASS = {
  LIST_TITLE: 'listTitle',
  LIST_BASE: 'listBase',
  LIST_PADDING: 'listPadding',
  LIST_CLOSED: 'listClose',
  NAV_BASE: 'RoadmapNav'
};

var print = function(title, data) {
  console.log(title + ' ::');
  console.log(data);
};

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
  return idName.indexOf('#') === 0 ? idName : '#' + idName;
};

// Task nav
var TaskNav = function(task) {
  this.task = task;
  this.id = NAV_PREFIX + task.id;
  this.navList = null;
  this.navTitle = null;
};

// nav on click
TaskNav.prototype.onClick = function () {
  var self = this;
  var onListClick = function(e) {
    e.stopPropagation();
  };

  var onTitleClick = function(e) {
    e.stopPropagation();
    $(this).children().addClass(CSS_CLASS.LIST_CLOSED);
    console.log(self.task);
  };
  self.navList.on('click', onListClick);
  self.navTitle.on('click', onTitleClick);
};

// register nav events
TaskNav.registerEvents = function() {
  var self = this;
  self.navList = $('.' + CSS_CLASS.LIST_BASE);
  self.navTitle = $('.' + CSS_CLASS.LIST_TITLE);
  self.prototype.onClick();
};

// Task box
var TaskBox = function(task) {
  this.task = task;
  this.id = BOX_PREFIX + task.id;
};

// Task
var Task = function(payload, parent) {
  this.name = payload.name;
  this.id = payload.id;
  this.parent = parent;
  this.desc = payload.desc;
  this.color = payload.color || null;
  this.status = payload.status || 0;
  this.target = payload.target || null;
  this.source = payload.source || null;
  this.order = payload.order || 0;
  this.section = payload.section || 0;
  this.offset = payload.offset || 0;
  this.daysCompleted = payload.daysCompleted || 0;
  this.startDate = Utils.parseDate(payload.startDate);
  this.nav = new TaskNav(this);
  this.box = new TaskBox(this);
};

// is task excluded
// return true if excluded
Task.prototype.isExcluded = function() {
  var self = this;
  return EXCLUDED_TASKS.indexOf(self.name) !== -1;
};

// connection
var Connection = function() {

};

// header, progress & breadcum
var Header = function() {

};

// Roadmap
var Roadmap = function(payload) {
  this.plainData = payload.data;
  this.targetId = payload.target;
  this.taskInteval = payload.interval;
  this.tasks = [];
};

// get task for id
Roadmap.prototype.getTask = function(taskId) {
  var self = this;
  var targetTask = null;
  self.tasks.forEach(function(task) {
    if (task.id === taskId) {
      targetTask = task;
    }
  });
  return targetTask;
};

// prepare tasks from plain data
Roadmap.prototype.prepareTasks = function() {
  var self = this;
  var parseChild = function(task) {
    if (!task.hasOwnProperty('children')) {
      return;
    }
    task.children.forEach(function(child) {
      self.tasks.push(new Task(child, self.getTask(task.id)));
      if (child.hasOwnProperty('children')) {
        parseChild(child);
      }
    });
  };

  self.tasks.push(new Task(self.plainData, null));
  parseChild(self.plainData);
  print('Tasks', self.tasks);
};

// Setup navigation panel
Roadmap.prototype.setupNav = function() {
  var self = this;
  var prepareNavBase = function() {
    var classList = [ CSS_CLASS.NAV_BASE ];
    var navBase = Utils.createDiv(NAV_ID, classList);
    $(self.targetId).append(navBase);
  };

  var setNavList = function(task, i) {
    if (task.isExcluded()) {
      return;
    }
    var classList = [];
    var navParent = task.parent ? $(Utils.parseId(task.parent.nav.id)) : $(Utils.parseId(NAV_ID));
    if (i === 0) {
      classList.push(CSS_CLASS.LIST_TITLE);
    } else {
      navParent.addClass(CSS_CLASS.LIST_CLOSED);
      classList.push(CSS_CLASS.LIST_BASE, task.color);
    }
    var navList = Utils.createDiv(task.nav.id, classList);
    navList.append('<span class="' + CSS_CLASS.LIST_PADDING + '">' + task.name + '</span>');
    navParent.append(navList);
  };

  prepareNavBase();
  self.tasks.forEach(setNavList);
  TaskNav.registerEvents();
};

// draw chart
Roadmap.drawChart = function(task) {
  console.log(task);
};

// draw roadmap
Roadmap.prototype.draw = function() {
  var self = this;
  self.prepareTasks();
  self.setupNav();
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
