(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/customer/config.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/customer/config.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_search_salutation_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../mixins/search/salutation_code */ "./resources/js/components/mixins/search/salutation_code.js");
/* harmony import */ var _mixins_search_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mixins/search/user */ "./resources/js/components/mixins/search/user.js");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_search_salutation_code__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_search_user__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    var vm = this;
    return {
      customer: {},
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id, "/customer")).then(function (response) {
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

      var customer = _.head(response.customers);

      vm.users = customer.user.map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      vm.salutation_codes = [{
        value: customer.customer_contact.salutation_code.id,
        label: customer.customer_contact.salutation_code.description
      }];
      customer.user_id = _.head(customer.user);
      customer.salutation_code_id = customer.customer_contact.salutation_code.id;
      vm.customer = customer;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-customer'
      });
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.customer.id;
          axios[id ? 'put' : 'post']("/api/customers".concat(id ? "/".concat(id) : ''), vm.customer).then(function () {
            vm.disabled = false;
            vm.$message({
              type: 'success',
              message: "Customer ".concat(id ? 'has been updated' : 'has been created')
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc& ***!
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
                          " Customer"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.customer
                    ? _c(
                        "el-form",
                        {
                          ref: "form",
                          attrs: {
                            model: _vm.customer,
                            "label-width": "120px"
                          },
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
                              attrs: { prop: "details", label: "Detail" }
                            },
                            [
                              _c("el-input", {
                                attrs: {
                                  placeholder: "Enter Details",
                                  type: "text",
                                  "auto-complete": "off"
                                },
                                model: {
                                  value: _vm.customer.details,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customer, "details", $$v)
                                  },
                                  expression: "customer.details"
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
                            { attrs: { prop: "user_id", label: "User" } },
                            [
                              _c(
                                "el-select",
                                {
                                  attrs: {
                                    filterable: "",
                                    remote: "",
                                    "reserve-keyword": "",
                                    placeholder: "Please enter a keyword",
                                    "remote-method": _vm.search_user,
                                    loading: _vm.loading
                                  },
                                  model: {
                                    value: _vm.customer.user_id,
                                    callback: function($$v) {
                                      _vm.$set(_vm.customer, "user_id", $$v)
                                    },
                                    expression: "customer.user_id"
                                  }
                                },
                                _vm._l(_vm.users, function(item) {
                                  return _c("el-option", {
                                    key: item.value,
                                    attrs: {
                                      label: item.label,
                                      value: item.value
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.customer.customer_contact
                            ? _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "salutation_code_id",
                                    label: "Salutation Code"
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
                                        "remote-method":
                                          _vm.search_salutation_code,
                                        loading: _vm.loading
                                      },
                                      model: {
                                        value:
                                          _vm.customer.customer_contact
                                            .salutation_code_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.customer.customer_contact,
                                            "salutation_code_id",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "customer.customer_contact.salutation_code_id"
                                      }
                                    },
                                    _vm._l(_vm.salutation_codes, function(
                                      item
                                    ) {
                                      return _c("el-option", {
                                        key: item.value,
                                        attrs: {
                                          label: item.label,
                                          value: item.value
                                        }
                                      })
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
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
                                    ) + " Customer\n                        "
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
                    : _vm._e()
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

/***/ "./resources/js/components/mixins/search/salutation_code.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/mixins/search/salutation_code.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      salutation_codes: []
    };
  },
  methods: {
    search_salutation_code: function search_salutation_code(query) {
      var vm = this;

      if (query !== '') {
        vm.loading = true;
        vm.onSearchSalutationCode(query, vm);
      } else {
        vm.loading = false;
        vm.salutation_codes = [];
      }
    },
    onSearchSalutationCode: _.debounce(function (query, vm) {
      axios.get('/api/salutation_codes/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.salutation_codes = q.data.map(function (item) {
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

/***/ "./resources/js/components/mixins/search/user.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/mixins/search/user.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: []
    };
  },
  methods: {
    search_user: function search_user(query) {
      var vm = this;

      if (query !== '') {
        vm.loading = true;
        vm.onSearchUser(query, vm);
      } else {
        vm.users = [];
      }
    },
    onSearchUser: _.debounce(function (query, vm) {
      axios.get('/api/users/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.users = q.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/user/customer/config.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/customer/config.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.vue?vue&type=template&id=9d57a4cc& */ "./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc&");
/* harmony import */ var _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.vue?vue&type=script&lang=js& */ "./resources/js/components/user/customer/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/customer/config.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/customer/config.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/customer/config.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/customer/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=template&id=9d57a4cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/customer/config.vue?vue&type=template&id=9d57a4cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_9d57a4cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);