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

var TaskNav = function(taskId) {
  this.taskId = taskId;
  this.id = NAV_PREFIX + taskId;
};

var TaskBox = function(taskId) {
  this.taskId = taskId;
  this.id = BOX_PREFIX + taskId;
};

var Task = function(payload, parent) {
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
  this.nav = new TaskNav(this.id);
  this.box = new TaskBox(this.id);
};

var Roadmap = function(payload) {
  this.plainData = payload.data;
  this.targetId = payload.target;
  this.interval = payload.interval;
  this.tasks = [];
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

Roadmap.prototype.prepareTasks = function () {
  var self = this;

  var setTask = function(task) {
    if (!task.hasOwnProperty('children')) {
      return;
    }
    task.children.forEach(function(child) {
      self.tasks.push(new Task(child, self.getTask(task.id)));
      if (child.hasOwnProperty('children')) {
        setTask(child);
      }
    });
  };

  self.tasks.push(new Task(self.plainData, null));
  setTask(self.plainData);
  print('Task', self.tasks);
};

Roadmap.prototype.setNav = function () {
  var self = this;
  var prepareHeader = function() {
    
  };
  prepareHeader();
};

Roadmap.prototype.draw = function() {
  var self = this;
  self.prepareTasks();
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
