import t from"./C9gcyTOe.js";import{T as r,m as o,c as s,o as l,ah as i,b as d,V as a}from"./CHzrNd7Y.js";import"./DggHTziL.js";import"./ZhWAdK_X.js";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},m=r.extend({name:"overlaybadge",style:p,classes:v}),c={name:"OverlayBadge",extends:t,style:m,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},g={name:"OverlayBadge",extends:c,inheritAttrs:!1,components:{Badge:t}};function y(e,u,b,B,f,$){var n=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(n,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}g.render=y;export{g as default};
