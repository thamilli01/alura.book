"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{83944:(e,t,n)=>{n(2540);var r=n(39595),o=n(79049),a=n(41150),i=n(97797),s=n(49676);function l(e){for(let t of e.querySelectorAll(".js-toggle-hidden"))t.hidden=!t.hidden;for(let t of e.querySelectorAll(".js-toggle-disabled"))t.getAttribute("aria-disabled")?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")}async function c(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let n=(0,s.B)(document,await e.text());t.replaceWith(n)}}catch(e){}}async function u(e,t){let n=document.querySelector(`#${e}`),r=await (0,a.r)({content:n.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),r.addEventListener("dialog:remove",function(){t&&l(t)},{once:!0}),r}async function d(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let n=await t.json();n.codespace_url?(window.location.href=n.codespace_url,l(e),c(),f()):(e.closest("get-repo")||e.closest("new-codespace")?(e.setAttribute("data-src",n.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",n.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),l(e))}else if(422===t.status){let n=await t.json();if("concurrency_limit_error"===n.error_type)await u("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),r=n.error;t.after(new o.i4(t,{className:"flash-error",message:r})),l(e)}}}async function f(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let n=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(n.ok){let t=(0,s.B)(document,await n.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${n.statusText}`)}(0,i.on)("submit",".js-toggle-hidden-codespace-form",function(e){l(e.currentTarget)}),(0,i.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(c(),l(t))}),(0,i.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await d(t)});let m=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){u("concurrency-error")}};m=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}([r.p_],m);var p=n(90828),h=n(56941);function y(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function g(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}var v=new WeakMap;let b=class NewCodespaceElement extends HTMLElement{async connectedCallback(){var e;let t=new URLSearchParams(new URL(document.location.href,window.location.origin).search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`));let{signal:n}=(e=new AbortController,!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(this,y(this,v,"set"),e),e);this.addEventListener("itemActivated",this,{signal:n})}disconnectedCallback(){var e;((e=y(this,v,"get")).get?e.get.call(this):e.value).abort()}handleEvent(e){if("itemActivated"===e.type&&e.target===this.repositorySelectPanel&&this.advancedOptionsForm&&this.repoInput){let t=e.detail.item.getAttribute("data-value");t&&(this.repoInput.value=t),(0,p.k_)(this.advancedOptionsForm)}}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let n=0;n<t.length;n++)t[n].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget.getAttribute("data-sku-name");this.skuNameInput&&t&&(this.skuNameInput.value=t),this.advancedOptionsForm&&(0,p.k_)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,n=t.getAttribute("data-name");if(!n)return;let r=t.value,o=(0,h.D4)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(r=""),r?this.secrets_hash.set(n,(0,h.lF)(await (0,h.w)(o,r))):this.secrets_hash.delete(n),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),function(e,t,n){(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}(this,v,{writable:!0,value:void 0}),this.secrets_hash=new Map}};function w(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}g([r.aC],b.prototype,"declarativeSecretsHash",void 0),g([r.aC],b.prototype,"vscsTargetUrl",void 0),g([r.aC],b.prototype,"loadingVscode",void 0),g([r.aC],b.prototype,"vscodePoller",void 0),g([r.aC],b.prototype,"advancedOptionsForm",void 0),g([r.aC],b.prototype,"skuNameInput",void 0),g([r.aC],b.prototype,"repositorySelectPanel",void 0),g([r.aC],b.prototype,"repoInput",void 0),b=g([r.p_],b);let _=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}applyPublishParams(){let e=this.form.getAttribute("data-codespace-id"),t=document.querySelector(`[data-codespace-id='${e}'][data-class="publish-codespace-form"]`);if(t){let e=Object.fromEntries(new FormData(t).entries());if(this.form){let t=`?name=${e.name}&visibility=${e.visibility}`,n=(this.form.getAttribute("action")||"").split("?")[0]+t;this.form.setAttribute("action",n)}}}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1,(await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}})).ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let n=await fetch(e,{signal:this.abortPoll?.signal});return 202===n.status||404===n.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):n}constructor(...e){super(...e),this.abortPoll=null}};function S(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}w([r.aC],_.prototype,"form",void 0),w([r.aC],_.prototype,"loadingIndicator",void 0),w([r.aC],_.prototype,"viewBranchLink",void 0),_=w([r.p_],_),n(32234),n(14283);let E=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};S([r.aC],E.prototype,"regionConfig",void 0),S([r.aC],E.prototype,"vscsTarget",void 0),S([r.aC],E.prototype,"vscsTargetUrl",void 0),S([r.zV],E.prototype,"locationConfigs",void 0),S([r.zV],E.prototype,"vscsTargets",void 0),S([r.zV],E.prototype,"vscsTargetUrls",void 0),S([r.zV],E.prototype,"locations",void 0),E=S([r.p_],E)},56941:(e,t,n)=>{n.d(t,{D4:()=>i,lF:()=>s,w:()=>a});var r=n(79049),o=n(97797);async function a(e,t){let r=new TextEncoder().encode(t),{seal:o}=await Promise.all([n.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),n.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(n.bind(n,31658));return o(r,e)}function i(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function s(e){let t="";for(let n of e)t+=String.fromCharCode(n);return btoa(t)}function l(e){return async function(t){let n=t.currentTarget;if(t.defaultPrevented||!n.checkValidity())return;let o=i(n.getAttribute("data-public-key"));for(let i of(t.preventDefault(),n.elements))if(i.id.endsWith("secret")){if(i.disabled=!0,i.required&&!i.value){let e=`${i.name} is invalid!`,t=document.querySelector("template.js-flash-template");t.after(new r.i4(t,{className:"flash-error",message:e}));return}let t=`${i.name}_encrypted_value`;if(!i.value){n.elements.namedItem(t).disabled=e;continue}n.elements.namedItem(t).value=s(await a(o,i.value))}n.submit()}}(0,o.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let n=t.elements.namedItem("secret_value");if(n.disabled=!0,!n.value)return;e.preventDefault();let r=i(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=s(await a(r,n.value)),t.submit()}),(0,o.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,o.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},2540:(e,t,n)=>{n.d(t,{f:()=>s});var r=n(21403),o=n(97797),a=n(13937),i=n(90828);function s(e,t){let n;let r=t.querySelector("*"),o=e.ownerDocument.activeElement;o instanceof HTMLElement&&(n=r?.querySelector(function(e){let t=e.tagName.toLowerCase(),n=e.hasAttribute("class")?`.${e.className.split(" ").join(".")}`:"",r=e.hasAttribute("id")?`#${e.id}`:"",o=e.hasAttribute("name")?`[name="${e.getAttribute("name")}"]`:"";return`${t}${r}${n}${o}`}(o))),e.replaceWith(t),n instanceof HTMLElement&&n.focus()}function l(){let e=new URLSearchParams(new URL(document.location.href,window.location.origin).search);e.set("response_error","true"),window.location.replace(`${window.location.pathname}?${e.toString()}`)}(0,o.on)("remote-input-error","#js-codespaces-repository-select",()=>{document.querySelector("#js-codespaces-unable-load-repositories-warning").hidden=!1}),(0,a.JW)(".js-new-codespace-form",async function(e,t){let n=e.closest("[data-replace-remote-form-target]"),r=n.querySelector(".js-new-codespace-submit-button");r instanceof HTMLInputElement&&(r.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{r&&r.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&l(),s(n,e.html),"true"===n.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));!function(e){let t=new URLSearchParams(new URL(document.location.href,window.location.origin).search),n=["vscs_target"];for(let[r,o]of e.entries()){if(n.includes(r)||!o){t.delete(r);continue}t.set(r,o)}window.history.replaceState({},"",`?${t.toString()}`)}(e)}}catch(e){throw l(),e}});let c=null;function u(e){c=e,null!==e&&document.querySelector(".js-codespace-loading-steps").setAttribute("data-current-state",c)}(0,r.lB)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&u(t)}}),(0,r.lB)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&u(t)}});let d=null;function f(e){let t=document.querySelector(".js-workbench-form-container form");t&&e?(function(e,t){let n=e.querySelector(".js-cascade-token");n&&n.setAttribute("value",t)}(t,e),function(e,t){let n=e.querySelector(".js-partner-info");if(n){let e=n.getAttribute("value");e&&(e=e.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),n.setAttribute("value",e))}}(t,e),(0,i.k_)(t)):u("failed")}(0,r.lB)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:i.k_}),(0,r.lB)(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{let t=e.querySelector(".js-cascade-token");(function(e,t){if(""!==t.value){let t=e.querySelector("form");(0,i.k_)(t)}else{var n;n=document.querySelector(".js-fetch-cascade-token"),(0,a.JW)(".js-fetch-cascade-token",async function(e,t){try{d=(await t.json()).json.token}catch(e){}}),(0,i.k_)(n),function(e,t,n){if(document.querySelector(e)){let e=Date.now(),n=setInterval(()=>{let r=Date.now()-e;if(d||r>=1e4){clearInterval(n),t(d||void 0);return}},50)}}(".js-workbench-form-container",f,0)}})(e,t)}})},32234:(e,t,n)=>{var r=n(39595);function o(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}let a=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:t}))}routeCustomEvent(e){this.sinks[this.selectedIndex].dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};o([r.aC],a.prototype,"source",void 0),o([r.zV],a.prototype,"sinks",void 0),o([r.aC],a.prototype,"control",void 0),a=o([r.p_],a)},86654:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{M:()=>o})},40122:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function a(){return r?.locale??"en-US"}n.d(t,{JK:()=>a,_$:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},41150:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(97797);async function o(e){let t=document.querySelector("#site-details-dialog").content.cloneNode(!0),n=t.querySelector("details"),o=n.querySelector("details-dialog"),a=n.querySelector(".js-details-dialog-spinner");e.detailsClass&&n.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&o.classList.add(...e.dialogClass.split(" ")),e.label?o.setAttribute("aria-label",e.label):e.labelledBy&&o.setAttribute("aria-labelledby",e.labelledBy),document.body.append(t);try{let t=await e.content;a.remove(),o.prepend(t)}catch(n){a.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),o.prepend(t)}return n.addEventListener("toggle",()=>{n.hasAttribute("open")||((0,r.h)(o,"dialog:remove"),n.remove())}),o}},29134:(e,t,n)=>{n.d(t,{G:()=>o,K:()=>a});var r=n(94686);let o=r.XC?.readyState==="interactive"||r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.cg?.addEventListener("load",e)})},61490:(e,t,n)=>{n.d(t,{N7:()=>y});var r=n(36301),o=n(54098),a=n(24212),i=n(86654),s=n(39794),l=n(94686),c=n(2578),u=n(93231);let d=!1,f=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function h(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function y(e,t={}){if((0,c.G7)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(E.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(b({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:w(n),catalogService:void 0},t));return}h(e)||g(b(v(e),t))}else h(e)||g(b(v(e),t))}async function g(e){if(!(!S&&!d&&f<10&&(0,o.TT)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>_.test(e.filename)||_.test(e.function))){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:w(e),catalogService:e.catalogService}}function b(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.M)()||window.location.href,readyState:document.readyState,referrer:(0,u.dR)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.y)();return`anonymous-${t}`}()||void 0,bundler:s.v,ui:!!document.querySelector('meta[name="ui"]')},t)}function w(e){return(0,a.q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let _=/(chrome|moz|safari)-extension:\/\//,S=!1;l.cg?.addEventListener("pageshow",()=>S=!1),l.cg?.addEventListener("pagehide",()=>S=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{y(e.data.error)});let E=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},2578:(e,t,n)=>{n.d(t,{G7:()=>l,XY:()=>c,fQ:()=>s});var r=n(5225),o=n(40122);function a(){return new Set((0,o._$)().featureFlags.map(e=>e.toLowerCase()))}let i=n(94686).X3?a:(0,r.A)(a);function s(){return Array.from(i())}function l(e){return i().has(e.toLowerCase())}let c={isFeatureEnabled:l}},90828:(e,t,n)=>{n.d(t,{Cy:()=>s,K3:()=>u,Z8:()=>l,k_:()=>a,lK:()=>d,m$:()=>i});var r=n(51769);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.A)(t)),o(e,"submit",!0)&&e.submit()}function i(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function s(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search);for(let[e,r]of c(t))n.append(e,r);return n.toString()}function d(e){return c(new FormData(e)).toString()}},51769:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>r,C:()=>o})},502:(e,t,n)=>{let r;n.d(t,{BI:()=>m,Ti:()=>p,lA:()=>f});var o=n(70837),a=n(97524),i=n(55202),s=n(20454);let{getItem:l}=(0,i.A)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new a.s(e)}catch(e){}function d(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,s.X)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},49676:(e,t,n)=>{n.d(t,{B:()=>s});var r=n(95670),o=n(20742);let a="parse-html-no-op",i=r.wA.createPolicy(a,{createHTML:e=>o.b.apply({policy:()=>e,policyName:a,fallback:e,sanitize:!1,fallbackOnError:!0})});function s(e,t){let n=e.createElement("template");return n.innerHTML=i.createHTML(t),e.importNode(n.content,!0)}},39794:(e,t,n)=>{n.d(t,{k:()=>i,v:()=>s});var r=n(5225),o=n(94686);let a=(0,r.A)(function(){return o.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,r.A)(function(){return"enterprise"===a()}),s="webpack"},55202:(e,t,n)=>{n.d(t,{A:()=>i,D:()=>s});var r=n(94686),o=n(20454);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.cg,i=e=>e,s=e=>e){let l;try{if(!n)throw Error();l=n[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,o.i)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,s(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return i(e,{throwQuotaErrorsOnSet:!1},r.cg,JSON.parse,JSON.stringify)}},29419:(e,t,n)=>{n.d(t,{Ai:()=>a,Gq:()=>r,SO:()=>o});let{getItem:r,setItem:o,removeItem:a}=(0,n(55202).A)("sessionStorage")},93231:(e,t,n)=>{n.d(t,{BW:()=>o,Ff:()=>m,HK:()=>b,JA:()=>T,LM:()=>p,Pv:()=>S,Vy:()=>f,ZW:()=>_,dR:()=>w,di:()=>h,fX:()=>E,k9:()=>v,my:()=>g,r7:()=>C,wG:()=>y,xT:()=>d});var r=n(29419);let o="reload",a="soft-nav:fail",i="soft-nav:fail-referrer",s="soft-nav:referrer",l="soft-nav:marker",c="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,r.SO)(l,"0"),(0,r.Ai)(s),(0,r.Ai)(a),(0,r.Ai)(i),(0,r.Ai)(c),(0,r.Ai)(u)}function f(e){(0,r.SO)(l,e)}function m(){(0,r.SO)(l,"0")}function p(){let e=(0,r.Gq)(l);return e&&"0"!==e}function h(){return(0,r.Gq)(l)}function y(){return!!g()}function g(){return(0,r.Gq)(a)}function v(e){(0,r.SO)(a,e||o),(0,r.SO)(i,window.location.href)}function b(){(0,r.SO)(s,window.location.href)}function w(){return(0,r.Gq)(s)||document.referrer}function _(){let e=E();e?(0,r.SO)(c,e):(0,r.Ai)(c)}function S(){return(0,r.Gq)(c)}function E(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function T(e){(0,r.SO)(u,e)}function C(){return(0,r.Gq)(u)}},94686:(e,t,n)=>{n.d(t,{KJ:()=>r.KJ,Kn:()=>o.Kn,X3:()=>r.X3,XC:()=>o.XC,cg:()=>o.cg,fV:()=>o.fV,g5:()=>r.g5});var r=n(54334),o=n(73239)},73239:(e,t,n)=>{n.d(t,{Kn:()=>a,XC:()=>r,cg:()=>o,fV:()=>i});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},54334:(e,t,n)=>{n.d(t,{KJ:()=>a,X3:()=>o,g5:()=>i});var r=n(73239);let o=void 0===r.XC,a=!o;function i(){return!!o||!!r.XC.querySelector('react-app[data-ssr="true"]')}},20454:(e,t,n)=>{n.d(t,{X:()=>m,i:()=>c});var r=n(94686),o=n(29134),a=n(39794),i=n(2578),s=n(70170);let l=[];function c(e,t=!1,n=.5){if(!0!==(0,i.G7)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=a.v,Math.random()<n&&l.push(e),t?f():d()}}let u=null,d=(0,s.n)(async function(){await o.K,null==u&&(u=window.requestIdleCallback(f))},5e3);function f(){if(u=null,!l.length)return;let e=r.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function m(){return!!r.XC?.head?.querySelector('meta[name="user-staff"]')?.content}r.XC?.addEventListener("pagehide",f),r.XC?.addEventListener("visibilitychange",f)},20742:(e,t,n)=>{n.d(t,{b:()=>c,r:()=>TrustedTypesPolicyError});var r=n(2578),o=n(20454),a=n(61490),i=n(42838),s=n.n(i),l=n(502);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:i=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,r.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let a=e();return c&&new Promise(e=>{let n=window.performance.now(),r=s().sanitize(a,{FORBID_ATTR:[]}),o=window.performance.now();if(a.length!==r.length){let i=Error("Trusted Types policy output sanitized"),s=i.stack?.slice(0,1e3),c=a.slice(0,250);(0,l.BI)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:s,outputLength:a.length,sanitizedLength:r.length,executionTime:o-n}),e(a)}}),a}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,a.N7)(e),(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!i))throw e}return n}}},95670:(e,t,n)=>{n.d(t,{wA:()=>u});var r,o=n(94686),a=n(20454);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,a.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(c.createPolicy(e,t));return l.set(e,n),n}}},d=!1;o.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-e53a3f","app_assets_modules_github_ref-selector_ts"],()=>t(83944)),e.O()}]);
//# sourceMappingURL=codespaces-3dbbb218a32c.js.map