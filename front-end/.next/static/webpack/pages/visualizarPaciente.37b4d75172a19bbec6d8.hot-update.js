"use strict";
self["webpackHotUpdate_N_E"]("pages/visualizarPaciente",{

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

  setData(paciente);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Paciente "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Nome:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "nome" // onChange={changeValue}
        //value={paciente}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Telefone:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "telefone" //  onChange={changeValue}
        // value={paciente.body.telefone}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Email:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "email" // onChange={changeValue}
        //value={paciente.body.email}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Data de Nascimento:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "dataNasc" // onChange={changeValue}
        //value={paciente.body.dataNasc}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Sexo:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "sexo" // onChange={changeValue}
        //value={paciente.body.sexo}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Altura:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "altura" // onChange={changeValue}
        //value={paciente.body.altura}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        children: "Peso:  "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "peso" // onChange={changeValue}
        // value={valueInput.peso}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/pacientes",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          children: "Voltar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(VisualizarPaciente, "KZDMWo60FbI2tmnWflUDNQ/JUsc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzdWFsaXphclBhY2llbnRlLjM3YjRkNzUxNzJhMTliYmVjNmQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSWUsU0FBU0ksa0JBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7O0FBQUEsa0JBRTFCSiwrQ0FBUSxDQUFDO0FBQzdCSyxJQUFBQSxJQUFJLEVBQUUsRUFEdUI7QUFFN0JDLElBQUFBLFFBQVEsRUFBRSxFQUZtQjtBQUc3QkMsSUFBQUEsUUFBUSxFQUFFLEVBSG1CO0FBSTdCQyxJQUFBQSxLQUFLLEVBQUUsRUFKc0I7QUFLN0JDLElBQUFBLElBQUksRUFBRSxFQUx1QjtBQU03QkMsSUFBQUEsTUFBTSxFQUFFLEVBTnFCO0FBTzdCQyxJQUFBQSxJQUFJLEVBQUU7QUFQdUIsR0FBRCxDQUZrQjtBQUFBLE1BRTNDQyxJQUYyQztBQUFBLE1BRXJDQyxPQUZxQzs7QUFhaERBLEVBQUFBLE9BQU8sQ0FBQ1QsUUFBRCxDQUFQO0FBQ05VLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBRUksc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSw4QkFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGVBRUo7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxNQUZQLENBR0M7QUFDRDs7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkksZUFRSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkksZUFTSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRJLGVBVUo7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxVQUZQLENBR0E7QUFDQzs7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkksZUFnQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSSxlQWlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSSxlQWtCSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE9BRlAsQ0FHQztBQUNDOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkksZUF3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSSxlQXlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSSxlQTBCSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFVBRlAsQ0FHQztBQUNDOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkksZUFnQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSSxlQWlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDSSxlQWtDSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlAsQ0FHQztBQUNDOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0ksZUF3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDSSxlQXlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpDSSxlQTBDSjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFFBRlAsQ0FHQztBQUNDOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0ksZUFnREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhESSxlQWlESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpESSxlQWtESjtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlAsQ0FHQztBQUNBOztBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREksZUF3REo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhESSxlQXlEQSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQUEsK0JBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtRUg7O0dBbkZ1QlQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy92aXN1YWxpemFyUGFjaWVudGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXN1YWxpemFyUGFjaWVudGUoe3BhY2llbnRlfSl7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vbWU6ICcnLFxyXG4gICAgICAgIGRhdGFOYXNjOiAnJyxcclxuICAgICAgICB0ZWxlZm9uZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHNleG86ICcnLFxyXG4gICAgICAgIGFsdHVyYTogJycsXHJcbiAgICAgICAgcGVzbzogJydcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXREYXRhKHBhY2llbnRlKTtcclxuY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5QYWNpZW50ZSA8L2gzPlxyXG4gICAgICAgICAgICA8cC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsPk5vbWU6ICA8L2xhYmVsPiAgXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibm9tZVwiXHJcbiAgICAgICAgIC8vIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwLz5cclxuICAgICAgICA8bGFiZWw+VGVsZWZvbmU6ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgLy8gIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgLy8gdmFsdWU9e3BhY2llbnRlLmJvZHkudGVsZWZvbmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgPGxhYmVsPkVtYWlsOiAgPC9sYWJlbD4gXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZS5ib2R5LmVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAvPlxyXG4gICAgICAgIDxsYWJlbD5EYXRhIGRlIE5hc2NpbWVudG86ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJkYXRhTmFzY1wiXHJcbiAgICAgICAgIC8vIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgIC8vdmFsdWU9e3BhY2llbnRlLmJvZHkuZGF0YU5hc2N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgPGxhYmVsPlNleG86ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzZXhvXCJcclxuICAgICAgICAgLy8gb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgLy92YWx1ZT17cGFjaWVudGUuYm9keS5zZXhvfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAvPlxyXG4gICAgICAgIDxsYWJlbD5BbHR1cmE6ICA8L2xhYmVsPiBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJhbHR1cmFcIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAvL3ZhbHVlPXtwYWNpZW50ZS5ib2R5LmFsdHVyYX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwLz5cclxuICAgICAgICA8bGFiZWw+UGVzbzogIDwvbGFiZWw+IFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInBlc29cIlxyXG4gICAgICAgICAvLyBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgIC8vIHZhbHVlPXt2YWx1ZUlucHV0LnBlc299XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wYWNpZW50ZXMnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Vm9sdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJQcm9wdHlwZXMiLCJWaXN1YWxpemFyUGFjaWVudGUiLCJwYWNpZW50ZSIsIm5vbWUiLCJkYXRhTmFzYyIsInRlbGVmb25lIiwiZW1haWwiLCJzZXhvIiwiYWx0dXJhIiwicGVzbyIsImRhdGEiLCJzZXREYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=