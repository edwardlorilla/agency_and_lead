(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/employee/config.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/employee/config.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_search_business_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../mixins/search/business_entity */ "./resources/js/components/mixins/search/business_entity.js");
/* harmony import */ var _mixins_search_employee_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mixins/search/employee_category */ "./resources/js/components/mixins/search/employee_category.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_search_business_entity__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_search_employee_category__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      form: {
        details: '',
        business_entity_id: '',
        employee_category_id: ''
      },
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id, "/employee")).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      }).catch(function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return vm.$message({
              type: 'error',
              message: error.response.statusText
            });
          });
        }
      });
    } else {
      next();
    }
  },
  methods: {
    setData: function setData(response) {
      var vm = this;

      var employee = _.head(response.employees);

      vm.business_entities = [{
        value: employee.business_entity.id,
        label: employee.business_entity.details
      }];
      vm.employee_categories = [{
        value: employee.employee_category.id,
        label: employee.employee_category.description
      }];
      vm.form = employee;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-employee'
      });
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.form.id;
          axios[id ? 'put' : 'post']("/api/employees".concat(id ? "/".concat(id) : ''), vm.form).then(function () {
            vm.disabled = false;
            vm.$message({
              type: 'success',
              message: "Employee ".concat(id ? 'has been updated' : 'has been created')
            });
          }).catch(function (error) {
            vm.disabled = false;

            if (error.response.data.errors && error.response.data.message) {
              vm.errors = error.response.data.errors;
              vm.$message({
                message: error.response.data.message,
                type: 'error'
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "never" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.$route.params.id ? "Edit" : "Create") +
                          " Employee"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form, "label-width": "200px" },
                      nativeOn: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.details
                            ? "is-error is-required"
                            : "",
                          attrs: { prop: "details", label: "Details" }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter Details",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.details,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "details", $$v)
                              },
                              expression: "form.details"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.details, function(error) {
                            return _vm.errors.details
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "business_entity",
                            label: "Business Entity"
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_business_entity,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.business_entity_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "business_entity_id", $$v)
                                },
                                expression: "form.business_entity_id"
                              }
                            },
                            _vm._l(_vm.business_entities, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "employee_category",
                            label: "Employee Category"
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_employee_category,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.employee_category_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.form,
                                    "employee_category_id",
                                    $$v
                                  )
                                },
                                expression: "form.employee_category_id"
                              }
                            },
                            _vm._l(_vm.employee_categories, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: {
                                disabled: _vm.disabled,
                                type: "primary"
                              },
                              on: {
                                click: function($event) {
                                  _vm.onSubmit("form")
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.params.id ? "Edit" : "Create"
                                ) + " Employee\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-button", { on: { click: _vm.onCancel } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/mixins/search/business_entity.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/mixins/search/business_entity.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      business_entities: []
    };
  },
  methods: {
    search_business_entity: function search_business_entity(query) {
      var vm = this;

      if (query !== '') {
        vm.loading = true;
        vm.onSearchBusinessEntity(query, vm);
      } else {
        vm.loading = false;
        vm.business_entities = [];
      }
    },
    onSearchBusinessEntity: _.debounce(function (query, vm) {
      axios.get('/api/business_entities/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.business_entities = q.data.map(function (item) {
          return {
            value: item.id,
            label: item.details
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/mixins/search/employee_category.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/mixins/search/employee_category.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employee_categories: []
    };
  },
  methods: {
    search_employee_category: function search_employee_category(query) {
      var vm = this;

      if (query !== '') {
        vm.loading = true;
        vm.onSearchEmployeeCategory(query, vm);
      } else {
        vm.loading = false;
        vm.employee_categories = [];
      }
    },
    onSearchEmployeeCategory: _.debounce(function (query, vm) {
      axios.get('/api/employee_categories/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.employee_categories = q.data.map(function (item) {
          return {
            value: item.id,
            label: item.description
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/user/employee/config.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/employee/config.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.vue?vue&type=template&id=5bed64ca& */ "./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca&");
/* harmony import */ var _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.vue?vue&type=script&lang=js& */ "./resources/js/components/user/employee/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/employee/config.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/employee/config.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/employee/config.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/employee/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=template&id=5bed64ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/employee/config.vue?vue&type=template&id=5bed64ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_5bed64ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);