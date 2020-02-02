(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBookOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebookF"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGitlab"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faKeybase"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedinIn"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMastodon"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMedium"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPinterest"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReddit"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedditAlien"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRss"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStackOverflow"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTag"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWeibo"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  loadFontAwesome: function loadFontAwesome() {
    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["dom"].watch();
  },
  bootstrapify: function bootstrapify() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content blockquote').addClass('blockquote');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content table').addClass('table');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content table').wrap('<div class="table-responsive" />');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content table thead').addClass('thead-dark');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content pre').wrap('<figure class="highlight" />');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.content figure > img').addClass('img-fluid');
  },
  lazyload: function () {
    var _lazyload = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _ref, LazyLoad;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/*! import() | lazyload */ "lazyload").then(__webpack_require__.t.bind(null, /*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js", 7));

            case 2:
              _ref = _context.sent;
              LazyLoad = _ref.default;
              new LazyLoad({
                thresholds: "40px 10%",
                load_delay: 100
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function lazyload() {
      return _lazyload.apply(this, arguments);
    }

    return lazyload;
  }(),
  navbarFade: function navbarFade() {
    var $position = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scroll(function () {
      var $scroll = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop();
      var $navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#navbar-main-menu.fixed-top').outerHeight();
      $scroll > $position ? jquery__WEBPACK_IMPORTED_MODULE_2___default()('#navbar-main-menu.fixed-top').css('top', -$navbarHeight) : jquery__WEBPACK_IMPORTED_MODULE_2___default()('#navbar-main-menu.fixed-top').css('top', 0);

      if ($scroll <= 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#navbar-main-menu.fixed-top').css('top', 0);
      }

      $position = $scroll;
    });
  },
  lightbox: function () {
    var _lightbox = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _ref2, ekkoLightbox;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.e(/*! import() | ekkoLightbox */ "vendors~ekkoLightbox").then(__webpack_require__.t.bind(null, /*! ekko-lightbox */ "./node_modules/ekko-lightbox/dist/ekko-lightbox.min.js", 7));

            case 2:
              _ref2 = _context2.sent;
              ekkoLightbox = _ref2.default;
              jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-toggle="lightbox"]').click(function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).ekkoLightbox();
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function lightbox() {
      return _lightbox.apply(this, arguments);
    }

    return lightbox;
  }(),
  syntaxHighlight: function syntaxHighlight() {
    if (!window.Prism) {
      return;
    }

    Prism.highlightAll();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('pre:has(> code[class*=language-])').removeAttr('style');
    var element = jquery__WEBPACK_IMPORTED_MODULE_2___default()('pre:has(> code:not([class*=language-]))');
    element.addClass('language-none');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('> code', element).addClass('language-none');
  }
});

/***/ })

}]);
//# sourceMappingURL=app.js.map