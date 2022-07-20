"use strict";(self.webpackChunkrsp_front=self.webpackChunkrsp_front||[]).push([[523],{2523:(P,u,r)=>{r.r(u),r.d(u,{MainGameModule:()=>A});var c=r(6895),l=r(4466),p=r(7033),g=r(727),d=r(3900),C=r(515),t=r(1571),h=r(2995),v=r(2377),a=r(7182);const M=["button"];let f=(()=>{class n{constructor(){this.valueEmitter=new t.vpe}onButtonClick(){this.removeHighlights(),this.button.nativeElement.classList.add("buttonSelected"),this.valueEmitter.emit(this.value)}removeHighlights(){const e=document.querySelectorAll("button.buttonSelected");e&&Array.from(e).map(o=>o.classList.remove("buttonSelected"))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-rsp-button"]],viewQuery:function(e,o){if(1&e&&t.Gf(M,5),2&e){let i;t.iGM(i=t.CRH())&&(o.button=i.first)}},inputs:{image:"image",value:"value"},outputs:{valueEmitter:"valueEmitter"},decls:3,vars:1,consts:[[3,"click"],["button",""],[3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"button",0,1),t.NdJ("click",function(){return o.onButtonClick()}),t._UZ(2,"img",2),t.qZA()),2&e&&(t.xp6(2),t.MGl("src","assets/img/",o.image,"",t.LSH))},styles:["img[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{border:none;background-color:transparent}button.buttonSelected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:radial-gradient(ellipse at center,#028484 0%,#028484 68%,transparent 70%,transparent 47%,transparent 48%)}"]}),n})();function G(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-rsp-button",3),t.NdJ("valueEmitter",function(i){t.CHM(e);const m=t.oxw();return t.KtG(m.onButtonClick(i))}),t.qZA()}if(2&n){const e=s.$implicit,o=t.oxw();t.Q6J("image",o.RSP_VALUES_IMAGES_MAP.get(e))("value",e)}}function _(n,s){if(1&n&&(t.TgZ(0,"div",4)(1,"p",5),t._uU(2,"Tu rival escogi\xf3:"),t.qZA(),t._UZ(3,"img",6),t.TgZ(4,"p",7),t._uU(5),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.MGl("src","assets/img/",e.RSP_VALUES_IMAGES_MAP.get(e.currentGame.lastPlayComputer),"",t.LSH),t.xp6(2),t.hij(" ",e.RSP_RESULT_MESSAGES_MAP.get(e._result)," ")}}let b=(()=>{class n{constructor(){this.RSP_VALUES_IMAGES_MAP=a.UD,this.RSP_RESULT_MESSAGES_MAP=a.Vi,this.buttonsList=Object.values(a.LL),this.sendChoiceEmitter=new t.vpe}set result(e){this._result=e,this._result===a.wb.COMPUTER_WIN&&this.makeVibrate()}ngOnInit(){}onButtonClick(e){this.sendChoiceEmitter.emit(e)}makeVibrate(){window.navigator.vibrate([1e3])}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-board"]],inputs:{currentGame:"currentGame",result:"result"},outputs:{sendChoiceEmitter:"sendChoiceEmitter"},decls:3,vars:2,consts:[[1,"list-container"],[3,"image","value","valueEmitter",4,"ngFor","ngForOf"],["class","computer-response",4,"ngIf"],[3,"image","value","valueEmitter"],[1,"computer-response"],[1,"computer-selection-title"],[3,"src"],[1,"result-message"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,G,1,2,"app-rsp-button",1),t.qZA(),t.YNc(2,_,6,2,"div",2)),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.buttonsList),t.xp6(1),t.Q6J("ngIf",o.currentGame&&o._result))},dependencies:[c.sg,c.O5,f],styles:[".list-container[_ngcontent-%COMP%]{display:flex}.computer-response[_ngcontent-%COMP%]{margin-top:5%;display:flex;justify-content:center;flex-direction:column;align-items:center}.computer-response[_ngcontent-%COMP%]   p.computer-selection-title[_ngcontent-%COMP%]{align-self:baseline}.computer-response[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}.computer-response[_ngcontent-%COMP%]   p.result-message[_ngcontent-%COMP%]{margin-top:5%;font-weight:700}"]}),n})(),S=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-scores"]],inputs:{game:"game"},decls:11,vars:3,consts:[[1,"game-scores"],[1,"player"],[1,"title","player-title"],[1,"score","player-score"],[1,"computer"],[1,"title","computer-title"],[1,"score","computer-score"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA()(),t.TgZ(6,"div",4)(7,"span",5),t._uU(8,"Rival: "),t.qZA(),t.TgZ(9,"span",6),t._uU(10),t.qZA()()()),2&e&&(t.xp6(3),t.hij("",null==o.game?null:o.game.username,": "),t.xp6(2),t.Oqu(null==o.game?null:o.game.userWins),t.xp6(5),t.Oqu(null==o.game?null:o.game.computerWins))},styles:[".game-scores[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:5%}.game-scores[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}"]}),n})();const y=[{path:"",component:(()=>{class n{constructor(e,o){this.gameService=e,this.customConnectionService=o,this.subscriptions=new g.w0}ngOnInit(){this.subscriptions.add(this.gameService.getCurrentGame().subscribe(e=>{this.currentGame=e})),this.subscriptions.add(this.customConnectionService.hasConnection$.pipe((0,d.w)(e=>e&&this.currentGame?this.gameService.persistDataInMongo(this.currentGame):C.E)).subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}playRound(e){this.subscriptions.add(this.gameService.playRound(e,this.currentGame).subscribe(o=>{this.result=o.result}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.h),t.Y36(v.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main-game"]],decls:2,vars:3,consts:[[3,"game"],[3,"currentGame","result","sendChoiceEmitter"]],template:function(e,o){1&e&&(t._UZ(0,"app-game-scores",0),t.TgZ(1,"app-game-board",1),t.NdJ("sendChoiceEmitter",function(m){return o.playRound(m)}),t.qZA()),2&e&&(t.Q6J("game",o.currentGame),t.xp6(1),t.Q6J("currentGame",o.currentGame)("result",o.result))},dependencies:[b,S]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(y),p.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,l.m,E]}),n})()}}]);