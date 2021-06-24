(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\github pages\GL_Sprint5_Angular\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "09GQ":
    /*!*************************************!*\
      !*** ./src/app/task/task.module.ts ***!
      \*************************************/

    /*! exports provided: TaskModule */

    /***/
    function GQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskModule", function () {
        return TaskModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task/task.component */
      "LYFP");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-task/add-task.component */
      "GsQU");
      /* harmony import */


      var _project_project_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../project/project.module */
      "0k1G");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _task_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./task-service.service */
      "CZf5");

      var TaskModule = function TaskModule() {
        _classCallCheck(this, TaskModule);
      };

      TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TaskModule
      });
      TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TaskModule_Factory(t) {
          return new (t || TaskModule)();
        },
        providers: [_task_service_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_6__["ProjectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModule, {
          declarations: [_task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_6__["ProjectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_6__["ProjectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            providers: [_task_service_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "0k1G":
    /*!*******************************************!*\
      !*** ./src/app/project/project.module.ts ***!
      \*******************************************/

    /*! exports provided: ProjectModule */

    /***/
    function k1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectModule", function () {
        return ProjectModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project/project.component */
      "5asC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-project/add-project.component */
      "ClQZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _project_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./project-service.service */
      "K41f");

      var ProjectModule = function ProjectModule() {
        _classCallCheck(this, ProjectModule);
      };

      ProjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProjectModule
      });
      ProjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProjectModule_Factory(t) {
          return new (t || ProjectModule)();
        },
        providers: [_project_service_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectModule, {
          declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          exports: [_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"]],
            exports: [_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]],
            providers: [_project_service_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5asC":
    /*!******************************************************!*\
      !*** ./src/app/project/project/project.component.ts ***!
      \******************************************************/

    /*! exports provided: ProjectComponent */

    /***/
    function asC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
        return ProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _project_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../project-service.service */
      "K41f");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectComponent_div_0_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_0_tr_18_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var project_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.UpdateProject(project_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_0_tr_18_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var project_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.DeleteProject(project_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.detail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.createdOn);
        }
      }

      function ProjectComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.OnAddProjectClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CreatedOn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectComponent_div_0_tr_18_Template, 14, 4, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
        }
      }

      var ProjectComponent = /*#__PURE__*/function () {
        function ProjectComponent(_projectService, router) {
          _classCallCheck(this, ProjectComponent);

          this._projectService = _projectService;
          this.router = router;
          this.showAddProject = false;
          this.showProjectList = true;
          this.isUpdate = false;
          this.projects = [];
          this.currentProject = {};
        }

        _createClass(ProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProjects();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this = this;

            this._projectService.getProjects().subscribe(function (data) {
              _this.projects = data;
            });
          }
        }, {
          key: "OnAddProjectClick",
          value: function OnAddProjectClick() {
            this.router.navigate(['home/AddProject']);
          }
        }, {
          key: "ShowProjectList",
          value: function ShowProjectList(isSubmit) {
            if (!isSubmit) {
              this.showAddProject = false;
              this.showProjectList = true;
            }
          }
        }, {
          key: "UpdateProject",
          value: function UpdateProject(project) {
            this.router.navigate(['home/AddProject'], {
              queryParams: {
                projectId: project.id
              }
            });
          }
        }, {
          key: "DeleteProject",
          value: function DeleteProject(project) {
            var _this2 = this;

            var _a;

            this._projectService.deleteProject((_a = project.id) !== null && _a !== void 0 ? _a : -1).subscribe(function (isSuccess) {
              _this2.getProjects();
            });
          }
        }]);

        return ProjectComponent;
      }();

      ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
        return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectComponent,
        selectors: [["app-project"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-dark", 2, "margin-top", "1%", "margin-bottom", "1%", 3, "click"], [2, "overflow", "scroll", "max-height", "100vh"], [1, "table", "table-hover"], [1, "thead-dark"], [2, "text-align", "center"], ["scope", "col"], ["style", "text-align: center", 4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "2%", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "2%", 3, "click"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectComponent_div_0_Template, 19, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProjectList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-project",
            templateUrl: "./project.component.html",
            styleUrls: ["./project.component.css"]
          }]
        }], function () {
          return [{
            type: _project_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7UCR":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserModule */

    /***/
    function UCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user/user.component */
      "KX+F");
      /* harmony import */


      var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-user/add-user.component */
      "8nGX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-service.service */
      "RGw+");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserModule
      });
      UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserModule_Factory(t) {
          return new (t || UserModule)();
        },
        providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
          declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "8nGX":
    /*!*****************************************************!*\
      !*** ./src/app/user/add-user/add-user.component.ts ***!
      \*****************************************************/

    /*! exports provided: AddUserComponent */

    /***/
    function nGX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
        return AddUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user */
      "cauy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-service.service */
      "RGw+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddUserComponent_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.AddUser(ctx_r5.newUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddUserComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.AddUser(ctx_r7.newUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddUserComponent = /*#__PURE__*/function () {
        function AddUserComponent(route, router, userSerive) {
          _classCallCheck(this, AddUserComponent);

          this.route = route;
          this.router = router;
          this.userSerive = userSerive;
          this.userId = null;
          this.users = [];
          this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
          this.isUpdate = false;
        }

        _createClass(AddUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.route.queryParams.subscribe(function (params) {
              var id = params['userId'];

              if (id != null) {
                _this3.userId = parseInt(id);
                _this3.isUpdate = true;

                _this3.userSerive.getUsers().subscribe(function (data) {
                  var _a;

                  _this3.users = data;
                  _this3.newUser = (_a = _this3.users.find(function (x) {
                    return x.id == _this3.userId;
                  })) !== null && _a !== void 0 ? _a : new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
                });
              }
            });
          }
        }, {
          key: "AddUser",
          value: function AddUser(user) {
            var _this4 = this;

            this.userSerive.saveUser(user).subscribe(function (success) {
              _this4.router.navigate(['home/user']);
            });
          }
        }, {
          key: "CancelAddUser",
          value: function CancelAddUser() {
            this.router.navigate(['home/user']);
          }
        }]);

        return AddUserComponent;
      }();

      AddUserComponent.ɵfac = function AddUserComponent_Factory(t) {
        return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUserComponent,
        selectors: [["app-add-user"]],
        decls: 27,
        vars: 6,
        consts: [[2, "max-width", "70%", "margin-left", "10%", "margin-top", "1%"], [1, "row"], [1, "col"], ["for", "firstName"], ["type", "text", "name", "FirstName", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "lastName"], ["type", "text", "name", "LastName", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "name", "Email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Email", "ngModel"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "1%", 3, "click"], ["style", "margin-left: 1%", "type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "1%", 3, "click"]],
        template: function AddUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FirstName");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.newUser.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Name is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LastName");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.newUser.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.newUser.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We'll never share your email with anyone else.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddUserComponent_button_23_Template, 2, 0, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_24_listener() {
              return ctx.CancelAddUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddUserComponent_button_26_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r0.valid || _r0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 5,
        vars: 0,
        consts: [[2, "display", "flex", "height", "100vh"], [2, "width", "15%", "background-color", "#343b40"], [2, "width", "80%", "padding-left", "1%"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CZf5":
    /*!**********************************************!*\
      !*** ./src/app/task/task-service.service.ts ***!
      \**********************************************/

    /*! exports provided: TaskService */

    /***/
    function CZf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
          this.baseURL = "http://localhost:3001/tasks";
          this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(TaskService, [{
          key: "getTasks",
          value: function getTasks() {
            return this.http.get(this.baseURL);
          }
        }, {
          key: "saveTask",
          value: function saveTask(task) {
            if (task.id) {
              return this.http.put(this.baseURL + '/' + task.id, task);
            } else {
              return this.http.post(this.baseURL, task);
            }
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(taskId) {
            var url = this.baseURL + "/" + taskId;
            return this.http["delete"](url, this.httpHeader);
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ClQZ":
    /*!**************************************************************!*\
      !*** ./src/app/project/add-project/add-project.component.ts ***!
      \**************************************************************/

    /*! exports provided: AddProjectComponent */

    /***/
    function ClQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
        return AddProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../project */
      "ifWy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../project-service.service */
      "K41f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddProjectComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.AddProject(ctx_r4.newProject);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddProjectComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.AddProject(ctx_r6.newProject);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddProjectComponent = /*#__PURE__*/function () {
        function AddProjectComponent(route, router, _projectService) {
          _classCallCheck(this, AddProjectComponent);

          this.route = route;
          this.router = router;
          this._projectService = _projectService;
          this.projectId = null;
          this.projects = [];
          this.newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
          this.isUpdate = false;
        }

        _createClass(AddProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.queryParams.subscribe(function (params) {
              var id = params['projectId'];

              if (id != null) {
                _this5.projectId = parseInt(id);
                _this5.isUpdate = true;

                _this5._projectService.getProjects().subscribe(function (data) {
                  var _a;

                  _this5.projects = data;
                  _this5.newProject = (_a = _this5.projects.find(function (x) {
                    return x.id == _this5.projectId;
                  })) !== null && _a !== void 0 ? _a : new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
                });
              }
            });
          }
        }, {
          key: "AddProject",
          value: function AddProject(project) {
            var _this6 = this;

            this._projectService.saveProject(project).subscribe(function (success) {
              _this6.router.navigate(['home/project']);
            });
          }
        }, {
          key: "CancelAddProject",
          value: function CancelAddProject() {
            this.router.navigate(['home/project']);
          }
        }]);

        return AddProjectComponent;
      }();

      AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) {
        return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]));
      };

      AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddProjectComponent,
        selectors: [["app-add-project"]],
        decls: 20,
        vars: 5,
        consts: [[2, "max-width", "70%", "margin-left", "10%", "margin-top", "1%"], [2, "margin-bottom", "2%"], ["for", "Name"], ["type", "text", "name", "Name", "placeholder", "Project Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "details"], ["id", "exampleFormControlTextarea1", "name", "Detail", "placeholder", "Details about the project", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Detail", "ngModel"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "1%", 3, "click"], ["style", "margin-left: 1%", "type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "1%", 3, "click"]],
        template: function AddProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.newProject.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Name is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_textarea_ngModelChange_14_listener($event) {
              return ctx.newProject.detail = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddProjectComponent_button_16_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_17_listener() {
              return ctx.CancelAddProject();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddProjectComponent_button_19_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r0.valid || _r0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.detail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-project',
            templateUrl: './add-project.component.html',
            styleUrls: ['./add-project.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GsQU":
    /*!*****************************************************!*\
      !*** ./src/app/task/add-task/add-task.component.ts ***!
      \*****************************************************/

    /*! exports provided: AddTaskComponent */

    /***/
    function GsQU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function () {
        return AddTaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../task */
      "z2GI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/common/common-data.service */
      "aL3z");
      /* harmony import */


      var _task_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../task-service.service */
      "CZf5");
      /* harmony import */


      var src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/user/user-service.service */
      "RGw+");
      /* harmony import */


      var src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/project/project-service.service */
      "K41f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddTaskComponent_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r6.name);
        }
      }

      function AddTaskComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.firstName);
        }
      }

      function AddTaskComponent_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var st_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", st_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](st_r8.status);
        }
      }

      function AddTaskComponent_button_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_button_31_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.AddNewTask(ctx_r9.newTask);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddTaskComponent_button_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_button_34_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.AddNewTask(ctx_r11.newTask);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddTaskComponent = /*#__PURE__*/function () {
        function AddTaskComponent(route, router, _commonDataService, _taskService, _userService, _projectService) {
          _classCallCheck(this, AddTaskComponent);

          this.route = route;
          this.router = router;
          this._commonDataService = _commonDataService;
          this._taskService = _taskService;
          this._userService = _userService;
          this._projectService = _projectService;
          this.tasks = [];
          this.taskId = null;
          this.newTask = {};
          this.isUpdate = false;
          this.projectDataList = [];
          this.userDataList = [];
          this.statuses = [];
        }

        _createClass(AddTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.getStatusList();
            this.getUsers();
            this.getProjects();
            this.getTasks();
            this.route.queryParams.subscribe(function (params) {
              var id = params['taskId'];

              if (id != null) {
                _this7.taskId = parseInt(id);
                _this7.isUpdate = true;

                _this7._taskService.getTasks().subscribe(function (data) {
                  var _a;

                  _this7.tasks = data;
                  _this7.newTask = (_a = _this7.tasks.find(function (x) {
                    return x.id == _this7.taskId;
                  })) !== null && _a !== void 0 ? _a : new _task__WEBPACK_IMPORTED_MODULE_1__["Task"]();
                });
              }
            });
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this8 = this;

            this._projectService.getProjects().subscribe(function (data) {
              _this8.projectDataList = data;
            });
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            var _this9 = this;

            this._taskService.getTasks().subscribe(function (data) {
              _this9.tasks = data;
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this10 = this;

            this._userService.getUsers().subscribe(function (data) {
              _this10.userDataList = data;

              _this10.getTasks();
            });
          }
        }, {
          key: "getStatusList",
          value: function getStatusList() {
            var _this11 = this;

            this._commonDataService.getStatuses().subscribe(function (data) {
              _this11.statuses = data;

              _this11.getUsers();
            });
          }
        }, {
          key: "AddNewTask",
          value: function AddNewTask(task) {
            var _this12 = this;

            this._taskService.saveTask(task).subscribe(function (success) {
              _this12.router.navigate(['home/task']);
            });
          }
        }, {
          key: "CancelAddTask",
          value: function CancelAddTask() {
            this.router.navigate(['home/task']);
          }
        }]);

        return AddTaskComponent;
      }();

      AddTaskComponent.ɵfac = function AddTaskComponent_Factory(t) {
        return new (t || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_3__["CommonDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]));
      };

      AddTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddTaskComponent,
        selectors: [["app-add-task"]],
        inputs: {
          newTask: "newTask",
          isUpdate: "isUpdate"
        },
        decls: 35,
        vars: 9,
        consts: [[2, "max-width", "70%", "margin-left", "10%", "margin-top", "1%"], [2, "margin-bottom", "2%"], [1, "form-row", 2, "display", "flex"], [2, "margin-bottom", "2%", "margin-right", "2%"], ["for", "inlineFormCustomSelect", 1, "mr-sm-2"], ["name", "ProjectId", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "AssignedToUser", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["name", "Status", "id", "inlineFormCustomSelect", 1, "custom-select", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["for", "details"], ["id", "exampleFormControlTextarea1", "name", "Detail", "placeholder", "Details about the task", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Detail", "ngModel"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "1%", 3, "click"], ["style", "margin-left: 1%", "type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "1%", 3, "click"]],
        template: function AddTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskComponent_Template_select_ngModelChange_8_listener($event) {
              return ctx.newTask.projectId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddTaskComponent_option_11_Template, 2, 2, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Assigned To User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskComponent_Template_select_ngModelChange_15_listener($event) {
              return ctx.newTask.assignedToUser = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Choose...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddTaskComponent_option_18_Template, 2, 2, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.newTask.status = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Choose...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddTaskComponent_option_25_Template, 2, 2, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskComponent_Template_textarea_ngModelChange_29_listener($event) {
              return ctx.newTask.detail = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddTaskComponent_button_31_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_Template_button_click_32_listener() {
              return ctx.CancelAddTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddTaskComponent_button_34_Template, 2, 0, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask.projectId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectDataList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask.assignedToUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userDataList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask.detail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGFzay5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-add-task",
            templateUrl: "./add-task.component.html",
            styleUrls: ["./add-task.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_3__["CommonDataService"]
          }, {
            type: _task_service_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
          }, {
            type: src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]
          }];
        }, {
          newTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "K41f":
    /*!****************************************************!*\
      !*** ./src/app/project/project-service.service.ts ***!
      \****************************************************/

    /*! exports provided: ProjectService */

    /***/
    function K41f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(http) {
          _classCallCheck(this, ProjectService);

          this.http = http;
          this.baseURL = "http://localhost:3001/projects";
          this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(ProjectService, [{
          key: "getProjects",
          value: function getProjects() {
            return this.http.get(this.baseURL);
          }
        }, {
          key: "saveProject",
          value: function saveProject(project) {
            if (project.id) {
              return this.http.put(this.baseURL + '/' + project.id, project);
            } else {
              return this.http.post(this.baseURL, project);
            }
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(projectId) {
            var url = this.baseURL + "/" + projectId;
            return this.http["delete"](url, this.httpHeader);
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KX+F":
    /*!*********************************************!*\
      !*** ./src/app/user/user/user.component.ts ***!
      \*********************************************/

    /*! exports provided: UserComponent */

    /***/
    function KXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../user-service.service */
      "RGw+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserComponent_div_0_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_tr_18_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var user_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.UpdateUser(user_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_tr_18_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var user_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.DeleteUser(user_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
        }
      }

      function UserComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.OnAddUserClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FirstName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LastName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_div_0_tr_18_Template, 14, 4, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
        }
      }

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(userSerive, router) {
          _classCallCheck(this, UserComponent);

          this.userSerive = userSerive;
          this.router = router;
          this.showAddUser = false;
          this.showUserList = true;
          this.isUpdate = false;
          this.users = [];
          this.currentUser = {};
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsers();
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this13 = this;

            this.userSerive.getUsers().subscribe(function (data) {
              _this13.users = data;
            });
          }
        }, {
          key: "OnAddUserClick",
          value: function OnAddUserClick() {
            this.router.navigate(['home/AddUser']);
          }
        }, {
          key: "ShowUserList",
          value: function ShowUserList(isSubmit) {
            if (!isSubmit) {
              this.showAddUser = false;
              this.showUserList = true;
            }
          }
        }, {
          key: "UpdateUser",
          value: function UpdateUser(user) {
            this.router.navigate(['home/AddUser'], {
              queryParams: {
                userId: user.id
              }
            });
          }
        }, {
          key: "DeleteUser",
          value: function DeleteUser(user) {
            var _this14 = this;

            var _a;

            this.userSerive.deleteUser((_a = user.id) !== null && _a !== void 0 ? _a : 0).subscribe(function (isSuccess) {
              _this14.getUsers();
            });
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-dark", 2, "margin-top", "1%", "margin-bottom", "1%", 3, "click"], [2, "overflow", "scroll", "max-height", "100vh"], [1, "table"], [1, "thead-dark"], [2, "text-align", "center"], ["scope", "col"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "2%", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "2%", 3, "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_div_0_Template, 19, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
          }]
        }], function () {
          return [{
            type: _user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LYFP":
    /*!*********************************************!*\
      !*** ./src/app/task/task/task.component.ts ***!
      \*********************************************/

    /*! exports provided: TaskComponent */

    /***/
    function LYFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/common-data.service */
      "aL3z");
      /* harmony import */


      var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../task-service.service */
      "CZf5");
      /* harmony import */


      var src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/user/user-service.service */
      "RGw+");
      /* harmony import */


      var src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/project/project-service.service */
      "K41f");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TaskComponent_div_0_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_0_tr_22_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var task_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.UpdateTask(task_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_0_tr_22_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var task_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.DeleteTask(task_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getProject(task_r2.projectId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r2.detail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getUser(task_r2.assignedToUser));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getStatus(task_r2.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r2.createdOn);
        }
      }

      function TaskComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.OnAddTaskClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "AssignedToUser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CreatedOn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskComponent_div_0_tr_22_Template, 18, 6, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tasks);
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(_commonDataService, _taskService, _userService, _projectService, router) {
          _classCallCheck(this, TaskComponent);

          this._commonDataService = _commonDataService;
          this._taskService = _taskService;
          this._userService = _userService;
          this._projectService = _projectService;
          this.router = router;
          this.showAddTask = false;
          this.showTaskList = true;
          this.isUpdate = false;
          this.projectsList = [];
          this.usersList = [];
          this.statuses = [];
          this.tasks = [];
          this.currentTask = {};
        }

        _createClass(TaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //  this.getData();
            this.getStatusList();
            this.getUsers();
            this.getProjects();
            this.getTasks();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this15 = this;

            this._projectService.getProjects().subscribe(function (data) {
              _this15.projectsList = data;
            });
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            var _this16 = this;

            this._taskService.getTasks().subscribe(function (data) {
              _this16.tasks = data;
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this17 = this;

            this._userService.getUsers().subscribe(function (data) {
              _this17.usersList = data;

              _this17.getTasks();
            });
          }
        }, {
          key: "getStatusList",
          value: function getStatusList() {
            var _this18 = this;

            this._commonDataService.getStatuses().subscribe(function (data) {
              _this18.statuses = data;

              _this18.getUsers();
            });
          }
        }, {
          key: "OnAddTaskClick",
          value: function OnAddTaskClick() {
            this.router.navigate(['home/AddTask']);
          }
        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.usersList.find(function (x) {
              return x.id == userId;
            }).firstName;
          }
        }, {
          key: "getProject",
          value: function getProject(projectId) {
            return this.projectsList.find(function (x) {
              return x.id == projectId;
            }).name;
          }
        }, {
          key: "getStatus",
          value: function getStatus(id) {
            return this.statuses.find(function (x) {
              return x.id == id;
            }).status;
          }
        }, {
          key: "ShowTaskList",
          value: function ShowTaskList(isSubmit) {
            if (!isSubmit) {
              this.showAddTask = false;
              this.showTaskList = true;
            }
          }
        }, {
          key: "UpdateTask",
          value: function UpdateTask(task) {
            this.router.navigate(['home/AddTask'], {
              queryParams: {
                taskId: task.id
              }
            });
          }
        }, {
          key: "DeleteTask",
          value: function DeleteTask(task) {
            var _this19 = this;

            var _a;

            this._taskService.deleteTask((_a = task.id) !== null && _a !== void 0 ? _a : -1).subscribe(function (success) {
              _this19.getTasks();
            });
          }
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_1__["CommonDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-dark", 2, "margin-top", "1%", "margin-bottom", "1%", 3, "click"], [2, "overflow", "scroll", "max-height", "100vh"], [1, "table", "table-hover"], [1, "thead-dark"], [2, "text-align", "center"], ["scope", "col"], ["style", "text-align: center", 4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "2%", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-left", "2%", 3, "click"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_div_0_Template, 23, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTaskList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-task",
            templateUrl: "./task.component.html",
            styleUrls: ["./task.component.css"]
          }]
        }], function () {
          return [{
            type: src_app_common_common_data_service__WEBPACK_IMPORTED_MODULE_1__["CommonDataService"]
          }, {
            type: _task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
          }, {
            type: src_app_user_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: src_app_project_project_service_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RGw+":
    /*!**********************************************!*\
      !*** ./src/app/user/user-service.service.ts ***!
      \**********************************************/

    /*! exports provided: UserService */

    /***/
    function RGw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.baseURL = "http://localhost:3001/users";
          this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.http.get(this.baseURL);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            if (user.id) {
              return this.http.put(this.baseURL + '/' + user.id, user);
            } else {
              return this.http.post(this.baseURL, user);
            }
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(userId) {
            var url = this.baseURL + "/" + userId;
            return this.http["delete"](url, this.httpHeader);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_router) {
          _classCallCheck(this, AppComponent);

          this._router = _router;
          this.myDate = new Date();
          this.router = "";
          this.router = _router.url;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.router); // this.clock();
          }
        }, {
          key: "clock",
          value: function clock() {
            var _this20 = this;

            setInterval(function () {
              _this20.myDate = new Date();
            }, 1000);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 1,
        consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["class", "navbar-brand", "style", "margin-left:auto", "href", "#", 4, "ngIf"], ["href", "#", 1, "navbar-brand", 2, "margin-left", "auto"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_a_4_Template, 2, 0, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router != "/home");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sidebar-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 220px;\r\n    height: 100%;\r\n    left: 0;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    background: #1a1a1a;\r\n    color: #fff;\r\n  }\r\n  \r\n  .content-container[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .sidebar-logo[_ngcontent-%COMP%] {\r\n    padding: 10px 15px 10px 30px;\r\n    font-size: 20px;\r\n    background-color: #2574A9;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n    position: relative;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    line-height: 20px;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px 10px 30px;\r\n    display: block;\r\n    color: #fff;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    text-decoration: none;\r\n    outline: none;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n    background-color: #2574A9;\r\n    position: absolute;\r\n    content: '';\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    transition: width 0.2s ease-in;\r\n    width: 3px;\r\n    z-index: -1;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\r\n    width: 100%;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    background-color: #151515;\r\n    padding: 10px 15px 10px 30px;\r\n  }\r\n  \r\n  .sidebar-navigation[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]::before {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .content-container[_ngcontent-%COMP%] {\r\n    padding-left: 220px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osT0FBTztJQUNQLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOzs7SUFHRSxxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBRU4sOEJBQThCO0lBQzlCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzRBOTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2aWdhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXZpZ2F0aW9uIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2aWdhdGlvbiBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXZpZ2F0aW9uIGxpIC5mYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdmlnYXRpb24gbGkgYTphY3RpdmUsXHJcbiAgLnNpZGViYXItbmF2aWdhdGlvbiBsaSBhOmhvdmVyLFxyXG4gIC5zaWRlYmFyLW5hdmlnYXRpb24gbGkgYTpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXZpZ2F0aW9uIGxpOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzRBOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXZpZ2F0aW9uIGxpOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdmlnYXRpb24gLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdmlnYXRpb24gLmhlYWRlcjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMjBweDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user/user.module */
      "7UCR");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _project_project_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./project/project.module */
      "0k1G");
      /* harmony import */


      var _task_task_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./task/task.module */
      "09GQ");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _common_common_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./common/common-data.service */
      "aL3z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _common_common_data_service__WEBPACK_IMPORTED_MODULE_13__["CommonDataService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_10__["ProjectModule"], _task_task_module__WEBPACK_IMPORTED_MODULE_11__["TaskModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_10__["ProjectModule"], _task_task_module__WEBPACK_IMPORTED_MODULE_11__["TaskModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_10__["ProjectModule"], _task_task_module__WEBPACK_IMPORTED_MODULE_11__["TaskModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _common_common_data_service__WEBPACK_IMPORTED_MODULE_13__["CommonDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aL3z":
    /*!***********************************************!*\
      !*** ./src/app/common/common-data.service.ts ***!
      \***********************************************/

    /*! exports provided: CommonDataService */

    /***/
    function aL3z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonDataService", function () {
        return CommonDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CommonDataService = /*#__PURE__*/function () {
        function CommonDataService(http) {
          _classCallCheck(this, CommonDataService);

          this.http = http;
          this.baseUrl = "http://localhost:3001/users?";
          this.SharingData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.ProjectDataModule = [];
          this.UserDataModule = [];
          this.TaskDataModule = [];
          this.Statuses = [];
          this.AddDummyUsers();
          this.AddDummyProjects();
          this.AddDummyTasks();
          this.AddDummyStatus();
        }

        _createClass(CommonDataService, [{
          key: "getStatuses",
          value: function getStatuses() {
            var url = "http://localhost:3001/statuses";
            return this.http.get(url);
          }
        }, {
          key: "getUsers",
          get: function get() {
            return this.UserDataModule;
          }
        }, {
          key: "getProjects",
          get: function get() {
            return this.ProjectDataModule;
          }
        }, {
          key: "getTasks",
          get: function get() {
            return this.TaskDataModule;
          }
        }, {
          key: "getStatus",
          get: function get() {
            return this.Statuses;
          }
        }, {
          key: "AddUser",
          value: function AddUser(user) {
            var userId = this.UserDataModule[this.UserDataModule.length - 1].id;
            user.id = userId == null ? 0 : userId + 1;
            this.UserDataModule.push(user);
          }
        }, {
          key: "AuthenticateUser",
          value: function AuthenticateUser(userId) {
            var url = this.baseUrl + "email=" + userId;
            return this.http.get(url);
          }
        }, {
          key: "UpdateUser",
          value: function UpdateUser(user) {
            var userIndex = this.UserDataModule.findIndex(function (x) {
              return x.id == user.id;
            });
            this.UserDataModule[userIndex] = user;
          }
        }, {
          key: "DeleteUser",
          value: function DeleteUser(user) {
            var userIndex = this.UserDataModule.indexOf(user);
            this.UserDataModule.splice(userIndex, 1);
          }
        }, {
          key: "AddProject",
          value: function AddProject(project) {
            var today = new Date();
            var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth() + 1) + "-" + today.getUTCDay();
            var projectId = this.ProjectDataModule[this.ProjectDataModule.length - 1].id;
            project.id = projectId == null ? 0 : projectId + 1;
            project.createdOn = dateTime;
            this.ProjectDataModule.push(project);
          }
        }, {
          key: "UpdateProject",
          value: function UpdateProject(project) {
            var projectIndex = this.ProjectDataModule.findIndex(function (x) {
              return x.id == project.id;
            });
            this.ProjectDataModule[projectIndex] = project;
          }
        }, {
          key: "DeleteProject",
          value: function DeleteProject(project) {
            var projectIndex = this.ProjectDataModule.indexOf(project);
            this.ProjectDataModule.splice(projectIndex, 1);
          }
        }, {
          key: "AddTask",
          value: function AddTask(task) {
            var today = new Date();
            var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth() + 1) + "-" + today.getUTCDay();
            var taskId = this.TaskDataModule[this.TaskDataModule.length - 1].id;
            task.id = taskId == null ? 0 : taskId + 1;
            task.createdOn = dateTime;
            this.TaskDataModule.push(task);
          }
        }, {
          key: "UpdateTask",
          value: function UpdateTask(task) {
            var taskIndex = this.TaskDataModule.findIndex(function (x) {
              return x.id == task.id;
            });
            this.TaskDataModule[taskIndex] = task;
          }
        }, {
          key: "DeleteTask",
          value: function DeleteTask(task) {
            var taskIndex = this.TaskDataModule.indexOf(task);
            this.TaskDataModule.splice(taskIndex, 1);
          }
        }, {
          key: "AddDummyUsers",
          value: function AddDummyUsers() {
            var newUser1 = {
              id: 101,
              firstName: 'John',
              lastName: 'wick ',
              email: 'john@outlook.in'
            };
            var newUser2 = {
              id: 102,
              firstName: 'will',
              lastName: 'kass ',
              email: 'will@outlook.in'
            };
            var newUser3 = {
              id: 103,
              firstName: 'timothy',
              lastName: 'v ',
              email: 'kass@outlook.in'
            };
            var newUser4 = {
              id: 104,
              firstName: 'andrew',
              lastName: 'rit ',
              email: 'andrew@outlook.in'
            };
            var newUser5 = {
              id: 105,
              firstName: 'tim',
              lastName: 'paine ',
              email: 'tim@outlook.in'
            };
            this.UserDataModule.push(newUser1);
            this.UserDataModule.push(newUser2);
            this.UserDataModule.push(newUser3);
            this.UserDataModule.push(newUser4);
            this.UserDataModule.push(newUser5);
          }
        }, {
          key: "AddDummyProjects",
          value: function AddDummyProjects() {
            var today = new Date();
            var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + " " + time;
            var newProject1 = {
              id: 1001,
              name: "Branch Visit Tool",
              detail: "Branch Visting Tool for auditing",
              createdOn: dateTime
            };
            this.ProjectDataModule.push(newProject1);
            var newProject2 = {
              id: 1002,
              name: "JTransfer",
              detail: "Transfer request tool for transfer to jaipur",
              createdOn: dateTime
            };
            this.ProjectDataModule.push(newProject2);
            var newProject3 = {
              id: 1003,
              name: "XL-Catlin",
              detail: "Insurance Application for transaction",
              createdOn: dateTime
            };
            this.ProjectDataModule.push(newProject3);
            var newProject4 = {
              id: 1004,
              name: "My Mobile Health",
              detail: "Mobile patch update notification tool",
              createdOn: dateTime
            };
            this.ProjectDataModule.push(newProject4);
            var newProject5 = {
              id: 1005,
              name: "Smarsh Manager",
              detail: "Network Provider communication tool",
              createdOn: dateTime
            };
            this.ProjectDataModule.push(newProject5);
          }
        }, {
          key: "AddDummyTasks",
          value: function AddDummyTasks() {
            var today = new Date();
            var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth() + 1) + "-" + today.getUTCDay();
            var newTask1 = {
              id: 1,
              projectId: 1001,
              detail: "Branch manager should be alerted once visit is registered.",
              createdOn: dateTime,
              status: 1,
              assignedToUser: 102
            };
            this.TaskDataModule.push(newTask1);
            var newTask2 = {
              id: 2,
              projectId: 1003,
              detail: "Jaipur Employee should not be able to apply request for transfer",
              createdOn: dateTime,
              status: 2,
              assignedToUser: 101
            };
            this.TaskDataModule.push(newTask2);
            var newTask3 = {
              id: 3,
              projectId: 1005,
              detail: "It should show fraud calls made from different telecom providers ",
              createdOn: dateTime,
              status: 3,
              assignedToUser: 105
            };
            this.TaskDataModule.push(newTask3);
            var newTask4 = {
              id: 4,
              projectId: 1002,
              detail: "Add functionality to make payment throgh bitcoin ",
              createdOn: dateTime,
              status: 4,
              assignedToUser: 103
            };
            this.TaskDataModule.push(newTask4);
            var newTask5 = {
              id: 5,
              projectId: 1004,
              detail: "Upgrade to ios14.5 ",
              createdOn: dateTime,
              status: 5,
              assignedToUser: 104
            };
            this.TaskDataModule.push(newTask5);
          }
        }, {
          key: "AddDummyStatus",
          value: function AddDummyStatus() {
            this.Statuses.push({
              id: 1,
              status: "Approved"
            });
            this.Statuses.push({
              id: 2,
              status: "Dev Implementation"
            });
            this.Statuses.push({
              id: 3,
              status: "Pending"
            });
            this.Statuses.push({
              id: 4,
              status: "Testing"
            });
            this.Statuses.push({
              id: 5,
              status: "In Business Specification"
            });
          }
        }]);

        return CommonDataService;
      }();

      CommonDataService.ɵfac = function CommonDataService_Factory(t) {
        return new (t || CommonDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CommonDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonDataService,
        factory: CommonDataService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cauy":
    /*!******************************!*\
      !*** ./src/app/user/user.ts ***!
      \******************************/

    /*! exports provided: User */

    /***/
    function cauy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "ifWy":
    /*!************************************!*\
      !*** ./src/app/project/project.ts ***!
      \************************************/

    /*! exports provided: Project */

    /***/
    function ifWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Project", function () {
        return Project;
      });

      var Project = function Project() {
        _classCallCheck(this, Project);
      };
      /***/

    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 8,
        vars: 0,
        consts: [[1, "sidebar-navigation", 2, "width", "95%", "background", "#343b40"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "navbar-dark", "bg-dark", "nav-pills"], ["id", "v-pills-home-tab", "data-toggle", "pill", "href", "#v-pills-home", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", "routerLink", "/home/user", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-messages-tab", "data-toggle", "pill", "href", "#v-pills-messages", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", "routerLink", "/home/project", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-settings-tab", "data-toggle", "pill", "href", "#v-pills-settings", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", "routerLink", "/home/task", "routerLinkActive", "active", 1, "nav-link"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./project/add-project/add-project.component */
      "ClQZ");
      /* harmony import */


      var _project_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./project/project/project.component */
      "5asC");
      /* harmony import */


      var _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./task/add-task/add-task.component */
      "GsQU");
      /* harmony import */


      var _task_task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./task/task/task.component */
      "LYFP");
      /* harmony import */


      var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user/add-user/add-user.component */
      "8nGX");
      /* harmony import */


      var _user_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user/user/user.component */
      "KX+F");

      var routes = [{
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [{
          path: "project",
          component: _project_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"]
        }, {
          path: "AddProject",
          component: _project_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"]
        }, {
          path: "task",
          component: _task_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"]
        }, {
          path: "AddTask",
          component: _task_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"]
        }, {
          path: "user",
          component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"]
        }, {
          path: "AddUser",
          component: _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_common_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/common-data.service */
      "aL3z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UserName or Password is incorrect!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(route, router, _commonDataService) {
          _classCallCheck(this, LoginComponent);

          this.route = route;
          this.router = router;
          this._commonDataService = _commonDataService;
          this.email = "";
          this.password = "";
          this.isError = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "HandleSubmit",
          value: function HandleSubmit(e) {
            var _this21 = this;

            e.preventDefault();

            this._commonDataService.AuthenticateUser(this.email).subscribe(function (user) {
              if (user && user[0].Password == _this21.password) {
                _this21.router.navigate(['home/user']);
              } else {
                _this21.isError = true;
              }
            }, function (error) {
              _this21.isError = true;
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_common_data_service__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 16,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "box", 2, "background-color", "black", "width", "100%", 3, "submit"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], ["name", "email", "type", "text", "name", "email", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["href", "#", 1, "forgot", "text-muted"], ["type", "submit", "name", "submit", "value", "Login"], [1, "col-md-12"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener($event) {
              return ctx.HandleSubmit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please enter your login and password!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_p_9_Template, 2, 0, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: linear-gradient(to right, #b92b27, #1565c0)\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    border: none\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    background: #191919;\r\n    ;\r\n    text-align: center;\r\n    transition: 0.25s;\r\n    margin-top: 100px\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 10px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus {\r\n    width: 300px;\r\n    border-color: #2ecc71\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #2ecc71\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%] {\r\n    text-decoration: underline\r\n}\r\n\r\nul.social-network[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline;\r\n    margin-left: 0 !important;\r\n    padding: 0\r\n}\r\n\r\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 0 5px\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #3B5998\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover {\r\n    background-color: #33ccff\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover {\r\n    background-color: #BD3518\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\n\r\na.socialIcon[_ngcontent-%COMP%]:hover, .socialHoverClass[_ngcontent-%COMP%] {\r\n    color: #44BCDD\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin: 0 auto 0 auto;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 50px;\r\n    text-align: center\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%] {\r\n    transform: rotate(360deg);\r\n    transition: all 0.2s\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transition: all 0.8s;\r\n    transition: all 0.8s\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBOztJQUVJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOzs7SUFHSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEI7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOTJiMjcsICMxNTY1YzApXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzXHJcbn1cclxuXHJcbi5ib3ggaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxufVxyXG5cclxuLmJveCBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuLmJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxXHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxXHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcclxufVxyXG5cclxudWwuc29jaWFsLW5ldHdvcmsge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbnVsLnNvY2lhbC1uZXR3b3JrIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMCA1cHhcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvRmFjZWJvb2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNTk5OFxyXG59XHJcblxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29Ud2l0dGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2NjZmZcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR29vZ2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDM1MThcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvRmFjZWJvb2s6aG92ZXIgaSxcclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvVHdpdHRlcjpob3ZlciBpLFxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29Hb29nbGU6aG92ZXIgaSB7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG5hLnNvY2lhbEljb246aG92ZXIsXHJcbi5zb2NpYWxIb3ZlckNsYXNzIHtcclxuICAgIGNvbG9yOiAjNDRCQ0REXHJcbn1cclxuXHJcbi5zb2NpYWwtY2lyY2xlIGxpIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG5cclxuLnNvY2lhbC1jaXJjbGUgbGkgaSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBsaSBhOmhvdmVyIGksXHJcbi50cmlnZ2VyZWRIb3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnNcclxufVxyXG5cclxuLnNvY2lhbC1jaXJjbGUgaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHNcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _common_common_data_service__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "z2GI":
    /*!******************************!*\
      !*** ./src/app/task/task.ts ***!
      \******************************/

    /*! exports provided: Task */

    /***/
    function z2GI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Task", function () {
        return Task;
      });

      var Task = function Task() {
        _classCallCheck(this, Task);
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map