(this["webpackJsonpcoder-house"]=this["webpackJsonpcoder-house"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c.n(n),r=c(40),i=c.n(r),s=(c(49),c(50),c(15)),o=c(2);var j=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"btn-nav",children:e.text})})},b=c(5),d=c(24),l=c(11),u=a.a.createContext(),O=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(l.a)(c,2),r=a[0],i=a[1],s=Object(n.useState)(0),j=Object(l.a)(s,2),b=j[0],O=j[1],h=Object(n.useState)(0),m=Object(l.a)(h,2),x=m[0],p=m[1];return Object(o.jsx)(u.Provider,{value:{onAdd:function(e,t){if(r.find((function(t){return t.id===e.id}))){var c=r.map((function(c){return c.id===e.id&&(c.quantity+=t,c.subtotal+=e.price*t),c}));i(c),p(x+e.price*t)}else i([].concat(Object(d.a)(r),[{key:e.id,id:e.id,name:e.name,price:e.price,quantity:t,subtotal:e.price*t}])),O(b+1),p(x+e.price*t)},cart:r,unit:b,total:x,remove:function(e,t,c){var n=r.filter((function(t){return t.id!==e}));i(n),p(x-c*t)},clear:function(){i([]),p(0)}},children:t})};var h=function(e){var t,c=Object(n.useContext)(u).cart,a=0,r=Object(b.a)(c);try{for(r.s();!(t=r.n()).done;){a+=t.value.quantity}}catch(i){r.e(i)}finally{r.f()}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cart-widget-container",children:[Object(o.jsx)("img",{src:"e-commerceCavagnaro/carrito.png",className:"Logo",alt:"Logo"}),Object(o.jsx)("h4",{className:"cart-qty",children:a})]})})};function m(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"nav-container",children:[Object(o.jsxs)("div",{className:"nav-btn-container",children:[Object(o.jsx)(s.b,{to:"/e-commerceCavagnaro",children:Object(o.jsx)(j,{className:"btn-nav",text:"Inicio"})}),Object(o.jsx)(s.b,{to:"/Mujer/",children:Object(o.jsx)(j,{className:"btn-nav",text:"Mujer"})}),Object(o.jsx)(s.b,{to:"/Hombre/",children:Object(o.jsx)(j,{className:"btn-nav",text:"Hombre"})})]}),Object(o.jsx)(s.b,{to:"/cart",children:Object(o.jsx)(h,{className:"cart-widget"})})]})})}var x=function(e){var t=e.id,c=e.name,n=void 0===c?"":c,a=e.price,r=void 0===a?0:a,i=e.photo,j=void 0===i?"":i,b=e.category,d=void 0===b?"":b,l=e.thumbnail,u=void 0===l?"":l;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)(s.b,{to:"/".concat(d,"/").concat(t),children:[Object(o.jsx)("img",{className:"photo",src:j,alt:u}),Object(o.jsx)("div",{className:"name",children:n}),Object(o.jsx)("div",{className:"price",children:r})]})})},p=c(12),g=c(42),f=c(20);Object(g.a)({apiKey:"AIzaSyAtOYf3ahEDH8BFkQNdmOEYmwuLTbiOhX4",authDomain:"e-commerce-coder-house-9e357.firebaseapp.com",projectId:"e-commerce-coder-house-9e357",storageBucket:"e-commerce-coder-house-9e357.appspot.com",messagingSenderId:"127376930075",appId:"1:127376930075:web:1ce140397cb939496a0fbe"});var v=Object(f.f)(),N=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{className:"greetings",children:e.greetings})})},y=function(){var e=Object(p.f)().category,t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),j=s[0],b=s[1];return Object(n.useEffect)((function(){null!=e?function(e){var t=Object(f.b)(v,"Indumentaria"),c=Object(f.g)(t,Object(f.h)("category","==",e));return Object(f.e)(c)}(e).then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,name:e.data().name,price:e.data().price,photo:e.data().photo,stock:e.data().stock,category:e.data().category})})),r(t),b(!1)})):Object(f.e)(Object(f.b)(v,"Indumentaria")).then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,name:e.data().name,price:e.data().price,photo:e.data().photo,stock:e.data().stock,category:e.data().category})})),r(t),b(!1)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(N,{greetings:"\xa1Sale Off! Aprovech\xe1 las \xfaltimas ofertas"}),j?Object(o.jsx)("h2",{children:"CARGANDO PRODUCTOS..."}):a.map((function(e){return Object(o.jsx)(x,{name:e.name,price:e.price,stock:e.stock,category:e.category,id:e.id,photo:e.photo},e.id)}))]})},k=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"photo-gallery",children:Object(o.jsx)(y,{})})})},C=c(43),S=function(e){var t=Object(n.useState)(0),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(0),s=Object(l.a)(i,2),j=s[0],b=s[1],d=Object(n.useState)(!0),u=Object(l.a)(d,2),O=u[0],h=u[1];Object(n.useEffect)((function(){r(e.stock)}),[a,e.stock]);var m=function(){j<a&&b(j+1)},x=function(){j>=1&&b(j-1)},p=function(){0===j?alert("Elegir un producto"):(h(!1),e.onAdd(j))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"count-container",children:[Object(o.jsxs)("div",{className:"count-btn-container",children:[O?Object(o.jsx)("button",{className:"count-btn",onClick:function(){return m()},children:"+"}):Object(o.jsx)("button",{disabled:!0,className:"count-btn disabled-btn",onClick:function(){return m()},children:"+"}),O?Object(o.jsx)("button",{className:"count-btn",onClick:function(){return x()},children:"-"}):Object(o.jsx)("button",{disabled:!0,className:"count-btn disabled-btn",onClick:function(){return x()},children:"-"})]}),Object(o.jsxs)("div",{className:"count-subtitle",children:["Unidades seleccionadas ",Object(o.jsx)("strong",{children:j})]}),Object(o.jsxs)("div",{className:"count-subtitle",children:["Stock disponible ",Object(o.jsx)("strong",{children:a-j})]}),Object(o.jsx)("div",{className:"add-btn-container",children:O?Object(o.jsx)("button",{onClick:p,children:"Agregar al carrito"}):Object(o.jsx)("button",{disabled:!0,className:"disabled-btn",onClick:p,children:"Agregar al carrito"})})]})})},F=function(e){var t=e.id,c=void 0===t?"":t,a=e.name,r=void 0===a?"":a,i=e.description,j=void 0===i?"":i,b=e.price,d=void 0===b?0:b,O=e.thumbnail,h=void 0===O?"":O,m=e.stock,x=void 0===m?"":m,p=e.photo,g=void 0===p?"":p,f=Object(n.useContext)(u).onAdd,v=Object(n.useState)(!1),N=Object(l.a)(v,2),y=N[0],k=N[1];return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"photo",src:g,alt:h}),Object(o.jsx)("div",{className:"name",children:r}),Object(o.jsx)("div",{className:"price",children:d}),Object(o.jsx)("div",{children:j}),Object(o.jsx)(S,{stock:x,onAdd:function(e){f({id:c,name:r,price:d},e),k(!0)}}),Object(o.jsx)("div",{className:"go-btn-container",children:y?Object(o.jsx)(s.b,{to:"/cart",children:Object(o.jsx)("button",{children:"Ir al carrito"})}):Object(o.jsx)("button",{disabled:!0,className:"disabled-btn",children:"Ir al carrito"})})]})},I=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(l.a)(r,2),s=i[0],j=i[1],b=Object(p.f)().id;return Object(n.useEffect)((function(){(function(e){var t=Object(f.c)(v,"Indumentaria",e);return Object(f.d)(t)})(b).then((function(e){a(Object(C.a)({id:e.id},e.data())),j(!1)}))}),[b]),Object(o.jsx)(o.Fragment,{children:s?Object(o.jsx)("h2",{children:"Cargando productos..."}):Object(o.jsx)(F,{id:c.id,name:c.name,price:c.price,stock:c.stock,thumbnail:c.thumbnail,photo:c.photo,category:c.category},c.id)})},A=function(){var e=Object(n.useContext)(u),t=e.cart,c=e.total,a=e.remove,r=e.clear;return 0===t.length?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(N,{greetings:"El carrito est\xe1 vac\xedo"})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"cart-gallery",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"cart-card",children:[Object(o.jsx)("strong",{children:e.name}),Object(o.jsxs)("h3",{children:["Precio producto ",Object(o.jsxs)("strong",{children:["$ ",e.price]})]}),Object(o.jsxs)("h3",{children:["Cantidad ",Object(o.jsx)("strong",{children:e.quantity})]}),Object(o.jsxs)("h3",{children:["Subtotal \xedtem ",Object(o.jsxs)("strong",{children:["$ ",e.subtotal]})]}),Object(o.jsx)("button",{className:"buy-btn",onClick:function(){return a(e.id,e.price,e.quantity)},children:"Quitar producto"})]})}))}),Object(o.jsxs)("div",{className:"cart-container",children:[Object(o.jsxs)("h3",{children:["Total ",Object(o.jsxs)("strong",{children:["$",c]})]}),Object(o.jsxs)("div",{className:"cart-subcontainer",children:[Object(o.jsx)("button",{className:"buy-btn",onClick:function(){return r()},children:"Vaciar carrito"}),Object(o.jsx)(s.b,{to:"/payment",children:Object(o.jsx)("button",{className:"buy-btn",children:"Comprar"})})]})]})]})},E=function(){var e=[],t=[],c=[],a=[],r=Object(n.useContext)(u),i=r.total,s=r.cart,j=r.clear,b=Object(n.useState)(!1),O=Object(l.a)(b,2),h=O[0],m=O[1],x=function(){!function(){if(0===t.length||0===c.length||0===a.length)console.log("Campos incompletos"),alert("Completar el formulario para terminar compra");else{e={buyer:{name:"".concat(t[t.length-1]),phone:"".concat(c[c.length-1]),email:"".concat(a[a.length-1])},items:[],date:(new Date).toString()};var n=i;s.forEach((function(t){e.items.push(t),e.items.push(n)})),e.totalPrice=n,function(e,t){var c=e.split("/"),n=f.b.apply(void 0,[v].concat(Object(d.a)(c)));return Object(f.a)(n,t)}("\xd3rdenes",e).then((function(e){return console.log(e)})),j(),m(!0)}}()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(N,{greetings:"Formulario de compra"}),h?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("form",{className:"pymt-container",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("h4",{children:"Ingres\xe1 los siguientes datos para finalizar tu compra"}),Object(o.jsx)("input",{type:"text",placeholder:"Nombre y apellido",onChange:function(e){t.push(e.target.value)}}),Object(o.jsx)("input",{type:"email",placeholder:"Direcci\xf3n de email",onChange:function(e){c.push(e.target.value)}}),Object(o.jsx)("input",{type:"number",placeholder:"N\xfamero de tel\xe9fono",onChange:function(e){a.push(e.target.value)}}),Object(o.jsxs)("h4",{children:["Total ",Object(o.jsxs)("strong",{children:[" $ ",i]})]}),Object(o.jsx)("button",{className:"buy-btn",onClick:function(){x()},children:"Finalizar compra"})]}),h?Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("strong",{children:Object(o.jsx)("h2",{children:"La operaci\xf3n ha sido exitosa"})}),Object(o.jsx)("h2",{children:"\xa1Muchas gracias por tu compra!"})]}):Object(o.jsx)(o.Fragment,{})]})};var w=function(){return Object(o.jsx)(s.a,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(O,{children:[Object(o.jsx)(m,{}),Object(o.jsxs)(p.c,{children:[Object(o.jsx)(p.a,{path:"/e-commerceCavagnaro",exact:!0,children:Object(o.jsx)(k,{})}),Object(o.jsx)(p.a,{path:"/cart",exact:!0,children:Object(o.jsx)(A,{})}),Object(o.jsx)(p.a,{path:"/payment",exact:!0,children:Object(o.jsx)(E,{})}),Object(o.jsx)(p.a,{path:"/:category/:id",exact:!0,children:Object(o.jsx)(I,{})}),Object(o.jsx)(p.a,{path:"/:category",exact:!0,children:Object(o.jsx)(k,{})})]})]})})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.3db3f766.chunk.js.map