/* global $: false, document: false, window: false */

var IntroVideoSrc = 'https://www.youtube.com/embed/bXOaxjvefGc';
var subPage = [ 'safecoin.html', 'features.html', 'contact.html' ];

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
  var typeString = [ 'a secure', 'a free' ];
  var  i = 0;
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

// Header Change on Window Scroll
var headerChangeOnScroll = function() {
  var excludeFlag = false;
  var currentPage = window.location.href.split('/').pop().split('#')[0];
  for (var i = 0; i < subPage.length; i++) {
    if (subPage[i] === currentPage) {
      excludeFlag = true;
      break;
    }
  }
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
      $('header').addClass('invert onScroll');
      $('#site-logo').addClass('invert');
      $('#secNav').addClass('invert');
      $('#secNavButton').addClass('invert');
      return;
    }
    $('header').removeClass('onScroll');
    if (excludeFlag) {
      return;
    }
    $('header').removeClass('invert');
    $('#site-logo').removeClass('invert');
    $('#secNav').removeClass('invert');
    $('#secNavButton').removeClass('invert');
  });
};

var showMobPrimaryNav = function() {
  $('#secNavButton').on('click', function() {
    var currentPage = window.location.href.split('/').pop().split('#')[0];
    var target = $('#secNav');
    if ($.inArray(currentPage, subPage) !== -1) {
      $(this).addClass('invert');
      target.addClass('invert');
    }
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }

    if (target.hasClass('show')) {
      target.removeClass('show');
      return;
    }
    target.addClass('show');
  });
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
    'Andrew': 'img/team/andrew.jpg',
    'David': 'img/team/david.jpg',
    'Viv': 'img/team/viv.jpg',
    'Krishna': 'img/team/krishna.jpg',
    'Justine': 'img/team/justine.jpg',
    'Ross': 'img/team/ross.jpg',
    'Fraser': 'img/team/fraser.jpg',
    'Nick': 'img/team/nick.jpg',
    'Paige': 'img/team/paige.jpg',
    'Shona': 'img/team/shona.jpg',
    'Vinicius': 'img/team/vinicius.jpg',
    'Spandan': 'img/team/spandan.jpg',
    'Scott': 'img/team/scott.jpg',
    'Qi': 'img/team/qi.jpg',
    'Peter': 'img/team/peter.jpg'
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

$(function() {
  typingEffect();
  accordian();
  headerChangeOnScroll();
  showMobPrimaryNav();
  loadTeamBanner();

  // Intro video
  $('#IntroVideoTrigger').on('click', function(e) {
    e.preventDefault();
    Modal.open();
    $('#IntroVideo').attr('src', IntroVideoSrc);
  });

  // Close Modal
  $('#Modal').on('click', function(e) {
    e.stopPropagation();
    Modal.close();
    $('#IntroVideo').attr('src', 'about:blank');
  });
});

//  Window resize event
$(window).resize(function() {
  loadTeamBanner();
});
