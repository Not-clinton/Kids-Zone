(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[38243],{294184:(e,t)=>{var n;!function(){var o={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===r)for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},560053:(e,t)=>{var n,o,i,r;if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();t.unstable_now=function(){return s.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,d=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(n){throw setTimeout(d,0),n}};n=function(e){null!==l?setTimeout(n,0,e):(l=e,setTimeout(d,0))},o=function(e,t){u=setTimeout(e,t)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var f=!1,w=null,_=-1,b=5,v=0;t.unstable_shouldYield=function(){return t.unstable_now()>=v},r=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var g=new MessageChannel,y=g.port2;g.port1.onmessage=function(){if(null!==w){var e=t.unstable_now();v=e+b;try{w(!0,e)?y.postMessage(null):(f=!1,w=null)}catch(n){throw y.postMessage(null),n}}else f=!1},n=function(e){w=e,f||(f=!0,y.postMessage(null))},o=function(e,n){_=p((function(){e(t.unstable_now())}),n)},i=function(){h(_),_=-1}}function E(e,t){var n=e.length;e.push(t);e:for(;;){var o=n-1>>>1,i=e[o];if(!(void 0!==i&&0<A(i,t)))break e;e[o]=t,e[n]=i,n=o}}function I(e){return void 0===(e=e[0])?null:e}function L(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,i=e.length;o<i;){var r=2*(o+1)-1,a=e[r],s=r+1,c=e[s];if(void 0!==a&&0>A(a,n))void 0!==c&&0>A(c,a)?(e[o]=c,e[s]=n,o=s):(e[o]=a,e[r]=n,o=r);else{if(!(void 0!==c&&0>A(c,n)))break e;e[o]=c,e[s]=n,o=s}}}return t}return null}function A(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],k=[],D=1,O=null,R=3,T=!1,S=!1,N=!1;function P(e){for(var t=I(k);null!==t;){if(null===t.callback)L(k);else{if(!(t.startTime<=e))break;L(k),t.sortIndex=t.expirationTime,E(C,t)}t=I(k)}}function x(e){if(N=!1,P(e),!S)if(null!==I(C))S=!0,n(W);else{var t=I(k);null!==t&&o(x,t.startTime-e)}}function W(e,n){S=!1,N&&(N=!1,i()),T=!0;var r=R;try{for(P(n),O=I(C);null!==O&&(!(O.expirationTime>n)||e&&!t.unstable_shouldYield());){var a=O.callback;if("function"==typeof a){O.callback=null,R=O.priorityLevel;var s=a(O.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?O.callback=s:O===I(C)&&L(C),P(n)}else L(C);O=I(C)}if(null!==O)var c=!0;else{var l=I(k);null!==l&&o(x,l.startTime-n),c=!1}return c}finally{O=null,R=r,T=!1}}var B=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,n(W))},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_getFirstCallbackNode=function(){return I(C)},t.unstable_next=function(e){switch(R){case 1:case 2:case 3:var t=3;break;default:t=R}var n=R;R=t;try{return e()}finally{R=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=B,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=R;R=e;try{return t()}finally{R=n}},t.unstable_scheduleCallback=function(e,r,a){var s=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?s+a:s:a=s,e){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return e={id:D++,callback:r,priorityLevel:e,startTime:a,expirationTime:c=a+c,sortIndex:-1},a>s?(e.sortIndex=a,E(k,e),null===I(C)&&e===I(k)&&(N?i():N=!0,o(x,a-s))):(e.sortIndex=c,E(C,e),S||T||(S=!0,n(W))),e},t.unstable_wrapCallback=function(e){var t=R;return function(){var n=R;R=t;try{return e.apply(this,arguments)}finally{R=n}}}},363840:(e,t,n)=>{e.exports=n(560053)},799881:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(296882),i=n(641483);function r(e,t){if(t&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const t=window.open(e,"_blank");return t&&(t.opener=null),t}{const t=(0,o.Z)(e);return setTimeout((()=>{(0,i.My)("setting_new_window_location")}),0),window.location.href=t,window}}},205794:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(799881),i=n(508841),r=n(641483);const a=e=>{(0,i.Z)(e)||(e="/",(0,r.My)("url_reset")),(0,o.Z)(e,!1)}},463080:(e,t,n)=>{n.d(t,{Z:()=>o});const o={GOOGLE_ADWORDS_ID:852082959,GOOGLE_ADWORDS_LABEL_PROPEL_QUALIFIED:"Mah3CPrv13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_PROPEL_UNQUALIFIED:"_DJfCKzy13YQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE:"GGbCCM7p-nYQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT:"SwBsCIz9k3cQj4KnlgM",GOOGLE_ADWORDS_LABEL_BUSINESS_ADVERTISER_INTENT:"kDf0COWL4okBEI-Cp5YD",DOUBLECLICK_TAG_ID:"8032161",DOUBLECLICK_EVENT_ID_PROPEL:"prope001",DOUBLECLICK_CATEGORY_ID_PROPEL_QUALIFIED:"pinte0",DOUBLECLICK_CATEGORY_ID_PROPEL_UNQUALIFIED:"pinte00",TRADEDESK_ADVERTISER_ID:"fc1uc9n",TRADEDESK_EVENT_ID_GENERAL_PAGEVIEW:"ogalyt3",TRADEDESK_CONVERSION_ID_PROPEL_QUALIFIED:"judrn76",TRADEDESK_CONVERSION_ID_PROPEL_UNQUALIFIED:"f0v4s5d",FACEBOOK_ADVERTISER_ID:"956400731086791",TWITTER_UNIVERSAL_TAG_ID:"nuzh8",TWITTER_CONVERSION_ID_PROPEL_QUALIFIED:"ny8zl",TWITTER_CONVERSION_ID_PROPEL_UNQUALIFIED:"nya0d",LINKEDIN_PARTNER_ID:"44352",LINKEDIN_CONVERSION_ID_PROPEL_QUALIFIED:"166217",LINKEDIN_CONVERSION_ID_PROPEL_UNQUALIFIED:"171754",LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT:"529092",PINTEREST_TAG_ID:"2614461171935",SMB_PAID_PINTEREST_ID:"2613736141997"}},925311:(e,t,n)=>{function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r});class i{static reportGoogleConversion(e,t,n){void 0!==window.gtag_report_conversion?window.gtag_report_conversion(e,t,n):i.queuedGoogleConversions.push({id:e,label:t,url:n})}static reportFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("track",t,n):window.fbq("track",t):i.queuedFacebookConversions.push({id:e,event:t,data:n})}static reportCustomFacebookConversion(e,t,n){void 0!==window.fbq?n?window.fbq("trackCustom",t,n):window.fbq("trackCustom",t):i.queuedFacebookConversions.push({id:e,isCustomEvent:!0,event:t,data:n})}static reportPinterestConversion(e,t,n){void 0!==window.pintrk?n?window.pintrk("track",t,n):window.pintrk("track",t):i.queuedPinterestConversions.push({id:e,event:t,data:n})}static reportTwitterConversion(e,t){void 0!==window.twttr?t?window.twttr.conversion.trackPid(e,t):window.twttr.conversion.trackPid(e):i.queuedTwitterConversions.push({id:e,data:t})}static reportTheTradeDeskConversion(e,t){const n=document.createElement("img");n.setAttribute("height","1"),n.setAttribute("width","1"),n.style.borderStyle="none",n.style.position="absolute",n.setAttribute("src",`//insight.adsrvr.org/track/conv/?adv=${e}&ct=0:${t}&fmt=3`),document.body.insertBefore(n,document.body.lastChild)}static reportLinkedInConversion(e,t){const n=document.createElement("img");n.setAttribute("width","1"),n.setAttribute("height","1"),n.setAttribute("src",`https://dc.ads.linkedin.com/collect/?pid=${e}&conversionId=${t}&fmt=gif`),n.style.display="none",document.body.insertBefore(n,document.body.lastChild)}static reportDoubleClickConversion(e,t,n){const o=1e13*Math.random(),i=document.createElement("iframe");i.setAttribute("width","1"),i.setAttribute("height","1"),i.setAttribute("frameborder","0"),i.setAttribute("src",`https://${e}.fls.doubleclick.net/activityi;src=${e};\n    type=${t};cat=${n};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=${o}?`),i.style.display="none",document.body.insertBefore(i,document.body.lastChild)}static insertGoogleAdWordsTag(e){const t=document.createElement("script");t.setAttribute("async",""),t.setAttribute("src",`https://www.googletagmanager.com/gtag/js?id=AW-${e}`),t.onload=()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(e,t,n){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","AW-"+e),window.gtag_report_conversion=function(e,t,n){return window.gtag("event","conversion",{send_to:"AW-"+e+"/"+t,event_callback:function(){void 0!==n&&window.location.assign(n)}}),!1};const t=i.queuedGoogleConversions;for(let n=0;n<t.length;n+=1){const o=t[n];o.id===e&&i.reportGoogleConversion(o.id,o.label,o.url)}},document.body.insertBefore(t,document.body.firstChild)}static insertFacebookPixelTag(e){var t,n,o,r,a,s;t=window,n=document,o="script",t.fbq||(r=t.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},t._fbq||(t._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],(a=n.createElement(o)).async=!0,a.src="//connect.facebook.net/en_US/fbevents.js",(s=n.getElementsByTagName(o)[0]).parentNode.insertBefore(a,s)),window.fbq("init",e),window.fbq("track","PageView");const c=i.queuedFacebookConversions;for(let l=0;l<c.length;l+=1){const t=c[l];t.id===e&&(t.isCustomEvent?i.reportCustomFacebookConversion(e,t.event,t.data):i.reportFacebookConversion(e,t.event,t.data))}}static insertTwitterUniversalTag(e){var t,n,o,i,r,a;t=window,n=document,o="script",t.twq||((i=t.twq=function(){i.exe?i.exe.apply(i,arguments):i.queue.push(arguments)}).version="1.1",i.queue=[],(r=n.createElement(o)).async=!0,r.src="//static.ads-twitter.com/uwt.js",(a=n.getElementsByTagName(o)[0]).parentNode.insertBefore(r,a)),window.twq("init",e),window.twq("track","PageView")}static insertLinkedInInsightTag(e){window._linkedin_data_partner_id=e;const t=document.createElement("script");t.setAttribute("src","//snap.licdn.com/li.lms-analytics/insight.min.js"),document.body.insertBefore(t,document.body.firstChild)}static insertPinterestTag(e){!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};const e=window.pintrk;e.queue=[],e.version="3.0";const t=document.createElement("script");t.async=!0,t.src="https://s.pinimg.com/ct/core.js";const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}(),window.pintrk("load",e),window.pintrk("page");const t=i.queuedPinterestConversions;for(let n=0;n<t.length;n+=1){const o=t[n];o.id===e&&i.reportPinterestConversion(e,o.event,o.data)}}}o(i,"queuedGoogleConversions",[]),o(i,"queuedFacebookConversions",[]),o(i,"queuedPinterestConversions",[]),o(i,"queuedTwitterConversions",[]);const r=i},174523:(e,t,n)=>{n.d(t,{oz:()=>r,q6:()=>i,ZP:()=>s});var o=n(762803);const{Provider:i,Consumer:r,useHook:a}=(0,o.Z)("i18n"),s=a},382745:(e,t,n)=>{n.d(t,{wy:()=>D,Qx:()=>oe,Fw:()=>j,bo:()=>P,AX:()=>p,Fy:()=>d,XE:()=>u,am:()=>a,pD:()=>h,OJ:()=>c,LO:()=>ne,Gl:()=>X,h3:()=>Y,PY:()=>b,Ni:()=>_,pV:()=>O,L6:()=>k,b0:()=>w,jC:()=>W,O7:()=>Q,LM:()=>x,OK:()=>A,mP:()=>v,C$:()=>g,J3:()=>T,Fr:()=>U,Xn:()=>y,l4:()=>C,b_:()=>$,J:()=>s,dZ:()=>l,re:()=>I,RU:()=>H,Ui:()=>m,KY:()=>f,fY:()=>G,uM:()=>q,x7:()=>V,HV:()=>M,cD:()=>B,Pu:()=>K,En:()=>R,ej:()=>ee,gf:()=>L,mY:()=>z,kY:()=>te,cY:()=>Z,$Y:()=>N,Zz:()=>E,$V:()=>S,j8:()=>F,YW:()=>J});const o=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv))[\w\d\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\-]+(?=\/|$)/),i=["/BingSiteAuth.xml","/about","/add-account","/ads","/age_verification","/all","/apple-app-site-association","/apple-app-site-association.p7m","/bot.html","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-linked-business","/create-personal","/csrf_error","/ct.html","/deactivate-account","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/following","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-pin-builder","/idea-pin-invite","/ideas","/inbox","/invited","/jobs","/live-session","/login","/login_redirect","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/pin-builder","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/recently-viewed","/report","/robots.txt","/safe-redirect","/search","/settings","/signup","/socialmanager","/story-pin-builder","/story-pin-invite","/story_feed","/story_pins","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/tv","/unauth-profile","/unlink","/upload-image","/upload-profile-image","/verified","/verify","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];var r=n(855168);const a=e=>o.test(e.pathname),s=(e,t)=>{const{pathname:n}=e;return a(e)&&n.match(t||"?")},c=e=>{const{pathname:t}=e;return!!(0,r.LX)(t,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!t.match(/^\/.+\/.+\/(_tools)/i)},l=(e,t)=>{const{pathname:n}=e;return c(e)&&n.match(t||"?")},u=e=>!!(0,r.LX)(e.pathname,{path:"/board/:id/edit",exact:!0}),d=e=>!!(0,r.LX)(e.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),p=e=>!!(0,r.LX)(e.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),h=e=>!!(0,r.LX)(e.pathname,{path:"/boardsection/:id/edit",exact:!0}),m=e=>!!(0,r.LX)(e.pathname,{path:"/pin/:id/comments",exact:!0}),f=e=>!!(0,r.LX)(e.pathname,{path:"/pin/:id/edit",exact:!0}),w=e=>!!(0,r.LX)(e.pathname,{path:"/conversation/:id",exact:!0}),_=e=>e.pathname.startsWith("/business/"),b=e=>e.pathname.startsWith("/business/invite/"),v=e=>!!(0,r.LX)(e.pathname,{path:"/pin/:id/visual-search/",exact:!0}),g=e=>"/"===e.pathname,y=e=>e.pathname.startsWith("/login"),E=e=>!!(0,r.LX)(e.pathname,{path:"/today",exact:!0}),I=e=>e.pathname.startsWith("/password/reset")||!!(0,r.LX)(e.pathname,{path:"/pw/:username",exact:!0}),L=e=>e.pathname.startsWith("/signup"),A=e=>e.pathname.startsWith("/email/subscription"),C=e=>e.pathname.startsWith("/notifications/"),k=e=>!!(0,r.LX)(e.pathname,{path:"/pin/:id",exact:!0}),D=e=>k(e)&&void 0===e.state,O=e=>e.pathname.startsWith("/pin_redirect"),R=e=>e.pathname.startsWith("/search"),T=e=>e.pathname.startsWith("/ideas"),S=e=>e.pathname.startsWith("/topics"),N=e=>e.pathname.startsWith("/today/article/")||e.pathname.startsWith("/today/best/")||e.pathname.startsWith("/today/trending/"),P=e=>E(e)||N(e)||e.pathname.startsWith("/today/popular/"),x=e=>/^\/discover\/article\/\S+\/?/i.test(e.pathname),W=e=>e.pathname.startsWith("/pin/create/"),B=e=>!!(0,r.LX)(e.pathname,{path:"/:username/",exact:!0})&&!i.includes(e.pathname.replace(/\/$/,"")),F=e=>e.pathname.startsWith("/unauth-profile"),q=e=>e.pathname.startsWith("/pin/"),U=e=>"#imgViewer"===e.hash,M=e=>e.pathname.startsWith("/places/recommender"),G=e=>!!(0,r.LX)(e.pathname,{path:"/pin/:id",exact:!1})&&(e.pathname.includes("/sent/")||e.pathname.includes("/feedback/")),j=e=>(e=>new RegExp("invite_code").test(e.search))(e)&&((G(e)?"pin":a(e)&&"board")||B(e)&&"profile")||null,V=e=>e.pathname.includes("/repin/x"),Z=e=>e.pathname.startsWith("/_/storyboard"),$=e=>e.pathname.startsWith("/oauth"),K=e=>e.pathname.includes("/scheduled-pin/"),X=e=>e.pathname.startsWith("/business/convert"),Y=e=>e.pathname.startsWith("/business/hub"),Q=e=>e.pathname.startsWith("/pin-editor"),H=e=>e.pathname.startsWith("/pin-builder"),z=e=>e.pathname.startsWith("/story-pin-builder")||e.pathname.startsWith("/idea-pin-builder"),J=e=>e.pathname.startsWith("/advertiser/quick-promote"),ee=e=>e.pathname.startsWith("/settings"),te=e=>e.pathname.startsWith("/story-pin-invite")||e.pathname.startsWith("/idea-pin-invite"),ne=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/business-access/")&&e.pathname.includes("/dashboard/"),oe=e=>{var t;return(null===(t=e.match(/\amp(.*)/))||void 0===t?void 0:t[1])||""}},652382:(e,t,n)=>{n.d(t,{qn:()=>o,L_:()=>i,Nh:()=>r});const o=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(n){return window.console.error("Cannot access sessionStorage."),t}},i=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(t){window.console.error("Cannot access sessionStorage.")}},r=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(n){window.console.error("Cannot access sessionStorage.")}}},641483:(e,t,n)=>{n.d(t,{yl:()=>f,E8:()=>C,an:()=>E,qJ:()=>_,hD:()=>w,dy:()=>A,De:()=>I,NC:()=>y,LW:()=>L,My:()=>g,tj:()=>b,hL:()=>v});var o=n(85038),i=n(311866),r=n(221469),a=n(858875);const s="unauthHistories",c="trackHistoryClickInternalUrl";var l=n(652382),u=n(382745);const d=["board","pin","topic","clickthrough"];let p=5e3,h=[];let m;function f(e){h.length&&(i.ZP.create("UserRegisterTrackActionResource",{actions:h}).callUpdate({showError:!1,async:!e}),h=[],m=null)}function w(e){p=e}const _=e=>{!function(e){const t=(0,l.qn)(c);if((0,l.L_)(c),t)return;let n=(0,l.qn)(s);if(n=n?n.split(","):[],n.length){const t=`${e}.${n.reduce(((e,t)=>e+"-"+t))}`;h.push({name:t,aux_data:{}})}(0,l.L_)(s)}(e),h.length&&f(!0)};function b(e,t){let n="undefined"!=typeof window&&window.encodeURIComponent&&encodeURIComponent(e)||e;t||(t={}),-1!==n.indexOf("%")&&(t.invalid_action&&(t.invalid_action_original=t.invalid_action),t.invalid_action=n,n="track_register_action.web.invalid_action.with_percent"),h.push({name:n,aux_data:t}),m||(m=setTimeout((()=>f()),p)),function(e,t){if("undefined"!=typeof window)try{const n=new URL(window.location.href).searchParams.get("consoleTra");if(window.PINTEREST_DEV_LOG||n){const n=window.PINTEREST_DEV_REGEX||"";n&&!(e||"").match(n)||("object"==typeof t&&Object.keys(t).length?console.log(e+": %O",t):console.log(e))}}catch(n){}}(e,t)}function v(e,t){b(e,{tags:{...t}})}function g(e){b(e,{tags:{}})}function y(e,t=!1){if("undefined"==typeof window)return;let n=(0,l.qn)(s);n=n?n.split(","):[],n.push(e),(0,l.Nh)(s,n.join()),g(`lex.${e}`),t&&(0,l.Nh)(c,!0)}const E=()=>{const e=(0,r.mB)(window.location.search);if("31"===e.utm_source)return"email";if(e.utm_pai)return"paid";const t=o.U2(a.tg)||document.referrer;return t?t.includes("/t.co/")?"twitter":t.includes("cdn.ampproject.org")?"amp":t.includes("google.")?"google":t.includes("bing.")?"bing":t.includes("facebook.")?"facebook":"other":"direct"},I=e=>{e.action&&e.event?(e.type=e.type||"other",e.trigger=e.trigger||"other",e.referrer=E(),v("pinner_conversion",e)):v("pinner_conversion.missing_tags")},L=e=>{const t=e.page_location?(n=e.page_location,(0,u.L6)(n)?"pin":(0,u.am)(n)?"board":(0,u.Xn)(n)?"login":(0,u.C$)(n)?"home":(0,u.cD)(n)?"profile":(0,u.J3)(n)?"ideas":(0,u.$Y)(n)?"article":"other"):e.page||"other";var n;const o=e.item||"none",i=e.within||"none";v(`logged_out_product.interaction.${t}.${e.action}`,{item:o,within:i}),"visit"!==e.action&&v(`logged_out_product.interaction.all.${e.action}`,{item:o,within:i})},A=e=>{v(`pinner_conversion.autologin.${e.provider}.${e.event}`)},C=e=>d.includes(e)?d[d.indexOf(e)]:"other"},807668:(e,t,n)=>{n.d(t,{t:()=>p,N:()=>d});var o=n(667294),i=n(925311),r=n(463080),a=n(205794),s=n(311866),c=n(762803),l=n(785893);const{Provider:u,useHook:d}=(0,c.Z)("LinkedAccount");function p({children:e}){const[t,n]=(0,o.useState)(!1),[c,d]=(0,o.useState)([]),p=(0,o.useCallback)((({businessName:e,thirdPartyApps:t,thirdPartyMarketingTrackingEnabled:o,nextUrl:c})=>{n(!0);const l={business_name:e,third_party_apps:t};return s.ZP.create("BusinessOwnershipResource",l).callCreate({showError:!0}).then((()=>{o&&(i.Z.reportFacebookConversion(r.Z.FACEBOOK_ADVERTISER_ID,"CompleteRegistration",{content_name:"/business/convert"}),i.Z.reportPinterestConversion("track","lead",{lead_type:"Self-serve"}),i.Z.reportLinkedInConversion(r.Z.LINKEDIN_PARTNER_ID,r.Z.LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT),i.Z.reportGoogleConversion(r.Z.GOOGLE_ADWORDS_ID,r.Z.GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT)),n(!1),(e=>{(0,a.Z)(e?`/?next=${encodeURIComponent(e)}`:"/")})(c)})).catch((e=>(n(!1),Promise.reject({error:e}))))}),[n]),h=(0,o.useMemo)((()=>({createLinkedBusinessAccount:p,linkedBusinessCreationLoading:t,userAccounts:c,userAccountsRetrieved:d})),[p,t,d,c]);return(0,l.jsx)(u,{value:h,children:e})}},258435:(e,t,n)=>{n.d(t,{c:()=>i,t:()=>r});var o=n(342347);function i({children:e}){const{height:t}=(0,o.J)();return e(t)}function r(){const{height:e}=(0,o.J)();return e}},342347:(e,t,n)=>{n.d(t,{Z:()=>h,J:()=>l});var o=n(667294),i=n(807668),r=n(762803),a=n(159617),s=n(785893);const{Provider:c,useHook:l}=(0,r.Z)("Header"),u={childList:!0,attributes:!0,subtree:!0},d={height:a.cI,isInBiznuxFullscreen:!1,repinPinId:null,repinStartAnimation:!1,showAccountMenuFlyout:!1};function p(e,t){switch(t.type){case"showAccountMenuFlyout":return{...e,showAccountMenuFlyout:!0};case"hideAccountMenuFlyout":return{...e,showAccountMenuFlyout:!1};case"showRepinAnimation":return{...e,repinStartAnimation:!0,repinPinId:t.payload};case"hideRepinAnimation":return{...e,repinStartAnimation:!1,repinPinId:null};case"updateHeight":return{...e,height:t.payload};case"updateIsInBiznuxFullscreen":return{...e,isInBiznuxFullscreen:t.payload};default:throw new Error("action type not supported")}}function h({children:e}){const t=(0,o.useRef)(null),[{height:n,isInBiznuxFullscreen:r,repinPinId:l,repinStartAnimation:h,showAccountMenuFlyout:m},f]=(0,o.useReducer)(p,d);(0,o.useEffect)((()=>{const e=document.getElementById(a.WZ),n=()=>{e&&f({type:"updateHeight",payload:e.clientHeight})};return e&&"undefined"!=typeof MutationObserver&&(t.current=new MutationObserver(n),t.current.observe(e,u)),()=>{var e;null===(e=t.current)||void 0===e||e.disconnect()}}));const w=(0,o.useMemo)((()=>({height:n,isInBiznuxFullscreen:r,repinPinId:l,repinStartAnimation:h,showAccountMenuFlyout:m,updateHeaderState:f})),[f,n,r,l,h,m]);return(0,s.jsx)(c,{value:w,children:(0,s.jsx)(i.t,{children:e})})}},159617:(e,t,n)=>{n.d(t,{hu:()=>o,cI:()=>i,L1:()=>r,WZ:()=>a,fe:()=>s,Rz:()=>c});const o=64,i=80,r=22,a="HeaderContent",s=671,c={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/38243-d973228f7a351a88.mjs.map