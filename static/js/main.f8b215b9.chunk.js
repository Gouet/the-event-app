(this.webpackJsonptheevent=this.webpackJsonptheevent||[]).push([[0],{35:function(e,t){},36:function(e,t,n){e.exports=n(51)},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=n.n(o);n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(5),c=n(15),i=r.a.createContext(null),s=function(e){return function(t){return r.a.createElement(i.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},m=i,h=n(4),p=n(23),d=n.n(p),f=(n(44),{apiKey:"AIzaSyCDU5hZsr2umVz8UMAzrwq6KUyhWRtg6o0",authDomain:"outprojectdev.firebaseapp.com",databaseURL:"https://outprojectdev.firebaseio.com",projectId:"outprojectdev",storageBucket:"outprojectdev.appspot.com",messagingSenderId:"584695216902",appId:"1:584695216902:web:1ff492cb8cafdc7beabc87",measurementId:"G-XNZLGJL71B"}),b=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},d.a.initializeApp(f),this.auth=d.a.auth()},E=s((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")})),g=r.a.createContext(null),v=n(7),w=n(9),O=n(8),j=n(10),C=function(e){var t=function(t){function n(e){var t;return Object(h.a)(this,n),(t=Object(w.a)(this,Object(O.a)(n).call(this,e))).state={authUser:null},t}return Object(j.a)(n,t),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return s(t)},S=n(16),y=function(e){return function(t){var n=function(n){function a(){return Object(h.a)(this,a),Object(w.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(j.a)(a,n),Object(v.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(g.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(S.a)(c.e,s)(n)}},P=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(E,null)))},U=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/signin"},"Sign In")))},A=function(){return r.a.createElement("div",null,r.a.createElement(g.Consumer,null,(function(e){return e?r.a.createElement(P,null):r.a.createElement(U,null)})))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing"))},I=n(13),W=n(11),D={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},x=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=(t.username,t.email),r=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(a,r).then((function(e){n.setState(Object(W.a)({},D)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},D),n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,l=e.error,u=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message))}}]),t}(a.Component),R=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(u.b,{to:"/signup"},"Sign Up"))},T=Object(S.a)(c.e,s)(x),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(T,null))},M={email:"",error:null},z=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(W.a)({},M))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},M),n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),N=function(){return r.a.createElement("p",null,r.a.createElement(u.b,{to:"/pw-forget"},"Forgot Password?"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(F,null))},F=s(z),H={email:"",password:"",error:null},J=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(W.a)({},H)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},H),n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),G=Object(S.a)(c.e,s)(J),K=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(G,null),r.a.createElement(N,null),r.a.createElement(R,null))},Z=y((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))})),q={passwordOne:"",passwordTwo:"",error:null},V=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(W.a)({},q))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},q),n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),X=s(V),$=y((function(e){return!!e}))((function(){return r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(F,null),r.a.createElement(X,null))}))})),Q=n(35),Y=y((function(e){return e&&!!e.roles[Q.ADMIN]}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"Restricted area! Only users with the admin role are authorized."))})),_=C((function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:k}),r.a.createElement(c.a,{path:"/signup",component:L}),r.a.createElement(c.a,{path:"/signin",component:K}),r.a.createElement(c.a,{path:"/pw-forget",component:B}),r.a.createElement(c.a,{path:"/home",component:Z}),r.a.createElement(c.a,{path:"/account",component:$}),r.a.createElement(c.a,{path:"/admin",component:Y})))}));l.a.render(r.a.createElement(m.Provider,{value:new b},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f8b215b9.chunk.js.map