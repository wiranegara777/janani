var body = window.document.getElementsByTagName("body")[0];
var headerHeight = document.getElementsByClassName("header").clientHeight;
var siteMain = document.getElementsByClassName("tjr-site__main");
var header = document.getElementsByClassName("tjr-header--fixed");

function headerAffix() {

  for (var i = 0; i < siteMain.length; i++) {
    var scrollTop = siteMain[i].scrollTop;
  }

  for (var i = 0; i < header.length; i++) {
    var headerHeight = header[i].clientHeight;
    if(scrollTop >= headerHeight){
      header[i].classList.add("tjr-header--affix");
    }else{
      header[i].classList.remove("tjr-header--affix");
    }
  }

}

for (var i = 0; i < siteMain.length; i++) {
  siteMain[i].addEventListener("scroll", headerAffix, false);
}

// Global Header
var globalHeaderIcon = document.querySelectorAll('ul.tjr-header__nav>li');
var globalHeaderToggle = document.querySelectorAll('.tjr-header__user__mobile');
var globalHeaderNav = document.querySelectorAll('ul.tjr-header__nav');
var siteWrapper = document.querySelectorAll('.tjr-site__wrapper');
var headerOverlay = document.querySelectorAll('.tjr-global__header__overlay');

// Global Header Dropdown
function headerGlobalDropdown() {
  [].forEach.call(globalHeaderIcon, el => {
    if (el !== this) {
      el.classList.remove('tjr-active');
    }
  });
  this.classList.toggle('tjr-active');
}
[].forEach.call(globalHeaderIcon, el => {
  el.addEventListener('click', headerGlobalDropdown, false)
})

// Global Header Toggle
function headerGlobalToggle() {
  for (var i = 0; i < globalHeaderNav.length; i++) {
    globalHeaderNav[i].classList.toggle('tjr-active');
    siteWrapper[i].classList.toggle('tjr-sidebar--active');
    headerOverlay[i].classList.toggle('tjr-active');
    globalHeaderToggle[i].classList.toggle('tjr-active');
  }
}
[].forEach.call(globalHeaderToggle, el => {
  el.addEventListener('click', headerGlobalToggle, false)
})

// Window resize
var windowResize = function(object, type, callback) {
  if (object == null || typeof(object) === 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
};

var curWidth = window.innerWidth;
windowResize(window, "resize", function(event) {
  var overlay = document.getElementsByClassName("tjr-site__menu__overlay");
  if (curWidth >= 1024) {
    if (window.innerWidth < curWidth && window.innerWidth < 1024 && window.innerWidth >= 980) {
      siteWrapper.remove("tjr-expanded");
      siteWrapper.add("tjr-collapsed");
      for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.remove("tjr-active");
      }
      curWidth = window.innerWidth;
    }
  }
  if (curWidth > 1280) {
    if (window.innerWidth < curWidth && window.innerWidth <= 1280) {
      for (var i = 0; i < globalHeaderNav.length; i++) {
        globalHeaderNav[i].classList.remove('tjr-active');
        siteWrapper[i].classList.remove('tjr-sidebar--active');
        headerOverlay[i].classList.remove('tjr-active');
      }
      for (var i = 0; i < globalHeaderIcon.length; i++) {
        globalHeaderIcon[i].classList.remove('tjr-active');
      }
      curWidth = window.innerWidth;
    }
  }
  if (curWidth < 1024) {
    if (window.innerWidth > curWidth && window.innerWidth >= 1024) {
      siteWrapper.remove("tjr-collapsed");
      siteWrapper.add("tjr-expanded");
      for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.remove("tjr-active");
      }
      curWidth = window.innerWidth;
    }
  }
  if (curWidth <= 1280) {
    if (window.innerWidth > curWidth && window.innerWidth > 1280) {
      for (var i = 0; i < globalHeaderNav.length; i++) {
        globalHeaderNav[i].classList.remove('tjr-active');
        siteWrapper[i].classList.remove('tjr-sidebar--active');
        headerOverlay[i].classList.remove('tjr-active');
      }
      for (var i = 0; i < globalHeaderIcon.length; i++) {
        globalHeaderIcon[i].classList.remove('tjr-active');
      }
      curWidth = window.innerWidth;
    }
  }
});

