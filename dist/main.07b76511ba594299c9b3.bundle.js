webpackJsonp([1],{"+h1B":function(n,t,l){"use strict";var e=l("/oeL"),u=l("aR8+"),i=l("wQAS"),r=l("Gcjq"),a=l("H7sf"),o=l("DOmi"),c=l("Y0RT"),s=l("q4dy"),d=l("qbdv"),p=l("fc+i"),f=l("CPp0"),h=l("bm2B"),g=l("BkNc"),_=l("3pZ/"),m=l("K181"),v=l("ys2L"),b=l("NIKO"),y=l("UEFR");l.d(t,"a",function(){return S});var S=e.b(u.a,[i.a],function(n){return e.c([e.d(512,e.e,e.f,[[8,[r.a,a.a,o.a,c.a,s.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,d.a,d.b,[e.h]),e.d(5120,e.j,e.k,[]),e.d(5120,e.l,e.m,[]),e.d(5120,e.n,e.o,[]),e.d(4608,p.b,p.c,[p.d]),e.d(6144,e.p,null,[p.b]),e.d(4608,p.e,p.f,[]),e.d(5120,p.g,function(n,t,l,e){return[new p.h(n),new p.i(t),new p.j(l,e)]},[p.d,p.d,p.d,p.e]),e.d(4608,p.k,p.k,[p.g,e.q]),e.d(135680,p.l,p.l,[p.d]),e.d(4608,p.m,p.m,[p.k,p.l]),e.d(6144,e.r,null,[p.m]),e.d(6144,p.n,null,[p.l]),e.d(4608,e.s,e.s,[e.q]),e.d(4608,p.o,p.o,[p.d]),e.d(4608,p.p,p.p,[p.d]),e.d(4608,f.a,f.a,[]),e.d(4608,f.b,f.c,[]),e.d(5120,f.d,f.e,[]),e.d(4608,f.f,f.f,[f.a,f.b,f.d]),e.d(4608,f.g,f.h,[]),e.d(5120,f.i,f.j,[f.f,f.g]),e.d(4608,h.a,h.a,[]),e.d(5120,g.a,g.b,[g.c]),e.d(4608,g.d,g.d,[]),e.d(6144,g.e,null,[g.d]),e.d(135680,g.f,g.f,[g.c,e.t,e.u,e.v,g.e]),e.d(4608,g.g,g.g,[]),e.d(5120,g.h,g.i,[g.j]),e.d(5120,e.w,function(n){return[n]},[g.h]),e.d(4608,_.a,_.a,[f.i]),e.d(512,d.c,d.c,[]),e.d(1024,e.x,p.q,[]),e.d(1024,e.y,function(){return[g.k()]},[]),e.d(512,g.j,g.j,[e.v]),e.d(1024,e.z,function(n,t,l){return[p.r(n,t),g.l(l)]},[[2,p.s],[2,e.y],g.j]),e.d(512,e.A,e.A,[[2,e.z]]),e.d(131584,e.B,e.B,[e.q,e.C,e.v,e.x,e.e,e.A]),e.d(2048,e.D,null,[e.B]),e.d(512,e.E,e.E,[e.D]),e.d(512,p.t,p.t,[[3,p.t]]),e.d(512,f.k,f.k,[]),e.d(512,h.b,h.b,[]),e.d(512,h.c,h.c,[]),e.d(1024,g.m,g.n,[[3,g.c]]),e.d(512,g.o,g.p,[]),e.d(512,g.q,g.q,[]),e.d(256,g.r,{},[]),e.d(1024,d.d,g.s,[d.e,[2,d.f],g.r]),e.d(512,d.g,d.g,[d.d]),e.d(512,e.u,e.u,[]),e.d(512,e.t,e.F,[e.u,[2,e.G]]),e.d(1024,g.t,function(){return[[{path:"",redirectTo:"/loading-screen",pathMatch:"full"},{path:"login",component:m.a},{path:"loading-screen",component:v.a},{path:"match-master",component:b.a},{path:"leader-board",component:y.a}]]},[]),e.d(1024,g.c,g.u,[e.D,g.o,g.q,d.g,e.v,e.t,e.u,g.t,g.r,[2,g.v],[2,g.w]]),e.d(512,g.x,g.x,[[2,g.m],[2,g.c]]),e.d(512,u.a,u.a,[])])})},"+nJ8":function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n}()},0:function(n,t,l){n.exports=l("cDNt")},"3pZ/":function(n,t,l){"use strict";var e=l("CPp0"),u=l("gvep"),i=(l.n(u),l("82j9"));l.n(i);l.d(t,"a",function(){return r});var r=function(){function n(n){this.http=n,this.currentScore=0,this.currentScoreSource=new u.BehaviorSubject(this.currentScore),this.currentScore$=this.currentScoreSource.asObservable(),this.selectedPieces=[],this.boardState=[],this.postUrl="/api/log-score",this.putUrl="/api/win"}return n.prototype.getTileContents=function(n,t){var l=this,e="/api/checkmatch/"+n+"/"+t;return this.http.get(e).toPromise().then(function(n){return l.boardState[t].value=n.json(),l.boardState[t].selected=!0,n.json()})},n.prototype.isSelected=function(n){return this.boardState[n].selected},n.prototype.isMatched=function(n){return this.boardState[n].matched},n.prototype.setScore=function(n){this.currentScore+=n,this.currentScoreSource.next(this.currentScore)},n.prototype.updateSelectedPieces=function(n){this.selectedPieces=n.filter(function(n){return!0===n.selected})},n.prototype.matchCheck=function(){var n=this.selectedPieces[0],t=this.selectedPieces[1];return""!==n.value&&""!==t.value&&(n.value===t.value?(n.matched=!0,n.selected=!1,t.matched=!0,t.selected=!1,!0):void 0)},n.prototype.winCheck=function(){if(this.boardState.filter(function(n){return!0===n.matched}).length===this.boardState.length)return this.saveScoreWithPromise(),this.updateBoardWithWinTime(),!0},n.prototype.updateBoardWithWinTime=function(){var n={id:this.boardId},t=new e.l({"Content-Type":"application/json"}),l=new e.g({headers:t});return this.http.put(this.putUrl,n,l).toPromise().then(function(){console.log("board "+this.boardId+" updated with win time")})},n.prototype.saveScoreWithPromise=function(){var n={initials:this.playerInitials,score:this.currentScore,boardId:"temp-id"},t=new e.l({"Content-Type":"application/json"}),l=new e.g({headers:t});return this.http.post(this.postUrl,n,l).toPromise().then()},n.prototype.resetNonMatches=function(n){var t=this.selectedPieces[0],l=this.selectedPieces[1];t.selected=!1,l.selected=!1,t.value="",l.value="",!1===t.matched&&!1===l.matched&&(n[t.pieceId].nativeElement.innerHTML="<p></p>",n[l.pieceId].nativeElement.innerHTML="<p></p>")},n.prototype.resetEntireBoard=function(){this.boardState=[],this.currentScore=0},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:e.i}]},n}()},"5elb":function(n,t,l){"use strict";var e=l("3pZ/");l.d(t,"a",function(){return u});var u=function(){function n(n){this.gameStateService=n,this.matchesRemaining=12,this.score=5,this.player=this.gameStateService.playerInitials}return n.prototype.getScore=function(){this.gameStateService.setScore(1)},n.prototype.ngOnInit=function(){var n=this;this.gameStateService.currentScore$.subscribe(function(t){n.score=t})},n.ctorParameters=function(){return[{type:e.a}]},n}()},DOmi:function(n,t,l){"use strict";function e(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-score-board",[],null,null,null,a.a,a.b)),r._28(114688,null,0,o.a,[c.a],null,null),(n()(),r._26(null,["\n"])),(n()(),r._27(0,null,null,2,"app-game-board",[],null,null,null,s.a,s.b)),r._31(512,null,d.a,d.a,[p.i]),r._28(4308992,null,0,f.a,[d.a,c.a,h.c],null,null)],function(n,t){n(t,1,0),n(t,5,0)},null)}function u(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-game-space",[],null,null,null,e,m)),r._28(49152,null,0,g.a,[],null,null)],null,null)}var i=l("w8E8"),r=l("/oeL"),a=l("xvtD"),o=l("5elb"),c=l("3pZ/"),s=l("sixs"),d=l("rOL4"),p=l("CPp0"),f=l("wy2B"),h=l("BkNc"),g=l("NIKO");l.d(t,"a",function(){return v});var _=[i.a],m=r._24({encapsulation:0,styles:_,data:{}}),v=r._29("app-game-space",g.a,u,{},{},[])},Gcjq:function(n,t,l){"use strict";function e(n){return r._25(0,[(n()(),r._27(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r._26(null,["Dashboard Login - wip"])),(n()(),r._26(null,["\n"])),(n()(),r._27(0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var e=!0;if("submit"===t){e=!1!==r._34(n,5).onSubmit(l)&&e}if("reset"===t){e=!1!==r._34(n,5).onReset()&&e}return e},null,null)),r._28(16384,null,0,a.l,[],null,null),r._28(16384,null,0,a.m,[[8,null],[8,null]],null,null),r._31(2048,null,a.n,null,[a.m]),r._28(16384,null,0,a.o,[a.n],null,null),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,6,"div",[["class","login-form"]],null,null,null,null,null)),(n()(),r._26(null,["\n        "])),(n()(),r._27(0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(n()(),r._26(null,["Username"])),(n()(),r._26(null,["\n        "])),(n()(),r._27(0,null,null,0,"input",[["class","form-input"],["id","username"],["required",""],["type","text"]],null,null,null,null,null)),(n()(),r._26(null,["\n    "])),(n()(),r._26(null,["\n\n    "])),(n()(),r._27(0,null,null,6,"div",[["class","login-form"]],null,null,null,null,null)),(n()(),r._26(null,["\n        "])),(n()(),r._27(0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(n()(),r._26(null,["Password"])),(n()(),r._26(null,["\n        "])),(n()(),r._27(0,null,null,0,"input",[["class","form-input"],["id","password"],["required",""],["type","password"]],null,null,null,null,null)),(n()(),r._26(null,["\n    "])),(n()(),r._26(null,["\n\n    "])),(n()(),r._27(0,null,null,1,"button",[["class","bit-button"],["type","submit"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.authenticate()&&e}return e},null,null)),(n()(),r._26(null,["Submit"])),(n()(),r._26(null,["\n"]))],null,function(n,t){n(t,3,0,r._34(t,7).ngClassUntouched,r._34(t,7).ngClassTouched,r._34(t,7).ngClassPristine,r._34(t,7).ngClassDirty,r._34(t,7).ngClassValid,r._34(t,7).ngClassInvalid,r._34(t,7).ngClassPending)})}function u(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-login",[],null,null,null,e,p)),r._28(49152,null,0,o.a,[c.i,s.c],null,null)],null,null)}var i=l("hXE1"),r=l("/oeL"),a=l("bm2B"),o=l("K181"),c=l("CPp0"),s=l("BkNc");l.d(t,"a",function(){return f});var d=[i.a],p=r._24({encapsulation:0,styles:d,data:{}}),f=r._29("app-login",o.a,u,{},{},[])},H7sf:function(n,t,l){"use strict";function e(n){return r._25(0,[(n()(),r._26(null,["\n"])),(n()(),r._27(0,null,null,21,"div",[["class","input-container"]],null,null,null,null,null)),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,1,"label",[["for","initials"]],null,null,null,null,null)),(n()(),r._26(null,["Enter Initials"])),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,7,"input",[["autofocus",""],["class","initials-input"],["id","initials"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,l){var e=!0,u=n.component;if("input"===t){e=!1!==r._34(n,7)._handleInput(l.target.value)&&e}if("blur"===t){e=!1!==r._34(n,7).onTouched()&&e}if("compositionstart"===t){e=!1!==r._34(n,7)._compositionStart()&&e}if("compositionend"===t){e=!1!==r._34(n,7)._compositionEnd(l.target.value)&&e}if("ngModelChange"===t){e=!1!==(u.initials=l)&&e}if("keypress"===t){e=!1!==u.saveInitialsEnter(l.keyCode)&&e}return e},null,null)),r._28(16384,null,0,o.d,[r.O,r.P,[2,o.e]],null,null),r._28(16384,null,0,o.f,[],{required:[0,"required"]},null),r._31(1024,null,o.g,function(n){return[n]},[o.f]),r._31(1024,null,o.h,function(n){return[n]},[o.d]),r._28(671744,null,0,o.i,[[8,null],[2,o.g],[8,null],[2,o.h]],{model:[0,"model"]},{update:"ngModelChange"}),r._31(2048,null,o.j,null,[o.i]),r._28(16384,null,0,o.k,[o.j],null,null),(n()(),r._26(null,["\n"])),(n()(),r._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,1,"button",[["class","bit-button"],["type","submit"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.saveInitials()&&e}return e},null,null)),(n()(),r._26(null,["BEGIN MATCHING!"])),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,1,"button",[["class","bit-button"],["type","submit"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.gotoLogin()&&e}return e},null,null)),(n()(),r._26(null,["Login"])),(n()(),r._26(null,["\n\n"]))],function(n,t){var l=t.component;n(t,8,0,""),n(t,11,0,l.initials)},function(n,t){n(t,6,0,r._34(t,8).required?"":null,r._34(t,13).ngClassUntouched,r._34(t,13).ngClassTouched,r._34(t,13).ngClassPristine,r._34(t,13).ngClassDirty,r._34(t,13).ngClassValid,r._34(t,13).ngClassInvalid,r._34(t,13).ngClassPending)})}function u(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-loading-screen",[],null,null,null,e,p)),r._28(49152,null,0,a.a,[c.a,s.c],null,null)],null,null)}var i=l("Z6fu"),r=l("/oeL"),a=l("ys2L"),o=l("bm2B"),c=l("3pZ/"),s=l("BkNc");l.d(t,"a",function(){return f});var d=[i.a],p=r._24({encapsulation:0,styles:d,data:{}}),f=r._29("app-loading-screen",a.a,u,{},{},[])},K181:function(n,t,l){"use strict";var e=l("CPp0"),u=l("BkNc");l.d(t,"a",function(){return i});var i=function(){function n(n,t){this.http=n,this.router=t,this.instructions="Login to dashboard"}return n.prototype.authenticate=function(){console.log("click")},n.ctorParameters=function(){return[{type:e.i},{type:u.c}]},n}()},NIKO:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){this.title="Match Master"}return n}()},NcE9:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=["h3[_ngcontent-%COMP%]{font-size:16px}"]},NhKt:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[""]},UEFR:function(n,t,l){"use strict";var e=l("CPp0"),u=l("BkNc"),i=l("3pZ/");l.d(t,"a",function(){return r});var r=function(){function n(n,t,l){this.http=n,this.router=t,this.gameStateService=l,this.url="/api/high-scores",this.score=this.gameStateService.currentScore,this.player=this.gameStateService.playerInitials}return n.prototype.restartNewGame=function(n){void 0===n&&(n=!1),this.gameStateService.currentScoreSource.next(0),n?this.router.navigateByUrl("/match-master"):this.router.navigateByUrl("/loading-screen")},n.prototype.getTopTen=function(){var n=this;this.http.get(this.url).toPromise().then(function(t){var l=!1;n.leaderBoard=t.json(),n.leaderBoard.forEach(function(n,t){return n.rank=t+1});var e=n.leaderBoard.length-1;n.score<=n.leaderBoard[e].score&&(l=!0),n.congratulations=l?n.player+" achieves Match Mastery with score: "+n.score:"Sorry "+n.player+", Match Mastery remains elusive"})},n.prototype.ngOnInit=function(){this.getTopTen()},n.ctorParameters=function(){return[{type:e.i},{type:u.c},{type:i.a}]},n}()},Y0RT:function(n,t,l){"use strict";function e(n){return a._25(0,[(n()(),a._27(0,null,null,10,"li",[["class","leader-board"]],null,null,null,null,null)),(n()(),a._26(null,["\n        \n            "])),(n()(),a._27(0,null,null,1,"div",[["class","ranking"]],null,null,null,null,null)),(n()(),a._26(null,["","."])),(n()(),a._26(null,[" \n            "])),(n()(),a._27(0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),a._26(null,["",""])),(n()(),a._26(null,[" \n            "])),(n()(),a._27(0,null,null,1,"div",[["class","score"]],null,null,null,null,null)),(n()(),a._26(null,["",""])),(n()(),a._26(null,["\n        \n    "]))],null,function(n,t){n(t,3,0,t.context.$implicit.rank),n(t,6,0,t.context.$implicit.playerInitials),n(t,9,0,t.context.$implicit.score)})}function u(n){return a._25(0,[(n()(),a._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),a._26(null,["",""])),(n()(),a._26(null,["\n"])),(n()(),a._27(0,null,null,1,"button",[["class","bit-button"],["type","submit"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.restartNewGame(!0)&&e}return e},null,null)),(n()(),a._26(null,["Try Again ","!!! "])),(n()(),a._26(null,["\n"])),(n()(),a._27(0,null,null,1,"button",[["class","bit-button"],["type","submit"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.restartNewGame(!1)&&e}return e},null,null)),(n()(),a._26(null,["New Player, Start!!!"])),(n()(),a._26(null,["\n"])),(n()(),a._27(0,null,null,4,"ul",[["class","leader-board-container"]],null,null,null,null,null)),(n()(),a._26(null,["\n    "])),(n()(),a._30(16777216,null,null,1,null,e)),a._28(802816,null,0,c.l,[a.W,a._7,a.l],{ngForOf:[0,"ngForOf"]},null),(n()(),a._26(null,["\n"]))],function(n,t){n(t,12,0,t.component.leaderBoard)},function(n,t){var l=t.component;n(t,1,0,l.congratulations),n(t,4,0,l.player)})}function i(n){return a._25(0,[(n()(),a._27(0,null,null,1,"app-leader-board",[],null,null,null,u,h)),a._28(114688,null,0,o.a,[s.i,d.c,p.a],null,null)],function(n,t){n(t,1,0)},null)}var r=l("hBqn"),a=l("/oeL"),o=l("UEFR"),c=l("qbdv"),s=l("CPp0"),d=l("BkNc"),p=l("3pZ/");l.d(t,"a",function(){return g});var f=[r.a],h=a._24({encapsulation:0,styles:f,data:{}}),g=a._29("app-leader-board",o.a,i,{},{},[])},Z6fu:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[".input-container[_ngcontent-%COMP%]{display:block;width:80%;margin:0 auto;padding:0;text-align:center}.bit-button[_ngcontent-%COMP%]{display:block;margin:15px auto;padding:10px;font-family:inherit;background:none}.bit-button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]},"aR8+":function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n}()},cDNt:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("/oeL"),u=l("p5Ee"),i=l("fc+i"),r=l("+h1B");u.a.production&&l.i(e.a)(),l.i(i.a)().bootstrapModuleFactory(r.a)},hBqn:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[".bit-button[_ngcontent-%COMP%]{display:block;margin:15px auto;padding:10px;font-family:inherit;background:none}.bit-button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.leader-board-container[_ngcontent-%COMP%]{margin:0 auto;padding:0;border-width:4px 4px 0 4px;border-color:#000;border-style:solid;width:80%;box-shadow:3px 3px 0 0 grey}.leader-board[_ngcontent-%COMP%]{list-style:none;padding:8px 0 8px 10px;margin:0;text-align:left;border-width:0 0 4px 0;border-color:#000;border-style:solid;box-shadow:inset 4px 4px 0 0 #d3d3d3}.leader-board[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.ranking[_ngcontent-%COMP%]{margin-left:30px;display:inline}.name[_ngcontent-%COMP%]{margin:0 auto}.name[_ngcontent-%COMP%], .score[_ngcontent-%COMP%]{display:inline}.score[_ngcontent-%COMP%]{margin-right:30px;float:right}.leader-board[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0;padding:0}"]},hXE1:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[".login-form[_ngcontent-%COMP%]{margin:15px}.bit-button[_ngcontent-%COMP%]{display:block;margin:15px auto;padding:10px;font-family:inherit;background:none}.bit-button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]},p5Ee:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e={production:!0}},q4dy:function(n,t,l){"use strict";function e(n){return r._25(0,[(n()(),r._26(null,["\n        "])),(n()(),r._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._26(null,["",""])),(n()(),r._26(null,["\n        "])),(n()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,a.y,[a.q,r.W,r.e,[8,null],r.T],null,null)],function(n,t){n(t,5,0)},function(n,t){n(t,2,0,t.component.title)})}function u(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-root",[],null,null,null,e,s)),r._28(49152,null,0,o.a,[],null,null)],null,null)}var i=l("NhKt"),r=l("/oeL"),a=l("BkNc"),o=l("wQAS");l.d(t,"a",function(){return d});var c=[i.a],s=r._24({encapsulation:0,styles:c,data:{}}),d=r._29("app-root",o.a,u,{},{},[])},qtrl:function(n,t){function l(n){throw new Error("Cannot find module '"+n+"'.")}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="qtrl"},rOL4:function(n,t,l){"use strict";var e=l("CPp0"),u=l("82j9");l.n(u);l.d(t,"a",function(){return i});var i=function(){function n(n){this.http=n,this.url="/api/build-board"}return n.prototype.getPieces=function(){var n=this;return this.http.get(this.url).toPromise().then(function(t){return n.gameBoard=t.json(),n.gameBoard})},n.ctorParameters=function(){return[{type:e.i}]},n}()},rkxN:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[".game-board[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;border-style:solid;border-width:4px;width:80%;max-width:785px;height:50%;margin:0 auto;padding:1.5% 0;box-shadow:inset 4px 4px 0 0 grey}.game-piece[_ngcontent-%COMP%]{width:25%;padding:3% 3%;list-style:none;border-style:solid;border-width:2px;border-color:#000;margin:5px auto;box-shadow:3px 3px 0 0 grey;color:#000;font-size:32px}.game-piece[_ngcontent-%COMP%]:hover{background-color:#d3d3d3;color:#000}@media screen and (min-width:400px){.game-piece[_ngcontent-%COMP%]{font-size:64px}}@media screen and (min-width:1000px){.game-piece[_ngcontent-%COMP%]{font-size:104px}}"]},sixs:function(n,t,l){"use strict";function e(n){return a._25(0,[(n()(),a._27(0,[[1,0],["gamePiece",1]],null,3,"div",[["class","game-piece"]],[[8,"id",0]],[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.updateGameState(l)&&e}return e},null,null)),(n()(),a._26(null,["\n         "])),(n()(),a._27(0,null,null,0,"p",[],null,null,null,null,null)),(n()(),a._26(null,["\n        "]))],null,function(n,t){n(t,0,0,a._32(1,"",t.context.index,""))})}function u(n){return a._25(0,[a._33(671088640,1,{gamePieces:1}),(n()(),a._27(0,null,null,4,"div",[["class","game-board"]],[[8,"id",0]],null,null,null,null)),(n()(),a._26(null,["\n        "])),(n()(),a._30(16777216,null,null,1,null,e)),a._28(802816,null,0,o.l,[a.W,a._7,a.l],{ngForOf:[0,"ngForOf"]},null),(n()(),a._26(null,["\n    \n"]))],function(n,t){n(t,4,0,t.component.pieces)},function(n,t){var l=t.component;n(t,1,0,a._32(1,"",l.id,""))})}function i(n){return a._25(0,[(n()(),a._27(0,null,null,2,"app-game-board",[],null,null,null,u,g)),a._31(512,null,s.a,s.a,[d.i]),a._28(4308992,null,0,c.a,[s.a,p.a,f.c],null,null)],function(n,t){n(t,2,0)},null)}var r=l("rkxN"),a=l("/oeL"),o=l("qbdv"),c=l("wy2B"),s=l("rOL4"),d=l("CPp0"),p=l("3pZ/"),f=l("BkNc");l.d(t,"b",function(){return g}),t.a=u;var h=[r.a],g=a._24({encapsulation:0,styles:h,data:{}});a._29("app-game-board",c.a,i,{},{},[])},w8E8:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[""]},wQAS:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){this.title="Match Master"}return n}()},wy2B:function(n,t,l){"use strict";var e=l("+nJ8"),u=l("rOL4"),i=l("3pZ/"),r=l("BkNc");l.d(t,"a",function(){return a});var a=function(){function n(n,t,l){this.gameBoardBuildService=n,this.gameStateService=t,this.router=l,this.pieces=[]}return n.prototype.buildBoard=function(){var n=this;this.gameBoardBuildService.getPieces().then(function(t){n.gameBoard=t,n.id=t.id,n.gameStateService.boardId=n.id}).then(function(t){for(var l=0;l<n.gameBoard.length;l++){var u=new e.a;u.pieceId=l,u.selected=!1,u.matched=!1,u.value="",u.matched=!1,n.gameStateService.boardState.push(u),n.pieces.push(l)}})},n.prototype.updateGameState=function(n){var t=this,l=n.target.id,e=this.gameStateService.isMatched(l);this.gameStateService.isSelected(l)||e||(2===this.gameStateService.selectedPieces.length&&this.gameStateService.resetNonMatches(this.piecesInDom),this.gameStateService.getTileContents(this.id,l).then(function(l){t.gameStateService.updateSelectedPieces(t.gameStateService.boardState),n.target.innerHTML=l,t.setNewScore(),t.gameStateService.selectedPieces.length<2||2!==t.gameStateService.selectedPieces.length||(t.gameStateService.matchCheck()||t.gameStateService.updateSelectedPieces(t.gameStateService.boardState),t.gameStateService.winCheck()&&t.router.navigateByUrl("/leader-board"))}))},n.prototype.setNewScore=function(){this.gameStateService.setScore(1)},n.prototype.ngOnInit=function(){this.gameStateService.boardState.length>0&&this.gameStateService.resetEntireBoard(),this.buildBoard()},n.prototype.ngAfterViewInit=function(){var n=this;this.gamePieces.changes.subscribe(function(t){n.piecesInDom=n.gamePieces.toArray()})},n.ctorParameters=function(){return[{type:u.a},{type:i.a},{type:r.c}]},n}()},xvtD:function(n,t,l){"use strict";function e(n){return r._25(0,[(n()(),r._27(0,null,null,4,"div",[["class","score-board"]],null,null,null,null,null)),(n()(),r._26(null,["\n    "])),(n()(),r._27(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r._26(null,["","'s Score: ",""])),(n()(),r._26(null,["\n"]))],null,function(n,t){var l=t.component;n(t,3,0,l.player,l.score)})}function u(n){return r._25(0,[(n()(),r._27(0,null,null,1,"app-score-board",[],null,null,null,e,s)),r._28(114688,null,0,a.a,[o.a],null,null)],function(n,t){n(t,1,0)},null)}var i=l("NcE9"),r=l("/oeL"),a=l("5elb"),o=l("3pZ/");l.d(t,"b",function(){return s}),t.a=e;var c=[i.a],s=r._24({encapsulation:0,styles:c,data:{}});r._29("app-score-board",a.a,u,{},{},[])},ys2L:function(n,t,l){"use strict";var e=l("BkNc"),u=l("3pZ/");l.d(t,"a",function(){return i});var i=function(){function n(n,t){this.gameStateService=n,this.router=t}return n.prototype.gotoLogin=function(){this.router.navigateByUrl("/login")},n.prototype.saveInitials=function(){this.gameStateService.playerInitials=this.initials,console.log(this.gameStateService.playerInitials),this.navigateToGameSpace()},n.prototype.saveInitialsEnter=function(n){13===n&&(this.gameStateService.playerInitials=this.initials,console.log(this.gameStateService.playerInitials),this.navigateToGameSpace())},n.prototype.navigateToGameSpace=function(){void 0!==this.gameStateService.playerInitials&&this.gameStateService.playerInitials.length>0&&this.router.navigateByUrl("/match-master")},n.ctorParameters=function(){return[{type:u.a},{type:e.c}]},n}()}},[0]);