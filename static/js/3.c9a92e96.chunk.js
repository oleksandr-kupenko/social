(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{314:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__quahA",bigAvatar:"ProfileInfo_bigAvatar__3upzX",mainPhoto:"ProfileInfo_mainPhoto__3h1_R",contact:"ProfileInfo_contact__foD8y"}},315:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2Y7Zh",posts:"MyPosts_posts__108fy"}},316:function(e,t,a){e.exports={content:"Post_content__-_V4d",item:"Post_item__1JEyK"}},317:function(e,t,a){"use strict";a.r(t);var n=a(33),o=a(34),l=a(36),r=a(35),s=a(0),c=a.n(s),i=a(105),u=a(314),m=a.n(u),p=a(38),f=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(i.a)(l,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status"),":",c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},d=a(129),b=a(50),E=a.n(b),v=a(22),h=a(140),g=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"Save")),n&&c.a.createElement("div",{className:E.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))}))))})),P=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"Edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},k=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),b=Object(i.a)(u,2),E=b[0],v=b[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.bigAvatar},c.a.createElement("img",{src:"https://atlantis.nyc3.digitaloceanspaces.com/styled/72025f140f22a3eb32950bbb9d76e68d"})),c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||d.a,className:m.a.main}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),E?c.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){v(!1)}))}}):c.a.createElement(P,{goToEditMode:function(){v(!0)},profile:t,isOwner:o}),c.a.createElement(f,{status:a,updateStatus:n})))},y=a(104),j=a(315),_=a.n(j),S=a(316),A=a.n(S),w=function(e){return c.a.createElement("div",{className:A.a.item},c.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"Like:"),e.likesCount))},F=a(28),I=a(100),M=a(74),C=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(w,{message:e.message,key:e.id,likesCount:e.likesCount})}));return c.a.createElement("div",{classmessage:_.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",null,c.a.createElement(N,{onSubmit:function(t,a){e.addPost(t.newPostBody),a(Object(F.a)("profileAddPostForm"))}})),c.a.createElement("div",{classmessage:_.a.posts},t))})),B=Object(M.a)(10),N=Object(h.a)({form:"profileAddPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(I.a,{component:v.b,name:"newPostBody",placeholder:"Post message",validate:[M.b,B]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),J=C,T=a(16),x=Object(T.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e(Object(y.a)(t))}}}))(J),D=function(e){return c.a.createElement("div",null,c.a.createElement(O,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),c.a.createElement(x,null))},U=a(10),V=a(8),z=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refrehsProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refrehsProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refrehsProfile()}},{key:"render",value:function(){return c.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(V.d)(Object(T.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),U.f)(z)}}]);
//# sourceMappingURL=3.c9a92e96.chunk.js.map