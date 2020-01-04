(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={btn:"Contact_btn__1GbhC"}},13:function(e,t,n){e.exports={item:"ContactList_item__3YsZK"}},15:function(e,t,n){e.exports=n(23)},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),l=n(1),u=n(14),i=n(2),m=n(3),s=n(5),b=n(4),h=n(6),f=n(8),p=n(7),d=n.n(p),C=n(9),E=n.n(C),v={name:"",number:""},g={inputName:d()(),inputNumber:d()()},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state=Object(f.a)({},v),n.handleChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.submitForm=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;(0,n.props.onSubmitContact)({name:a,number:r,id:d()()}),n.reset()},n.reset=function(){n.setState(Object(f.a)({},v))},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:E.a.form,onSubmit:this.submitForm},r.a.createElement("label",{htmlFor:g.inputName},r.a.createElement("p",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,id:g.inputName})),r.a.createElement("label",{htmlFor:g.inputNumber},r.a.createElement("p",null,"Number"),r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange,id:g.inputNumber})),r.a.createElement("button",{className:E.a.btn,type:"submit"},"Add contact"))}}]),t}(a.Component),j=function(e){var t=e.filter,n=e.onFilterChange;return r.a.createElement("div",null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{type:"text",name:"filter",value:t,onChange:n}))},y=n(12),F=n.n(y),N=function(e){var t=e.name,n=e.number,a=e.onDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"".concat(t,": ").concat(n)),r.a.createElement("button",{className:F.a.btn,type:"button",onClick:a},"Delete"))},_=n(13),k=n.n(_),w=function(e){var t=e.contacts,n=e.onDelete;return t.length>0&&r.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.number,c=e.id;return r.a.createElement("li",{className:k.a.item,key:t},r.a.createElement(N,{name:t,number:a,onDelete:function(){return n(c)}}))})))},S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(e){n.state.contacts.filter((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()})).length>0?alert("such name exists"):n.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[e])}}))},n.handleFilterChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.deleteContact=function(e){var t=n.state.contacts;n.setState({contacts:t.filter((function(t){return t.id!==e}))})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(O,{onSubmitContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(j,{filter:n,onFilterChange:this.handleFilterChange}),r.a.createElement(w,{contacts:a,onDelete:this.deleteContact}))}}]),t}(a.Component);n(22);o.a.render(r.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",btn:"ContactForm_btn__2Bpnz"}}},[[15,1,2]]]);
//# sourceMappingURL=main.51416d5d.chunk.js.map