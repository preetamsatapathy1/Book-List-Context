(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),i=n(6),a=n.n(i),u=(n(17),n(7)),s=n(8),j=n(11),b=n(9),l=n(3),d=n(10),h=n(20),O=Object(o.createContext)(),v=function(e){var t=Object(o.useState)([{title:"Name of the Wind",author:"Patrick RuthFoss",id:1},{title:"The Final Empire",author:"Brandon Sanderson",id:2}]),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(c.jsx)(O.Provider,{value:{books:r,addBook:function(e,t){i([].concat(Object(d.a)(r),[{title:e,author:t,id:Object(h.a)()}]))},removeBook:function(e){i(r.filter((function(t){return t.id!==e})))}},children:e.children})},x=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(""),a=Object(l.a)(i,2),u=a[0],s=a[1],j=Object(o.useContext)(O).addBook;return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,u),r(""),s("")},children:[Object(c.jsx)("input",{type:"text",value:n,placeholder:"Book Title.. ",name:"book",onChange:function(e){return r(e.target.value)},required:!0}),Object(c.jsx)("input",{type:"text",value:u,placeholder:"Author Name .. ",name:"author",onChange:function(e){return s(e.target.value)},required:!0}),Object(c.jsx)("input",{type:"submit",value:"Add Book"})]})},f=function(e){var t=e.book,n=Object(o.useContext)(O).removeBook;return Object(c.jsxs)("li",{onClick:function(){return n(t.id)},children:[Object(c.jsx)("div",{className:"title",children:t.title}),Object(c.jsx)("div",{className:"author",children:t.author})]})},m=function(){var e=Object(o.useContext)(O).books;return e.length?Object(c.jsx)("div",{className:"book-list",children:Object(c.jsx)("ul",{children:e.map((function(e){return Object(c.jsx)(f,{book:e},e.id)}))})}):Object(c.jsx)("div",{className:"empty",children:"No Books to Read"})},p=function(){var e=Object(o.useContext)(O).books;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("h1",{children:"Ninja Reading List"}),Object(c.jsxs)("p",{children:["Currently you have ",e.length," books."]})]})},k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(v,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(m,{}),Object(c.jsx)(x,{})]})})}}]),n}(r.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(k,{}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.40b3cf47.chunk.js.map