// Sidebar overlay redundancy due to need of having different function name from toggleSidebar()
function sidebarOverlayToggle() {
  var sidebarOverlay = document.getElementsByClassName("tjr-site__menu__overlay");
  if (window.innerWidth >= 1024) {
    if (siteWrapper.contains("tjr-collapsed")) {
      siteWrapper.remove("tjr-collapsed");
    } else {
      siteWrapper.add("tjr-collapsed");
    }
    if (siteWrapper.contains("tjr-expanded")) {
      siteWrapper.remove("tjr-expanded");
    } else {
      siteWrapper.add("tjr-expanded");
    }
  }
  if (window.innerWidth < 1024 && window.innerWidth >= 980) {
    if (siteWrapper.contains("tjr-collapsed")) {
      siteWrapper.remove("tjr-collapsed");
      for (var i = 0; i < overlay.length; i++) {
        sidebarOverlay[i].classList.add("tjr-active");
      }
    } else {
      siteWrapper.add("tjr-collapsed");
    }
    if (siteWrapper.contains("tjr-expanded")) {
      siteWrapper.remove("tjr-expanded");
      for (var i = 0; i < overlay.length; i++) {
        sidebarOverlay[i].classList.remove("tjr-active");
      }
    } else {
      siteWrapper.add("tjr-expanded");
    }
  }
}

function toggleSidebar() {
  var siteWrapper = document.getElementById("siteWrapper").classList;
  var overlay = document.getElementsByClassName("tjr-site__menu__overlay");
  if (window.innerWidth >= 1024) {
    if (siteWrapper.contains("tjr-collapsed")) {
      siteWrapper.remove("tjr-collapsed");
    } else {
      siteWrapper.add("tjr-collapsed");
    }
    if (siteWrapper.contains("tjr-expanded")) {
      siteWrapper.remove("tjr-expanded");
    } else {
      siteWrapper.add("tjr-expanded");
    }
  }
  if (window.innerWidth < 1024 && window.innerWidth >= 980) {
    if (siteWrapper.contains("tjr-collapsed")) {
      siteWrapper.remove("tjr-collapsed");
      for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.add("tjr-active");
      }
    } else {
      siteWrapper.add("tjr-collapsed");
    }
    if (siteWrapper.contains("tjr-expanded")) {
      siteWrapper.remove("tjr-expanded");
      for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.remove("tjr-active");
      }
    } else {
      siteWrapper.add("tjr-expanded");
    }
  }
}

// Modal
function modalTrigger(evt) {
  var dataTarget = evt.getAttribute("data-target");
  var targetModal = document.getElementById(dataTarget).classList;
  var parentBody = window.parent.document.getElementsByTagName("body");
  var modalOverlay = document.getElementsByClassName("overlay");
  targetModal.add("tjr-active");
  for (var i = 0; i < body.length; i++) {
    body[i].classList.add("tjr-scroll--none");
  }
  for (var i = 0; i < parentBody.length; i++) {
    parentBody[i].classList.add("tjr-scroll--none");
  }
  for (var i = 0; i < overlay.length; i++) {
    modalOverlay[i].classList.add("tjr-active");
  }
}

function modalDismiss() {
  var parentBody = window.parent.document.getElementsByTagName("body");
  var modalActive = document.getElementsByClassName("tjr-modal__wrapper tjr-active");
  var modalOverlay = document.getElementsByClassName("overlay");
  for (var i = 0; i < body.length; i++) {
    body[i].classList.remove("tjr-scroll--none");
  }
  for (var i = 0; i < parentBody.length; i++) {
    parentBody[i].classList.remove("tjr-scroll--none");
  }
  for (var i = 0; i < modalActive.length; i++) {
    modalActive[i].classList.remove("tjr-active");
  }
  for (var i = 0; i < overlay.length; i++) {
    modalOverlay[i].classList.remove("tjr-active");
  }
}

/**
 * @fileOverview
 * @author Zoltan Toth
 * @version 0.1
 */

/**
 * @description
 * Vanilla Javascript tooltip.
 *
 * @class
 * @param {string} [options.theme=dark] - Selects one of the pre-defined tooltip styles - light or dark.
 * @param {number} [options.dist=10] - Specifies the distance in pixels from trigger to tooltip.
 * @param {number} [options.delay=0] - Specifies how long the tooltip remains visible after the mouse leaves the trigger.
 */

