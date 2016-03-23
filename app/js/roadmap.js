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

var Task = function() {
  this.id = null;
};

var TaskNav = function(payload) {
  this.id = payload.id;
};
TaskNav.prototype = Object.create(Task);
TaskNav.prototype.constructor = TaskNav;
console.log(new TaskNav({id: '1'}));

$(function() {
  // $.get('data/roadmapData.json', function(data) {
  //   new Roadmap({
  //     data: data,
  //     target: '#Roadmap',
  //     interval: 10
  //   }).draw();
  // });
  // new Roadmap({
  //   data: jsonData,
  //   target: '#Roadmap',
  //   interval: 10
  // }).draw();
});
