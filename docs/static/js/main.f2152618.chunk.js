(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),i=a.n(r),c=(a(89),a(66)),l=a(67),d=a(80),s=a(68),u=a(81),m=a(36),p=a(153),h=a(69),v=(a(103),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={arr:["https://www.youtube.com/watch?v=IKuoOTRO1eo"],count:0,videoId:"IKuoOTRO1eo"},a.playlist=function(){var e=document.getElementById("ip").value;console.log(a.state.arr+a.state.count),a.state.arr[a.state.count]=e;var t=a.state.arr[a.state.count],n=document.createElement("li");n.innerHTML=t,document.getElementById("box").appendChild(n);var o=document.createElement("button");o.innerHTML="Play",o.id="play",o.onclick=function(){return a.play(e)},o.type="primary",document.getElementById("box").appendChild(o),a.state.count=a.state.count+1},a.delete=function(){for(var e=0;e<a.state.arr.length-1;e++)a.state.arr[e]=a.state.arr[e+1];a.setState({videoId:a.state.arr[0].slice(-11)}),console.log("delete called"+a.state.videoId)},a.play=function(e){for(var t=0;t<e.length;t++)"="==e[t]&&(a.state.videoId=e.substring(t+1,e.length),console.log(a.state.videoId));a.setState({videoId:e.slice(-11)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;p.a.Search;return o.a.createElement("div",{className:"contain"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"PLAYLIST"),o.a.createElement("div",null,o.a.createElement(p.a,{id:"ip",placeholder:"Input the URL"}),o.a.createElement(m.a,{id:"add",type:"primary",onClick:function(){return e.playlist()}},"Add")),o.a.createElement("div",null,o.a.createElement("ol",{id:"box"})),o.a.createElement("div",{id:"video"},o.a.createElement(h.a,{id:"you",videoId:this.state.videoId,opts:{height:"390",width:"640",playerVars:{autoplay:1}},onReady:(this._onReady,function(){return e.play(e.state.arr[0])}),onEnd:function(){return e.delete()}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(152)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.f2152618.chunk.js.map