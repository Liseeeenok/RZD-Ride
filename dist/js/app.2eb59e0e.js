(function(){"use strict";var t={6954:function(t,a,i){var r=i(9242),s=i(3396);function n(t,a,i,r,n,e){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o)}var e={},o=i(89);const l=(0,o.Z)(e,[["render",n]]);var d=l,c=i(2483),h=i(7139);const u=t=>((0,s.dD)("data-v-105d4672"),t=t(),(0,s.Cn)(),t),S={class:"status window"},p={class:"lower-part"},v={class:"time-table window"},w={key:0},f=u((()=>(0,s._)("div",{class:"map window"},null,-1))),_=u((()=>(0,s._)("div",{class:"interesting window"},null,-1)));function m(t,a,i,r,n,e){const o=(0,s.up)("Stations"),l=(0,s.up)("Weather");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",S,[(0,s.Wm)(o,{status:this.status},null,8,["status"]),(0,s.Wm)(l,{time:this.time},null,8,["time"])]),(0,s._)("div",p,[(0,s._)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.arrStop,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.duration},[(0,s.Uk)((0,h.zw)(t.arrivalShow)+" ",1),t.arrivalShow&&t.departureShow?((0,s.wg)(),(0,s.iD)("span",w,"-")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,h.zw)(t.departureShow)+" "+(0,h.zw)(t.title),1)])))),128))]),f,_])],64)}var g=i(70),y=i.p+"img/sun-icon.46b9915d.svg";const b=t=>((0,s.dD)("data-v-b1287658"),t=t(),(0,s.Cn)(),t),E={class:"time-and-weather"},k={class:"time"},D=b((()=>(0,s._)("div",{class:"weather"},[(0,s._)("img",{src:y,alt:"",class:"weather-icon"}),(0,s._)("span",{class:"weather-text"},"Ясно, 15°С")],-1)));function A(t,a,i,r,n,e){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("h1",k,(0,h.zw)(i.time),1),D])}var R={name:"Weather",props:{time:{type:String}},data(){return{}}};const x=(0,o.Z)(R,[["render",A],["__scopeId","data-v-b1287658"]]);var j=x;const z={class:"station-info"},C={class:"status-title"},L={class:"status-info"};function O(t,a,i,r,n,e){return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("h1",C,(0,h.zw)(i.status[0]),1),(0,s._)("span",L,(0,h.zw)(i.status[1]),1)])}var U={name:"Status",props:{status:{type:Array}}};const Z=(0,o.Z)(U,[["render",O],["__scopeId","data-v-fc0f2636"]]);var H=Z,T={components:{Stations:H,Weather:j},data(){return{baseURL:"http://mypew.ru:3001/stops",arrStop:[],interval:null,count:0,time:"",status:["",""]}},methods:{async loadTrip(){try{let t=(new Date).toLocaleString(),a=t.slice(6,10)+"-"+t.slice(3,5)+"-"+t.slice(0,2)+" "+t.slice(12,20);this.time=t.slice(12,20);const i=await g.ZP.get(this.baseURL+"?uid="+this.$route.params.uid);this.arrStop=i.data.stops,this.arrStop[0].departure>a&&(this.status[0]="Поезд ещё не выехал"),this.arrStop[this.arrStop.length-1].arrival<a&&(this.status[0]="Поезд уже закончил свой маршрут"),console.log(this.arrStop),this.arrStop.forEach(((t,i)=>{t.arrival&&(t.arrivalShow=t.arrival.slice(11,16)),t.departure&&(t.departureShow=t.departure.slice(11,16)),t.departure>a&&t.arrival<a?(this.status[0]="Стоянка на станции "+t.title,i<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[i+1].title)):i<this.arrStop.length-1&&t.departure<a&&this.arrStop[this.arrStop.length-1].arrival>a&&(this.status[0]=t.title+" - "+this.arrStop[i+1].title,i<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[i+1].title))})),this.interval=setInterval((()=>{t=(new Date).toLocaleString(),a=t.slice(6,10)+"-"+t.slice(3,5)+"-"+t.slice(0,2)+" "+t.slice(12,20),this.time=t.slice(12,20),this.arrStop.forEach(((t,i)=>{t.departure>a&&t.arrival<=a?(this.status[0]="Стоянка на станции "+t.title,i<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[i+1].title)):i<this.arrStop.length-1&&t.departure<=a&&this.arrStop[this.arrStop.length-1].arrival>a&&(this.status[0]=t.title+" - "+this.arrStop[i+1].title,i<this.arrStop.length-1&&(this.status[1]="Следующая остановка – "+this.arrStop[i+1].title))}))}),1e3)}catch(t){alert("Error: "+t)}}},created(){this.loadTrip()}};const P=(0,o.Z)(T,[["render",m],["__scopeId","data-v-105d4672"]]);var I=P,W=(i(7658),i.p+"img/arrow-large.649a16de.svg");const Y=t=>((0,s.dD)("data-v-42529f18"),t=t(),(0,s.Cn)(),t),K={class:"window search"},F=Y((()=>(0,s._)("h1",{class:"header"},"Расписание электричек",-1))),M={class:"form"},V={class:"from"},$=Y((()=>(0,s._)("label",{for:"from",class:"from__label"},"Откуда",-1))),q=["onClick"],B=Y((()=>(0,s._)("img",{src:W,alt:"",draggable:"false"},null,-1))),G={class:"to"},J=Y((()=>(0,s._)("label",{for:"to",class:"to__label"},"Куда",-1))),N=["onClick"],Q=Y((()=>(0,s._)("input",{type:"date",id:"date",class:"date"},null,-1))),X=Y((()=>(0,s._)("div",{class:"headings"},[(0,s._)("p",null,"Отпр."),(0,s._)("p",null,"Приб."),(0,s._)("p",null,"В пути"),(0,s._)("p",null,"Маршрут")],-1))),tt=Y((()=>(0,s._)("hr",null,null,-1))),at={class:"wrapper"},it=["value","onClick"],rt={class:"parameters"},st={class:"parameter"},nt={class:"parameter"},et={class:"parameter"},ot={class:"parameter"},lt=Y((()=>(0,s._)("hr",null,null,-1)));function dt(t,a,i,n,e,o){return(0,s.wg)(),(0,s.iD)("main",{style:(0,h.j5)(e.isResultHidden?"justify-content: center":"")},[(0,s._)("div",K,[F,(0,s._)("div",M,[(0,s._)("div",V,[(0,s.wy)((0,s._)("input",{type:"text",id:"from",class:"from__input",placeholder:" ",autocomplete:"off",onClick:a[0]||(a[0]=t=>o.clickStartStation()),"onUpdate:modelValue":a[1]||(a[1]=t=>e.startStation=t),style:(0,h.j5)(e.isAvailStart?"border-radius: 10px 10px 0 0":"border-radius: 10px")},null,4),[[r.nr,e.startStation]]),$,(0,s._)("div",{class:"search-results",style:(0,h.j5)(e.isAvailStart?"display: block":"display: none")},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.arrStartStation,(t=>((0,s.wg)(),(0,s.iD)("button",{onClick:a=>o.addStartStation(t.station_name),class:"element-button",key:t.station_yandex_code},(0,h.zw)(t.station_name),9,q)))),128))],4)]),B,(0,s._)("div",G,[(0,s.wy)((0,s._)("input",{type:"text",id:"to",class:"to__input",placeholder:" ",autocomplete:"off",onClick:a[2]||(a[2]=t=>o.clickEndStation()),"onUpdate:modelValue":a[3]||(a[3]=t=>e.endStation=t),style:(0,h.j5)(e.isAvailEnd?"border-radius: 10px 10px 0 0":"border-radius: 10px")},null,4),[[r.nr,e.endStation]]),J,(0,s._)("div",{class:"search-results",style:(0,h.j5)(e.isAvailEnd?"display: block":"display: none")},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.arrEndStation,(t=>((0,s.wg)(),(0,s.iD)("button",{onClick:a=>o.addEndStation(t.station_name),class:"element-button",key:t.station_yandex_code},(0,h.zw)(t.station_name),9,N)))),128))],4)]),Q,(0,s._)("button",{class:"search-button",onClick:a[4]||(a[4]=t=>o.getStation())},"Найти маршруты")])]),(0,s._)("div",{class:"window results",style:(0,h.j5)(e.isResultHidden?"display: none":"")},[X,tt,(0,s._)("div",at,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.arrRoute,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"results-list",key:a.uid,value:a.uid,onClick:i=>{t.$router.push("/trip/"+a.uid)}},[(0,s._)("div",rt,[(0,s._)("span",st,(0,h.zw)(a.depShow),1),(0,s._)("span",nt,(0,h.zw)(a.arrShow),1),(0,s._)("span",et,(0,h.zw)(a.travelTimeShow),1),(0,s._)("span",ot,(0,h.zw)(a.title),1)]),lt],8,it)))),128))])],4)],4)}var ct={data(){return{startStation:"",endStation:"",baseURL:"http://mypew.ru:3001/routes",findURL:"http://mypew.ru:3001/possible",arrRoute:[],arrStartStation:[],isAvailStart:!1,arrEndStation:[],isAvailEnd:!1,isResultHidden:!0,selectStartStation:!1,selectEndStation:!1}},methods:{async changeStartStation(){this.startStation=this.startStation.trimStart();let t=this.startStation;if(""==this.startStation||this.selectStartStation)this.selectStartStation=!1,this.isAvailStart=!1,this.arrStartStation=[];else try{const a=await g.ZP.get(this.findURL+"?station_name="+this.startStation.trim());t===this.startStation&&(this.arrStartStation=a.data,0!==this.arrStartStation.length?this.isAvailStart=!0:(this.arrStartStation=[],this.isAvailStart=!1))}catch(a){alert("Error: "+a)}},async changeEndStation(){this.endStation=this.endStation.trimStart();let t=this.endStation;if(""==this.endStation||this.selectEndStation)this.selectEndStation=!1,this.isAvailEnd=!1,this.arrEndStation=[];else try{const a=await g.ZP.get(this.findURL+"?station_name="+this.endStation);t===this.endStation&&(this.arrEndStation=a.data,0!==this.arrEndStation.length?this.isAvailEnd=!0:(this.arrEndStation=[],this.isAvailEnd=!1))}catch(a){alert("Error: "+a)}},clickStartStation(){this.selectStartStation=!1,this.arrEndStation=[],this.isAvailEnd=!1,this.changeStartStation()},clickEndStation(){this.selectEndStation=!1,this.arrStartStation=[],this.isAvailStart=!1,this.changeEndStation()},addStartStation(t){this.selectStartStation=!0,this.startStation=t,this.arrStartStation=[],this.isAvailStart=!1},addEndStation(t){this.selectEndStation=!0,this.endStation=t,this.arrEndStation=[],this.isAvailEnd=!1},async getStation(){let t=(new Date).toLocaleString();t.slice(6,10),t.slice(3,5),t.slice(0,2);if(this.arrStartStation=[],this.isAvailEnd=!1,this.arrEndStation=[],this.isAvailStart=!1,this.isResultHidden=!1,""!=this.startStation||""!=this.endStation)try{const t=await g.ZP.get(this.baseURL+"?from="+this.startStation+"&to="+this.endStation+"&transport_types=suburban&date=2022-11-01");this.arrRoute=t.data,console.log(this.arrRoute),this.arrRoute.map((t=>{t.depShow=t.dep.slice(11,16),t.arrShow=t.arr.slice(11,16);let a=(new Date(t.arr)-new Date(t.dep))/6e4,i=0;a>=60?(i=Math.trunc(a/60),t.travelTimeShow=i+" ч "):t.travelTimeShow="",t.travelTimeShow+=a-60*i+" м"}))}catch(a){alert("Error: "+a)}}},watch:{startStation:function(){this.changeStartStation()},endStation:function(){this.changeEndStation()}},created(){document.addEventListener("click",(()=>{this.selectStartStation=!1,this.arrEndStation=[],this.isAvailEnd=!1,this.selectEndStation=!1,this.arrStartStation=[],this.isAvailStart=!1}))}};const ht=(0,o.Z)(ct,[["render",dt],["__scopeId","data-v-42529f18"]]);var ut=ht;const St=[{path:"/trip/:uid",component:I},{path:"/",component:ut}],pt=(0,c.p7)({routes:St,history:(0,c.r5)("/RZD-Ride-Frontend/")});var vt=pt;(0,r.ri)(d).use(vt).mount("#app")}},a={};function i(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return t[r](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(a,r,s,n){if(!r){var e=1/0;for(c=0;c<t.length;c++){r=t[c][0],s=t[c][1],n=t[c][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||e>=n)&&Object.keys(i.O).every((function(t){return i.O[t](r[l])}))?r.splice(l--,1):(o=!1,n<e&&(e=n));if(o){t.splice(c--,1);var d=s();void 0!==d&&(a=d)}}return a}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,s,n]}}(),function(){i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,{a:a}),a}}(),function(){i.d=function(t,a){for(var r in a)i.o(a,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){i.p="/RZD-Ride-Frontend/"}(),function(){var t={143:0};i.O.j=function(a){return 0===t[a]};var a=function(a,r){var s,n,e=r[0],o=r[1],l=r[2],d=0;if(e.some((function(a){return 0!==t[a]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var c=l(i)}for(a&&a(r);d<e.length;d++)n=e[d],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(c)},r=self["webpackChunkrzd_ride_frontend"]=self["webpackChunkrzd_ride_frontend"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(6954)}));r=i.O(r)})();
//# sourceMappingURL=app.2eb59e0e.js.map