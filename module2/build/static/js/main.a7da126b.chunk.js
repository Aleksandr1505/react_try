(window.webpackJsonpmodule2=window.webpackJsonpmodule2||[]).push([[0],{1:function(e,n,t){e.exports={primaryColor:"rgb(85, 103, 150)",container:"Mailbox_container__xDhQ0",title:"Mailbox_title__1vGrE",newTitle:"Mailbox_newTitle__2E7LO Mailbox_title__1vGrE"}},11:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"JS"},{"id":"id-2","name":"React"},{"id":"id-3","name":"React Router"},{"id":"id-4","name":"Redux"}]')},15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),o=t.n(l),c={width:"640px",margin:"0 auto",backgroundColor:"gold",padding:"20px"},i={textAlign:"center"},m={width:"90px",display:"block",margin:"0 auto"},u=function(e){var n=e.imgUrl,t=e.alt,a=e.name,l=e.price,o=e.textButton;return console.log(n),r.a.createElement("div",{style:c},r.a.createElement("img",{src:n,alt:t,width:"640"}),r.a.createElement("h2",{style:i},a),r.a.createElement("p",{style:i},"Price: ",l,"$"),r.a.createElement("button",{style:m,type:"button"},o))},s=(t(20),function(e){var n=e.title,t=e.children;return r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"title"},n),t)});s.defaultProps={title:"User profile"};var d=s;t(21);var p=function(e){var n=e.name,t=e.email;return r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Name: ",n),r.a.createElement("p",null,"Email: ",t))},g=t(12),E=t(1),f=t.n(E),b=function(e){var n=e.unreadMessages;return r.a.createElement("div",{className:f.a.container},r.a.createElement("h1",{className:f.a.newTitle},"Hello!"),n.length>0?r.a.createElement("p",null,"You have ",n.length," unread messages. Sum props:"," ",function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return[].concat(n).reduce(function(e,n){return e+n},0)}.apply(void 0,Object(g.a)(n))," "):r.a.createElement("p",null,"No unread messages."))},h=t(2),v=t(3);function x(){var e=Object(h.a)(["\ncolor: blue;\npadding: 2rem;\nbackground-color: ",";\n:focus,\n:hover {\n  background-color: teal;\n  color: white;\n}\n"]);return x=function(){return e},e}function w(){var e=Object(h.a)(["\n  margin: 2rem auto;\n  padding: 0;\n  width: 800px;\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  border: 1px solid black;\n  background-color: ",";\n  "]);return w=function(){return e},e}var y=v.a.ul(w(),function(e){return e.bgColor}),_=v.a.li(x(),function(e){return e.Color}),M=function(e){var n=e.items,t=e.color;return r.a.createElement(y,{bgColor:t},n.map(function(e){return r.a.createElement(_,{Color:"green",key:e.id},r.a.createElement("span",null,e.name))}))},k=t(11),N=[1,2,3,4,54,546],C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{imgUrl:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640",alt:"Tacos With Lime",name:"Tacos With Lime",price:10,textButton:"Add to cart"}),r.a.createElement(d,null,r.a.createElement(p,{name:"Mango2",email:"mango2@mail.com"}),r.a.createElement(p,{name:"Mango2",email:"mango2@mail.com"}),r.a.createElement(p,{name:"Mango3",email:"mango3@mail.com"}),r.a.createElement(p,{name:"Mango4",email:"mango4@mail.com"})),r.a.createElement(b,{unreadMessages:N}),r.a.createElement(M,{items:k,color:"yellow"}))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a7da126b.chunk.js.map