import{W as n,X as o,c as r,o as e,aj as p,Y as s}from"./DZ2khTnM.js";var u=`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`,a={root:"p-buttongroup p-component"},i=n.extend({name:"buttongroup",style:u,classes:a}),d={name:"BaseButtonGroup",extends:o,style:i,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},l={name:"ButtonGroup",extends:d,inheritAttrs:!1};function b(t,c,f,y,g,m){return e(),r("span",s({class:t.cx("root"),role:"group"},t.ptmi("root")),[p(t.$slots,"default")],16)}l.render=b;export{l as default};
