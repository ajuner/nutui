System.register(["./mobile-legacy.893d1dcd.js","./vendor-legacy.c830061d.js","./index-legacy.bba154b7.js"],(function(l){"use strict";var e,n,t,u,a,c,d,o,s;return{setters:[function(l){e=l.c},function(l){n=l.a,t=l.s,u=l.x,a=l.r,c=l.o,d=l.c,o=l.f,s=l.q},function(){}],execute:function(){const{createDemo:r}=e("rate"),i=l("default",r({setup(){const l=n({val:4,val2:2,result:"",result2:""});return{state:l,onClick:e=>{l.result="您点击了第"+e+"个!"}}}})),v=s("data-v-e917fe00");t("data-v-e917fe00");const h={class:"demo"},f=o("h2",null,"基本用法",-1),k=o("h2",null,"自定义图标",-1),C=o("h2",null,"自定义数量",-1),b=o("h2",null,"自定义颜色",-1),g=o("h2",null,"禁用状态",-1),y=o("h2",null,"只读状态",-1),m=o("h2",null,"监听 change 事件",-1);u();const j=v(((l,e,n,t,u,s)=>{const r=a("nut-rate");return c(),d("div",h,[f,o("div",null,[o(r,{value:l.state.val,"onUpdate:value":e[1]||(e[1]=e=>l.state.val=e)},null,8,["value"])]),k,o("div",null,[o(r,{checkedIcon:"heart-fill1",uncheckedIcon:"heart"})]),C,o("div",null,[o(r,{total:6})]),b,o("div",null,[o(r,{activeColor:"#FFC800"})]),g,o("div",null,[o(r,{disabled:!0})]),y,o("div",null,[o(r,{value:2,readOnly:!0})]),m,o("div",null,[o(r,{onClick:l.onClick},null,8,["onClick"])])])}));i.render=j,i.__scopeId="data-v-e917fe00"}}}));