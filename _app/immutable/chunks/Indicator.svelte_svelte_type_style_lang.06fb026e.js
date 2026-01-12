var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function i(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var a={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var s=arguments[e];s&&(t=r(t,f(s)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var s in t)a.call(t,s)&&t[s]&&(e=r(e,s));return e}function r(t,e){return e?t?t+" "+e:t+e:t}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(l);var u=l.exports;const c=i(u);export{p as a,c,i as g};
