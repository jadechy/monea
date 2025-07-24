import { omit, resolve, isArray, mergeKeys, isEmpty, isNotEmpty } from '@primeuix/utils';
import { ref, reactive, computed, getCurrentInstance, onMounted, nextTick, mergeProps, toValue, watch, createElementBlock, openBlock, withModifiers, renderSlot } from 'vue';
import { B as BaseStyle, g as script$6 } from './server.mjs';
import '../nitro/nitro.mjs';
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
import '@primeuix/utils/object';
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
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@tanstack/vue-query';
import 'zod';
import 'vue/server-renderer';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
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
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine2(u2, "_invoke", function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = false, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d2(t2, r4) {
        return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
      } };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = true, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && 1 === p2 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else 1 === c3 && (t = i3["return"]) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return { value: t, done: y };
      };
    }(r2, o2, i2), true), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
    return this;
  }), _regeneratorDefine2(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator = function _regenerator2() {
    return { w: i, m: f };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e2, r2, n2, t2) {
    if (r2) i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2;
    else {
      var o = function o2(r3, n3) {
        _regeneratorDefine2(e2, r3, function(e3) {
          return this._invoke(r3, n3, e3);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _iterableToArrayLimit$1(r, l) {
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
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance()) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
function watchPausable(source, callback, options) {
  var isActive = ref(true);
  var stop = watch(source, function(newValue, oldValue) {
    if (!isActive.value) return;
    callback(newValue, oldValue);
  }, options);
  return {
    stop,
    pause: function pause() {
      isActive.value = false;
    },
    resume: function resume() {
      isActive.value = true;
    }
  };
}
function groupKeys(obj) {
  return Object.entries(obj).reduce(function(result, _ref) {
    var _ref2 = _slicedToArray$1(_ref, 2), key = _ref2[0], value = _ref2[1];
    key.split(/[\.\[\]]+/).filter(Boolean).reduce(function(acc, curr, idx, arr) {
      var _acc$curr;
      return (_acc$curr = acc[curr]) !== null && _acc$curr !== void 0 ? _acc$curr : acc[curr] = isNaN(arr[idx + 1]) ? idx === arr.length - 1 ? value : {} : [];
    }, result);
    return result;
  }, {});
}
function getValueByPath(obj, path) {
  if (!obj || !path) {
    return null;
  }
  try {
    var value = obj[path];
    if (isNotEmpty(value)) return value;
  } catch (_unused) {
  }
  var keys = path.split(/[\.\[\]]+/).filter(Boolean);
  return keys.reduce(function(acc, key) {
    return acc && acc[key] !== void 0 ? acc[key] : void 0;
  }, obj);
}
var useForm = function useForm2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _states = reactive({});
  var fields = reactive({});
  var valid = computed(function() {
    return Object.values(_states).every(function(field) {
      return !field.invalid;
    });
  });
  var states = computed(function() {
    return groupKeys(_states);
  });
  var getInitialState = function getInitialState2(field, initialValue) {
    return {
      value: initialValue !== null && initialValue !== void 0 ? initialValue : getValueByPath(options.initialValues, field),
      touched: false,
      dirty: false,
      pristine: true,
      valid: true,
      invalid: false,
      error: null,
      errors: []
    };
  };
  var isFieldValidate = function isFieldValidate2(field, validateOn2) {
    var value = resolve(validateOn2, field);
    return value === true || isArray(value) && value.includes(field);
  };
  var validateOn = /* @__PURE__ */ function() {
    var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee(option, defaultValue) {
      var _options$option;
      var results, fieldArr, _t, _t2;
      return _regenerator().w(function(_context) {
        while (1) switch (_context.n) {
          case 0:
            results = {};
            if (!isArray(options[option])) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return validate(options[option]);
          case 1:
            results = _context.v;
            _context.n = 4;
            break;
          case 2:
            _t = (_options$option = options[option]) !== null && _options$option !== void 0 ? _options$option : defaultValue;
            if (!_t) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return validate();
          case 3:
            results = _context.v;
          case 4:
            fieldArr = Object.keys(fields).filter(function(field) {
              var _fields$field;
              return (_fields$field = fields[field]) === null || _fields$field === void 0 || (_fields$field = _fields$field.options) === null || _fields$field === void 0 ? void 0 : _fields$field[option];
            }) || [];
            _t2 = isNotEmpty(fieldArr);
            if (!_t2) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return validate(fieldArr);
          case 5:
            results = _context.v;
          case 6:
            return _context.a(2, results);
        }
      }, _callee);
    }));
    return function validateOn2(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var validateFieldOn = function validateFieldOn2(field, fieldOptions, option, defaultValue) {
    var _fieldOptions$option, _options$option2;
    ((_fieldOptions$option = fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions[option]) !== null && _fieldOptions$option !== void 0 ? _fieldOptions$option : isFieldValidate(field, (_options$option2 = options[option]) !== null && _options$option2 !== void 0 ? _options$option2 : defaultValue)) && validate(field);
  };
  var defineField = function defineField2(field, fieldOptions) {
    var _fields$field2, _resolve;
    if (!field) {
      return [];
    }
    (_fields$field2 = fields[field]) === null || _fields$field2 === void 0 || _fields$field2._watcher.stop();
    _states[field] || (_states[field] = getInitialState(field, fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.initialValue));
    var props = mergeProps((_resolve = resolve(fieldOptions, _states[field])) === null || _resolve === void 0 ? void 0 : _resolve.props, resolve(fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.props, _states[field]), {
      name: field,
      onBlur: function onBlur() {
        _states[field].touched = true;
        validateFieldOn(field, fieldOptions, "validateOnBlur");
      },
      onInput: function onInput(event) {
        _states[field].value = event && Object.hasOwn(event, "value") ? event.value : event.target.value;
      },
      onChange: function onChange(event) {
        _states[field].value = event && Object.hasOwn(event, "value") ? event.value : event.target.type === "checkbox" || event.target.type === "radio" ? event.target.checked : event.target.value;
      },
      onInvalid: function onInvalid(errors) {
        var _errors$;
        _states[field].invalid = true;
        _states[field].errors = errors;
        _states[field].error = (_errors$ = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$ !== void 0 ? _errors$ : null;
      }
    });
    var _watcher = watchPausable(function() {
      return _states[field].value;
    }, function(newValue, oldValue) {
      if (_states[field].pristine) {
        _states[field].pristine = false;
      }
      if (newValue !== oldValue) {
        _states[field].dirty = true;
      }
      validateFieldOn(field, fieldOptions, "validateOnValueUpdate", true);
    });
    fields[field] = {
      props,
      states: _states[field],
      options: fieldOptions,
      _watcher
    };
    return [_states[field], props];
  };
  var handleSubmit = function handleSubmit2(callback) {
    return /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee2(event) {
        var results;
        return _regenerator().w(function(_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return validateOn("validateOnSubmit", true);
            case 1:
              results = _context2.v;
              return _context2.a(2, callback(_objectSpread$1({
                originalEvent: event,
                valid: toValue(valid),
                states: toValue(states),
                reset
              }, results)));
          }
        }, _callee2);
      }));
      return function(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();
  };
  var handleReset = function handleReset2(callback) {
    return /* @__PURE__ */ function() {
      var _ref5 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee3(event) {
        return _regenerator().w(function(_context3) {
          while (1) switch (_context3.n) {
            case 0:
              reset();
              return _context3.a(2, callback({
                originalEvent: event
              }));
          }
        }, _callee3);
      }));
      return function(_x4) {
        return _ref5.apply(this, arguments);
      };
    }();
  };
  var validate = /* @__PURE__ */ function() {
    var _ref6 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee4(field) {
      var _yield$options$resolv, _options$resolver, _result, _result$errors;
      var resolverOptions, _ref9, names, values, result, flattenFields, _i, _Object$entries, _Object$entries$_i, fieldName, fieldInst, _fieldInst$options, _getValueByPath, _errors$2, fieldResolver, _yield$fieldResolver, fieldValue, fieldResult, errors, _t3, _t4, _t5, _t6, _t7, _t8;
      return _regenerator().w(function(_context4) {
        while (1) switch (_context4.n) {
          case 0:
            resolverOptions = Object.entries(_states).reduce(function(acc, _ref7) {
              var _ref8 = _slicedToArray$1(_ref7, 2), key = _ref8[0], val = _ref8[1];
              acc.names.push(key);
              acc.values[key] = val.value;
              return acc;
            }, {
              names: [],
              values: {}
            });
            _ref9 = [resolverOptions.names, groupKeys(resolverOptions.values)], names = _ref9[0], values = _ref9[1];
            _context4.n = 1;
            return (_options$resolver = options.resolver) === null || _options$resolver === void 0 ? void 0 : _options$resolver.call(options, {
              names,
              values
            });
          case 1:
            _t4 = _yield$options$resolv = _context4.v;
            _t3 = _t4 !== null;
            if (!_t3) {
              _context4.n = 2;
              break;
            }
            _t3 = _yield$options$resolv !== void 0;
          case 2:
            if (!_t3) {
              _context4.n = 3;
              break;
            }
            _t5 = _yield$options$resolv;
            _context4.n = 4;
            break;
          case 3:
            _t5 = {
              values
            };
          case 4:
            result = _t5;
            (_result$errors = (_result = result).errors) !== null && _result$errors !== void 0 ? _result$errors : _result.errors = {};
            flattenFields = [field].flat();
            _i = 0, _Object$entries = Object.entries(fields);
          case 5:
            if (!(_i < _Object$entries.length)) {
              _context4.n = 12;
              break;
            }
            _Object$entries$_i = _slicedToArray$1(_Object$entries[_i], 2), fieldName = _Object$entries$_i[0], fieldInst = _Object$entries$_i[1];
            if (!(flattenFields.includes(fieldName) || !field || isEmpty(result.errors))) {
              _context4.n = 11;
              break;
            }
            fieldResolver = (_fieldInst$options = fieldInst.options) === null || _fieldInst$options === void 0 ? void 0 : _fieldInst$options.resolver;
            if (!fieldResolver) {
              _context4.n = 10;
              break;
            }
            fieldValue = fieldInst.states.value;
            _context4.n = 6;
            return fieldResolver({
              values: fieldValue,
              value: fieldValue,
              name: fieldName
            });
          case 6:
            _t7 = _yield$fieldResolver = _context4.v;
            _t6 = _t7 !== null;
            if (!_t6) {
              _context4.n = 7;
              break;
            }
            _t6 = _yield$fieldResolver !== void 0;
          case 7:
            if (!_t6) {
              _context4.n = 8;
              break;
            }
            _t8 = _yield$fieldResolver;
            _context4.n = 9;
            break;
          case 8:
            _t8 = {
              values: fieldValue
            };
          case 9:
            fieldResult = _t8;
            isArray(fieldResult.errors) && (fieldResult.errors = _defineProperty$1({}, fieldName, fieldResult.errors));
            result = mergeKeys(result, fieldResult);
          case 10:
            errors = (_getValueByPath = getValueByPath(result.errors, fieldName)) !== null && _getValueByPath !== void 0 ? _getValueByPath : [];
            _states[fieldName].invalid = errors.length > 0;
            _states[fieldName].valid = !_states[fieldName].invalid;
            _states[fieldName].errors = errors;
            _states[fieldName].error = (_errors$2 = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$2 !== void 0 ? _errors$2 : null;
          //states[fieldName].value = value;
          case 11:
            _i++;
            _context4.n = 5;
            break;
          case 12:
            return _context4.a(2, _objectSpread$1(_objectSpread$1({}, result), {}, {
              errors: groupKeys(result.errors)
            }));
        }
      }, _callee4);
    }));
    return function validate2(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  var reset = function reset2() {
    Object.keys(_states).forEach(/* @__PURE__ */ function() {
      var _ref0 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee5(field) {
        var _fields$field3;
        var watcher;
        return _regenerator().w(function(_context5) {
          while (1) switch (_context5.n) {
            case 0:
              watcher = fields[field]._watcher;
              watcher.pause();
              fields[field].states = _states[field] = getInitialState(field, (_fields$field3 = fields[field]) === null || _fields$field3 === void 0 || (_fields$field3 = _fields$field3.options) === null || _fields$field3 === void 0 ? void 0 : _fields$field3.initialValue);
              _context5.n = 1;
              return nextTick();
            case 1:
              watcher.resume();
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      return function(_x6) {
        return _ref0.apply(this, arguments);
      };
    }());
  };
  var setFieldValue = function setFieldValue2(field, value) {
    if (_states[field] !== void 0) _states[field].value = value;
  };
  var getFieldState = function getFieldState2(field) {
    var _fields$field4;
    return (_fields$field4 = fields[field]) === null || _fields$field4 === void 0 ? void 0 : _fields$field4.states;
  };
  var setValues = function setValues2(values) {
    Object.keys(values).forEach(function(field) {
      return setFieldValue(field, values[field]);
    });
  };
  var validateOnMounted = function validateOnMounted2() {
    validateOn("validateOnMount");
  };
  tryOnMounted(validateOnMounted);
  return {
    defineField,
    setFieldValue,
    getFieldState,
    handleSubmit,
    handleReset,
    validate,
    setValues,
    reset,
    valid,
    states,
    fields
  };
};
var classes = {
  root: "p-form p-component"
};
var FormStyle = BaseStyle.extend({
  name: "form",
  classes
});
var script$1 = {
  name: "BaseForm",
  "extends": script$6,
  style: FormStyle,
  props: {
    resolver: {
      type: Function,
      "default": null
    },
    initialValues: {
      type: Object,
      "default": null
    },
    validateOnValueUpdate: {
      type: [Boolean, Array],
      "default": true
    },
    validateOnBlur: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnMount: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnSubmit: {
      type: [Boolean, Array],
      "default": true
    }
  },
  provide: function provide() {
    return {
      $pcForm: this,
      $parentInstance: this
    };
  }
};
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
var script = {
  name: "Form",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["submit", "reset"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var formRef = ref(null);
    var $form = useForm(props);
    var submit = function submit2() {
      var _formRef$value;
      (_formRef$value = formRef.value) === null || _formRef$value === void 0 || _formRef$value.requestSubmit();
    };
    var register = function register2(field, options) {
      if (!(options !== null && options !== void 0 && options.novalidate)) {
        var _$form$defineField = $form.defineField(field, options), _$form$defineField2 = _slicedToArray(_$form$defineField, 2), fieldProps = _$form$defineField2[1];
        return fieldProps;
      }
      return {};
    };
    var onSubmit = $form.handleSubmit(function(e) {
      emit("submit", e);
    });
    var onReset = $form.handleReset(function(e) {
      emit("reset", e);
    });
    return _objectSpread({
      formRef,
      submit,
      register,
      onSubmit,
      onReset
    }, omit($form, ["handleSubmit", "handleReset"]));
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", mergeProps({
    ref: "formRef",
    onSubmit: _cache[0] || (_cache[0] = withModifiers(function() {
      return $setup.onSubmit && $setup.onSubmit.apply($setup, arguments);
    }, ["prevent"])),
    onReset: _cache[1] || (_cache[1] = withModifiers(function() {
      return $setup.onReset && $setup.onReset.apply($setup, arguments);
    }, ["prevent"])),
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", mergeProps({
    register: $setup.register,
    valid: _ctx.valid,
    reset: _ctx.reset
  }, _ctx.states))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-CwJbsQ-w.mjs.map
