(this["webpackJsonpcoder-house"]=this["webpackJsonpcoder-house"]||[]).push([[0],{49:function(A,e,t){},50:function(A,e,t){},61:function(A,e,t){"use strict";t.r(e);var c=t(6),n=t.n(c),a=t(40),r=t.n(a),s=(t(49),t(50),t(15)),o=t(2);var i=function(A){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"buttonNavbar",children:A.text})})},j=t(5),d=t(24),g=t(11),b=n.a.createContext(),l=function(A){var e=A.children,t=Object(c.useState)([]),n=Object(g.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(0),i=Object(g.a)(s,2),j=i[0],l=i[1],u=Object(c.useState)(0),O=Object(g.a)(u,2),B=O[0],h=O[1];return Object(o.jsx)(b.Provider,{value:{onAdd:function(A,e){if(a.find((function(e){return e.id===A.id}))){var t=a.map((function(t){return t.id===A.id&&(t.quantity+=e,t.subtotal+=A.price*e),t}));r(t),h(B+A.price*e)}else r([].concat(Object(d.a)(a),[{key:A.id,id:A.id,name:A.name,price:A.price,quantity:e,subtotal:A.price*e}])),l(j+1),h(B+A.price*e)},cart:a,unit:j,total:B,remove:function(A,e,t){var c=a.filter((function(e){return e.id!==A}));r(c),h(B-t*e)},clear:function(){r([]),h(0)}},children:e})};var u=function(A){var e,t=Object(c.useContext)(b).cart,n=0,a=Object(j.a)(t);try{for(a.s();!(e=a.n()).done;){n+=e.value.quantity}}catch(r){a.e(r)}finally{a.f()}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cartWidgetContainer",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",className:"Logo",alt:"Logo"}),Object(o.jsx)("h4",{className:"cartQuantity",children:n})]})})};function O(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"NavBarContainer",children:[Object(o.jsxs)("div",{className:"navBarbuttonContainer",children:[Object(o.jsx)(s.b,{to:"/e-commerceCavagnaro",children:Object(o.jsx)(i,{className:"buttonNavbar",text:"Inicio"})}),Object(o.jsx)(s.b,{to:"/Mujer",children:Object(o.jsx)(i,{className:"buttonNavbar",text:"Mujer"})}),Object(o.jsx)(s.b,{to:"/Hombre",children:Object(o.jsx)(i,{className:"buttonNavbar",text:"Hombre"})})]}),Object(o.jsx)(s.b,{to:"/Cart",children:Object(o.jsx)(u,{className:"CarWidget"})})]})})}var B=function(A){var e=A.id,t=A.name,c=void 0===t?"":t,n=A.price,a=void 0===n?0:n,r=A.photo,i=void 0===r?"":r,j=A.category,d=void 0===j?"":j,g=A.thumbnail,b=void 0===g?"":g;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)(s.b,{to:"/".concat(d,"/").concat(e),children:[Object(o.jsx)("img",{className:"Photo",src:i,alt:b}),Object(o.jsx)("div",{className:"name",children:c}),Object(o.jsx)("div",{className:"price",children:a})]})})},h=t(12),x=t(42),C=t(20);Object(x.a)({apiKey:"AIzaSyAtOYf3ahEDH8BFkQNdmOEYmwuLTbiOhX4",authDomain:"e-commerce-coder-house-9e357.firebaseapp.com",projectId:"e-commerce-coder-house-9e357",storageBucket:"e-commerce-coder-house-9e357.appspot.com",messagingSenderId:"127376930075",appId:"1:127376930075:web:1ce140397cb939496a0fbe"});var f=Object(C.f)(),m=function(A){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{className:"Greetings",children:A.greetings})})},Q=function(){var A=Object(h.f)().category,e=Object(c.useState)([]),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(g.a)(r,2),i=s[0],j=s[1];return Object(c.useEffect)((function(){null!=A?function(A){var e=Object(C.b)(f,"Indumentaria"),t=Object(C.g)(e,Object(C.h)("category","==",A));return Object(C.e)(t)}(A).then((function(A){var e=[];A.forEach((function(A){e.push({id:A.id,name:A.data().name,price:A.data().price,photo:A.data().photo,stock:A.data().stock,category:A.data().category})})),a(e),j(!1)})):Object(C.e)(Object(C.b)(f,"Indumentaria")).then((function(A){var e=[];A.forEach((function(A){e.push({id:A.id,name:A.data().name,price:A.data().price,photo:A.data().photo,stock:A.data().stock,category:A.data().category})})),a(e),j(!1)}))}),[A]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{greetings:"\xa1Sale Off! Aprovech\xe1 las \xfaltimas ofertas"}),i?Object(o.jsx)("h2",{children:"CARGANDO PRODUCTOS..."}):n.map((function(A){return Object(o.jsx)(B,{name:A.name,price:A.price,stock:A.stock,category:A.category,id:A.id,photo:A.photo},A.id)}))]})},p=function(A){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"PhotoGallery",children:Object(o.jsx)(Q,{})})})},v=t(43),E=function(A){var e=Object(c.useState)(0),t=Object(g.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(g.a)(r,2),i=s[0],j=s[1],d=Object(c.useState)(!0),b=Object(g.a)(d,2),l=b[0],u=b[1];Object(c.useEffect)((function(){a(A.stock)}),[n,A.stock]);var O=function(){i<n&&j(i+1)},B=function(){i>=1&&j(i-1)},h=function(){0===i?alert("Elegir un producto"):(u(!1),A.onAdd(i))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"SetCountContainer",children:[Object(o.jsxs)("div",{className:"SetCountButtonContainer",children:[l?Object(o.jsx)("button",{className:"SetCountButton",onClick:function(){return O()},children:"+"}):Object(o.jsx)("button",{disabled:!0,className:"SetCountButton disabledButton",onClick:function(){return O()},children:"+"}),l?Object(o.jsx)("button",{className:"SetCountButton",onClick:function(){return B()},children:"-"}):Object(o.jsx)("button",{disabled:!0,className:"SetCountButton disabledButton",onClick:function(){return B()},children:"-"})]}),Object(o.jsxs)("div",{className:"SetCountSubtitle",children:["Unidades seleccionadas ",Object(o.jsx)("strong",{children:i})]}),Object(o.jsxs)("div",{className:"SetCountSubtitle",children:["Stock disponible ",Object(o.jsx)("strong",{children:n-i})]}),Object(o.jsx)("div",{className:"addToCartButtonContainer",children:l?Object(o.jsx)("button",{onClick:h,children:"Agregar al carrito"}):Object(o.jsx)("button",{disabled:!0,className:"disabledButton",onClick:h,children:"Agregar al carrito"})})]})})},I=function(A){var e=A.id,t=void 0===e?"":e,n=A.name,a=void 0===n?"":n,r=A.description,i=void 0===r?"":r,j=A.price,d=void 0===j?0:j,l=A.thumbnail,u=void 0===l?"":l,O=A.stock,B=void 0===O?"":O,h=A.photo,x=void 0===h?"":h,C=Object(c.useContext)(b).onAdd,f=Object(c.useState)(!1),m=Object(g.a)(f,2),Q=m[0],p=m[1];return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"Photo",src:x,alt:u}),Object(o.jsx)("div",{className:"name",children:a}),Object(o.jsx)("div",{className:"price",children:d}),Object(o.jsx)("div",{children:i}),Object(o.jsx)(E,{stock:B,onAdd:function(A){C({id:t,name:a,price:d},A),p(!0)}}),Object(o.jsx)("div",{className:"goToCartButtonContainer",children:Q?Object(o.jsx)(s.b,{to:"/Cart",children:Object(o.jsx)("button",{children:"Ir al carrito"})}):Object(o.jsx)("button",{disabled:!0,className:"disabledButton",children:"Ir al carrito"})})]})},w=function(){var A=Object(c.useState)([]),e=Object(g.a)(A,2),t=e[0],n=e[1],a=Object(c.useState)(!0),r=Object(g.a)(a,2),s=r[0],i=r[1],j=Object(h.f)().id;return Object(c.useEffect)((function(){(function(A){var e=Object(C.c)(f,"Indumentaria",A);return Object(C.d)(e)})(j).then((function(A){n(Object(v.a)({id:A.id},A.data())),i(!1)}))}),[j]),Object(o.jsx)(o.Fragment,{children:s?Object(o.jsx)("h2",{children:"Cargando productos..."}):Object(o.jsx)(I,{id:t.id,name:t.name,price:t.price,stock:t.stock,thumbnail:t.thumbnail,photo:t.photo,category:t.category},t.id)})},N=function(){var A=Object(c.useContext)(b),e=A.cart,t=A.total,n=A.remove,a=A.clear;return 0===e.length?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(m,{greetings:"El carrito est\xe1 vac\xedo"})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"cartGallery",children:e.map((function(A,e){return Object(o.jsxs)("div",{className:"cartCard",children:[Object(o.jsx)("strong",{children:A.name}),Object(o.jsxs)("h3",{children:["Precio producto ",Object(o.jsxs)("strong",{children:["$ ",A.price]})]}),Object(o.jsxs)("h3",{children:["Cantidad ",Object(o.jsx)("strong",{children:A.quantity})]}),Object(o.jsxs)("h3",{children:["Subtotal \xedtem ",Object(o.jsxs)("strong",{children:["$ ",A.subtotal]})]}),Object(o.jsx)("button",{className:"BuyButtonMain",onClick:function(){return n(A.id,A.price,A.quantity)},children:"Quitar producto"})]})}))}),Object(o.jsxs)("div",{className:"cartContainer",children:[Object(o.jsxs)("h3",{children:["Total ",Object(o.jsxs)("strong",{children:["$",t]})]}),Object(o.jsxs)("div",{className:"cartSubContainer",children:[Object(o.jsx)("button",{className:"BuyButtonMain",id:"emptyCartBtn",onClick:function(){return a()},children:"Vaciar carrito"}),Object(o.jsx)(s.b,{to:"/Payment",children:Object(o.jsx)("button",{className:"BuyButtonMain",id:"emptyCartBtn",children:"Comprar"})})]})]})]})},D=[],y=[],F=[],H=[],S=function(){var A=Object(c.useContext)(b),e=A.total,t=A.cart,n=A.clear,a=Object(c.useState)(!1),r=Object(g.a)(a,2),s=r[0],i=r[1],j=function(){!function(){if(0===y.length||0===F.length||0===H.length)console.log("Campos incompletos"),alert("Completar el formulario para terminar compra");else{D={buyer:{name:"".concat(y[y.length-1]),phone:"".concat(F[F.length-1]),email:"".concat(H[H.length-1])},items:[],date:(new Date).toString()};var A=e;t.forEach((function(e){D.items.push(e),D.items.push(A)})),D.totalPrice=A,function(A,e){var t=A.split("/"),c=C.b.apply(void 0,[f].concat(Object(d.a)(t)));return Object(C.a)(c,e)}("\xd3rdenes",D).then((function(A){return console.log(A)})),n(),i(!0)}}()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{greetings:"Formulario de compra"}),s?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("form",{className:"paymentContainer",onSubmit:function(A){A.preventDefault()},children:[Object(o.jsx)("h4",{children:"Ingres\xe1 los siguientes datos para finalizar tu compra"}),Object(o.jsx)("input",{type:"text",placeholder:"Nombre y apellido",onChange:function(A){console.log(A.target.value),y.push(A.target.value)}}),Object(o.jsx)("input",{type:"email",placeholder:"Direcci\xf3n de email",onChange:function(A){console.log(A.target.value),F.push(A.target.value)}}),Object(o.jsx)("input",{type:"number",placeholder:"N\xfamero de tel\xe9fono",onChange:function(A){console.log(A.target.value),H.push(A.target.value)}}),Object(o.jsxs)("h4",{children:["Total ",Object(o.jsxs)("strong",{children:[" $ ",e]})]}),Object(o.jsx)("button",{className:"BuyButtonMain",onClick:function(){j()},children:"Finalizar compra"})]}),s?Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("strong",{children:Object(o.jsxs)("h2",{children:[y[y.length-1],", la operaci\xf3n ha sido exitosa"]})}),Object(o.jsx)("h2",{children:"\xa1Muchas gracias por tu compra!"})]}):Object(o.jsx)(o.Fragment,{})]})};var M=function(){return Object(o.jsx)(s.a,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l,{children:[Object(o.jsx)(O,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{path:"/e-commerceCavagnaro",exact:!0,children:Object(o.jsx)(p,{})}),Object(o.jsx)(h.a,{path:"/cart",exact:!0,children:Object(o.jsx)(N,{})}),Object(o.jsx)(h.a,{path:"/Payment",exact:!0,children:Object(o.jsx)(S,{})}),Object(o.jsx)(h.a,{path:"/:category/:id",exact:!0,children:Object(o.jsx)(w,{})}),Object(o.jsx)(h.a,{path:"/:category",exact:!0,children:Object(o.jsx)(p,{})})]})]})})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.852bd930.chunk.js.map