Tooltip = function (options) {
  var theme = options.theme || "dark",
    delay = options.delay || 0,
    dist = options.distance || 10;

  /*
   * Attaching one mouseover and one mouseout listener to the document
   * instead of listeners for each trigger
   */
  document.body.addEventListener("mouseover", function (e) {
    if (!e.target.hasAttribute('data-tooltip')) return;

    var tooltip = document.createElement("div");
    tooltip.className = "tjr-tooltip tjr-tooltip--" + theme;
    tooltip.innerHTML = e.target.getAttribute('data-tooltip');

    document.body.appendChild(tooltip);

    var pos = e.target.getAttribute('data-position') || "center top",
      posHorizontal = pos.split(" ")[0],
      posVertical = pos.split(" ")[1];

    positionAt(e.target, tooltip, posHorizontal, posVertical);
  });

  document.body.addEventListener("mouseout", function (e) {
    if (e.target.hasAttribute('data-tooltip')) {
      setTimeout(function () {
        document.body.removeChild(document.querySelector("tjr-tooltip"));
      }, delay);
    }
  });

  /**
   * Positions the tooltip.
   *
   * @param {object} parent - The trigger of the tooltip.
   * @param {object} tooltip - The tooltip itself.
   * @param {string} posHorizontal - Desired horizontal position of the tooltip relatively to the trigger (left/center/right)
   * @param {string} posVertical - Desired vertical position of the tooltip relatively to the trigger (top/center/bottom)
   *
   */
  function positionAt(parent, tooltip, posHorizontal, posVertical) {
    var parentCoords = parent.getBoundingClientRect(),
      left, top;

    // console.log(posVertical)

    switch (posHorizontal) {
      case "left":
        left = parseInt(parentCoords.left) - dist - tooltip.offsetWidth;
        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = dist;
        }
        break;

      case "right":
        left = parentCoords.right + dist;
        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltip.offsetWidth - dist;
        }
        break;

      default:
      case "center":
        left = parseInt(parentCoords.left) + ((parent.offsetWidth - tooltip.offsetWidth) / 2);
    }

    switch (posVertical) {
      case "center":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        break;

      case "bottom":
        top = parseInt(parentCoords.bottom) + dist;
        break;

      default:
      case "top":
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
    }

    left = (left < 0) ? parseInt(parentCoords.left) : left;
    top = (top < 0) ? parseInt(parentCoords.bottom) + dist : top;

    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
  }
};

var tooltip = new Tooltip({
  theme: "dark", // Selects one of the pre-defined tooltip styles - light or dark.
  distance: 2, // Specifies the distance in pixels from trigger to tooltip.
  delay: 0 // Specifies how long the tooltip remains visible (in ms) after the mouse leaves the trigger.
});

// Textarea
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
var tx = document.getElementsByTagName("textarea");
for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px; overflow-y: hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

// Progress
var progBar = document.getElementsByClassName("progress__bar");
for (var i = 0; i < progBar.length; i++) {
  var progWidth = progBar[i].getAttribute("aria-valuenow");
  progBar[i].style.width = progWidth + "%";
}

// Page Progress
var pageLoader = document.getElementsByClassName("pageloader");
for (var i = 0; i < pageLoader.length; i++) {
  var pageLoaderWidth = pageLoader[i].getAttribute("aria-valuenow");
  if (pageLoader[i].classList.contains("loading")) {
    pageLoader[i].style.width = pageLoaderWidth + "%";
  }
}

// Scroll Spy
// https://github.com/ederssouza/vanillajs-scrollspy

window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
})();

/**
 *  @param {number} scrollTargetY
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

function scrollToY(scrollTargetY, speed, easing) {

  var scrollY = window.scrollY || document.documentElement.scrollTop,
    currentTime = 0;

  scrollTargetY = scrollTargetY || 0;
  speed = speed || 2000;
  easing = easing || 'easeOutSine';

  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  var easingEquations = {

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
  };

  function tick() {

    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      requestAnimFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));

    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
}

/**
 *  @param {object} menu - menu selector
 */

function menuControl(menu) {

  var scrollPos = window.scrollY || document.documentElement.scrollTop,
    links = menu.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < links.length; i++) {

    var currLink = links[i],
      refElement = document.querySelector(currLink.getAttribute('href'));

    if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.clientHeight) > scrollPos) {
      currLink.classList.add('tjr-active');

    } else {
      currLink.classList.remove('tjr-active');
    }
  }
}

/**
 *  @param {object} menu     - menu selector
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

function animated(menu, speed, easing) {

  var i, links = menu.querySelectorAll('a[href^="#"]');

  function control(e) {

    e.preventDefault();

    var target = document.querySelector(this.hash);
    scrollToY(target.offsetTop, speed, easing);
  }

  for (i = 0; i < links.length; i++) {

    var link = links[i];
    link.addEventListener('click', control);
  }
}

/**
 *  @param {object} menu     - menu selector
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

// function scrollSpy(menu, speed, easing) {

//   animated(menu, speed, easing);

//   document.addEventListener('scroll', function () {
//     menuControl(menu);
//   });
// }

// var menu = document.querySelector('#sectionID');
// scrollSpy(menu, 1);
