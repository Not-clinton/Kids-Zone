(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[62986,28843],{250311:(e,t,n)=>{n.d(t,{Q:()=>s,Z:()=>c});var r=n(667294),a=n(304966),o=n(387987),i=n(44062);function s(e,t){const{setViewContextData:n}=(0,i.s)(),{requestIdentifier:s}=(0,o.B)(),c=(0,a.Z)();(0,r.useEffect)((()=>{var t;e&&(n({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data,component:e.component,element:e.element,object_id_str:e.object_id_str,aux_data:e.aux_data,clientTrackingParams:e.clientTrackingParams}),c({...e,event_type:13,request_identifier:s}))}),[t])}function c(e){const{children:t,log:n}=e;return s(n),t||null}},44062:(e,t,n)=>{n.d(t,{I:()=>c,s:()=>s});var r=n(667294),a=n(762803),o=n(785893);const{Provider:i,useHook:s}=(0,a.Z)("View");function c({children:e,initialState:t={}}){const[n,a]=(0,r.useState)(t),s=(0,r.useCallback)((()=>a({})),[]);return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(i,{value:{...n,clearViewContextData:s,setViewContextData:a},children:e})})}},861106:(e,t,n)=>{function r(e,t){let n;const r=(...r)=>{n||(e(...r),n=setTimeout((()=>n=null),t))};return r.cancel=()=>{void 0!==n&&clearTimeout(n)},r}n.d(t,{Z:()=>r})},583987:(e,t,n)=>{n.d(t,{i:()=>a,S:()=>o});var r=n(181307);const a="web_today_tab_v1";function o(){return(0,r.tc)(a)().anyEnabled}},797204:(e,t,n)=>{n.d(t,{i:()=>s,Z:()=>c});var r=n(667294),a=n(762803),o=n(785893);const{Provider:i,useHook:s}=(0,a.Z)("ContentHeader");function c({children:e}){const[t,n]=(0,r.useState)(!1);return(0,o.jsx)(i,{value:{isContentHeaderPresent:t,setIsContentHeaderPresent:n},children:e})}},341088:(e,t,n)=>{n.d(t,{Hv:()=>u,WQ:()=>c});var r=n(667294),a=n(861106),o=n(762803),i=n(785893);const{Provider:s,useHook:c}=(0,o.Z)("HeaderShadow");function u({children:e}){const[t,n]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(0),[l,v]=(0,r.useState)(null),_=(0,a.Z)((()=>{t&&(c(window.scrollY>0),d(window.scrollY))}),50);return(0,r.useEffect)((()=>(n(!0),()=>{n(!1)})),[]),(0,r.useEffect)((()=>(window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)})),[t]),(0,i.jsx)(s,{value:{currentScrollPosition:u,isScrolled:o,setSubheaderShadow:v,subheaderShadow:l},children:e})}},628843:(e,t,n)=>{function r(e,t){return t?`${e}?${new URLSearchParams(t).toString()}`:e}function a(e){return r("/admin/",e)}function o(e){return r("/admin/oauth/logout/",e)}function i(e){return r("/today/",e)}n.d(t,{HF:()=>a,Kn:()=>o,tG:()=>i})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/62986-84c05daf334c6c3e.mjs.map