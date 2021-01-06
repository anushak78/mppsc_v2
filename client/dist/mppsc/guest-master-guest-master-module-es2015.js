(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guest-master-guest-master-module"],{

/***/ "./src/app/apiUrls.ts":
/*!****************************!*\
  !*** ./src/app/apiUrls.ts ***!
  \****************************/
/*! exports provided: getApiUserMastercollectionEndPoint, getApiAddUserMastercollectionEndPoint, getApiBoardMastercollectionEndPoint, getApiAddBoardMastercollectionEndPoint, getApiDeleteUserMastercollectionEndPoint, getApiDetailsUserMastercollectionEndPoint, getApiUpdateUserMastercollectionEndPoint, getApiGuestUserMastercollectionEndPoint, getApiAddGuestUserMastercollectionEndPoint, getApiEditGuestUserMastercollectionEndPoint, getApiAddGuestUserMasterDatescollectionEndPoint, getApiEditGuestUserMasterDatescollectionEndPoint, getApiDetailsGuestUserMastercollectionEndPoint, getApiDeleteGuestUserMastercollectionEndPoint, getApiDetailsBoardUserMastercollectionEndPoint, getApiDeleteBoardUserMastercollectionEndPoint, getApiEditBoardMastercollectionEndPoint, getApiAddInterviewMasterEndPoint, getApiInterviewMasterEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiUserMastercollectionEndPoint", function() { return getApiUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAddUserMastercollectionEndPoint", function() { return getApiAddUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiBoardMastercollectionEndPoint", function() { return getApiBoardMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAddBoardMastercollectionEndPoint", function() { return getApiAddBoardMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDeleteUserMastercollectionEndPoint", function() { return getApiDeleteUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDetailsUserMastercollectionEndPoint", function() { return getApiDetailsUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiUpdateUserMastercollectionEndPoint", function() { return getApiUpdateUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiGuestUserMastercollectionEndPoint", function() { return getApiGuestUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAddGuestUserMastercollectionEndPoint", function() { return getApiAddGuestUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiEditGuestUserMastercollectionEndPoint", function() { return getApiEditGuestUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAddGuestUserMasterDatescollectionEndPoint", function() { return getApiAddGuestUserMasterDatescollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiEditGuestUserMasterDatescollectionEndPoint", function() { return getApiEditGuestUserMasterDatescollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDetailsGuestUserMastercollectionEndPoint", function() { return getApiDetailsGuestUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDeleteGuestUserMastercollectionEndPoint", function() { return getApiDeleteGuestUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDetailsBoardUserMastercollectionEndPoint", function() { return getApiDetailsBoardUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiDeleteBoardUserMastercollectionEndPoint", function() { return getApiDeleteBoardUserMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiEditBoardMastercollectionEndPoint", function() { return getApiEditBoardMastercollectionEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiAddInterviewMasterEndPoint", function() { return getApiAddInterviewMasterEndPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiInterviewMasterEndPoint", function() { return getApiInterviewMasterEndPoint; });
const getApiUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/user_list';
const getApiAddUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_user';
const getApiBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/board_list';
const getApiAddBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_board';
const getApiDeleteUserMastercollectionEndPoint = (userId) => {
    return `http://0.0.0.0:6543/ui/delete_user/${userId}`;
};
const getApiDetailsUserMastercollectionEndPoint = (userId) => {
    return `http://0.0.0.0:6543/ui/user_details/${userId}`;
};
const getApiUpdateUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_user';
const getApiGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/guest_user_list';
const getApiAddGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/add_guest_user';
const getApiEditGuestUserMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_guest_user';
const getApiAddGuestUserMasterDatescollectionEndPoint = 'http://0.0.0.0:6543/ui/add_guest_user_dates';
const getApiEditGuestUserMasterDatescollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_guest_user_dates';
const getApiDetailsGuestUserMastercollectionEndPoint = (userId) => {
    return `http://0.0.0.0:6543/ui/guest_user_details/${userId}`;
};
const getApiDeleteGuestUserMastercollectionEndPoint = (userId) => {
    return `http://0.0.0.0:6543/ui/add_delete_user/${userId}`;
};
const getApiDetailsBoardUserMastercollectionEndPoint = (boardId) => {
    return `http://0.0.0.0:6543/ui/board_details/${boardId}`;
};
const getApiDeleteBoardUserMastercollectionEndPoint = (boardId) => {
    return `http://0.0.0.0:6543/ui/delete_board/${boardId}`;
};
const getApiEditBoardMastercollectionEndPoint = 'http://0.0.0.0:6543/ui/edit_board';
const getApiAddInterviewMasterEndPoint = 'http://0.0.0.0:6543/ui/add_interview';
const getApiInterviewMasterEndPoint = 'http://0.0.0.0:6543/ui/interview_list';


/***/ }),

