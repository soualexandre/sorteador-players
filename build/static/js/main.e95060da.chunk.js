(this.webpackJsonpsorteador=this.webpackJsonpsorteador||[]).push([[0],{24:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o=t(0),d=t.n(o),s=t(16),l=t.n(s),p=(t(24),t(20)),b=t(2),j=t(15),h=t(3),u=t(14),x=t(1),f=d.a.createContext({}),g=function(n){var e=Object(o.useState)([]),t=Object(u.a)(e,2),r=t[0],i=t[1],a=Object(o.useState)([]),c=Object(u.a)(a,2),d=c[0],s=c[1];return Object(x.jsx)(f.Provider,{value:{player:r,setPlayer:i,cutPlayers:d,setCutPlayers:s},children:n.children})},O=function(){return d.a.useContext(f)},m=t(4),v=m.a.div(r||(r=Object(h.a)(["\n  list-style: none;\n  padding-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]))),w=m.a.div(i||(i=Object(h.a)(["\n  position: relative;\n  width: 60vw;\n  height: 15px;\n  border: 1px solid gray;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n  background: #1C1F23;\n  font-size: 18px;\n  list-style: none;\n  margin-bottom: 15px;\n  color: white;\n  overflow: hidden;\n  &:hover{\n    background:rgba(0, 0, 0, 0.2);\n  }\n"]))),y=m.a.p(a||(a=Object(h.a)(["\nbackground: #1C1F23 ;\n  font-weight: lighter;\n"]))),k=m.a.h1(c||(c=Object(h.a)(["\ncolor: #fff;\n  font-weight: bold;\n  text-align:center;\n  font-size: 14px;\n"])));var C,S,B,z,D,P=function(){var n=O().player,e=JSON.parse(localStorage.getItem("cut")),t=function(){for(var t=n,r=[],i=e,a=0;a<t.length;a+=i)r.push(t.slice(a,a+i));return r}();return Object(x.jsx)(v,{children:t.map((function(n){return Object(x.jsxs)("section",{children:[Object(x.jsx)(k,{children:"Grupo"}),n.map((function(n){return Object(x.jsx)("li",{children:Object(x.jsx)(w,{children:Object(x.jsx)(y,{children:n.value})})},n.id)}))]},n[0].id)}))})},F=t(28),I=m.a.div(C||(C=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n"]))),N=m.a.form(S||(S=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n"]))),E=m.a.input(B||(B=Object(h.a)(["\n  width: 40vw;\n  height: 25px;\n  border-radius: 2px;\n  color: Black;\n  padding: 10px;\n  font-size: 18px;\n  border: 1px solid #fff;\n  @media(max-width: 800px) {\n    width: 45vw;\n  }\n"]))),A=m.a.input(z||(z=Object(h.a)(["\n  width: 5vw;\n  height: 25px;\n  border-radius: 2px;\n  color: Black;\n  margin-left:10px;\n  padding: 10px;\n  font-size: 12px;\n  border: 1px solid #fff;\n  @media(max-width: 800px) {\n    width: 5vw;\n  }\n"]))),J=m.a.input(D||(D=Object(h.a)(["\n  width: 10vw;\n  height: 47px;\n  border-radius: 2px;\n  color: black;\n  font-weight: bolder;\n  padding: 10px;\n  background: #BAEBDD;\n  margin-left: 10px;\n  border: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  @media(max-width: 800px) {\n    width: 20vw;\n    height: 8vh;\n  }\n  &:hover{\n    background:#8be37f;\n  }\n"])));var M,G,R,q,H=function(){var n=O(),e=n.player,t=n.setPlayer,r=Object(o.useRef)(null),i=Object(o.useState)(),a=Object(u.a)(i,2),c=a[0],d=a[1];return console.log(c),localStorage.setItem("cut",c),Object(x.jsx)(I,{children:Object(x.jsxs)(N,{onSubmit:function(n){n.preventDefault();var i=r.current.value;""!==i&&t([].concat(Object(F.a)(e),[{id:e.length,value:i,order:0}])),n.target.reset()},children:[Object(x.jsx)(E,{placeholder:"insira um nome",ref:r}),Object(x.jsx)(A,{placeholder:"Numero de participantes",type:"Number",onChange:function(n){return d(n.target.value)}}),Object(x.jsx)(J,{type:"submit",value:"Adicionar",className:"Button"})]})})},K=t.p+"static/media/delete.a8f66609.svg",L=m.a.div(M||(M=Object(h.a)(["\n  list-style: none;\n  padding-top: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n\n"]))),Q=m.a.div(G||(G=Object(h.a)(["\n  position: relative;\n  width: 55vw;\n  height: 10px;\n  border: 1px solid gray;\n  padding: 20px;\n  background: #1C1F23;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  font-size: 18px;\n  list-style: none;\n  color: white;\n  overflow: hidden;\n\n  @media(max-width: 800px) {\n    width: 90vw;\n  }\n  &:hover{\n    background:rgba(0, 0, 0, 0.2);\n  }\n\n"]))),T=m.a.img(R||(R=Object(h.a)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 20px;\n"]))),U=m.a.p(q||(q=Object(h.a)(["\nbackground: #1C1F23 ;\nfont-weight: lighter;\n\n"])));var V,W,X=function(){var n=O(),e=n.player,t=n.setPlayer;function r(n){var r=e.filter((function(e){return e.id!==n}));t(r)}return Object(x.jsx)(L,{children:e.map((function(n){return Object(x.jsx)("li",{children:Object(x.jsx)(Q,{children:Object(x.jsxs)(U,{ml:"10",mb:"0",as:"h4",size:"md",children:[n.value,Object(x.jsx)(T,{src:K,onClick:function(){return r(n.id)}})]})})},n.id)}))})},Y=m.a.div(V||(V=Object(h.a)(["\n  position: relative;\n"]))),Z=m.a.button(W||(W=Object(h.a)(["\n  position: fixed;\n  right: 12%;\n  bottom: 5vh;\n  width: 80px;\n  border: 0;\n  height: 80px;\n  border-radius: 100%;\n  background: #BAEBDD;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  z-index: 1;\n  @media(max-width: 800px) {\n    right: 8%;\n  }\n  &:hover{\n    background:#8be37f;\n  }\n"])));var $,_=function(){var n=O().player,e=localStorage.getItem("cut"),t=Object(b.f)();return Object(x.jsx)(Y,{children:Object(x.jsx)(Z,{onClick:function(){n.forEach((function(n){var e=(100*Math.random()+100*Math.random())/2;n.order=e})),n.sort((function(n,e){return!(n.order<e.order)||-1})),n.length>1||""!==e?(t.push("/result"),j.b.success("Os participantes foram sorteado com sucesso")):j.b.error("Insira mais participantes para poder sortear")},children:"Sortear"})})},nn=m.a.h1($||($=Object(h.a)(["\n  display: flex;\n  margin-top: 35px;\n  justify-content: center;\n  color: white;\n  text-align: center;\n"])));var en=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"Dashboard",children:[Object(x.jsx)(_,{}),Object(x.jsx)(nn,{children:"Sorteador de participantes"}),Object(x.jsx)(H,{}),Object(x.jsx)(X,{})]})})},tn=(t(40),function(){return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(j.a,{autoClose:8e3,position:"bottom-left"}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/dashboard",children:Object(x.jsx)(en,{})}),Object(x.jsx)(b.a,{exact:!0,path:"/result",children:Object(x.jsx)(P,{})}),Object(x.jsx)(b.a,{exact:!0,path:"/",children:Object(x.jsx)(en,{})})]})]})});l.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(g,{children:Object(x.jsx)(tn,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e95060da.chunk.js.map