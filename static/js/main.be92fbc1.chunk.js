(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{12:function(t,e,a){t.exports={contactList:"ContactList_contactList__2vWu-",contactListItem:"ContactList_contactListItem__2eqLB",enter:"ContactList_enter__16X14",enterActive:"ContactList_enterActive__XbEoy",exit:"ContactList_exit__3jS_g",exitActive:"ContactList_exitActive__3DDW1"}},14:function(t,e,a){t.exports={deleteButton:"ContactListItem_deleteButton__7Ddzb",contactField:"ContactListItem_contactField__1LLFa"}},15:function(t,e,a){t.exports={form:"ContactForm_form__1GcDb",submitButton:"ContactForm_submitButton__32X10"}},20:function(t,e,a){t.exports={filter:"Filter_filter__rsY-x"}},22:function(t,e,a){t.exports={notification:"Notification_notification__3rzIw"}},26:function(t,e,a){t.exports=a(36)},31:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),i=(a(31),a(23)),s=a(6),l=a(7),m=a(11),u=a(10),p=a(19),_=a(37),f=a(20),v=a.n(f);function h(t){var e=t.value,a=t.onChangeFilter;return c.a.createElement("label",{htmlFor:"filter",className:v.a.filter},"Find contacts by name",c.a.createElement("input",{type:"search",name:"filter",value:e,onChange:a}))}var b=a(38),d=a(14),g=a.n(d);function E(t){var e=t.contact,a=t.onDeleteContact;return c.a.createElement("div",{className:g.a.contactField},c.a.createElement("span",null,e.name," : ",e.number),c.a.createElement("button",{className:g.a.deleteButton,type:"button",onClick:function(){return a(e.id)}},"X"))}var C=a(12),x=a.n(C);function F(t){var e=t.contacts,a=t.onDeleteContact;return c.a.createElement(b.a,{component:"ul",className:x.a.contactList},e.map((function(t){return c.a.createElement(_.a,{key:t.id,timeout:250,classNames:x.a},c.a.createElement("li",{className:x.a.contactListItem},c.a.createElement(E,{contact:t,onDeleteContact:a})))})))}var A=a(21),S=a(9),y=a(15),L=a.n(y),N=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(S.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.state.name&&t.state.number&&(t.props.onSubmitData(Object(A.a)({},t.state)),t.reset())},t}return Object(l.a)(a,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit,className:L.a.form},c.a.createElement("label",{htmlFor:"name"},"Name",c.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:e,required:!0,onChange:this.handleChange})),c.a.createElement("label",{htmlFor:"number"},"Number",c.a.createElement("input",{type:"tel",placeholder:"Enter number",name:"number",value:a,required:!0,onChange:this.handleChange})),c.a.createElement("button",{className:L.a.submitButton,type:"submit"},"Add contact")))}}]),a}(n.Component),D=a(22),O=a.n(D);function j(t){var e=t.message;return c.a.createElement("div",{className:O.a.notification},e)}var k=a(5),I=a.n(k),w=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",message:"",alertMessage:!1},t.onSubmitData=function(e){var a=t.state.contacts,n={id:Object(p.v4)(),name:e.name,number:e.number};if(a.find((function(t){return t.name===n.name})))return t.setState({alertMessage:!0,message:"Contact ".concat(n.name," already exists!")}),void setTimeout((function(){t.setState({alertMessage:!1})}),2e3);t.setState({contacts:[].concat(Object(i.a)(a),[n])})},t.onDeleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t.changeFilter=function(e){var a=e.target.value;t.setState({filter:a})},t.getFilteredContacts=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=t.alertMessage,o=t.message,r=this.getFilteredContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:I.a.container},c.a.createElement(_.a,{in:!0,appear:!0,timeout:500,classNames:I.a,unmountOnExit:!0},c.a.createElement("h1",{className:I.a.logo},"Phonebook")),c.a.createElement(_.a,{in:n,timeout:500,classNames:I.a,unmountOnExit:!0},c.a.createElement(j,{message:o})),c.a.createElement(N,{onSubmitData:this.onSubmitData}),c.a.createElement(_.a,{in:e.length>1,timeout:250,classNames:I.a,unmountOnExit:!0},c.a.createElement(h,{value:a,onChangeFilter:this.changeFilter})),c.a.createElement(F,{contacts:r,onDeleteContact:this.onDeleteContact})))}}]),a}(n.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))},5:function(t,e,a){t.exports={container:"App_container__3CqU7",logo:"App_logo__1iqIF",appear:"App_appear__Bd0Dx",appearActive:"App_appearActive__18qFv",enter:"App_enter__8mGob",enterActive:"App_enterActive__3e7uh",exit:"App_exit__2xQF8",exitActive:"App_exitActive__1xmf3"}}},[[26,1,2]]]);
//# sourceMappingURL=main.be92fbc1.chunk.js.map