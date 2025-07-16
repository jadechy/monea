import{Q as X,ac as T,as as P,at as Z,au as v,av as _,aw as ee,ax as te,ay as ne,az as ie,aA as oe,aB as le,aC as w,m as S,aD as re,c,o as s,k as E,l as O,ad as m,b as V,aE as ae,n as k,S as r,a as x,F as R,f as H,w as C,aF as se,t as M,aG as ue,W as de,aH as pe,d as z}from"./DrJXerId.js";import{x as B}from"./CLs7nh7g.js";import{C as ce}from"./CLtqqp3k.js";import{s as fe}from"./NnhJwPhx.js";import{s as he}from"./DnrMt6XD.js";import me from"./BR3oYnmQ.js";import ye from"./C1AKM2pZ.js";import{O as ge}from"./CXQQPXb0.js";import{s as be}from"./BO29QJ_F.js";import{R as ve}from"./BPvQVBk-.js";import Oe from"./DWIROky2.js";import{s as Ie}from"./C5VsqFZ3.js";import{f as j}from"./ZhWAdK_X.js";import"./DqNSWbbH.js";import"./BpAAe-1L.js";import"./CcV-EP-q.js";import"./B4rtYYsy.js";import"./jc0MLXVe.js";import"./Dq8-Xy11.js";var we=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete.p-disabled .p-autocomplete-input-multiple {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('autocomplete.dropdown.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }
`,Se={root:{position:"relative"}},ke={root:function(e){var n=e.instance;return e.props,["p-autocomplete p-component p-inputwrapper",{"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||T(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){var n=e.instance,o=e.props;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled","p-disabled":o.disabled}]},chipItem:function(e){var n=e.instance,o=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===o}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,o=e.option,l=e.i,i=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(l,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},xe=X.extend({name:"autocomplete",style:we,classes:ke,inlineStyles:Se}),Ce={name:"BaseAutoComplete",extends:Ie,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:xe,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function N(t,e,n){return(e=Me(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t){var e=Le(t,"string");return I(e)=="symbol"?e:e+""}function Le(t,e){if(I(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(I(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function U(t){return Te(t)||Ve(t)||De(t)||Ke()}function Ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(t,e){if(t){if(typeof t=="string")return G(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}function Ve(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Te(t){if(Array.isArray(t))return G(t)}function G(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var Ae={name:"AutoComplete",extends:Ce,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(B.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?w(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?w(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,l){return this.ptm(l,{context:{option:e,index:o,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?w(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return w(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return w(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,o=function(){var i;n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&v(n.multiple?n.$refs.focusInput:(i=n.$refs.focusInput)===null||i===void 0?void 0:i.$el)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,o;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,o,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var l,i=this.multiple?this.$refs.focusInput.value:(l=this.$refs.focusInput)===null||l===void 0||(l=l.$el)===null||l===void 0?void 0:l.value,p=this.visibleOptions.find(function(A){return n.isOptionMatched(A,i||"")});p!==void 0&&(o=!0,!this.isSelected(p)&&this.onOptionSelect(e,p))}if(!o){if(this.multiple)this.$refs.focusInput.value="";else{var h,b=(h=this.$refs.focusInput)===null||h===void 0?void 0:h.$el;b&&(b.value="")}this.$emit("clear"),!this.multiple&&this.updateModel(e,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var o=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;v(o),n=o.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(U(this.d_value||[]),[l]))):this.updateModel(e,l),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOptionSelectRange:function(e){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(o===-1&&(o=this.findNearestSelectedOptionIndex(l,!0)),l===-1&&(l=this.findNearestSelectedOptionIndex(o)),o!==-1&&l!==-1){var i=Math.min(o,l),p=Math.max(o,l),h=this.visibleOptions.slice(i,p+1).filter(function(b){return n.isValidOption(b)}).map(function(b){return n.getOptionValue(b)});this.updateModel(e,h)}},onOverlayClick:function(e){ge.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,n),this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(le(n.value)&&this.$filled?(v(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,o=n.value.length,l=e.metaKey||e.ctrlKey,i=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&l&&this.onOptionSelectRange(e,i,this.startRangeIndex),n.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,o=n.value.length,l=e.metaKey||e.ctrlKey,i=this.findLastOptionIndex();this.multiple&&e.shiftKey&&l&&this.onOptionSelectRange(e,this.startRangeIndex,i),n.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?(this.onOptionSelectRange(e,this.focusedOptionIndex),e.preventDefault()):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(e.target.value.trim()&&(this.updateModel(e,[].concat(U(this.d_value||[]),[e.target.value.trim()])),this.$refs.focusInput.value=""),e.preventDefault())},onSpaceKey:function(e){!this.autoOptionFocus&&this.focusedOptionIndex!==-1&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(e){if(this.multiple){if(T(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],o=this.d_value.slice(0,-1);this.writeValue(o,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,v(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){B.set("overlay",e,this.$primevue.config.zIndex.overlay),oe(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.$attrSelector&&e.setAttribute(this.$attrSelector,"")},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){B.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?te(this.overlay,e):(this.overlay.style.minWidth=ne(e)+"px",ie(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ce(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ee()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var o;return this.isValidOption(e)&&((o=this.getOptionLabel(e))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return T(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return _(e,n,this.equalityKey)},isSelected:function(e){var n=this,o=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(l){return n.isEquals(l,o)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return P(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return n.isValidOption(l)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?P(this.visibleOptions.slice(0,e),function(l){return n.isValidOption(l)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var o=this,l=this.d_value[n],i=this.d_value.filter(function(p,h){return h!==n}).map(function(p){return o.getOptionValue(p)});this.updateModel(e,i),this.$emit("item-unselect",{originalEvent:e,value:l}),this.$emit("option-unselect",{originalEvent:e,value:l}),this.dirty=!0,v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.$id,"_").concat(n):e.focusedOptionId,l=Z(e.list,'li[id="'.concat(o,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,l,i){o.push({optionGroup:l,group:!0,index:i});var p=n.getOptionGroupChildren(l);return p&&p.forEach(function(h){return o.push(h)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e},findNextSelectedOptionIndex:function(e){var n=this,o=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return n.isValidSelectedOption(l)}):-1;return o>-1?o+e+1:-1},findPrevSelectedOptionIndex:function(e){var n=this,o=this.$filled&&e>0?P(this.visibleOptions.slice(0,e),function(l){return n.isValidSelectedOption(l)}):-1;return o>-1?o:-1},findNearestSelectedOptionIndex:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=-1;return this.$filled&&(n?(o=this.findPrevSelectedOptionIndex(e),o=o===-1?this.findNextSelectedOptionIndex(e):o):(o=this.findNextSelectedOptionIndex(e),o=o===-1?this.findPrevSelectedOptionIndex(e):o)),o>-1?o:e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(I(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return T(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.$id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+"_panel"},containerDataP:function(){return j({fluid:this.$fluid})},overlayDataP:function(){return j(N({},"portal-"+this.appendTo,"portal-"+this.appendTo))},inputMultipleDataP:function(){return j(N({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled",empty:!this.$filled},this.size,this.size))}},components:{InputText:ye,VirtualScroller:Oe,Portal:be,ChevronDownIcon:fe,SpinnerIcon:he,Chip:me},directives:{ripple:ve}};function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,o)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$(Object(n),!0).forEach(function(o){Fe(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Fe(t,e,n){return(e=Pe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pe(t){var e=Ee(t,"string");return L(e)=="symbol"?e:e+""}function Ee(t,e){if(L(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Re=["data-p"],ze=["aria-activedescendant","data-p-has-dropdown","data-p"],Be=["id","aria-label","aria-setsize","aria-posinset"],je=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Ge=["data-p-has-dropdown"],He=["disabled","aria-expanded","aria-controls"],Ne=["id","data-p"],Ue=["id","aria-label"],$e=["id"],qe=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function We(t,e,n,o,l,i){var p=S("InputText"),h=S("Chip"),b=S("SpinnerIcon"),A=S("VirtualScroller"),W=S("Portal"),Q=re("ripple");return s(),c("div",r({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)}),"data-p":i.containerDataP},t.ptmi("root")),[t.multiple?O("",!0):(s(),E(p,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:k([t.cx("pcInputText"),t.inputClass]),style:ae(t.inputStyle),defaultValue:i.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":i.panelId,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onInput:i.onInput,onChange:i.onChange,unstyled:t.unstyled,"data-p-has-dropdown":t.dropdown,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","defaultValue","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","data-p-has-dropdown","pt"])),t.multiple?(s(),c("ul",r({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":l.focused?i.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:e[7]||(e[7]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)}),"data-p-has-dropdown":t.dropdown,"data-p":i.inputMultipleDataP},t.ptm("inputMultiple")),[(s(!0),c(R,null,H(t.d_value,function(d,a){return s(),c("li",r({key:"".concat(a,"_").concat(i.getOptionLabel(d)),id:t.$id+"_multiple_option_"+a,class:t.cx("chipItem",{i:a}),role:"option","aria-label":i.getOptionLabel(d),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":a+1},{ref_for:!0},t.ptm("chipItem")),[m(t.$slots,"chip",r({class:t.cx("pcChip"),value:d,index:a,removeCallback:function(y){return i.removeOption(y,a)}},{ref_for:!0},t.ptm("pcChip")),function(){return[V(h,{class:k(t.cx("pcChip")),label:i.getOptionLabel(d),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(y){return i.removeOption(y,a)},"data-p-focused":l.focusedMultipleOptionIndex===a,pt:t.ptm("pcChip")},{removeicon:C(function(){return[m(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:k(t.cx("chipIcon")),index:a,removeCallback:function(y){return i.removeOption(y,a)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","data-p-focused","pt"])]})],16,Be)}),128)),x("li",r({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[x("input",r({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[4]||(e[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},t.ptm("input")),null,16,je)],16)],16,ze)):O("",!0),l.searching||t.loading?m(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:k(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(s(),c("i",r({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,Ge)):(s(),E(b,r({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,["class","data-p-has-dropdown"]))]}):O("",!0),m(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(a){return i.onDropdownClick(a)}},function(){return[t.dropdown?(s(),c("button",r({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":i.panelId,onClick:e[8]||(e[8]=function(){return i.onDropdownClick&&i.onDropdownClick.apply(i,arguments)})},t.ptm("dropdown")),[m(t.$slots,"dropdownicon",{class:k(t.dropdownIcon)},function(){return[(s(),E(se(t.dropdownIcon?"span":"ChevronDownIcon"),r({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,He)):O("",!0)]}),t.typeahead?(s(),c("span",r({key:3,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),M(i.searchResultMessageText),17)):O("",!0),V(W,{appendTo:t.appendTo},{default:C(function(){return[V(ue,r({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:C(function(){return[l.overlayVisible?(s(),c("div",r({key:0,ref:i.overlayRef,id:i.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:q(q({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)}),"data-p":i.overlayDataP},t.ptm("overlay")),[m(t.$slots,"header",{value:t.d_value,suggestions:i.visibleOptions}),x("div",r({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[V(A,r({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),de({content:C(function(d){var a=d.styleClass,K=d.contentRef,y=d.items,g=d.getItemOptions,Y=d.contentStyle,D=d.itemSize;return[x("ul",r({ref:function(f){return i.listRef(f,K)},id:t.$id+"_list",class:[t.cx("list"),a],style:Y,role:"listbox","aria-label":i.listAriaLabel},t.ptm("list")),[(s(!0),c(R,null,H(y,function(u,f){return s(),c(R,{key:i.getOptionRenderKey(u,i.getOptionIndex(f,g))},[i.isOptionGroup(u)?(s(),c("li",r({key:0,id:t.$id+"_"+i.getOptionIndex(f,g),style:{height:D?D+"px":void 0},class:t.cx("optionGroup"),role:"option"},{ref_for:!0},t.ptm("optionGroup")),[m(t.$slots,"optiongroup",{option:u.optionGroup,index:i.getOptionIndex(f,g)},function(){return[z(M(i.getOptionGroupLabel(u.optionGroup)),1)]})],16,$e)):pe((s(),c("li",r({key:1,id:t.$id+"_"+i.getOptionIndex(f,g),style:{height:D?D+"px":void 0},class:t.cx("option",{option:u,i:f,getItemOptions:g}),role:"option","aria-label":i.getOptionLabel(u),"aria-selected":i.isSelected(u),"aria-disabled":i.isOptionDisabled(u),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(f,g)),onClick:function(F){return i.onOptionSelect(F,u)},onMousemove:function(F){return i.onOptionMouseMove(F,i.getOptionIndex(f,g))},"data-p-selected":i.isSelected(u),"data-p-focused":l.focusedOptionIndex===i.getOptionIndex(f,g),"data-p-disabled":i.isOptionDisabled(u)},{ref_for:!0},i.getPTOptions(u,g,f,"option")),[m(t.$slots,"option",{option:u,index:i.getOptionIndex(f,g)},function(){return[z(M(i.getOptionLabel(u)),1)]})],16,qe)),[[Q]])],64)}),128)),t.showEmptyMessage&&(!y||y&&y.length===0)?(s(),c("li",r({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[m(t.$slots,"empty",{},function(){return[z(M(i.searchResultMessageText),1)]})],16)):O("",!0)],16,Ue)]}),_:2},[t.$slots.loader?{name:"loader",fn:C(function(d){var a=d.options;return[m(t.$slots,"loader",{options:a})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),m(t.$slots,"footer",{value:t.d_value,suggestions:i.visibleOptions}),x("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),M(i.selectedMessageText),17)],16,Ne)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Re)}Ae.render=We;export{Ae as default};
