(this["webpackJsonpgorditos-community-spa-react"]=this["webpackJsonpgorditos-community-spa-react"]||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/logo.babcb831.png"},25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l),c=(t(30),t(12)),i=t(9),m=(t(31),t(2)),s=t(3),u=t(5),p=t(4),d=t(11),b=t.n(d),E=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{src:b.a,alt:"Cuisine",className:"logo"}),r.a.createElement("h1",null,"Gorditos ",r.a.createElement("span",{style:{color:this.props.spancolor}},"Community")))}}]),t}(r.a.Component),h=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return console.log("Aasd"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Gorditos ",r.a.createElement("span",null,"Community")),r.a.createElement("p",null,"Es una plataforma para el encuentro de aquellos que compartimos algo muy especial: el amor por la comida. Seas cocinero o cocinera profesional, amateur o simplemente amante de la comida, \xa1Este es tu lugar!"),r.a.createElement("button",null,r.a.createElement(c.b,{to:"/users",className:"link"},"Entrar"))),r.a.createElement("div",null,r.a.createElement("img",{id:"bodyHomeImg",src:b.a,alt:"Logo"}))))}}]),t}(r.a.Component),g=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"subheader"},r.a.createElement("img",{src:b.a,className:"logo",alt:"Cuisine"}),r.a.createElement("h2",null,"Gorditos ",r.a.createElement("span",null,"Community")))}}]),t}(r.a.Component),f=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"userDiv"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png",className:"userImg",alt:"person"})),r.a.createElement("div",null,r.a.createElement("div",{className:"userData"},this.props.name),r.a.createElement("div",{className:"userData"},this.props.email),r.a.createElement("div",{className:"userData"},this.props.phone)))}}]),t}(r.a.Component),v=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={users:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({users:[{id:"1",full_name:"Michael Jackson",email:"michaeljackson@gmail.com",phone_number:"4294967295"},{id:"2",full_name:"Calamardo Esponja",email:"calamardoesponja@gmail.com",phone_number:"94848393"},{id:"3",full_name:"Pedro Picapiedra",email:"pedropicapiedra@gmail.com",phone_number:"1247466245"},{id:"4",full_name:"Patricio Estrella",email:"patricioestrella@gmail.com",phone_number:"7768595943"},{id:"5",full_name:"Peter Pan",email:"peterpan@gmail.com",phone_number:"49857574893"},{id:"6",full_name:"Frodo Baggins",email:"frodobaggins@gmail.com",phone_number:"1394857533"},{id:"7",full_name:"Clark Kent",email:"clarkkent@gmail.com",phone_number:"8867689392"},{id:"8",full_name:"Captain America",email:"captainamerica@gmail.com",phone_number:"8447575843"},{id:"9",full_name:"Paty Mayonnaise",email:"patymayonnaise@gmail.com",phone_number:"42338374656"}]})}},{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{id:"usersContainer"},console.log(e),e.map((function(e){return r.a.createElement(f,{name:e.full_name,email:e.email,phone:e.phone_number,key:e.id})})))}}]),t}(r.a.Component),y=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"bodyUsers"},r.a.createElement(g,null),r.a.createElement("div",{className:"btn_container"},r.a.createElement("button",null,r.a.createElement(c.b,{to:"/register",className:"link"},"Registrarse"))),r.a.createElement(v,null))}}]),t}(r.a.Component),j=t(14),O=t(18),C=t.n(O),_=t(24),k=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={name:"",email:"",phonenumber:"",username:"",address:"",password:""},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=function(){var a=Object(_.a)(C.a.mark((function a(){var t,n,r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"http://localhost:3000/users/create",t={username:e.state.username,full_name:e.state.name,email:e.state.email,phone_number:e.state.phonenumber,address:e.state.address,password:e.state.password},a.next=4,fetch("http://localhost:3000/users/create",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return n=a.sent,a.next=7,n.json();case 7:r=a.sent,console.log(r);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{id:"bodyRegister"},r.a.createElement(g,null),r.a.createElement("div",{className:"registerBody body"},r.a.createElement("div",{className:"badgeContainer"},r.a.createElement("div",{id:"badge"},r.a.createElement(E,{spancolor:"yellow"}),r.a.createElement("img",{src:"https://img2.pngio.com/generic-person-logo-logodix-generic-person-icon-png-649_659.png",id:"userImg2",alt:"person"}),r.a.createElement("div",{id:"nameContainer"},this.state.name),r.a.createElement("div",{id:"emailContainer"},this.state.email),r.a.createElement("div",{id:"phoneContainer"},this.state.phonenumber))),r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",null,r.a.createElement("h4",null,"New Member"),r.a.createElement("label",null,"Full name"),r.a.createElement("input",{type:"text",onChange:function(a){return e.setState({name:a.target.value})}}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",onChange:function(a){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{email:a.target.value}))}}),r.a.createElement("label",null,"Phone number"),r.a.createElement("input",{type:"text",onChange:function(a){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{phonenumber:a.target.value}))}}),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",onChange:function(a){return e.setState({username:a.target.value})}}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",onChange:function(a){return e.setState({address:a.target.value})}}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement("button",{onClick:a},"Enviar")))))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",null,r.a.createElement(E,{spancolor:"yellow"}),r.a.createElement(c.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:h}),r.a.createElement(i.a,{exact:!0,path:"/users",render:function(){return r.a.createElement(y,{nameclass:"position"})}}),r.a.createElement(i.a,{exact:!0,path:"/register",component:k})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3ea5231b.chunk.js.map