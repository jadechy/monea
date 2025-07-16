import { defineComponent, ref, computed, watch, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, hasInjectionContext, inject, readonly, onMounted, nextTick, defineAsyncComponent, unref, shallowReactive, Suspense, Fragment, createApp, toRef, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps, getCurrentScope, withCtx, markRaw, useSSRContext } from 'vue';
import { h as hasProtocol, i as isScriptProtocol, j as joinURL, w as withQuery, s as sanitizeStatusCode, g as getContext, $ as $fetch, b as baseURL, c as createHooks, e as executeAsync, a as createError$1, t as toRouteMatcher, f as createRouter$1, k as defu } from '../nitro/nitro.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'pinia';
import { useRouter as useRouter$1, useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { EventBus } from '@primeuix/utils/eventbus';
import { Theme, css as css$1, dt, ThemeService } from '@primeuix/styled';
import { mergeKeys } from '@primeuix/utils';
import { resolve, minifyCSS, isNotEmpty, equals, removeAccents, resolveFieldData } from '@primeuix/utils/object';
import { style } from '@primeuix/styles/base';
import { isClient, setAttributes, setAttribute, isExist } from '@primeuix/utils/dom';
import { useQuery, useQueryClient, useMutation, QueryClient, MutationCache, QueryCache, VueQueryPlugin } from '@tanstack/vue-query';
import { z } from 'zod';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { u as useHead$1, h as headSymbol } from './client.manifest.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import 'node:url';
import 'ipx';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'file:///app/node_modules/@nuxt/vite-builder/dist/runtime/client.manifest.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.6";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup2, args) {
  const fn = () => setup2();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const setPageLayout = (layout) => {
  const nuxtApp = useNuxtApp();
  {
    nuxtApp.payload.state._layout = layout;
  }
  const inMiddleware = isProcessingMiddleware();
  {
    const unsubscribe = useRouter().beforeResolve((to) => {
      to.meta.layout = layout;
      unsubscribe();
    });
  }
  if (!inMiddleware) {
    useRoute().meta.layout = layout;
  }
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index-Cb5CsnSk.mjs')
  },
  {
    name: "terms",
    path: "/terms",
    component: () => import('./terms-Bx3g1xR8.mjs')
  },
  {
    name: "privacy",
    path: "/privacy",
    component: () => import('./privacy-B2QOXOpN.mjs')
  },
  {
    name: "user-edit",
    path: "/user/edit",
    component: () => import('./edit-C8cPHXdG.mjs')
  },
  {
    name: "auth-login",
    path: "/auth/login",
    component: () => import('./login-yiPbR556.mjs')
  },
  {
    name: "auth-reset",
    path: "/auth/reset",
    component: () => import('./reset-DDMW3a6I.mjs')
  },
  {
    name: "groups-new",
    path: "/groups/new",
    component: () => import('./new-B0iWj76i.mjs')
  },
  {
    name: "user",
    path: "/user",
    component: () => import('./index-qrAc_r_A.mjs')
  },
  {
    name: "auth-forgot",
    path: "/auth/forgot",
    component: () => import('./forgot-Ly80FRC0.mjs')
  },
  {
    name: "auth-confirm",
    path: "/auth/confirm",
    component: () => import('./confirm-C8Vqc6DX.mjs')
  },
  {
    name: "groups",
    path: "/groups",
    component: () => import('./index-BQYtrYVF.mjs')
  },
  {
    name: "NotFoundView",
    path: "/NotFoundView",
    component: () => import('./NotFoundView-B31eALCc.mjs')
  },
  {
    name: "auth-register",
    path: "/auth/register",
    component: () => import('./register-zH8sCszq.mjs')
  },
  {
    name: "savings",
    path: "/savings",
    component: () => import('./index-CN9huEJ9.mjs')
  },
  {
    name: "oauth-callback",
    path: "/oauth/callback",
    component: () => import('./callback-CRV0DGNz.mjs')
  },
  {
    name: "user-middleware",
    path: "/user/middleware",
    component: () => import('./middleware-DtKhqbqF.mjs')
  },
  {
    name: "user-invitation",
    path: "/user/invitation",
    component: () => import('./invitation-DvsdOgDF.mjs')
  },
  {
    name: "groups-middleware",
    path: "/groups/middleware",
    component: () => import('./middleware-E0JYPuoM.mjs')
  },
  {
    name: "savings-middleware",
    path: "/savings/middleware",
    component: () => import('./middleware-CKywRGyU.mjs')
  },
  {
    name: "groups-group_id-edit",
    path: "/groups/:group_id()/edit",
    component: () => import('./edit-XhYaBeHn.mjs')
  },
  {
    name: "groups-group_id",
    path: "/groups/:group_id()",
    component: () => import('./index-B2I6zran.mjs')
  },
  {
    name: "groups-group_id-budget-edit",
    path: "/groups/:group_id()/budget/edit",
    component: () => import('./edit-DDUgIZmr.mjs')
  },
  {
    name: "groups-group_id-expense-new",
    path: "/groups/:group_id()/expense/new",
    component: () => import('./new-n6t2wzbs.mjs')
  },
  {
    name: "groups-group_id-budget",
    path: "/groups/:group_id()/budget",
    component: () => import('./index-DivVnvER.mjs')
  },
  {
    name: "groups-group_id-budget-forecast",
    path: "/groups/:group_id()/budget/forecast",
    component: () => import('./forecast-CLTpNamd.mjs')
  },
  {
    name: "groups-group_id-category-categoryId",
    path: "/groups/:group_id()/category/:categoryId()",
    component: () => import('./_categoryId_-Cb54ov-h.mjs')
  },
  {
    name: "groups-group_id-expense-expense_id-edit",
    path: "/groups/:group_id()/expense/:expense_id()/edit",
    component: () => import('./edit-DSFLCFpx.mjs')
  },
  {
    name: "groups-group_id-expense-expense_id",
    path: "/groups/:group_id()/expense/:expense_id()",
    component: () => import('./index-DclmNijK.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve2) => {
      if (from === START_LOCATION) {
        resolve2(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const layout_45router_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/savings") || to.path.startsWith("/groups") || to.path.startsWith("/user")) {
    setPageLayout("savings");
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  layout_45router_45global,
  manifest_45route_45rule
];
const namedMiddleware = {
  auth: () => import('./auth-Bj-UheNL.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    const stack = (_b = (_a = useRequestEvent()) == null ? void 0 : _a.context) == null ? void 0 : _b.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack == null ? void 0 : stack.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyAutoComplete = defineAsyncComponent(() => import('./index-CrfdG82O.mjs').then((r) => r["default"] || r.default || r));
const LazyCalendar = defineAsyncComponent(() => import('./index-BEYirH8k.mjs').then((r) => r["default"] || r.default || r));
const LazyCascadeSelect = defineAsyncComponent(() => import('./index-ps4134yD.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckbox = defineAsyncComponent(() => import('./index-D5JWdyeG.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckboxGroup = defineAsyncComponent(() => import('./index-DQFvdRDw.mjs').then((r) => r["default"] || r.default || r));
const LazyChips = defineAsyncComponent(() => import('./index-CyqYDOJ7.mjs').then((r) => r["default"] || r.default || r));
const LazyColorPicker = defineAsyncComponent(() => import('./index-CTgn48t-.mjs').then((r) => r["default"] || r.default || r));
const LazyDatePicker = defineAsyncComponent(() => import('./index-ByyIQ08N.mjs').then((r) => r["default"] || r.default || r));
const LazyDropdown = defineAsyncComponent(() => import('./index-C9cvx99b.mjs').then((r) => r["default"] || r.default || r));
const LazyFloatLabel = defineAsyncComponent(() => import('./index-B95qXBXP.mjs').then((r) => r["default"] || r.default || r));
const LazyFluid = defineAsyncComponent(() => import('./index-Bvi40uxM.mjs').then((r) => r["default"] || r.default || r));
const LazyIconField = defineAsyncComponent(() => import('./index-4P6kumGy.mjs').then((r) => r["default"] || r.default || r));
const LazyIftaLabel = defineAsyncComponent(() => import('./index-f9-t7sFw.mjs').then((r) => r["default"] || r.default || r));
const LazyInputChips = defineAsyncComponent(() => import('./index-CJlN3nWd.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroup = defineAsyncComponent(() => import('./index-D8KXjNak.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroupAddon = defineAsyncComponent(() => import('./index-BeYWHb2a.mjs').then((r) => r["default"] || r.default || r));
const LazyInputIcon = defineAsyncComponent(() => import('./index-B5Idjp61.mjs').then((r) => r["default"] || r.default || r));
const LazyInputMask = defineAsyncComponent(() => import('./index-C6JMf4T-.mjs').then((r) => r["default"] || r.default || r));
const LazyInputNumber = defineAsyncComponent(() => import('./index-vLeze0-z.mjs').then((r) => r["default"] || r.default || r));
const LazyInputOtp = defineAsyncComponent(() => import('./index-BWxf7WhY.mjs').then((r) => r["default"] || r.default || r));
const LazyInputSwitch = defineAsyncComponent(() => import('./index-B2PW769H.mjs').then((r) => r["default"] || r.default || r));
const LazyInputText = defineAsyncComponent(() => import('./index-D45wcmtf.mjs').then((r) => r["default"] || r.default || r));
const LazyKnob = defineAsyncComponent(() => import('./index-dF_bOh2y.mjs').then((r) => r["default"] || r.default || r));
const LazyListbox = defineAsyncComponent(() => import('./index-DNCIhQhs.mjs').then((r) => r["default"] || r.default || r));
const LazyMultiSelect = defineAsyncComponent(() => import('./index-CYTubJRc.mjs').then((r) => r["default"] || r.default || r));
const LazyPassword = defineAsyncComponent(() => import('./index-D4kJrjbE.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButton = defineAsyncComponent(() => import('./index-C7QJcRv6.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButtonGroup = defineAsyncComponent(() => import('./index-DIazv7Fx.mjs').then((r) => r["default"] || r.default || r));
const LazyRating = defineAsyncComponent(() => import('./index-CtTONRgI.mjs').then((r) => r["default"] || r.default || r));
const LazySelect = defineAsyncComponent(() => import('./index-CBQOMMAL.mjs').then((r) => r["default"] || r.default || r));
const LazySelectButton = defineAsyncComponent(() => import('./index-2bk7L1Dz.mjs').then((r) => r["default"] || r.default || r));
const LazySlider = defineAsyncComponent(() => import('./index-BZ36KRre.mjs').then((r) => r["default"] || r.default || r));
const LazyTextarea = defineAsyncComponent(() => import('./index-BlBVWSN3.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleButton = defineAsyncComponent(() => import('./index-DuWuMOuw.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleSwitch = defineAsyncComponent(() => import('./index-Bj3LC9cd.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeSelect = defineAsyncComponent(() => import('./index-hlRNU6fn.mjs').then((r) => r["default"] || r.default || r));
const LazyButton = defineAsyncComponent(() => import('./index-IJ23DGgI.mjs').then((r) => r["default"] || r.default || r));
const LazyButtonGroup = defineAsyncComponent(() => import('./index-C1gEDv6C.mjs').then((r) => r["default"] || r.default || r));
const LazySpeedDial = defineAsyncComponent(() => import('./index-Gs1nDgp_.mjs').then((r) => r["default"] || r.default || r));
const LazySplitButton = defineAsyncComponent(() => import('./index-czqRc7Um.mjs').then((r) => r["default"] || r.default || r));
const LazyColumn = defineAsyncComponent(() => import('./index-CjuIug2P.mjs').then((r) => r["default"] || r.default || r));
const LazyRow = defineAsyncComponent(() => import('./index-BeTmLtpf.mjs').then((r) => r["default"] || r.default || r));
const LazyColumnGroup = defineAsyncComponent(() => import('./index-DBfi73-9.mjs').then((r) => r["default"] || r.default || r));
const LazyDataTable = defineAsyncComponent(() => import('./index-sTFyRkH4.mjs').then((r) => r["default"] || r.default || r));
const LazyDataView = defineAsyncComponent(() => import('./index-Csk540eH.mjs').then((r) => r["default"] || r.default || r));
const LazyOrderList = defineAsyncComponent(() => import('./index-DivK5ah-.mjs').then((r) => r["default"] || r.default || r));
const LazyOrganizationChart = defineAsyncComponent(() => import('./index-n7y7V4Pu.mjs').then((r) => r["default"] || r.default || r));
const LazyPaginator = defineAsyncComponent(() => import('./index-DuISXDP8.mjs').then((r) => r["default"] || r.default || r));
const LazyPickList = defineAsyncComponent(() => import('./index-CLeKwtVN.mjs').then((r) => r["default"] || r.default || r));
const LazyTree = defineAsyncComponent(() => import('./index-LRcna9XK.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeTable = defineAsyncComponent(() => import('./index-DGKyO6iH.mjs').then((r) => r["default"] || r.default || r));
const LazyTimeline = defineAsyncComponent(() => import('./index-DgdDfo4-.mjs').then((r) => r["default"] || r.default || r));
const LazyVirtualScroller = defineAsyncComponent(() => import('./index-CXivEcTV.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordion = defineAsyncComponent(() => import('./index-CO6qaYYR.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionPanel = defineAsyncComponent(() => import('./index-BxfqW_8x.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionHeader = defineAsyncComponent(() => import('./index-DBKs_M_r.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionContent = defineAsyncComponent(() => import('./index-Csa6qe6g.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionTab = defineAsyncComponent(() => import('./index-BWixa06Y.mjs').then((r) => r["default"] || r.default || r));
const LazyCard = defineAsyncComponent(() => import('./index-atZ0DPFK.mjs').then((r) => r["default"] || r.default || r));
const LazyDeferredContent = defineAsyncComponent(() => import('./index-waHD5tqX.mjs').then((r) => r["default"] || r.default || r));
const LazyDivider = defineAsyncComponent(() => import('./index-CQEsobbS.mjs').then((r) => r["default"] || r.default || r));
const LazyFieldset = defineAsyncComponent(() => import('./index-D_5vMZw7.mjs').then((r) => r["default"] || r.default || r));
const LazyPanel = defineAsyncComponent(() => import('./index-DmCcdeYO.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollPanel = defineAsyncComponent(() => import('./index-CKIvrThF.mjs').then((r) => r["default"] || r.default || r));
const LazySplitter = defineAsyncComponent(() => import('./index-B4y_C5G9.mjs').then((r) => r["default"] || r.default || r));
const LazySplitterPanel = defineAsyncComponent(() => import('./index-DWxrMs0h.mjs').then((r) => r["default"] || r.default || r));
const LazyStepper = defineAsyncComponent(() => import('./index-CQfYR4rJ.mjs').then((r) => r["default"] || r.default || r));
const LazyStepList = defineAsyncComponent(() => import('./index-Cau4l4Wi.mjs').then((r) => r["default"] || r.default || r));
const LazyStep = defineAsyncComponent(() => import('./index-DHQ9qFgx.mjs').then((r) => r["default"] || r.default || r));
const LazyStepItem = defineAsyncComponent(() => import('./index-BwITmmls.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanels = defineAsyncComponent(() => import('./index-BYCPAmVO.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanel = defineAsyncComponent(() => import('./index-C7ZqiplN.mjs').then((r) => r["default"] || r.default || r));
const LazyTabView = defineAsyncComponent(() => import('./index-BqToOXC0.mjs').then((r) => r["default"] || r.default || r));
const LazyTabs = defineAsyncComponent(() => import('./index-BpcQDK7p.mjs').then((r) => r["default"] || r.default || r));
const LazyTabList = defineAsyncComponent(() => import('./index-CRAhKLp1.mjs').then((r) => r["default"] || r.default || r));
const LazyTab = defineAsyncComponent(() => import('./index-DKbFQW8l.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanels = defineAsyncComponent(() => import('./index-IgvGNMhn.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanel = defineAsyncComponent(() => import('./index-DXKszH9i.mjs').then((r) => r["default"] || r.default || r));
const LazyToolbar = defineAsyncComponent(() => import('./index-BwMUeLi7.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmDialog = defineAsyncComponent(() => import('./index-NhNAMfjP.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmPopup = defineAsyncComponent(() => import('./index-BPRvR6iM.mjs').then((r) => r["default"] || r.default || r));
const LazyDialog = defineAsyncComponent(() => import('./index-De0VhdmC.mjs').then((r) => r["default"] || r.default || r));
const LazyDrawer = defineAsyncComponent(() => import('./index-Bd17IegO.mjs').then((r) => r["default"] || r.default || r));
const LazyDynamicDialog = defineAsyncComponent(() => import('./index-CW-V9xPS.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayPanel = defineAsyncComponent(() => import('./index-BUddGZ9P.mjs').then((r) => r["default"] || r.default || r));
const LazyPopover = defineAsyncComponent(() => import('./index-Dmuuu1qZ.mjs').then((r) => r["default"] || r.default || r));
const LazySidebar = defineAsyncComponent(() => import('./index-UhoOymE5.mjs').then((r) => r["default"] || r.default || r));
const LazyFileUpload = defineAsyncComponent(() => import('./index-DCmV56Cb.mjs').then((r) => r["default"] || r.default || r));
const LazyBreadcrumb = defineAsyncComponent(() => import('./index-BWGF3fUa.mjs').then((r) => r["default"] || r.default || r));
const LazyContextMenu = defineAsyncComponent(() => import('./index-CfemObpX.mjs').then((r) => r["default"] || r.default || r));
const LazyDock = defineAsyncComponent(() => import('./index-afhyO1_0.mjs').then((r) => r["default"] || r.default || r));
const LazyMenu = defineAsyncComponent(() => import('./index-C3AIsKpS.mjs').then((r) => r["default"] || r.default || r));
const LazyMenubar = defineAsyncComponent(() => import('./index-DMc7wJtt.mjs').then((r) => r["default"] || r.default || r));
const LazyMegaMenu = defineAsyncComponent(() => import('./index-CoENZ_Ge.mjs').then((r) => r["default"] || r.default || r));
const LazyPanelMenu = defineAsyncComponent(() => import('./index-Dfs1GP8W.mjs').then((r) => r["default"] || r.default || r));
const LazySteps = defineAsyncComponent(() => import('./index-BxJDSpuk.mjs').then((r) => r["default"] || r.default || r));
const LazyTabMenu = defineAsyncComponent(() => import('./index-Dt1yxERy.mjs').then((r) => r["default"] || r.default || r));
const LazyTieredMenu = defineAsyncComponent(() => import('./index-DCCm6MaI.mjs').then((r) => r["default"] || r.default || r));
const LazyMessage = defineAsyncComponent(() => import('./index-BFREUk8o.mjs').then((r) => r["default"] || r.default || r));
const LazyInlineMessage = defineAsyncComponent(() => import('./index-Dpw62cfm.mjs').then((r) => r["default"] || r.default || r));
const LazyToast = defineAsyncComponent(() => import('./index-DTypV1ue.mjs').then((r) => r["default"] || r.default || r));
const LazyCarousel = defineAsyncComponent(() => import('./index-fIZqKU4N.mjs').then((r) => r["default"] || r.default || r));
const LazyGalleria = defineAsyncComponent(() => import('./index-B0UXHiW1.mjs').then((r) => r["default"] || r.default || r));
const LazyImage = defineAsyncComponent(() => import('./index-LClfP8tj.mjs').then((r) => r["default"] || r.default || r));
const LazyImageCompare = defineAsyncComponent(() => import('./index-BmwNX3wK.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatar = defineAsyncComponent(() => import('./index-0V99AVn5.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatarGroup = defineAsyncComponent(() => import('./index-DSQS3U1f.mjs').then((r) => r["default"] || r.default || r));
const LazyBadge = defineAsyncComponent(() => import('./index-ik-SlIj1.mjs').then((r) => r["default"] || r.default || r));
const LazyBlockUI = defineAsyncComponent(() => import('./index-kNkh9_km.mjs').then((r) => r["default"] || r.default || r));
const LazyChip = defineAsyncComponent(() => import('./index-CMfZuAsG.mjs').then((r) => r["default"] || r.default || r));
const LazyInplace = defineAsyncComponent(() => import('./index-BUvEc6_y.mjs').then((r) => r["default"] || r.default || r));
const LazyMeterGroup = defineAsyncComponent(() => import('./index-6wpCfIuz.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayBadge = defineAsyncComponent(() => import('./index-B-lckPHO.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollTop = defineAsyncComponent(() => import('./index-CoB7KVNO.mjs').then((r) => r["default"] || r.default || r));
const LazySkeleton = defineAsyncComponent(() => import('./index-2oZ8j4iQ.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressBar = defineAsyncComponent(() => import('./index-rhNudRCt.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressSpinner = defineAsyncComponent(() => import('./index-C4LGfKx7.mjs').then((r) => r["default"] || r.default || r));
const LazyTag = defineAsyncComponent(() => import('./index-D0jprGPA.mjs').then((r) => r["default"] || r.default || r));
const LazyTerminal = defineAsyncComponent(() => import('./index-cAglJYnl.mjs').then((r) => r["default"] || r.default || r));
const LazyForm = defineAsyncComponent(() => import('./index-CkuOTgVv.mjs').then((r) => r["default"] || r.default || r));
const LazyFormField = defineAsyncComponent(() => import('./index-BBtCQT5t.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["AutoComplete", LazyAutoComplete],
  ["Calendar", LazyCalendar],
  ["CascadeSelect", LazyCascadeSelect],
  ["Checkbox", LazyCheckbox],
  ["CheckboxGroup", LazyCheckboxGroup],
  ["Chips", LazyChips],
  ["ColorPicker", LazyColorPicker],
  ["DatePicker", LazyDatePicker],
  ["Dropdown", LazyDropdown],
  ["FloatLabel", LazyFloatLabel],
  ["Fluid", LazyFluid],
  ["IconField", LazyIconField],
  ["IftaLabel", LazyIftaLabel],
  ["InputChips", LazyInputChips],
  ["InputGroup", LazyInputGroup],
  ["InputGroupAddon", LazyInputGroupAddon],
  ["InputIcon", LazyInputIcon],
  ["InputMask", LazyInputMask],
  ["InputNumber", LazyInputNumber],
  ["InputOtp", LazyInputOtp],
  ["InputSwitch", LazyInputSwitch],
  ["InputText", LazyInputText],
  ["Knob", LazyKnob],
  ["Listbox", LazyListbox],
  ["MultiSelect", LazyMultiSelect],
  ["Password", LazyPassword],
  ["RadioButton", LazyRadioButton],
  ["RadioButtonGroup", LazyRadioButtonGroup],
  ["Rating", LazyRating],
  ["Select", LazySelect],
  ["SelectButton", LazySelectButton],
  ["Slider", LazySlider],
  ["Textarea", LazyTextarea],
  ["ToggleButton", LazyToggleButton],
  ["ToggleSwitch", LazyToggleSwitch],
  ["TreeSelect", LazyTreeSelect],
  ["Button", LazyButton],
  ["ButtonGroup", LazyButtonGroup],
  ["SpeedDial", LazySpeedDial],
  ["SplitButton", LazySplitButton],
  ["Column", LazyColumn],
  ["Row", LazyRow],
  ["ColumnGroup", LazyColumnGroup],
  ["DataTable", LazyDataTable],
  ["DataView", LazyDataView],
  ["OrderList", LazyOrderList],
  ["OrganizationChart", LazyOrganizationChart],
  ["Paginator", LazyPaginator],
  ["PickList", LazyPickList],
  ["Tree", LazyTree],
  ["TreeTable", LazyTreeTable],
  ["Timeline", LazyTimeline],
  ["VirtualScroller", LazyVirtualScroller],
  ["Accordion", LazyAccordion],
  ["AccordionPanel", LazyAccordionPanel],
  ["AccordionHeader", LazyAccordionHeader],
  ["AccordionContent", LazyAccordionContent],
  ["AccordionTab", LazyAccordionTab],
  ["Card", LazyCard],
  ["DeferredContent", LazyDeferredContent],
  ["Divider", LazyDivider],
  ["Fieldset", LazyFieldset],
  ["Panel", LazyPanel],
  ["ScrollPanel", LazyScrollPanel],
  ["Splitter", LazySplitter],
  ["SplitterPanel", LazySplitterPanel],
  ["Stepper", LazyStepper],
  ["StepList", LazyStepList],
  ["Step", LazyStep],
  ["StepItem", LazyStepItem],
  ["StepPanels", LazyStepPanels],
  ["StepPanel", LazyStepPanel],
  ["TabView", LazyTabView],
  ["Tabs", LazyTabs],
  ["TabList", LazyTabList],
  ["Tab", LazyTab],
  ["TabPanels", LazyTabPanels],
  ["TabPanel", LazyTabPanel],
  ["Toolbar", LazyToolbar],
  ["ConfirmDialog", LazyConfirmDialog],
  ["ConfirmPopup", LazyConfirmPopup],
  ["Dialog", LazyDialog],
  ["Drawer", LazyDrawer],
  ["DynamicDialog", LazyDynamicDialog],
  ["OverlayPanel", LazyOverlayPanel],
  ["Popover", LazyPopover],
  ["Sidebar", LazySidebar],
  ["FileUpload", LazyFileUpload],
  ["Breadcrumb", LazyBreadcrumb],
  ["ContextMenu", LazyContextMenu],
  ["Dock", LazyDock],
  ["Menu", LazyMenu],
  ["Menubar", LazyMenubar],
  ["MegaMenu", LazyMegaMenu],
  ["PanelMenu", LazyPanelMenu],
  ["Steps", LazySteps],
  ["TabMenu", LazyTabMenu],
  ["TieredMenu", LazyTieredMenu],
  ["Message", LazyMessage],
  ["InlineMessage", LazyInlineMessage],
  ["Toast", LazyToast],
  ["Carousel", LazyCarousel],
  ["Galleria", LazyGalleria],
  ["Image", LazyImage],
  ["ImageCompare", LazyImageCompare],
  ["Avatar", LazyAvatar],
  ["AvatarGroup", LazyAvatarGroup],
  ["Badge", LazyBadge],
  ["BlockUI", LazyBlockUI],
  ["Chip", LazyChip],
  ["Inplace", LazyInplace],
  ["MeterGroup", LazyMeterGroup],
  ["OverlayBadge", LazyOverlayBadge],
  ["ScrollTop", LazyScrollTop],
  ["Skeleton", LazySkeleton],
  ["ProgressBar", LazyProgressBar],
  ["ProgressSpinner", LazyProgressSpinner],
  ["Tag", LazyTag],
  ["Terminal", LazyTerminal],
  ["Form", LazyForm],
  ["FormField", LazyFormField]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    var _a;
    const event = useRequestEvent();
    const ctx = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a.robots;
    if (!ctx)
      return;
    useHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => void 0
        }
      ]
    });
  }
});
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
var FilterOperator = {
  AND: "and",
  OR: "or"
};
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var FilterService = {
  filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];
    if (!value) {
      return filteredItems;
    }
    var _iterator = _createForOfIteratorHelper(value), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (typeof item === "string") {
          if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
            filteredItems.push(item);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              var fieldValue = resolveFieldData(item, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return filteredItems;
  },
  filters: {
    startsWith: function startsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: function contains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: function notContains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: function endsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: function equals2(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() === filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: function notEquals(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter2.getTime) return value.getTime() !== filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    "in": function _in(value, filter2) {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (var i = 0; i < filter2.length; i++) {
        if (equals(value, filter2[i])) {
          return true;
        }
      }
      return false;
    },
    between: function between(value, filter2) {
      if (filter2 == null || filter2[0] == null || filter2[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter2[0].getTime() <= value.getTime() && value.getTime() <= filter2[1].getTime();
      else return filter2[0] <= value && value <= filter2[1];
    },
    lt: function lt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() < filter2.getTime();
      else return value < filter2;
    },
    lte: function lte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() <= filter2.getTime();
      else return value <= filter2;
    },
    gt: function gt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() > filter2.getTime();
      else return value > filter2;
    },
    gte: function gte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() >= filter2.getTime();
      else return value >= filter2;
    },
    dateIs: function dateIs(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter2.toDateString();
    },
    dateIsNot: function dateIsNot(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter2.toDateString();
    },
    dateBefore: function dateBefore(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter2.getTime();
    },
    dateAfter: function dateAfter(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter2.getTime();
    }
  },
  register: function register(rule, fn) {
    this.filters[rule] = fn;
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument = isClient() ? (void 0).document : void 0;
  var _options$document = options.document, document = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load22(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id2) || document.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document.head.prepend(styleRef.value) : document.head.appendChild(styleRef.value);
      setAttribute(styleRef.value, "data-primevue-style-id", _name);
      setAttributes(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document || !isLoaded.value) return;
    stop();
    isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(css$1(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), style2));
    return isNotEmpty(computedStyle) ? useStyle(minifyCSS(computedStyle), _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Theme.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style2)));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return Theme.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return Theme.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return Theme.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return Theme.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return Theme.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = resolve(this.css, {
        dt
      }) || "";
      var _style = minifyCSS(css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "", ""])), _css, extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k = _ref3[0], v = _ref3[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      return isNotEmpty(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Theme.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [Theme.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), resolve(this.style, {
        dt
      }));
      var _style = minifyCSS(Theme.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k = _ref5[0], v = _ref5[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      isNotEmpty(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend(inStyle) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = EventBus();
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function setup(app, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app.config.globalProperties.$primevue = PrimeVue2;
  app.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  ThemeService.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!Theme.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread({
        name: "global-style"
      }, styleOptions), style2);
      Theme.setLoadedStyleName("common");
    }
  };
  ThemeService.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      Theme.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = mergeKeys(defaultOptions, options);
    setup(app, configOptions);
  }
};
var ConfirmationEventBus = EventBus();
var PrimeVueConfirmSymbol = Symbol();
var ConfirmationService = {
  install: function install2(app) {
    var ConfirmationService2 = {
      require: function require2(options) {
        ConfirmationEventBus.emit("confirm", options);
      },
      close: function close() {
        ConfirmationEventBus.emit("close");
      }
    };
    app.config.globalProperties.$confirm = ConfirmationService2;
    app.provide(PrimeVueConfirmSymbol, ConfirmationService2);
  }
};
var DynamicDialogEventBus = EventBus();
var PrimeVueDialogSymbol = Symbol();
var DialogService = {
  install: function install3(app) {
    var DialogService2 = {
      open: function open(content, options) {
        var instance = {
          content: content && markRaw(content),
          options: options || {},
          data: options && options.data,
          close: function close(params) {
            DynamicDialogEventBus.emit("close", {
              instance,
              params
            });
          }
        };
        DynamicDialogEventBus.emit("open", {
          instance
        });
        return instance;
      }
    };
    app.config.globalProperties.$dialog = DialogService2;
    app.provide(PrimeVueDialogSymbol, DialogService2);
  }
};
var ToastEventBus = EventBus();
var PrimeVueToastSymbol = Symbol();
var ToastService = {
  install: function install4(app) {
    var ToastService2 = {
      add: function add(message) {
        ToastEventBus.emit("add", message);
      },
      remove: function remove(message) {
        ToastEventBus.emit("remove", message);
      },
      removeGroup: function removeGroup(group) {
        ToastEventBus.emit("remove-group", group);
      },
      removeAllGroups: function removeAllGroups() {
        ToastEventBus.emit("remove-all-groups");
      }
    };
    app.config.globalProperties.$toast = ToastService2;
    app.provide(PrimeVueToastSymbol, ToastService2);
  }
};
const primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  var _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const config = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.primevue) ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  const theme = { theme: options == null ? void 0 : options.theme };
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme });
  vueApp.use(ConfirmationService);
  vueApp.use(DialogService);
  vueApp.use(ToastService);
});
const globalErrors = ref([]);
const useErrorHandler = () => {
  const addError2 = (notification) => {
    globalErrors.value.push({
      ...notification,
      duration: notification.duration || 5e3
    });
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeError(notification);
      }, notification.duration || 5e3);
    }
  };
  const removeError = (notification) => {
    const index = globalErrors.value.indexOf(notification);
    if (index > -1) {
      globalErrors.value.splice(index, 1);
    }
  };
  const clearErrors = () => {
    globalErrors.value = [];
  };
  return {
    errors: globalErrors,
    addError: addError2,
    removeError,
    clearErrors
  };
};
function isHttpError(error) {
  var _a;
  if (!error || typeof error !== "object") return false;
  const err = error;
  return typeof ((_a = err.response) == null ? void 0 : _a.status) === "number" || typeof err.status === "number" || typeof err.statusCode === "number";
}
function getStatusCode(error) {
  var _a;
  return ((_a = error.response) == null ? void 0 : _a.status) || error.status || error.statusCode || null;
}
function getErrorData(error) {
  var _a, _b;
  return ((_a = error.response) == null ? void 0 : _a.data) || ((_b = error.response) == null ? void 0 : _b._data) || error.data || null;
}
const { addError } = useErrorHandler();
const handleApiError = (error) => {
  console.error("Erreur API:", error);
  let notification;
  if (isHttpError(error)) {
    const status = getStatusCode(error);
    const data = getErrorData(error);
    switch (status) {
      case 400:
        notification = {
          title: "Erreur de validation",
          message: (data == null ? void 0 : data.message) || "Données invalides",
          type: "error"
        };
        break;
      case 401:
        notification = {
          title: "Non autorisé",
          message: "Vous devez vous connecter",
          type: "warning"
        };
        break;
      case 403:
        notification = {
          title: "Accès refusé",
          message: "Vous n'avez pas les permissions nécessaires",
          type: "error"
        };
        break;
      case 404:
        notification = {
          title: "Ressource introuvable",
          message: "La ressource demandée n'existe pas",
          type: "error"
        };
        break;
      case 422:
        notification = {
          title: "Données invalides",
          message: (data == null ? void 0 : data.message) || "Erreur de validation",
          type: "error"
        };
        break;
      case 500:
        notification = {
          title: "Erreur serveur",
          message: "Une erreur interne s'est produite",
          type: "error"
        };
        break;
      default:
        notification = {
          title: "Erreur",
          message: (data == null ? void 0 : data.message) || `Erreur ${status}`,
          type: "error"
        };
    }
  } else if (error instanceof TypeError && error.message.includes("fetch")) {
    notification = {
      title: "Erreur de connexion",
      message: "Impossible de se connecter au serveur",
      type: "error"
    };
  } else if (error instanceof Error) {
    notification = {
      title: "Erreur inattendue",
      message: error.message || "Une erreur inattendue s'est produite",
      type: "error"
    };
  } else {
    notification = {
      title: "Erreur inconnue",
      message: "Une erreur inconnue est survenue",
      type: "error"
    };
  }
  addError(notification);
};
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error("Erreur query:", error);
      handleApiError(error);
      if (query.state.fetchStatus === "fetching") {
        handleApiError(error);
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("Erreur mutation:", error);
      handleApiError(error);
    }
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        var _a, _b, _c;
        if (((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) === 401 || ((_b = error == null ? void 0 : error.response) == null ? void 0 : _b.status) === 403 || ((_c = error == null ? void 0 : error.response) == null ? void 0 : _c.status) === 404) {
          return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4),
      staleTime: 5 * 60 * 1e3
    },
    mutations: { retry: false }
  }
});
const _00_vue_query_zHJ5s5mqnA_2vdRL51dNEE0CJSt5fUyeNZx2G_EyCLM = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueQueryPlugin, { queryClient });
});
const ColorSchema = z.enum([
  "pink",
  "red",
  "yellow",
  "orange",
  "blue",
  "green",
  "gray",
  "cyan",
  "indigo",
  "violet",
  "fuchsia",
  "teal"
]);
const CategorySchema = z.object({
  id: z.number({
    required_error: "L'identifiant est requis",
    invalid_type_error: "L'identifiant doit être un nombre"
  }),
  label: z.string({
    required_error: "Le nom de la catégorie est requis",
    invalid_type_error: "Le nom doit être une chaîne de caractères"
  }).max(50, "Le nom de la catégorie doit contenir au maximum 50 caractères"),
  color: ColorSchema
});
const NewCategorySchema = z.object({
  id: CategorySchema.shape.id.optional(),
  label: CategorySchema.shape.label,
  color: CategorySchema.shape.color
});
const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Format attendu : YYYY-MM-DD"
});
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?([+-]\d{2}:\d{2}|Z)$/;
const dateSchema = z.string().refine((val) => isoDateRegex.test(val), {
  message: "Invalid ISO 8601 datetime with timezone"
});
const MemberRoleEnum = z.enum(["author", "admin", "viewer", "member", "anonyme", "banned"]);
const MemberStatusEnum = z.enum(["pending", "accepted", "refused", "deleted"]);
const GroupTypeEnum = z.enum(["personnal", "occasional", "daily"]);
const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: dateSchema,
  type: GroupTypeEnum,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
  userStatus: MemberStatusEnum.optional(),
  userRole: MemberRoleEnum.optional()
});
const NewGroupSchema = GroupSchema.pick({
  name: true,
  type: true,
  color: true
}).extend({ categories: NewCategorySchema.array() });
const isAdult = (date) => {
  if (typeof date === "string") date = new Date(date);
  const now = /* @__PURE__ */ new Date();
  const age = now.getFullYear() - date.getFullYear();
  const hasHadBirthdayThisYear = now.getMonth() > date.getMonth() || now.getMonth() === date.getMonth() && now.getDate() >= date.getDate();
  return hasHadBirthdayThisYear ? age >= 18 : age > 18;
};
const UserSchema = z.object({
  id: z.number({
    message: "L'identifiant est requis",
    invalid_type_error: "L'identifiant doit être un nombre"
  }),
  username: z.string({
    message: "Le nom d'utilisateur est requis"
  }).min(3, {
    message: "Le nom d'utilisateur doit contenir au moins 3 caractères"
  }).max(50, {
    message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères"
  }),
  name: z.string({
    message: "Le prénom est requis"
  }).min(3, { message: "Le prénom ne peut pas être vide" }),
  lastname: z.string({
    message: "Le nom est requis"
  }).min(3, { message: "Le nom doit être supérieur à 3 caractères" }),
  email: z.string({
    message: "L'adresse email est requise"
  }).email({ message: "L'adresse email n'est pas valide" }),
  birthday: z.preprocess(
    (val) => {
      if (typeof val === "string" || val instanceof Date) return new Date(val);
      return val;
    },
    z.date().refine(isAdult, {
      message: "Vous devez avoir au moins 18 ans"
    })
  ),
  password: z.string({
    message: "Le mot de passe est requis"
  }),
  roles: z.array(z.enum(["ROLE_USER", "ROLE_ADMIN", "ROLE_MANAGER"]), {
    required_error: "Le rôle est requis",
    invalid_type_error: "Le rôle doit être une liste de chaînes"
  }).min(1, { message: "Au moins un rôle est requis" }),
  createdAt: z.preprocess(
    (val) => {
      if (typeof val === "string" || val instanceof Date) {
        const d = new Date(val);
        return isNaN(d.getTime()) ? void 0 : d;
      }
      return void 0;
    },
    z.date({ message: "La date de création doit être une date valide" })
  ),
  picture: z.string().nullable().optional(),
  resetToken: z.string().nullable(),
  invitationToken: z.string().optional(),
  googleId: z.string().optional()
});
const UserUploadResponseSchema = z.object({
  picture: z.string()
});
UserSchema.pick({
  username: true,
  lastname: true,
  name: true,
  email: true,
  picture: true,
  birthday: true
});
const UserDTOSchema = UserSchema.pick({
  id: true,
  username: true,
  picture: true
});
const MemberSchema = z.object({
  role: MemberRoleEnum,
  addOn: dateSchema,
  groupe: GroupSchema,
  status: MemberStatusEnum,
  individual: UserDTOSchema
});
const MemberDTOSchema = MemberSchema.pick({
  role: true,
  addOn: true,
  status: true
}).extend({
  user: UserDTOSchema
});
z.object({
  role: MemberRoleEnum,
  groupeId: GroupSchema.shape.id,
  username: UserDTOSchema.shape.username.optional(),
  mail: z.string().email().optional()
});
const InvitationResponseSchema = z.object({ message: z.string() });
const MemberInvitationSchema = z.object({
  role: MemberRoleEnum,
  group: GroupSchema,
  status: MemberStatusEnum,
  user: UserDTOSchema
});
const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberDTOSchema.array().optional()
});
const useGroupService = () => {
  const { $api } = useNuxtApp();
  const getGroupByUser = () => $api.get({
    url: `groupes/list`,
    schema: FetchGroupByUserSchema.array()
  });
  const postGroup = (group) => $api.post({
    url: "groupes",
    body: group,
    schema: z.object({ message: z.string() })
  });
  const editGroup = (groupId, group) => $api.patch({
    url: `groupes/${groupId}`,
    body: group,
    schema: z.object({ message: z.string() })
  });
  const deleteGroup = (groupId) => $api.delete({
    url: `groupes/${groupId}`,
    schema: z.any()
  });
  const uploadFile = (groupId, user) => $api.upload({
    url: `groupes/${groupId}/picture`,
    body: user,
    schema: UserUploadResponseSchema
  });
  return {
    getGroupByUser,
    postGroup,
    editGroup,
    deleteGroup,
    uploadFile
  };
};
const useGroupsStore = defineStore("groups", () => {
  const route = useRoute();
  const group_id = computed(() => route.params.group_id);
  const { getGroupByUser } = useGroupService();
  const { data, refetch } = useQuery({
    queryKey: ["groups-by-user"],
    queryFn: async () => {
      return await getGroupByUser();
    },
    staleTime: 1e3 * 60 * 5
  });
  const groups = computed(() => (data == null ? void 0 : data.value) ?? []);
  const group = computed(() => {
    if (group_id.value === void 0) return void 0;
    return groups.value.find((group2) => group2.id === Number(group_id.value));
  });
  const groupsNotPersonnal = computed(
    () => groups.value.filter((group2) => group2.type !== "personnal")
  );
  const groupsCount = computed(() => groupsNotPersonnal.value.length);
  const personnalGroup = computed(
    () => groups.value.find((group2) => group2.type === "personnal")
  );
  return {
    // State
    groups: groupsNotPersonnal,
    personnalGroup,
    // Getters
    groupsCount,
    group,
    // Actions
    refetch
  };
});
const RegisterRequestSchema = z.object({
  email: UserSchema.shape.email,
  name: UserSchema.shape.name,
  lastname: UserSchema.shape.lastname,
  birthday: UserSchema.shape.birthday,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
  password: UserSchema.shape.password.min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }).regex(/[A-Z]/, {
    message: "Le mot de passe doit contenir au moins une majuscule"
  }).regex(/[a-z]/, {
    message: "Le mot de passe doit contenir au moins une minuscule"
  }).regex(/[0-9]/, {
    message: "Le mot de passe doit contenir au moins un chiffre"
  }),
  confirmPassword: UserSchema.shape.password,
  invitationToken: UserSchema.shape.invitationToken
});
const RegisterResponseSchema = z.object({ message: z.string() });
const TokenSchema = z.string();
const LoginRequestSchema = z.object({
  username: UserSchema.shape.username,
  password: UserSchema.shape.password
});
const LoginResponseSchema = z.object({
  token: TokenSchema,
  refresh_token: TokenSchema.optional()
});
const MeSchema = UserSchema.pick({
  id: true,
  email: true,
  name: true,
  lastname: true,
  birthday: true,
  username: true,
  picture: true,
  roles: true,
  createdAt: true,
  googleId: true
});
z.object({
  email: UserSchema.shape.email
});
const ForgotResponseSchema = z.object({ message: z.string() });
z.object({
  password: UserSchema.shape.password,
  repeatPassword: UserSchema.shape.password,
  resetToken: UserSchema.shape.resetToken
});
const ResetResponseSchema = z.object({ message: z.string() });
const useAuthService = () => {
  const { $api } = useNuxtApp();
  return {
    login: ({ username, password }) => $api.post({
      url: "login",
      body: { username, password },
      schema: LoginResponseSchema
    }),
    register: (data) => $api.post({
      url: "register",
      body: data,
      schema: RegisterResponseSchema
    }),
    me: () => $api.get({
      url: "me",
      schema: MeSchema
    }),
    forgot: ({ email }) => $api.post({
      url: "forgot",
      body: { email },
      schema: ForgotResponseSchema
    }),
    reset: ({ password, repeatPassword, resetToken }) => $api.post({
      url: "reset",
      body: { password, repeatPassword, resetToken },
      schema: ResetResponseSchema
    })
  };
};
const refreshToken = async (refreshToken2) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const API_URL = config.public.apiBase || "";
  const response = await fetch(`${API_URL}/api/token/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ refresh_token: refreshToken2 })
  });
  if (!response.ok) {
    throw new Error("Impossible de rafraîchir le token");
  }
  const data = await response.json();
  if (!data.token) {
    throw new Error("Token manquant dans la réponse");
  }
  return data.token;
};
const useUserService = () => {
  const { $api } = useNuxtApp();
  const editUser = (user) => $api.patch({
    url: `users/edit`,
    body: user,
    schema: z.object({ message: z.string() })
  });
  const uploadFile = (user) => $api.upload({
    url: `users/picture`,
    body: user,
    schema: UserUploadResponseSchema
  });
  const deleteUser = () => $api.delete({
    url: `users`,
    schema: z.object({ message: z.string() }).or(z.null())
  });
  return {
    editUser,
    uploadFile,
    deleteUser
  };
};
const useAuthStore = defineStore("auth", () => {
  var _a;
  const router = useRouter$1();
  const route = useRoute$1();
  const token = ref(null);
  const refreshToken$1 = ref(null);
  const user = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const { login, me } = useAuthService();
  const { editUser, uploadFile, deleteUser } = useUserService();
  const isAuthenticated = computed(() => !!token.value);
  const userInitials = computed(() => {
    if (!user.value) return "";
    return user.value.name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase();
  });
  const initAuth = () => {
    return;
  };
  const saveToStorage = () => {
  };
  const clearAuth = () => {
    token.value = null;
    refreshToken$1.value = null;
    user.value = null;
    error.value = null;
  };
  const { data: userData, refetch: refetchMe } = useQuery({
    queryKey: ["me"],
    queryFn: me,
    enabled: !!((_a = user.value) == null ? void 0 : _a.id)
  });
  watch(userData, (newData) => {
    if (newData) {
      user.value = newData;
    }
  });
  const authSuccess = async (res) => {
    token.value = res.token;
    if (res.refresh_token) {
      refreshToken$1.value = res.refresh_token;
    }
    await refetchMe();
    router.push({ name: "groups" });
    const groupStore = useGroupsStore();
    await groupStore.refetch();
  };
  const queryClient2 = useQueryClient();
  const loginMutation = useMutation({
    mutationFn: (params) => login(params),
    onMutate: () => {
      isLoading.value = true;
      error.value = null;
    },
    onSuccess: async (res) => {
      if (!res) throw new Error("Identifiants incorrects");
      queryClient2.invalidateQueries({ queryKey: ["profil"] });
      await authSuccess(res);
    },
    onSettled: () => {
      isLoading.value = false;
    }
  });
  const loginGoogle = async () => {
    const res = route.query;
    if (res.token) {
      await authSuccess(res);
    } else {
      router.push({ name: "login" });
    }
  };
  const refreshAuthToken = async () => {
    if (!refreshToken$1.value) {
      throw new Error("Pas de refresh token disponible");
    }
    try {
      const newToken = await refreshToken(refreshToken$1.value);
      token.value = newToken;
      saveToStorage();
      return newToken;
    } catch (err) {
      clearAuth();
      throw err;
    }
  };
  const updateUser = useMutation({
    mutationFn: (data) => editUser(data),
    onMutate: () => {
      isLoading.value = true;
      error.value = null;
    },
    onSuccess: async () => {
      queryClient2.invalidateQueries({ queryKey: ["profil"] });
      queryClient2.invalidateQueries({ queryKey: ["me"] });
      await refetchMe();
      router.push("/user");
    },
    onSettled: () => {
      isLoading.value = false;
    }
  });
  const uploadPicture = useMutation({
    mutationFn: async (file) => {
      const form = new FormData();
      form.append("picture", file);
      return uploadFile(form);
    },
    onSuccess: async () => {
      await queryClient2.invalidateQueries({ queryKey: ["me"] });
      await refetchMe();
    },
    onError: (error2) => {
      console.error("Upload failed", error2);
      alert("Erreur lors de l'upload");
    }
  });
  const deleteUserMutation = useMutation({
    mutationFn: () => deleteUser(),
    onSuccess: async () => {
      await queryClient2.invalidateQueries({ queryKey: ["me"] });
      clearAuth();
    },
    onSettled: () => {
      isLoading.value = false;
    }
  });
  return {
    token,
    refreshToken: refreshToken$1,
    user,
    isLoading,
    error,
    isAuthenticated,
    userInitials,
    initAuth,
    loginMutation,
    loginGoogle,
    refreshAuthToken,
    updateUser,
    uploadPicture,
    clearAuth,
    deleteUserMutation
  };
});
const _01_api_client_BE2IXZhZuDEd6_vXtTLKnqY40HO3_r1A63it0q_luC4 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const API_URL = config.public.apiBase;
  const getAuthStore = () => useAuthStore();
  const requestJson = async ({
    url,
    method,
    schema,
    body,
    options = {},
    contentType = "application/json"
  }) => {
    const authStore = getAuthStore();
    const makeRequest = async (token) => {
      const headers = {
        "Content-Type": contentType,
        ...options.headers,
        ...token ? { Authorization: `Bearer ${token}` } : {}
      };
      const res2 = await fetch(`${API_URL}/api/${url}`, {
        method,
        headers,
        ...body ? { body: JSON.stringify(body) } : {},
        ...options
      });
      return res2;
    };
    let res = await makeRequest(authStore.token);
    if (res.status === 401) {
      try {
        if (!authStore.refreshToken) {
          authStore.clearAuth();
          throw new Error("Pas de refresh token, déconnexion");
        }
        const newToken = await refreshToken(authStore.refreshToken);
        authStore.token = newToken;
        res = await makeRequest(newToken);
        if (res.status === 401) {
          authStore.clearAuth();
          throw new Error("Non autorisé, déconnexion");
        }
      } catch (err) {
        authStore.clearAuth();
        throw err;
      }
    }
    if (res.status === 204) {
      return {};
    }
    if (!res.ok) throw new Error(`Erreur API (${res.status})`);
    const json = await res.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      console.error("Erreur de validation Zod", parsed.error);
      throw new Error("Réponse invalide");
    }
    return parsed.data;
  };
  const requestJsonNullable = async ({
    url,
    method,
    schema,
    body,
    options = {},
    contentType = "application/json"
  }) => {
    const authStore = getAuthStore();
    const makeRequest = async (token) => {
      const headers = {
        "Content-Type": contentType,
        ...options.headers,
        ...token ? { Authorization: `Bearer ${token}` } : {}
      };
      const res2 = await fetch(`${API_URL}/api/${url}`, {
        method,
        headers,
        ...body ? { body: JSON.stringify(body) } : {},
        ...options
      });
      return res2;
    };
    let res = await makeRequest(authStore.token);
    if (res.status === 401) {
      try {
        if (!authStore.refreshToken) {
          authStore.clearAuth();
          throw new Error("Pas de refresh token, déconnexion");
        }
        const newToken = await refreshToken(authStore.refreshToken);
        authStore.token = newToken;
        res = await makeRequest(newToken);
        if (res.status === 401) {
          authStore.clearAuth();
          throw new Error("Non autorisé, déconnexion");
        }
      } catch (err) {
        authStore.clearAuth();
        throw err;
      }
    }
    if (res.status === 204) return null;
    if (!res.ok) throw new Error(`Erreur API (${res.status})`);
    const json = await res.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      console.error("Erreur de validation Zod", parsed.error);
      throw new Error("Réponse invalide");
    }
    return parsed.data;
  };
  const requestFormData = async ({
    url,
    schema,
    body,
    options = {}
  }) => {
    if (!(body instanceof FormData)) {
      throw new Error("Le body doit être un FormData pour UPLOAD.");
    }
    const authStore = getAuthStore();
    const makeRequest = async (token) => {
      const headers = {
        ...options.headers ?? {},
        ...token ? { Authorization: `Bearer ${token}` } : {}
      };
      return fetch(`${API_URL}/api/${url}`, {
        method: "POST",
        headers,
        body,
        ...options
      });
    };
    let res = await makeRequest(authStore.token);
    if (res.status === 401) {
      if (!authStore.refreshToken) throw new Error("Non autorisé");
      const newToken = await refreshToken(authStore.refreshToken);
      authStore.token = newToken;
      res = await makeRequest(newToken);
    }
    if (!res.ok) throw new Error(`Erreur API (${res.status})`);
    const json = await res.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) throw new Error("Réponse invalide");
    return parsed.data;
  };
  const api = {
    get: (params) => requestJson({ ...params, method: "GET" }),
    post: (params) => requestJson({
      ...params,
      method: "POST",
      contentType: "application/ld+json"
    }),
    patch: (params) => requestJson({
      ...params,
      method: "PATCH",
      contentType: "application/merge-patch+json"
    }),
    delete: (params) => requestJsonNullable({ ...params, method: "DELETE" }),
    upload: (params) => requestFormData({
      ...params
    })
  };
  nuxtApp.provide("api", api);
});
const _02_init_auth_iBnmu1vKEfks3aG4GriGvIdjufQpLRsNtN7r2GoxgBw = /* @__PURE__ */ defineNuxtPlugin(() => {
  const authStore = useAuthStore();
  authStore.initAuth();
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0,
  _00_vue_query_zHJ5s5mqnA_2vdRL51dNEE0CJSt5fUyeNZx2G_EyCLM,
  _01_api_client_BE2IXZhZuDEd6_vXtTLKnqY40HO3_r1A63it0q_luC4,
  _02_init_auth_iBnmu1vKEfks3aG4GriGvIdjufQpLRsNtN7r2GoxgBw
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-Cbe6huP_.mjs').then((m) => m.default || m)),
  savings: defineAsyncComponent(() => import('./savings-D8bNFgu8.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? (route == null ? void 0 : route.meta.layout) ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (route == null ? void 0 : route.meta.layoutTransition) ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-Bp7EzWuA.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-kNhLIA3P.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { BaseStyle as B, ColorSchema as C, DateSchema as D, FilterService as F, GroupTypeEnum as G, InvitationResponseSchema as I, LoginRequestSchema as L, MemberRoleEnum as M, NewGroupSchema as N, PrimeVueService as P, RegisterRequestSchema as R, ToastEventBus as T, UserSchema as U, _export_sfc as _, useRouter as a, useAuthStore as b, useGroupsStore as c, __nuxt_component_0$1 as d, entry$1 as default, useAuthService as e, useRoute as f, useNuxtApp as g, useRuntimeConfig as h, nuxtLinkDefaults as i, useGroupService as j, MemberInvitationSchema as k, MemberDTOSchema as l, GroupSchema as m, navigateTo as n, dateSchema as o, UserDTOSchema as p, CategorySchema as q, resolveRouteObject as r, defineNuxtRouteMiddleware as s, FilterMatchMode as t, useHead as u, FilterOperator as v, ConfirmationEventBus as w, DynamicDialogEventBus as x };
//# sourceMappingURL=server.mjs.map
