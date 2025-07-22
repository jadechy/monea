import{S as d,bO as f,m,k as o,o as r,w as c,l as h,T as i,ag as v,n as b,aH as L,aI as y}from"./9_oEEP4X.js";import{x as s}from"./CLs7nh7g.js";import{s as S}from"./CE5BWmKq.js";import w from"./nRL5h7cE.js";import{s as k}from"./DTnTjCsu.js";import"./6-RqjL22.js";import"./CZJ6SyKg.js";import"./DCcdEoKi.js";import"./ZhWAdK_X.js";import"./BLgDm5E4.js";import"./CaOMTmc6.js";import"./jc0MLXVe.js";var g=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
`,E={root:function(e){var l=e.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},$=d.extend({name:"scrolltop",style:g,classes:E}),C={name:"BaseScrollTop",extends:k,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:$,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},T={name:"ScrollTop",extends:C,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(s.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(f())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){s.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){s.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:S,Button:w}};function A(n,e,l,P,a,t){var p=m("Button");return r(),o(y,i({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},n.ptm("transition")),{default:c(function(){return[a.visible?(r(),o(p,i({key:0,ref:t.containerRef,class:n.cx("root"),onClick:t.onClick,"aria-label":t.scrollTopAriaLabel,unstyled:n.unstyled},n.buttonProps,{pt:n.ptm("root")}),{icon:c(function(u){return[v(n.$slots,"icon",{class:b(n.cx("icon"))},function(){return[(r(),o(L(n.icon?"span":"ChevronUpIcon"),i({class:[n.cx("icon"),n.icon,u.class]},n.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):h("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}T.render=A;export{T as default};