/***/ "./src/app/guest-master/add-guest-master/add-guest-master.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/guest-master/add-guest-master/add-guest-master.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddGuestMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGuestMasterComponent", function() { return AddGuestMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_GuestUserMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/GuestUserMaster */ "./src/app/guest-master/model/GuestUserMaster.ts");
/* harmony import */ var _model_DatesRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DatesRange */ "./src/app/guest-master/model/DatesRange.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guest-user-service.service */ "./src/app/guest-master/guest-user-service.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../dialogs/message/message.component */ "./src/app/dialogs/message/message.component.ts");
/* harmony import */ var _dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dialogs/confirm/confirm.component */ "./src/app/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");





















const _c0 = ["confirmDlg"];
const _c1 = ["messageDlg"];
function AddGuestMasterComponent_div_50_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_div_50_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.addDateItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.flagDates);
} }
function AddGuestMasterComponent_div_50_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_div_50_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.deleteDateItem(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r10.flagDates);
} }
function AddGuestMasterComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "From date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_div_50_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r5 = ctx.$implicit; return item_r5.fromDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-datepicker", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "To date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_div_50_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r5 = ctx.$implicit; return item_r5.toDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-datepicker", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddGuestMasterComponent_div_50_div_18_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddGuestMasterComponent_div_50_div_19_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r7)("ngModel", item_r5.fromDate)("disabled", ctx_r1.flagDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8)("ngModel", item_r5.toDate)("disabled", ctx_r1.flagDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r6 == ctx_r1.dateList.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r6 != ctx_r1.dateList.length - 1);
} }
function AddGuestMasterComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r20.fromDate, " to ", item_r20.toDate, " ");
} }
function AddGuestMasterComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddGuestMasterComponent_div_54_div_1_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_div_54_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.sendEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Send Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.dateList);
} }
class AddGuestMasterComponent {
    constructor(router, route, guestUserService) {
        this.router = router;
        this.route = route;
        this.guestUserService = guestUserService;
        this.tabIndex = 1;
        this.dateList = [];
        this.dateRange = new _model_DatesRange__WEBPACK_IMPORTED_MODULE_3__["DatesRange"]();
        this.flagDates = false;
        this.guestData = new _model_GuestUserMaster__WEBPACK_IMPORTED_MODULE_2__["GuestUserMaster"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tabIndex = 0;
            if (this.route.snapshot.params.userId !== undefined) {
                this.activity = 'Edit';
                this.userId = this.route.snapshot.params.userId;
                yield this.loadUserDetails();
            }
            else {
                this.activity = 'Add';
                this.dateList.push(this.dateRange);
            }
        });
    }
    loadUserDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rel = yield this.guestUserService.getUserDetails(this.route.snapshot.params.userId);
            if (rel) {
                this.guestData = this.guestUserService.getGuestUserDetailsData;
                this.dateList = this.guestData.dates;
                if (this.dateList.length === 0) {
                    this.addDateItem();
                }
            }
            else {
                this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
            }
        });
    }
    gotoPage(pageName) {
        this.router.navigate([pageName]);
    }
    onNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let rel;
            if (this.activity === 'Edit') {
                rel = yield this.guestUserService.editGuestUser(this.guestData);
            }
            else {
                rel = yield this.guestUserService.addGuestUser(this.guestData);
            }
            if (!rel) {
                this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
            }
            else {
                this.tabIndex = 1;
            }
        });
    }
    addDateItem() {
        this.dateRange = new _model_DatesRange__WEBPACK_IMPORTED_MODULE_3__["DatesRange"]();
        this.dateList.push(this.dateRange);
        console.log(this.dateList);
    }
    deleteDateItem(id) {
        this.dateList.splice(id - 1, 1);
    }
    addDates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.dateList);
            let relDates;
            if (this.activity === 'Edit') {
                relDates = yield this.guestUserService.editGuestUserDates(this.dateList, this.userId);
            }
            else {
                relDates = yield this.guestUserService.addGuestUserDates(this.dateList);
            }
            if (!relDates) {
                this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
            }
            else {
                // this.flagDates = true;
                this.gotoPage('guest-users');
            }
        });
    }
    sendEmail() {
        this.messageDlg.openDialog('Email Sent!!!');
    }
}
AddGuestMasterComponent.ɵfac = function AddGuestMasterComponent_Factory(t) { return new (t || AddGuestMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__["GuestUserServiceService"])); };
AddGuestMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddGuestMasterComponent, selectors: [["app-add-guest-master"]], viewQuery: function AddGuestMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmDlg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageDlg = _t.first);
    } }, decls: 59, vars: 17, consts: [[1, "box-container"], [1, "grid-2"], [1, "mat-h2"], [1, "right"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "10px", 3, "click"], [3, "selectedIndex", "selectedIndexChange"], ["label", "Step 1"], [2, "margin-top", "10px"], [3, "ngSubmit"], ["f", "ngForm"], [1, "center"], [1, "field"], ["name", "title", 3, "ngModel", "ngModelChange"], [3, "value"], ["matInput", "", "type", "text", "name", "name", "placeholder", "Enter Name", "maxlength", "100", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "email", "maxlength", "100", "placeholder", "Enter Email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "phone_no", "maxlength", "10", "placeholder", "Enter Phone No.", "required", "", 3, "ngModel", "ngModelChange"], ["name", "status", 3, "ngModel", "ngModelChange"], [1, "margin-left", 3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["label", "Step 2"], [1, "box-container", 2, "margin-top", "10px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["messageDlg", ""], ["confirmDlg", ""], [1, "grid-3", 2, "width", "50%"], ["matInput", "", 3, "matDatepicker", "ngModel", "disabled", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["topicker", ""], ["mat-mini-fab", "", "color", "default", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddGuestMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_Template_button_click_6_listener() { return ctx.gotoPage("guest-users"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedIndexChange", function AddGuestMasterComponent_Template_mat_tab_group_selectedIndexChange_10_listener($event) { return ctx.tabIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddGuestMasterComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); return _r0.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Select Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.guestData.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Mr. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Mrs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Miss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Dr. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_Template_input_ngModelChange_32_listener($event) { return ctx.guestData.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_Template_input_ngModelChange_35_listener($event) { return ctx.guestData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_Template_input_ngModelChange_38_listener($event) { return ctx.guestData.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-radio-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddGuestMasterComponent_Template_mat_radio_group_ngModelChange_40_listener($event) { return ctx.guestData.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Inactive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_Template_button_click_46_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AddGuestMasterComponent_div_50_Template, 20, 10, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGuestMasterComponent_Template_button_click_52_listener() { return ctx.addDates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AddGuestMasterComponent_div_54_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "app-message-dialog", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "app-confirm-dialog", null, 25);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.activity, " Guest User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.guestData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.guestData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.guestData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.guestData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.guestData.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.flagDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flagDates);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageDialogComponent"], _dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogComponent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"]], styles: [".box-container[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  padding: 5px 10px 10px 10px;\n}\n.box-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.box-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL21wcHNjL21wcHNjX25ldy9jbGllbnQvc3JjL2FwcC9ndWVzdC1tYXN0ZXIvYWRkLWd1ZXN0LW1hc3Rlci9hZGQtZ3Vlc3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ndWVzdC1tYXN0ZXIvYWRkLWd1ZXN0LW1hc3Rlci9hZGQtZ3Vlc3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNBRjtBREVFO0VBQ0UsVUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0FDREo7QURPRTtFQUNFLFdBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0LW1hc3Rlci9hZGQtZ3Vlc3QtbWFzdGVyL2FkZC1ndWVzdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIC8vbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5cbi5maWVsZCB7XG4gIG1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIuYm94LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG59XG4uYm94LWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA0MCU7XG59XG4uYm94LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddGuestMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-guest-master',
                templateUrl: './add-guest-master.component.html',
                styleUrls: ['./add-guest-master.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__["GuestUserServiceService"] }]; }, { confirmDlg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['confirmDlg', { static: false }]
        }], messageDlg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['messageDlg', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/guest-master/guest-master-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/guest-master/guest-master-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GuestMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestMasterRoutingModule", function() { return GuestMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guest_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-master.component */ "./src/app/guest-master/guest-master.component.ts");
/* harmony import */ var _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-guest-master/add-guest-master.component */ "./src/app/guest-master/add-guest-master/add-guest-master.component.ts");






const routes = [
    {
        path: '',
        component: _guest_master_component__WEBPACK_IMPORTED_MODULE_2__["GuestMasterComponent"],
    },
    {
        path: 'add-guest-user',
        component: _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__["AddGuestMasterComponent"]
    },
    {
        path: 'add-guest-user/:userId',
        component: _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__["AddGuestMasterComponent"]
    }
];
class GuestMasterRoutingModule {
}
GuestMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestMasterRoutingModule });
GuestMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestMasterRoutingModule_Factory(t) { return new (t || GuestMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guest-master/guest-master.component.ts":
/*!********************************************************!*\
  !*** ./src/app/guest-master/guest-master.component.ts ***!
  \********************************************************/
/*! exports provided: GuestMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestMasterComponent", function() { return GuestMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guest-user-service.service */ "./src/app/guest-master/guest-user-service.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/message/message.component */ "./src/app/dialogs/message/message.component.ts");
/* harmony import */ var _dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/confirm/confirm.component */ "./src/app/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












const _c0 = ["confirmDlg"];
const _c1 = ["messageDlg"];
function GuestMasterComponent_ng_container_10_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuestMasterComponent_ng_container_10_div_11_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const v_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.updateUser(v_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuestMasterComponent_ng_container_10_div_11_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const v_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.openDeleteGuestUser(v_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.status[v_r5.status]);
} }
function GuestMasterComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Phone No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GuestMasterComponent_ng_container_10_div_11_Template, 16, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function GuestMasterComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Currently, there are no guest users defined ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class GuestMasterComponent {
    constructor(router, dialog, guestUserService) {
        this.router = router;
        this.dialog = dialog;
        this.guestUserService = guestUserService;
        this.status = _constant__WEBPACK_IMPORTED_MODULE_2__["Status"];
        this.users = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadData();
        });
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let rel;
            rel = yield this.guestUserService.fetchGuestUserList();
            if (rel) {
                this.users = this.guestUserService.getGuestUserList;
                console.log('this.users');
                console.log(this.users);
            }
        });
    }
    gotoPage(pageName) {
        this.router.navigate([pageName]);
    }
    updateUser(id) {
        this.router.navigate([`guest-users/add-guest-user/${id}`]);
    }
    openDeleteGuestUser(u) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.deleteUserId = u.id;
            this.deleteUserName = u.name;
            this.confirmDlg.openDialog('Delete guest user', `Confirmation 1: Do you really want to delete guest user <b>${this.deleteUserName}</b>?`, yield this.onDeleteGuestUser1.bind(this));
        });
    }
    onDeleteGuestUser1(flag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (flag) {
                this.confirmDlg.openDialog('Delete guest user', `Confirmation 2: Do you really want to delete guest user <b>${this.deleteUserName}</b>?`, yield this.onDeleteGuestUser2.bind(this));
            }
        });
    }
    onDeleteGuestUser2(flag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (flag) {
                this.confirmDlg.openDialog('Delete guest user', `Confirmation 3: Do you really want to delete guest user <b>${this.deleteUserName}</b>?`, yield this.onDeleteUser.bind(this));
            }
        });
    }
    onDeleteUser(flag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (flag) {
                const rel = yield this.guestUserService.deleteGuestUser(this.deleteUserId);
                if (rel) {
                    this.loadData();
                }
                else {
                    this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
                }
            }
        });
    }
}
GuestMasterComponent.ɵfac = function GuestMasterComponent_Factory(t) { return new (t || GuestMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__["GuestUserServiceService"])); };
GuestMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuestMasterComponent, selectors: [["app-guest-master"]], viewQuery: function GuestMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmDlg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageDlg = _t.first);
    } }, decls: 16, vars: 2, consts: [[1, "box-container"], [1, "grid-2"], [1, "mat-h2"], [1, "right"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "10px", 3, "click"], [4, "ngIf"], ["messageDlg", ""], ["confirmDlg", ""], [1, "grid-header", "grid"], [1, "sub-grid", "bold-head"], ["class", "grid", 4, "ngFor", "ngForOf"], [1, "grid"], ["matTooltip", "Details", 1, "sub-grid"], [1, "icon-column"], ["matTooltip", "Edit", 3, "click"], ["matTooltip", "Delete", 3, "click"], [1, "no-data"]], template: function GuestMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Guest User Master List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuestMasterComponent_Template_button_click_5_listener() { return ctx.gotoPage("guest-users/add-guest-user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Guest User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GuestMasterComponent_Template_button_click_7_listener() { return ctx.gotoPage("admin-dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GuestMasterComponent_ng_container_10_Template, 12, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GuestMasterComponent_ng_container_11_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-message-dialog", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-confirm-dialog", null, 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length == 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageDialogComponent"], _dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".grid-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cecece;\n}\n\n.grid-header[_ngcontent-%COMP%]   .sub-grid[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 60px 60px;\n  border-bottom: 1px solid #cecece;\n}\n\n.sub-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoYS9EZXNrdG9wL21wcHNjL21wcHNjX25ldy9jbGllbnQvc3JjL2FwcC9ndWVzdC1tYXN0ZXIvZ3Vlc3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ndWVzdC1tYXN0ZXIvZ3Vlc3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FDQUY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9ndWVzdC1tYXN0ZXIvZ3Vlc3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ3JpZC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLmdyaWQtaGVhZGVyIC5zdWItZ3JpZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2MHB4IDYwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG5cbi5zdWItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIiwiLmdyaWQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5ncmlkLWhlYWRlciAuc3ViLWdyaWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNjBweCA2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLnN1Yi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuestMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-guest-master',
                templateUrl: './guest-master.component.html',
                styleUrls: ['./guest-master.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _guest_user_service_service__WEBPACK_IMPORTED_MODULE_5__["GuestUserServiceService"] }]; }, { confirmDlg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['confirmDlg', { static: false }]
        }], messageDlg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['messageDlg', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/guest-master/guest-master.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/guest-master/guest-master.module.ts ***!
  \*****************************************************/
/*! exports provided: GuestMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestMasterModule", function() { return GuestMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _guest_master_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-master-routing.module */ "./src/app/guest-master/guest-master-routing.module.ts");
/* harmony import */ var _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-guest-master/add-guest-master.component */ "./src/app/guest-master/add-guest-master/add-guest-master.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _guest_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guest-master.component */ "./src/app/guest-master/guest-master.component.ts");

















class GuestMasterModule {
}
GuestMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestMasterModule });
GuestMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestMasterModule_Factory(t) { return new (t || GuestMasterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _guest_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestMasterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestMasterModule, { declarations: [_guest_master_component__WEBPACK_IMPORTED_MODULE_15__["GuestMasterComponent"],
        _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__["AddGuestMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _guest_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestMasterRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _guest_master_component__WEBPACK_IMPORTED_MODULE_15__["GuestMasterComponent"],
                    _add_guest_master_add_guest_master_component__WEBPACK_IMPORTED_MODULE_3__["AddGuestMasterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _guest_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestMasterRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guest-master/guest-user-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/guest-master/guest-user-service.service.ts ***!
  \************************************************************/
/*! exports provided: GuestUserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestUserServiceService", function() { return GuestUserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apiUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiUrls */ "./src/app/apiUrls.ts");
/* harmony import */ var _model_GuestUserMaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/GuestUserMaster */ "./src/app/guest-master/model/GuestUserMaster.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class GuestUserServiceService {
    constructor(http) {
        this.http = http;
        this.httpErrorMessage = '';
        this.users = [];
    }
    get getErrorMessage() {
        return this.httpErrorMessage;
    }
    get getGuestUserList() {
        return this.users;
    }
    get getGuestUserDetailsData() {
        return this.guestUsersDetails;
    }
    fetchGuestUserList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiGuestUserMastercollectionEndPoint"]).toPromise()
                .then((response) => {
                const result = response['data'];
                console.log(result);
                this.users = [];
                for (const u of result) {
                    this.users.push(_model_GuestUserMaster__WEBPACK_IMPORTED_MODULE_3__["GuestUserMaster"].fromJson(u));
                }
                return true;
            }).catch(error => this.errorHandler(error));
        });
    }
    addGuestUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiAddGuestUserMastercollectionEndPoint"], user.toJSON()).toPromise()
                .then((response) => {
                console.log(response);
                this.httpErrorMessage = response['message'];
                return true;
            }).catch((error) => this);
        });
    }
    editGuestUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiEditGuestUserMastercollectionEndPoint"], user.toJSON()).toPromise()
                .then((response) => {
                console.log(response);
                this.httpErrorMessage = response['message'];
                return true;
            }).catch((error) => this);
        });
    }
    addGuestUserDates(dateList) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(dateList);
            const dateArray = [];
            for (const d of dateList) {
                console.log(d);
                dateArray.push(d.toJSON());
                console.log(d.toJSON());
            }
            console.log(dateArray);
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiAddGuestUserMasterDatescollectionEndPoint"], { dates: dateArray }).toPromise()
                .then((response) => {
                console.log(response);
                this.httpErrorMessage = response['message'];
                return true;
            }).catch((error) => this.errorHandler(error));
        });
    }
    editGuestUserDates(dateList, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(dateList);
            const dateArray = [];
            for (const d of dateList) {
                console.log(d);
                dateArray.push(d.toJSON());
                console.log(d.toJSON());
            }
            console.log(dateArray);
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiEditGuestUserMasterDatescollectionEndPoint"], {
                id: userId,
                dates: dateArray
            }).toPromise()
                .then((response) => {
                console.log(response);
                this.httpErrorMessage = response['message'];
                return true;
            }).catch((error) => this.errorHandler(error));
        });
    }
    getUserDetails(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiDetailsGuestUserMastercollectionEndPoint"](userId), {}).toPromise()
                .then((response) => {
                this.guestUsersDetails = _model_GuestUserMaster__WEBPACK_IMPORTED_MODULE_3__["GuestUserMaster"].fromJson(response['data']);
                console.log(this.guestUsersDetails);
                return true;
            }).catch(error => this.errorHandler(error));
        });
    }
    deleteGuestUser(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_apiUrls__WEBPACK_IMPORTED_MODULE_2__["getApiDeleteGuestUserMastercollectionEndPoint"](userId), {}).toPromise()
                .then((response) => {
                this.httpErrorMessage = ' Guest User deleted';
                return true;
            }).catch(error => this.errorHandler(error));
        });
    }
    errorHandler(error) {
        if (error.status === 400) {
            this.httpErrorMessage = 'Server Error';
        }
        else if (error.status === 403) {
            this.httpErrorMessage = 'Forbidden!!';
        }
        else {
            this.httpErrorMessage = 'Server Error!!';
        }
        return false;
    }
}
GuestUserServiceService.ɵfac = function GuestUserServiceService_Factory(t) { return new (t || GuestUserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GuestUserServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuestUserServiceService, factory: GuestUserServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuestUserServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guest-master/model/DatesRange.ts":
/*!**************************************************!*\
  !*** ./src/app/guest-master/model/DatesRange.ts ***!
  \**************************************************/
/*! exports provided: DatesRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesRange", function() { return DatesRange; });
class DatesRange {
    static fromJson(data) {
        const u = new DatesRange();
        u.id = data['id'];
        u.fromDate = new Date(data['from_date']);
        u.toDate = new Date(data['to_date']);
        return u;
    }
    toJSON() {
        const data = new Map();
        data['id'] = this.id;
        data['from_date'] = this.fromDate;
        data['to_date'] = this.toDate;
        return data;
    }
}


/***/ }),

