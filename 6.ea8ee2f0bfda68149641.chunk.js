webpackJsonp([6],{WgO5:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var _=u("LMZF"),e=function(){},t=u("911F"),o=u("hzkV"),a=u("oh53"),c=u("697t"),i=u("c4k3"),r=u("zQfh"),s=u("v/qN"),d=u("Z7w9"),h=u("8jO+"),p=u("Un6q"),f=u("VziQ"),m=u("abgB"),b=u("/z6U"),g=u("zd7R"),k=u("UtJZ"),x=u("RyBE"),w=u("xsaB"),y=u("We5W"),C=function(){function l(l,n){this.docs=l,this.titleService=n,this.code={options:"import { ShareButtonsModule } from '@ngx-share/buttons';\nimport { ShareButtonsOptions } from '@ngx-share/core';\n\nconst options: ShareButtonsOptions = {\n  include: ['facebook', 'twitter', 'google'],\n  theme: 'modern-light',\n  gaTracking: true,\n  twitterAccount: 'username'\n}\n\n@NgModule({\n  imports: [\n    ShareButtonsModule.forRoot({ options: options })\n  ]\n})",metaButtons:"import { ShareButtonsModule } from '@ngx-share/buttons';\nimport { IShareButtons } from '@ngx-share/core';\n\nconst prop: IShareButtons = {\n  facebook: {\n    icon: 'fa fa-facebook-official'\n  },\n  twitter: {\n    icon: 'fa fa-twitter-square',\n    text: 'Tweet'\n  },\n  // and so on...\n};\n\n@NgModule({\n  imports: [\n    HttpClientModule,\n    ShareButtonsModule.forRoot({ prop: prop })\n  ]\n})"},this.displayedColumns=["name","description"]}return l.prototype.ngOnInit=function(){this.titleService.setTitle("Global options");var l=new w.b(this.docs.getOptionsApi());this.dataSource=new w.a(l)},l}(),j=_._3({encapsulation:0,styles:[[""]],data:{}});function S(l){return _._29(0,[(l()(),_._5(0,0,null,null,3,"mat-header-cell",[["class","mat-header-cell"],["fxFlex","130px"],["role","columnheader"]],null,null,null,null,null)),_._4(1,16384,null,0,c.d,[i.d,_.k],null,null),_._4(2,737280,null,0,r.e,[r.l,_.k,_.C,[3,r.h],[3,r.i]],{flex:[0,"flex"]},null),(l()(),_._27(-1,null,[" Name"]))],function(l,n){l(n,2,0,"130px")},null)}function v(l){return _._29(0,[(l()(),_._5(0,0,null,null,6,"mat-cell",[["class","mat-cell"],["fxFlex","130px"],["role","gridcell"]],null,null,null,null,null)),_._4(1,16384,null,0,c.a,[i.d,_.k],null,null),_._4(2,737280,null,0,r.e,[r.l,_.k,_.C,[3,r.h],[3,r.i]],{flex:[0,"flex"]},null),(l()(),_._27(-1,null,["\n            "])),(l()(),_._5(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),_._27(5,null,["",""])),(l()(),_._27(-1,null,["\n          "]))],function(l,n){l(n,2,0,"130px")},function(l,n){l(n,5,0,n.context.$implicit.name)})}function B(l){return _._29(0,[(l()(),_._5(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),_._4(1,16384,null,0,c.d,[i.d,_.k],null,null),(l()(),_._27(-1,null,[" Description"]))],null,null)}function M(l){return _._29(0,[(l()(),_._5(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),_._4(1,16384,null,0,c.a,[i.d,_.k],null,null),(l()(),_._27(2,null,[" ",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.description)})}function O(l){return _._29(0,[(l()(),_._5(0,0,null,null,1,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,s.d,s.a)),_._4(1,49152,null,0,c.f,[],null,null)],null,null)}function L(l){return _._29(0,[(l()(),_._5(0,0,null,null,1,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,s.e,s.b)),_._4(1,49152,null,0,c.h,[],null,null)],null,null)}function H(l){return _._29(2,[(l()(),_._5(0,0,null,null,103,"ng-scrollbar",[],null,null,null,d.b,d.a)),_._4(1,4374528,null,0,h.a,[_.y,_.C,p.d],{autoHide:[0,"autoHide"]},null),(l()(),_._27(-1,0,["\n  "])),(l()(),_._5(3,0,null,0,5,"header",[],null,null,null,f.b,f.a)),_._4(4,49152,null,0,m.a,[],null,null),(l()(),_._27(-1,0,["\n    "])),(l()(),_._5(6,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),_._27(-1,null,["Global Options"])),(l()(),_._27(-1,0,["\n  "])),(l()(),_._27(-1,0,["\n\n  "])),(l()(),_._5(10,0,null,0,89,"div",[["class","page-content container"]],null,null,null,null,null)),(l()(),_._27(-1,null,["\n\n    "])),(l()(),_._5(12,0,null,null,17,"section",[],null,null,null,null,null)),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(14,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),_._27(-1,null,["Setting custom options"])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._27(-1,null,["To use custom options that applies on all share buttons components across your app, pass your config in the root module where the library is imported."])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(20,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),_._27(-1,null,["\n        "])),(l()(),_._5(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),_._27(-1,null,["Example"])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(26,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),_._5(27,0,null,null,1,"code",[["highlight",""]],[[2,"hljs",null]],null,null,null,null)),_._4(28,212992,null,0,b.a,[_.k,_.C,b.d],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(l()(),_._27(-1,null,["\n    "])),(l()(),_._27(-1,null,["\n\n    "])),(l()(),_._5(31,0,null,null,52,"section",[["fxHide.lt-md","true"],["fxShow",""]],null,null,null,null,null)),_._4(32,737280,null,0,r.p,[r.l,[8,null],_.k,_.C],{show:[0,"show"],hideLtMd:[1,"hideLtMd"]},null),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),_._27(-1,null,["Available options:"])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(37,0,null,null,45,"mat-table",[["class","mat-table"]],null,null,null,s.f,s.c)),_._4(38,3391488,null,3,c.j,[_.r,_.h,_.k,[8,null]],{dataSource:[0,"dataSource"]},null),_._25(603979776,1,{_columnDefs:1}),_._25(335544320,2,{_headerDef:0}),_._25(603979776,3,{_rowDefs:1}),(l()(),_._27(-1,null,["\n\n        "])),(l()(),_._27(-1,null,["\n        "])),(l()(),_._5(44,0,null,null,13,null,null,null,null,null,null,null)),_._4(45,16384,null,2,c.c,[],{name:[0,"name"]},null),_._25(335544320,4,{cell:0}),_._25(335544320,5,{headerCell:0}),_._24(2048,[[1,4]],i.d,null,[c.c]),(l()(),_._27(-1,null,["\n          "])),(l()(),_._0(0,null,null,2,null,S)),_._4(51,16384,null,0,c.e,[_.L],null,null),_._24(2048,[[5,4]],i.f,null,[c.e]),(l()(),_._27(-1,null,["\n          "])),(l()(),_._0(0,null,null,2,null,v)),_._4(55,16384,null,0,c.b,[_.L],null,null),_._24(2048,[[4,4]],i.b,null,[c.b]),(l()(),_._27(-1,null,["\n        "])),(l()(),_._27(-1,null,["\n\n        "])),(l()(),_._27(-1,null,["\n        "])),(l()(),_._5(60,0,null,null,13,null,null,null,null,null,null,null)),_._4(61,16384,null,2,c.c,[],{name:[0,"name"]},null),_._25(335544320,6,{cell:0}),_._25(335544320,7,{headerCell:0}),_._24(2048,[[1,4]],i.d,null,[c.c]),(l()(),_._27(-1,null,["\n          "])),(l()(),_._0(0,null,null,2,null,B)),_._4(67,16384,null,0,c.e,[_.L],null,null),_._24(2048,[[7,4]],i.f,null,[c.e]),(l()(),_._27(-1,null,["\n          "])),(l()(),_._0(0,null,null,2,null,M)),_._4(71,16384,null,0,c.b,[_.L],null,null),_._24(2048,[[6,4]],i.b,null,[c.b]),(l()(),_._27(-1,null,["\n        "])),(l()(),_._27(-1,null,["\n\n        "])),(l()(),_._0(0,null,null,2,null,O)),_._4(76,540672,null,0,c.g,[_.L,_.r],{columns:[0,"columns"]},null),_._24(2048,[[2,4]],i.h,null,[c.g]),(l()(),_._27(-1,null,["\n        "])),(l()(),_._0(0,null,null,2,null,L)),_._4(80,540672,null,0,c.i,[_.L,_.r],{columns:[0,"columns"]},null),_._24(2048,[[3,4]],i.j,null,[c.i]),(l()(),_._27(-1,null,["\n      "])),(l()(),_._27(-1,null,["\n    "])),(l()(),_._27(-1,null,["\n\n    "])),(l()(),_._5(85,0,null,null,13,"section",[],null,null,null,null,null)),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(87,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),_._27(-1,null,["Setting custom properties"])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(90,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._27(-1,null,["You can change each button icon and text using the global options, for example:"])),(l()(),_._27(-1,null,["\n      "])),(l()(),_._5(93,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),_._27(-1,null,["    "])),(l()(),_._5(95,0,null,null,1,"code",[["highlight",""]],[[2,"hljs",null]],null,null,null,null)),_._4(96,212992,null,0,b.a,[_.k,_.C,b.d],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(l()(),_._27(-1,null,["\n  "])),(l()(),_._27(-1,null,["\n    "])),(l()(),_._27(-1,null,["\n\n  "])),(l()(),_._27(-1,0,["\n\n  "])),(l()(),_._5(101,0,null,0,1,"footer",[],null,null,null,g.b,g.a)),_._4(102,49152,null,0,k.a,[],null,null),(l()(),_._27(-1,0,["\n"])),(l()(),_._27(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,!0),l(n,28,0,"",u.code.options),l(n,32,0,"","true"),l(n,38,0,u.dataSource),l(n,45,0,"name"),l(n,61,0,"description"),l(n,76,0,u.displayedColumns),l(n,80,0,u.displayedColumns),l(n,96,0,"",u.code.metaButtons)},function(l,n){l(n,27,0,_._18(n,28).hljsClass),l(n,95,0,_._18(n,96).hljsClass)})}var q=_._1("global-options",C,function(l){return _._29(0,[(l()(),_._5(0,0,null,null,1,"global-options",[],null,null,null,H,j)),_._4(1,114688,null,0,C,[y.a,x.i],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),z=u("l6RC"),T=u("j5BN"),V=u("V8+5"),Z=u("8Xfy"),D=u("4jwp"),F=u("OFGE"),N=u("ppgG"),U=u("gOiy"),A=u("jk5D"),G=u("vgc3"),I=u("9iV4"),J=u("ka8K"),R=u("w24y"),W=u("0nO6"),Y=u("vHLT"),E=u("UHIZ"),Q=u("ZYB1"),P=u("CZgk"),$=u("e0rv"),K=u("3uJi"),X=u("Lpd/"),ll=u("SlD5"),nl=u("ghl+"),ul=u("dYU3"),_l=u("k7z1"),el=u("Ioj9"),tl=u("0cZJ"),ol=u("kMVV"),al=u("HMTr"),cl=u("Ozno"),il=u("VUCt"),rl=u("HQJW"),sl=u("T2Au");u.d(n,"GlobalOptionsPageModuleNgFactory",function(){return dl});var dl=_._2(e,[],function(l){return _._14([_._15(512,_.j,_.Y,[[8,[t.a,o.a,a.a,q]],[3,_.j],_.w]),_._15(4608,p.n,p.m,[_.t,[2,p.y]]),_._15(6144,z.b,null,[p.d]),_._15(4608,z.c,z.c,[[2,z.b]]),_._15(4608,T.d,T.d,[]),_._15(4608,V.a,V.a,[]),_._15(4608,Z.i,Z.i,[V.a]),_._15(4608,Z.h,Z.h,[Z.i,_.y,p.d]),_._15(136192,Z.d,Z.b,[[3,Z.d],p.d]),_._15(5120,Z.l,Z.k,[[3,Z.l],[2,Z.j],p.d]),_._15(5120,Z.g,Z.e,[[3,Z.g],_.y,V.a]),_._15(5120,D.d,D.b,[[3,D.d],_.y,V.a]),_._15(5120,D.g,D.f,[[3,D.g],V.a,_.y]),_._15(4608,F.h,F.h,[D.d,D.g,_.y]),_._15(5120,F.e,F.i,[[3,F.e],p.d]),_._15(4608,F.m,F.m,[D.g,p.d]),_._15(5120,F.f,F.l,[[3,F.f],p.d]),_._15(4608,F.c,F.c,[F.h,F.e,_.j,F.m,F.f,_.g,_.q,_.y,p.d]),_._15(5120,F.j,F.k,[F.c]),_._15(4608,N.b,N.b,[]),_._15(4608,x.f,T.e,[[2,T.i],[2,T.n]]),_._15(5120,U.a,U.b,[F.c]),_._15(5120,A.a,A.b,[F.c]),_._15(5120,G.d,G.a,[[3,G.d],[2,I.c],x.c,[2,p.d]]),_._15(5120,J.c,J.d,[[3,J.c]]),_._15(5120,R.b,R.c,[F.c]),_._15(4608,R.d,R.d,[F.c,_.q,[2,p.h],R.b,[3,R.d],F.e]),_._15(5120,r.a,r.d,[]),_._15(4608,r.b,r.b,[r.a]),_._15(4608,r.k,r.k,[_.y,p.d]),_._15(5120,r.l,r.j,[[3,r.l],r.b,r.k]),_._15(5120,r.o,r.n,[[3,r.o],r.k,r.b]),_._15(4608,W.r,W.r,[]),_._15(4608,W.d,W.d,[]),_._15(4608,Y.d,Y.d,[]),_._15(5120,Y.a,Y.e,[_.A]),_._15(4608,Y.b,Y.b,[Y.a,Y.d]),_._15(512,p.c,p.c,[]),_._15(512,E.r,E.r,[[2,E.w],[2,E.o]]),_._15(512,i.l,i.l,[]),_._15(512,z.a,z.a,[]),_._15(256,T.f,!0,[]),_._15(512,T.n,T.n,[[2,T.f]]),_._15(512,c.k,c.k,[]),_._15(512,Q.c,Q.c,[]),_._15(512,V.b,V.b,[]),_._15(512,Z.a,Z.a,[]),_._15(512,P.g,P.g,[]),_._15(512,D.c,D.c,[]),_._15(512,F.g,F.g,[]),_._15(512,$.h,$.h,[]),_._15(512,T.x,T.x,[]),_._15(512,N.c,N.c,[]),_._15(512,K.b,K.b,[]),_._15(512,T.v,T.v,[]),_._15(512,T.t,T.t,[]),_._15(512,X.c,X.c,[]),_._15(512,U.d,U.d,[]),_._15(512,A.d,A.d,[]),_._15(512,ll.b,ll.b,[]),_._15(512,nl.d,nl.d,[]),_._15(512,T.o,T.o,[]),_._15(512,ul.e,ul.e,[]),_._15(512,G.c,G.c,[]),_._15(512,_l.a,_l.a,[]),_._15(512,el.d,el.d,[]),_._15(512,tl.a,tl.a,[]),_._15(512,R.f,R.f,[]),_._15(512,ol.b,ol.b,[]),_._15(512,al.a,al.a,[]),_._15(512,r.m,r.m,[]),_._15(512,r.f,r.f,[]),_._15(512,W.q,W.q,[]),_._15(512,W.h,W.h,[]),_._15(512,W.o,W.o,[]),_._15(512,Y.c,Y.c,[]),_._15(512,h.b,h.b,[]),_._15(512,b.b,b.b,[]),_._15(512,cl.a,cl.a,[]),_._15(512,il.a,il.a,[]),_._15(512,rl.b,rl.b,[]),_._15(512,sl.a,sl.a,[]),_._15(512,e,e,[]),_._15(256,$.a,!1,[]),_._15(1024,E.m,function(){return[[{path:"",component:C}]]},[])])})}});