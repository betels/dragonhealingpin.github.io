(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Vl0R:function(e,t,n){"use strict";n.r(t);var a=n("2kYt"),i=n("PCNd"),o=n("sEIs"),l=n("sN6X"),r=n("pKmL"),c=n("BnVf"),s=n("EMFo"),m=n("nIj0"),b=n("EM62"),d=n("s2Ay"),p=n("29Wa"),u=n("Cd2c"),h=n("PBFl");function g(e,t){if(1&e&&(b.Vb(0,"mat-error"),b.Kc(1),b.Ub()),2&e){const e=b.hc();b.Bb(1),b.Lc(e.getErrorMessage())}}const f=[{path:"",component:(()=>{class e{constructor(e,t){this.store=e,this.translateService=t,this.email=new m.d("",[m.t.required,m.t.email]),this.routeAnimationsElements=r.e,this.themes=[{value:"DEFAULT-THEME",label:"blue"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"en"},{value:"de",label:"de"},{value:"sk",label:"sk"},{value:"fr",label:"fr"},{value:"es",label:"es"},{value:"pt-br",label:"pt-br"},{value:"zh-cn",label:"zh-cn"},{value:"he",label:"he"}]}getErrorMessage(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}ngOnInit(){this.settings$=this.store.pipe(Object(l.t)(s.d))}onLanguageSelect({value:e}){this.store.dispatch(Object(c.f)({language:e}))}onThemeSelect({value:e}){this.store.dispatch(Object(c.h)({theme:e}))}onAutoNightModeToggle({checked:e}){this.store.dispatch(Object(c.d)({autoNightMode:e}))}onStickyHeaderToggle({checked:e}){this.store.dispatch(Object(c.g)({stickyHeader:e}))}onPageAnimationsToggle({checked:e}){this.store.dispatch(Object(c.b)({pageAnimations:e}))}onElementsAnimationsToggle({checked:e}){this.store.dispatch(Object(c.a)({elementsAnimations:e}))}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(l.h),b.Qb(d.d))},e.\u0275cmp=b.Kb({type:e,selectors:[["anms-settings"]],decls:26,vars:2,consts:[[1,"background"],[1,"gradient"],[1,"row"],[1,"col-md-3"],[1,"col-md-6"],[1,"example-form"],["appearance","fill",1,"example-full-width"],["matInput","","placeholder","First name","value","First name"],["matInput","","placeholder","wanheab_pin@gmx.ch","required","",3,"formControl"],[4,"ngIf"],[1,"example-full-width"],["matInput","","type","datetime-local"],["matInput","","placeholder","Description"],["mat-raised-button","","type","submit","color","basic"]],template:function(e,t){1&e&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Rb(3,"div",3),b.Vb(4,"div",4),b.Vb(5,"form",5),b.Vb(6,"mat-form-field",6),b.Vb(7,"mat-label"),b.Kc(8,"First name"),b.Ub(),b.Rb(9,"input",7),b.Ub(),b.Vb(10,"mat-form-field",6),b.Vb(11,"mat-label"),b.Kc(12,"Enter your email"),b.Ub(),b.Rb(13,"input",8),b.Ic(14,g,2,1,"mat-error",9),b.Ub(),b.Vb(15,"mat-label"),b.Kc(16,"Choose date & Time"),b.Ub(),b.Vb(17,"mat-form-field",10),b.Rb(18,"input",11),b.Ub(),b.Vb(19,"mat-form-field",6),b.Vb(20,"mat-label"),b.Kc(21,"Leave a comment"),b.Ub(),b.Rb(22,"textarea",12),b.Ub(),b.Vb(23,"button",13),b.Kc(24,"Book your appointment"),b.Ub(),b.Ub(),b.Ub(),b.Rb(25,"div",3),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Bb(13),b.nc("formControl",t.email),b.Bb(1),b.nc("ngIf",t.email.invalid))},directives:[m.u,m.o,m.p,p.b,p.f,u.b,m.b,m.s,m.n,m.e,a.k,h.a,p.a],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex;height:65.5px;-webkit-box-align:center;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}"],changeDetection:0}),e})(),data:{title:"anms.menu.settings"}}];let v=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[o.k.forChild(f)],o.k]}),e})();n.d(t,"SettingsModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[a.c,i.a,v]]}),e})()}}]);