/***/ "./src/app/guest-master/model/GuestUserMaster.ts":
/*!*******************************************************!*\
  !*** ./src/app/guest-master/model/GuestUserMaster.ts ***!
  \*******************************************************/
/*! exports provided: GuestUserMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestUserMaster", function() { return GuestUserMaster; });
/* harmony import */ var _DatesRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatesRange */ "./src/app/guest-master/model/DatesRange.ts");

class GuestUserMaster {
    constructor() {
        this.status = 1;
        this.dates = [];
    }
    static fromJson(data) {
        const u = new GuestUserMaster();
        u.id = data['id'];
        u.name = data['name'];
        u.title = data['title'];
        u.email = data['email'];
        u.phone = data['phone_no'];
        u.status = data['status'];
        for (const l of data['dates']) {
            u.dates.push(_DatesRange__WEBPACK_IMPORTED_MODULE_0__["DatesRange"].fromJson(l));
        }
        return u;
    }
    toJSON() {
        const data = new Map();
        data['id'] = this.id;
        data['name'] = this.name;
        data['status'] = this.status;
        data['title'] = this.title;
        data['email'] = this.email;
        data['phone_no'] = this.phone;
        return data;
    }
}


/***/ })

}]);
//# sourceMappingURL=guest-master-guest-master-module-es2015.js.map