"use strict";
self["webpackHotUpdate_N_E"]("pages/pacientes",{

/***/ "./src/pages/visualizarPaciente.js":
/*!*****************************************!*\
  !*** ./src/pages/visualizarPaciente.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VisualizarPaciente; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\augus\\Documents\\desafio-inovaico\\front-end\\src\\pages\\visualizarPaciente.js",
    _s = $RefreshSig$();




function VisualizarPaciente(_ref) {
  _s();

  var paciente = _ref.paciente;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    nome: '',
    dataNasc: '',
    telefone: '',
    email: '',
    sexo: '',
    altura: '',
    peso: ''
  }),
      data = _useState[0],
      setData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setData(paciente.body); //console.log(response.data)
  }, []);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Paciente "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nome:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "nome" // onChange={changeValue}
        //value={paciente}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Telefone:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "telefone" //  onChange={changeValue}
        // value={paciente.body.telefone}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Email:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "email" // onChange={changeValue}
        //value={paciente.body.email}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Data de Nascimento:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "dataNasc" // onChange={changeValue}
        //value={paciente.body.dataNasc}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sexo:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "sexo" // onChange={changeValue}
        //value={paciente.body.sexo}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Altura:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "altura" // onChange={changeValue}
        //value={paciente.body.altura}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Peso:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "peso" // onChange={changeValue}
        // value={valueInput.peso}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/pacientes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(VisualizarPaciente, "q0V4fhW8IC2Mo+aDQbntOI0sRHo=");

_c = VisualizarPaciente;

var _c;

$RefreshReg$(_c, "VisualizarPaciente");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFjaWVudGVzLmZkMTFjYmQ1OWE0NjQyM2U3OTAxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSWUsU0FBU0ssa0JBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7O0FBQUEsa0JBRTFCTCwrQ0FBUSxDQUFDO0FBQzdCTSxJQUFBQSxJQUFJLEVBQUUsRUFEdUI7QUFFN0JDLElBQUFBLFFBQVEsRUFBRSxFQUZtQjtBQUc3QkMsSUFBQUEsUUFBUSxFQUFFLEVBSG1CO0FBSTdCQyxJQUFBQSxLQUFLLEVBQUUsRUFKc0I7QUFLN0JDLElBQUFBLElBQUksRUFBRSxFQUx1QjtBQU03QkMsSUFBQUEsTUFBTSxFQUFFLEVBTnFCO0FBTzdCQyxJQUFBQSxJQUFJLEVBQUU7QUFQdUIsR0FBRCxDQUZrQjtBQUFBLE1BRTNDQyxJQUYyQztBQUFBLE1BRXJDQyxPQUZxQzs7QUFhaERiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNWYSxJQUFBQSxPQUFPLENBQUNULFFBQVEsQ0FBQ1UsSUFBVixDQUFQLENBRFUsQ0FHVjtBQUNMLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFRTkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFFSSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLDhCQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREksZUFFSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlAsQ0FHQztBQUNEOztBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSSxlQVFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSSxlQVNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEksZUFVSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFVBRlAsQ0FHQTtBQUNDOztBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSSxlQWdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJJLGVBaUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJJLGVBa0JKO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUCxDQUdDO0FBQ0M7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSSxlQXdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJJLGVBeUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJJLGVBMEJKO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsVUFGUCxDQUdDO0FBQ0M7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSSxlQWdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENJLGVBaUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNJLGVBa0NKO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUCxDQUdDO0FBQ0M7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDSSxlQXdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENJLGVBeUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNJLGVBMENKO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsUUFGUCxDQUdDO0FBQ0M7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDSSxlQWdESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaERJLGVBaURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRJLGVBa0RKO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUCxDQUdDO0FBQ0E7O0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxESSxlQXdESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeERJLGVBeURBLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFlBQVg7QUFBQSwrQkFDSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1FSDs7R0ExRnVCVDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Zpc3VhbGl6YXJQYWNpZW50ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3B0eXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlzdWFsaXphclBhY2llbnRlKHtwYWNpZW50ZX0pe1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21lOiAnJyxcclxuICAgICAgICBkYXRhTmFzYzogJycsXHJcbiAgICAgICAgdGVsZWZvbmU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzZXhvOiAnJyxcclxuICAgICAgICBhbHR1cmE6ICcnLFxyXG4gICAgICAgIHBlc286ICcnXHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShwYWNpZW50ZS5ib2R5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcblxyXG5cclxuY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5QYWNpZW50ZSA8L2gzPlxyXG4gICAgICAgICAgICA8cC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPk5vbWU6ICA8L2xhYmVsPiAgXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibm9tZVwiXHJcbiAgICAgICAgIC8vIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwLz5cclxuICAgICAgICA8bGFiZWw+VGVsZWZvbmU6ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgLy8gIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgLy8gdmFsdWU9e3BhY2llbnRlLmJvZHkudGVsZWZvbmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgPGxhYmVsPkVtYWlsOiAgPC9sYWJlbD4gXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZS5ib2R5LmVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAvPlxyXG4gICAgICAgIDxsYWJlbD5EYXRhIGRlIE5hc2NpbWVudG86ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJkYXRhTmFzY1wiXHJcbiAgICAgICAgIC8vIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgIC8vdmFsdWU9e3BhY2llbnRlLmJvZHkuZGF0YU5hc2N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgPGxhYmVsPlNleG86ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzZXhvXCJcclxuICAgICAgICAgLy8gb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgLy92YWx1ZT17cGFjaWVudGUuYm9keS5zZXhvfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAvPlxyXG4gICAgICAgIDxsYWJlbD5BbHR1cmE6ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJhbHR1cmFcIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZS5ib2R5LmFsdHVyYX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwLz5cclxuICAgICAgICA8bGFiZWw+UGVzbzogIDwvbGFiZWw+IFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInBlc29cIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgIC8vIHZhbHVlPXt2YWx1ZUlucHV0LnBlc299XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wYWNpZW50ZXMnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Vm9sdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJQcm9wdHlwZXMiLCJWaXN1YWxpemFyUGFjaWVudGUiLCJwYWNpZW50ZSIsIm5vbWUiLCJkYXRhTmFzYyIsInRlbGVmb25lIiwiZW1haWwiLCJzZXhvIiwiYWx0dXJhIiwicGVzbyIsImRhdGEiLCJzZXREYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9