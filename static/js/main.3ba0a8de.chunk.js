(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,c){},158:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},190:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var a,s=c(1),n=c.n(s),r=c(44),i=c.n(r),o=(c(107),c(158),c(25)),l=c(27),j=(c(161),c(84)),d=(c(162),c(126)),b=c.n(d),u=c(2),m=["text","useIcon"],O=function(e){var t=e.text,c=e.useIcon,a=Object(j.a)(e,m);return Object(u.jsxs)("button",{className:"Button ".concat(a.className),children:[Object(u.jsx)("p",{className:"Button__text",children:t}),c&&Object(u.jsx)(b.a,{className:"Button__arrow"})]})},x=(c(164),["children"]),h=function(e){var t=e.children,c=Object(j.a)(e,x);return Object(u.jsx)("div",{className:"FeatureSection ".concat(c.className),children:t})},p=(c(165),function(){var e=Math.floor(164*Math.random()),t=(Object(l.b)(),Object(l.c)((function(e){return e.products}))),c=t.items;t.isLoading,t.error;return Object(u.jsx)("div",{className:"Random",children:c.map((function(t,c){return c===e&&Object(u.jsx)("div",{className:"Random__products",children:Object(u.jsxs)("div",{className:"Random__product",children:[Object(u.jsx)("img",{src:t.image_link}),Object(u.jsxs)("div",{className:"Random__price",children:[Object(u.jsx)("div",{children:t.price}),Object(u.jsx)("div",{children:t.price_sign})]}),Object(u.jsx)("div",{children:t.name})]})},c)}))})}),_=c(28),f=function(){return Object(u.jsxs)("div",{className:"Discounts",id:"discounts",children:[Object(u.jsxs)(h,{className:"Discounts__container container",children:[Object(u.jsx)("p",{className:"Discounts__text",children:"Discounts"}),Object(u.jsx)(_.b,{className:"Discounts__link",to:"/category",children:Object(u.jsx)(O,{className:"Discounts__btn",text:"Go to the catalog",useIcon:!0})})]}),Object(u.jsxs)("div",{className:"Discounts__product",children:[Object(u.jsx)(p,{}),Object(u.jsx)(p,{}),Object(u.jsx)(p,{})]})]})},g=(c(169),function(){return Object(u.jsx)("div",{className:"Hero",children:Object(u.jsxs)("div",{className:"Hero__container container",children:[Object(u.jsx)("p",{className:"Hero__text",children:"For you from Nyx"}),Object(u.jsx)(_.b,{className:"Hero__link",to:"/category",children:Object(u.jsx)(O,{className:"Hero__btn",text:"learn more",useIcon:!0})})]})})}),v=(c(170),function(){return Object(u.jsxs)("div",{className:"Hits",id:"hits",children:[Object(u.jsxs)("div",{className:"Hits__product",children:[Object(u.jsx)(p,{}),Object(u.jsx)(p,{}),Object(u.jsx)(p,{})]}),Object(u.jsxs)(h,{className:"Hits__container container",children:[Object(u.jsx)("p",{className:"Hits__text",children:"Best sellers"}),Object(u.jsx)(_.b,{className:"Hits__link",to:"/category",children:Object(u.jsx)(O,{className:"Hits__btn",text:"Go to the catalog",useIcon:!0})})]})]})}),N=(c(171),function(){return Object(u.jsxs)("div",{className:"New",id:"new",children:[Object(u.jsxs)(h,{className:"New__container container",children:[Object(u.jsx)("p",{className:"New__text",children:"New! New! New!"}),Object(u.jsx)(_.b,{className:"New__link",to:"/category",children:Object(u.jsx)(O,{className:"New__btn",text:"Go to the catalog",useIcon:!0})})]}),Object(u.jsxs)("div",{className:"New_product",children:[Object(u.jsx)(p,{}),Object(u.jsx)(p,{}),Object(u.jsx)(p,{})]})]})}),y=c(0),C=c.n(y),S=c(3),w=c(128),E=c.n(w);function T(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:a.FETCH_PRODUCTS}),e.prev=1,e.next=4,E()("https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx");case 4:c=e.sent,s=c.data,t({type:a.FETCH_PRODUCTS_SUCCESS,payload:{products:s}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:a.FETCH_PRODUCTS_ERROR,payload:{error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}!function(e){e.FETCH_PRODUCTS="FETCH_PRODUCTS",e.FETCH_PRODUCTS_ERROR="FETCH_PRODUCTS_ERROR",e.FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS"}(a||(a={}));c(190);var R=c(86),D=function(){var e=Object(l.c)((function(e){return e}));return console.log(e),Object(u.jsxs)("div",{className:"Header__container Header__list",children:[Object(u.jsx)(_.b,{className:"Header__link",to:"/category",children:"Catalog"}),Object(u.jsx)(_.b,{className:"Header__link",to:"/login",children:"Login"}),Object(u.jsx)(_.b,{className:"Header__link",to:"/cart",children:"Cart"}),Object(u.jsx)(R.Link,{activeClass:"active",className:"Header__link",to:"new",spy:!0,smooth:!0,offset:-70,duration:500,children:"New"}),Object(u.jsx)(R.Link,{activeClass:"active",className:"Header__link",to:"hits",spy:!0,smooth:!0,offset:-70,duration:500,children:"Hits"}),Object(u.jsx)(R.Link,{activeClass:"active",className:"Header__link",to:"discounts",spy:!0,smooth:!0,offset:-70,duration:500,children:"Discounts"})]})},k=(c(198),function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("div",{className:"footer__sign",children:[Object(u.jsx)("h3",{className:"footer__sign-title",children:"Signup"}),Object(u.jsx)("form",{className:"footer__form",children:Object(u.jsx)("input",{className:"footer__input",type:"email",placeholder:"enter@youremail.com"})})]}),Object(u.jsx)("div",{className:"footer__copy-right",children:"\xa92021 NYX PROFESSIONAL MAKEUP La Casa de Papel \u2122/\xa9 Netflix. Used with permission."})]})}),H=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(D,{}),Object(u.jsx)(g,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(N,{}),Object(u.jsx)(v,{}),Object(u.jsx)(f,{})]}),Object(u.jsx)(k,{})]})},U=c(15);c(199),c(200);function F(e){var t=e.item;return Object(u.jsx)("div",{className:"categories__product",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.image_link}),Object(u.jsxs)("div",{className:"categories__price",children:[Object(u.jsx)("div",{children:t.price}),Object(u.jsx)("div",{children:t.price_sign})]}),Object(u.jsx)("div",{className:"categories__product",children:t.name})]})})}var I=function(e){var t=e.item,c=Object(l.b)(),a=Object(l.c)((function(e){return e.products})),n=(a.items,a.isLoading,a.error,Object(s.useState)(0)),r=Object(U.a)(n,2),i=(r[0],r[1],Object(s.useState)("all")),o=Object(U.a)(i,2);return o[0],o[1],Object(u.jsxs)("div",{className:"categories__product",children:[console.log(t),Object(u.jsx)("button",{onClick:function(){c({type:"ADD_TO_CART",payload:t})},children:"add to cart"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.image_link}),Object(u.jsxs)("div",{className:"categories__price",children:[Object(u.jsx)("div",{children:t.price}),Object(u.jsx)("div",{children:t.price_sign})]}),Object(u.jsx)("div",{className:"categories__product",children:t.name})]})]})};var P,L=function(e){var t=e.items;return Object(u.jsxs)("div",{className:"categories__products",children:[console.log(t),t&&t.length>0&&t.map((function(e,t){return Object(u.jsx)(F,{item:e},t)}))]})},A=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.products})),c=t.items,a=t.isLoading,n=(t.error,Object(s.useState)(20)),r=Object(U.a)(n,2),i=r[0],o=r[1],j=Object(s.useState)("all"),d=Object(U.a)(j,2),b=d[0],m=d[1];return Object(s.useEffect)((function(){e(T())}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{}),Object(u.jsxs)("div",{className:"categories",children:[Object(u.jsxs)("form",{className:"categories__fiter",children:[Object(u.jsxs)("select",{className:"categories__select",onChange:function(e){var t=e.target.value;m(t)},children:[Object(u.jsx)("option",{className:"categories__choice",value:"all",children:"all"}),Object(u.jsx)("option",{className:"categories__choice",value:"mascara",children:"mascara"}),Object(u.jsx)("option",{className:"categories__choice",value:"eyebrow",children:"eyebrow"}),Object(u.jsx)("option",{className:"categories__choice",value:"eyeliner",children:"eyeliner"}),Object(u.jsx)("option",{className:"categories__choice",value:"foundation",children:"foundation"}),Object(u.jsx)("option",{className:"categories__choice",value:"bronzer",children:"bronzer"}),Object(u.jsx)("option",{className:"categories__choice",value:"blush",children:"blush"}),Object(u.jsx)("option",{className:"categories__choice",value:"lip_liner",children:"lip liner"}),Object(u.jsx)("option",{className:"categories__choice",value:"lipstick",children:"lip stick"}),Object(u.jsx)("option",{className:"categories__choice",value:"eyeshadow",children:"eyeshadow"})]}),console.log(b),Object(u.jsx)("input",{min:"0",max:"20",step:"1",className:"filter__by-price",type:"range",value:i,onChange:function(e){o(e.target.value)}}),Object(u.jsx)("label",{children:i})]}),Object(u.jsx)("div",{className:"categories__products",children:a?Object(u.jsx)("h1",{className:"categories__products-loading",children:"Loading.."}):c.map((function(e,t){return(e.product_type===b||"all"===b)&&+e.price<=i&&Object(u.jsx)(I,{item:e},t)}))})]}),Object(u.jsx)(k,{})]})},W=c(33),q=c(253),B=c(254),G=c(247),V=c(248),Y=c(260),z=c(250),M=c(257),J=c(258),K=c(259),X=c(252),Q=c(82),Z=c.n(Q),$=c(256),ee=c(132),te=c(255),ce=c(63),ae=c(129),se=c(130),ne=Object(ae.a)({apiKey:"AIzaSyCvp4piU5asmX8QZ_rsx9oNJEdsDOD_5Uw",authDomain:"coffee-car-app.firebaseapp.com",projectId:"coffee-car-app",storageBucket:"coffee-car-app.appspot.com",messagingSenderId:"676602281107",appId:"1:676602281107:web:0d886496b14c4890796166"}),re=(Object(se.a)(),Object(ce.b)(ne));!function(e){e[e.SET_ACTIVE_USER=0]="SET_ACTIVE_USER",e[e.LOGOUT_USER=1]="LOGOUT_USER"}(P||(P={}));function ie(e){return Object(u.jsxs)($.a,Object(W.a)(Object(W.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(u.jsx)(M.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var oe=Object(ee.a)();function le(){var e=Object(l.b)(),t=Object(o.f)();return Object(u.jsx)(te.a,{theme:oe,children:Object(u.jsxs)(X.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(u.jsx)(G.a,{}),Object(u.jsx)(X.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(u.jsx)(X.a,{item:!0,xs:12,sm:8,md:5,component:J.a,elevation:6,square:!0,children:Object(u.jsxs)(K.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)(q.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(u.jsx)(Z.a,{})}),Object(u.jsx)($.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(u.jsxs)(K.a,{component:"form",noValidate:!0,onSubmit:function(c){c.preventDefault();var a=new FormData(c.currentTarget),s={email:a.get("email"),password:a.get("password")};Object(ce.c)(re,s.email,s.password).then((function(c){c.user&&e({type:P.SET_ACTIVE_USER,payload:{email:s.email,password:s.password}}),t.push("/shop")})).catch((function(e){return alert(e.message)}))},sx:{mt:1},children:[Object(u.jsx)(V.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(u.jsx)(V.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(u.jsx)(Y.a,{control:Object(u.jsx)(z.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(u.jsx)(B.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(u.jsxs)(X.a,{container:!0,children:[Object(u.jsx)(X.a,{item:!0,xs:!0,children:Object(u.jsx)(M.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(u.jsx)(X.a,{item:!0,children:Object(u.jsx)(_.b,{to:"/signup",children:Object(u.jsx)(M.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),Object(u.jsx)(ie,{sx:{mt:5}})]})]})})]})})}var je=c(261);function de(e){return Object(u.jsxs)($.a,Object(W.a)(Object(W.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(u.jsx)(M.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var be=Object(ee.a)();function ue(){var e=Object(o.f)();return Object(u.jsx)(te.a,{theme:be,children:Object(u.jsxs)(je.a,{component:"main",maxWidth:"xs",children:[Object(u.jsx)(G.a,{}),Object(u.jsxs)(K.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)(q.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(u.jsx)(Z.a,{})}),Object(u.jsx)($.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(u.jsxs)(K.a,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var c=new FormData(t.currentTarget),a={email:c.get("email"),password:c.get("password")};Object(ce.a)(re,a.email,a.password).then((function(t){console.log(t),e.push("/shop")})).catch((function(e){return alert(e.message)}))},sx:{mt:3},children:[Object(u.jsxs)(X.a,{container:!0,spacing:2,children:[Object(u.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(u.jsx)(V.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(u.jsx)(X.a,{item:!0,xs:12,sm:6,children:Object(u.jsx)(V.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),Object(u.jsx)(X.a,{item:!0,xs:12,children:Object(u.jsx)(V.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(u.jsx)(X.a,{item:!0,xs:12,children:Object(u.jsx)(V.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),Object(u.jsx)(X.a,{item:!0,xs:12,children:Object(u.jsx)(Y.a,{control:Object(u.jsx)(z.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(u.jsx)(B.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(u.jsx)(X.a,{container:!0,justifyContent:"flex-end",children:Object(u.jsx)(X.a,{item:!0,children:Object(u.jsx)(_.b,{to:"/login",children:Object(u.jsx)(M.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})})]})]}),Object(u.jsx)(de,{sx:{mt:5}})]})})}var me=function(){var e=Object(l.c)((function(e){return e}));return Object(s.useEffect)((function(){return console.log(e.cart)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{}),Object(u.jsx)(L,{items:e.cart}),Object(u.jsx)(k,{})]})};var Oe=function(){var e=Object(l.b)();return Object(s.useEffect)((function(){e(T())}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"App__container",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/shop",component:H}),Object(u.jsx)(o.a,{path:"/types",children:Object(u.jsx)("h1",{children:"types"})}),Object(u.jsx)(o.a,{path:"/category",component:A}),Object(u.jsx)(o.a,{path:"/login",component:le}),Object(u.jsx)(o.a,{path:"/signup",component:ue}),Object(u.jsx)(o.a,{path:"/cart",component:me}),Object(u.jsx)(o.a,{children:Object(u.jsx)("h1",{children:"404"})})]})})})},xe=c(71),he=c(131),pe=c(17);var _e={isLoading:!1,items:[],error:null};var fe=Object(xe.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?[].concat(Object(pe.a)(e),[t.payload]):e},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_PRODUCTS:return Object(W.a)(Object(W.a)({},e),{},{isLoading:!0});case a.FETCH_PRODUCTS_ERROR:return Object(W.a)(Object(W.a)({},e),{},{isLoading:!1,error:t.payload.error});case a.FETCH_PRODUCTS_SUCCESS:return Object(W.a)(Object(W.a)({},e),{},{isLoading:!1,items:t.payload.products});default:return e}}}),ge=Object(xe.c)(fe,Object(xe.a)(he.a));i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(l.a,{store:ge,children:Object(u.jsx)(_.a,{children:Object(u.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.3ba0a8de.chunk.js.map