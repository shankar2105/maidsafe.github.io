/* global $: false, document: false, window: false */

var INTRO_VIDEO_SRC = 'https://www.youtube.com/embed/bXOaxjvefGc';
var updateHeader = function() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop :
    document.body.scrollTop;
  if (y > 0) {
    $('header').addClass('invert onScroll');
    $('#site-logo').addClass('invert');
    $('#secNav').addClass('invert');
    $('#secNavButton').addClass('invert');
    $('#alphaBtn').addClass('invert');
    return;
  }
  $('header').removeClass('onScroll');
  if (window.invertedHeader) {
    return;
  }
  $('header').removeClass('invert');
  $('#site-logo').removeClass('invert');

  $('#secNav').removeClass('invert');
  $('#secNavButton').removeClass('invert');
  $('#alphaBtn').removeClass('invert');
};

var setActiveNav = function() {
  var pNav = $('.primary-nav');
  var pNavChildren = pNav.children();
  pNavChildren.removeClass('active');
  for (var i = 0; i < pNavChildren.length; i++) {
    var hash = $(pNavChildren[i]).children('a').attr('href');
    if (!hash) {
      return;
    }
    hash = hash.split('/');
    hash = hash[hash.length - 1];
    var path = window.location.pathname.split('/');
    path = path[path.length - 1];
    if (path === 'alpha_release.html') {
      $('#alphaBtn').removeClass();
    }
    if (hash && hash === path) {
      return $(pNavChildren[i]).addClass('active');
    }
  }
};

var showMobPrimaryNav = function() {
  $('#navDropdown > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  })
};

// Modal events
var Modal = {
  target: $('#Modal'),
  open: function() {
    this.target.show();
  },
  close: function() {
    this.target.hide();
  }
};

// Load Team Banner
var loadTeamBanner = function() {
  var teamImg = $('.team-img');
  var teamImgWidth = teamImg.width();
  var teamImgItem = null;
  var itemCount = 8;
  teamImg.empty();

  // Small screen
  if (teamImgWidth <= 1134 && teamImgWidth >= 830) {
    itemCount = 6;
  }

  // Tablet screen
  if (teamImgWidth <= 829) {
    itemCount = 5;
  }
  var teamArr = {
    'Adam': './img/team/adam.JPG',
    'Andrew': './img/team/andrew.jpg',
    'David': './img/team/david.jpg',
    'Viv': './img/team/viv.jpg',
    'Andreas': './img/team/Andreas.jpg',
    'Ross': './img/team/ross.jpg',
    'Fraser': './img/team/fraser.jpg',
    'Nick': './img/team/nick.jpg',
    'Paige': './img/team/paige.jpg',
    'Shona': './img/team/shona.jpg',
    'Vinicius': './img/team/vinicius.jpg',
    'Spandan': './img/team/spandan.jpg',
    'Scott': './img/team/scott.jpg',
    'Qi': './img/team/qi.jpg',
    'Krishna': './img/team/krishna.jpg',
    'Shankar': './img/team/Shankar.jpg'
  };
  var teamImgItemHg = parseFloat(teamImgWidth / itemCount);
  for (var key in teamArr) {
    if (teamArr[key]) {
      teamImgItem = '<div class="team-img-i"><img height="' + teamImgItemHg + '" src="' +
        teamArr[key] + '" alt="' + key + '" title="' + key + '"></div>';
      teamImg.append(teamImgItem);
    }
  }
  teamImg.addClass('banner-gradian');
};

/**
 * Accordian
 */
var accordian = function() {
  $('#accordian ul li').on('click', function() {
    var self = $(this);
    if (self.hasClass('active')) {
      self.removeClass('active');
      return;
    }
    $('#accordian ul li').removeClass('active');
    self.addClass('active');
  });
};

/**
 * Typing effecting
 */
var typingEffect = function() {
  var typeString = ['a secure', 'a free'];
  var i = 0;
  var count = 0;
  var selectedText = '';
  var text = '';
  var timeout;
  var target = document.getElementById('typing');
  if (!target) {
    return;
  }
  var type = function() {
    if (count === typeString.length) {
      count = 0;
    }

    // Initiation
    if (i === 0) {
      document.getElementById('typing').innerHTML = '';
      clearTimeout(timeout);
      timeout = setTimeout(type, 1500);
      i++;
      return;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    target.innerHTML = text;

    // change Next word
    if (text.length === selectedText.length) {
      count++;
      i = 0;
      clearTimeout(timeout);
      timeout = setTimeout(type, 4000);
      return;
    }

    // timing to type each word
    timeout = setTimeout(type, 200);
  };
  type();
};

$(function() {
  typingEffect();
  accordian();
  showMobPrimaryNav();
  setActiveNav();
  loadTeamBanner();

  // Intro video
  $('#IntroVideoTrigger').on('click', function(e) {
    e.preventDefault();
    Modal.open();
    $('#IntroVideo').attr('src', INTRO_VIDEO_SRC);
  });

  // Close Modal
  $('#Modal').on('click', function(e) {
    e.stopPropagation();
    Modal.close();
    $('#IntroVideo').attr('src', 'about:blank');
  });
});

$(window).resize(function() {
  loadTeamBanner();
});
/**
 * Change header on scroll
 */
$(window).scroll(updateHeader);
