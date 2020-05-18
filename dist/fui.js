(function(window, document, undefined) {
	"use strict";

	function fui() {

		function handleChild(el, child) {
			if (el === undefined)
			{
				console.warn("Cannot handle child because element is undefined.");
				return;
			}

			if (child === undefined)
			{
				console.warn("Cannot handle undefined child for element [" + el.tagName + "].");
				return;
			}

			if (Array.isArray(child))
			{
				handleArray(el, child);
			}
			else if (child instanceof window.Element)
			{
				handleElement(el, child);
			}
			else if (typeof child === "string" || typeof child === "number")
			{
				handleText(el, child);
			}
			else if (typeof child === "object")
			{
				handleObject(el, child);
			}
		}

		function createElement(elType) {
			var args = Array.prototype.slice.call(arguments[1]);
			var firstChild = args[0];
			var otherChildren = args.slice(1);

			var el = document.createElement(elType);

			handleChild(el, firstChild);

			if (otherChildren)
			{
				handleArray(el, otherChildren);
			}

			return el;
		}

		function handleArray(el, children) {
			if (el === undefined)
			{
				console.warn("Cannot append children array because element is undefined.");
				return;
			}

			if (children === undefined)
			{
				console.warn("Cannot append children array because children are undefined.");
				return;
			}

			children.forEach(function(child) {
				handleChild(el, child);
			});
		}

		function handleElement(el, child) {
			el.appendChild(child);
		}

		function handleText(el, text) {
			if (el === undefined)
			{
				console.warn("Cannot append text [" + text + "] because element is undefined.");
				return;
			}

			var textNode = document.createTextNode(text);
			el.appendChild(textNode);
		}

		function handleObject(el, child) {
			Object.keys(child).forEach(function(property, index) {
				var val;
				if (property in el)
				{
					val = child[property];

					if (property === "style")
					{
						setStyles(el, val);
					}
					else if (val !== undefined)
					{
						el[property] = val;
					}
				}
				else if (property.startsWith("data-"))
				{
					val = child[property];
					el.setAttribute(property, val);
				}
				else
				{
					console.warn("[" + property + "] is not a valid property for [" + el.tagName + "].");
				}
			});
		}

		function setStyles(el, styles) {
			if (el === undefined)
			{
				console.warn("Cannot set styles because element is undefined.");
				return;
			}

			if (!styles)
			{
				el.removeAttribute("styles");
				return;
			}

			Object.keys(styles).forEach(function(styleKey) {
				if (styleKey in el.style)
				{
					el.style[styleKey] = styles[styleKey];
				}
				else
				{
					console.warn("[" + styleKey + "] is not a valid style for [" + el.tagName + "].");
				}
			});
		}

		return {
			apply: function(key, args) { return this[key].apply(null, args); },
			createElement: function() { return createElement(arguments[0], Array.prototype.slice.call(arguments, 1)); },
			a: function() { return createElement('a', arguments); },
			article: function() { return createElement('article', arguments); },
			aside: function() { return createElement('aside', arguments); },
			b: function() { return createElement('b', arguments); },
			body: function() { return createElement('body', arguments); },
			br: function() { return createElement('br', arguments); },
			button: function() { return createElement('button', arguments); },
			canvas: function() { return createElement('canvas', arguments); },
			caption: function() { return createElement('caption', arguments); },
			col: function() { return createElement('col', arguments); },
			colgroup: function() { return createElement('colgroup', arguments); },
			data: function() { return createElement('data', arguments); },
			datalist: function() { return createElement('datalist', arguments); },
			dd: function() { return createElement('dd', arguments); },
			del: function() { return createElement('del', arguments); },
			details: function() { return createElement('details', arguments); },
			dfn: function() { return createElement('dfn', arguments); },
			dialog: function() { return createElement('dialog', arguments); },
			div: function() { return createElement('div', arguments); },
			dl: function() { return createElement('dl', arguments); },
			dt: function() { return createElement('dt', arguments); },
			em: function() { return createElement('em', arguments); },
			embed: function() { return createElement('embed', arguments); },
			fieldset: function() { return createElement('fieldset', arguments); },
			footer: function() { return createElement('footer', arguments); },
			form: function() { return createElement('form', arguments); },
			h1: function() { return createElement('h1', arguments); },
			h2: function() { return createElement('h2', arguments); },
			h3: function() { return createElement('h3', arguments); },
			h4: function() { return createElement('h4', arguments); },
			h5: function() { return createElement('h5', arguments); },
			h6: function() { return createElement('h6', arguments); },
			head: function() { return createElement('head', arguments); },
			header: function() { return createElement('header', arguments); },
			hgroup: function() { return createElement('hgroup', arguments); },
			hr: function() { return createElement('hr', arguments); },
			html: function() { return createElement('html', arguments); },
			i: function() { return createElement('i', arguments); },
			iframe: function() { return createElement('iframe', arguments); },
			img: function() { return createElement('img', arguments); },
			input: function() { return createElement('input', arguments); },
			label: function() { return createElement('label', arguments); },
			legend: function() { return createElement('legend', arguments); },
			li: function() { return createElement('li', arguments); },
			main: function() { return createElement('main', arguments); },
			nav: function() { return createElement('nav', arguments); },
			object: function() { return createElement('object', arguments); },
			ol: function() { return createElement('ol', arguments); },
			optgroup: function() { return createElement('optgroup', arguments); },
			option: function() { return createElement('option', arguments); },
			output: function() { return createElement('output', arguments); },
			p: function() { return createElement('p', arguments); },
			pre: function() { return createElement('pre', arguments); },
			q: function() { return createElement('q', arguments); },
			section: function() { return createElement('section', arguments); },
			select: function() { return createElement('select', arguments); },
			small: function() { return createElement('small', arguments); },
			span: function() { return createElement('span', arguments); },
			strike: function() { return createElement('strike', arguments); },
			strong: function() { return createElement('strong', arguments); },
			sub: function() { return createElement('sub', arguments); },
			summary: function() { return createElement('summary', arguments); },
			sup: function() { return createElement('sup', arguments); },
			table: function() { return createElement('table', arguments); },
			tbody: function() { return createElement('tbody', arguments); },
			td: function() { return createElement('td', arguments); },
			textarea: function() { return createElement('textarea', arguments); },
			tfoot: function() { return createElement('tfoot', arguments); },
			th: function() { return createElement('th', arguments); },
			thead: function() { return createElement('thead', arguments); },
			title: function() { return createElement('title', arguments); },
			tr: function() { return createElement('tr', arguments); },
			u: function() { return createElement('u', arguments); },
			ul: function() { return createElement('ul', arguments); }
		};
	}

	if (window.fui === undefined)
	{
		window.fui = fui();
	}
})(window, document);
function a() { return fui.apply('a', arguments); }
function article() { return fui.apply('article', arguments); }
function aside() { return fui.apply('aside', arguments); }
function b() { return fui.apply('b', arguments); }
function body() { return fui.apply('body', arguments); }
function br() { return fui.apply('br', arguments); }
function button() { return fui.apply('button', arguments); }
function canvas() { return fui.apply('canvas', arguments); }
function caption() { return fui.apply('caption', arguments); }
function col() { return fui.apply('col', arguments); }
function colgroup() { return fui.apply('colgroup', arguments); }
function data() { return fui.apply('data', arguments); }
function datalist() { return fui.apply('datalist', arguments); }
function dd() { return fui.apply('dd', arguments); }
function del() { return fui.apply('del', arguments); }
function details() { return fui.apply('details', arguments); }
function dfn() { return fui.apply('dfn', arguments); }
function dialog() { return fui.apply('dialog', arguments); }
function div() { return fui.apply('div', arguments); }
function dl() { return fui.apply('dl', arguments); }
function dt() { return fui.apply('dt', arguments); }
function em() { return fui.apply('em', arguments); }
function embed() { return fui.apply('embed', arguments); }
function fieldset() { return fui.apply('fieldset', arguments); }
function footer() { return fui.apply('footer', arguments); }
function form() { return fui.apply('form', arguments); }
function h1() { return fui.apply('h1', arguments); }
function h2() { return fui.apply('h2', arguments); }
function h3() { return fui.apply('h3', arguments); }
function h4() { return fui.apply('h4', arguments); }
function h5() { return fui.apply('h5', arguments); }
function h6() { return fui.apply('h6', arguments); }
function head() { return fui.apply('head', arguments); }
function header() { return fui.apply('header', arguments); }
function hgroup() { return fui.apply('hgroup', arguments); }
function hr() { return fui.apply('hr', arguments); }
function html() { return fui.apply('html', arguments); }
function i() { return fui.apply('i', arguments); }
function iframe() { return fui.apply('iframe', arguments); }
function img() { return fui.apply('img', arguments); }
function input() { return fui.apply('input', arguments); }
function label() { return fui.apply('label', arguments); }
function legend() { return fui.apply('legend', arguments); }
function li() { return fui.apply('li', arguments); }
function main() { return fui.apply('main', arguments); }
function nav() { return fui.apply('nav', arguments); }
function object() { return fui.apply('object', arguments); }
function ol() { return fui.apply('ol', arguments); }
function optgroup() { return fui.apply('optgroup', arguments); }
function option() { return fui.apply('option', arguments); }
function output() { return fui.apply('output', arguments); }
function p() { return fui.apply('p', arguments); }
function pre() { return fui.apply('pre', arguments); }
function q() { return fui.apply('q', arguments); }
function section() { return fui.apply('section', arguments); }
function select() { return fui.apply('select', arguments); }
function small() { return fui.apply('small', arguments); }
function span() { return fui.apply('span', arguments); }
function strike() { return fui.apply('strike', arguments); }
function strong() { return fui.apply('strong', arguments); }
function sub() { return fui.apply('sub', arguments); }
function summary() { return fui.apply('summary', arguments); }
function sup() { return fui.apply('sup', arguments); }
function table() { return fui.apply('table', arguments); }
function tbody() { return fui.apply('tbody', arguments); }
function td() { return fui.apply('td', arguments); }
function textarea() { return fui.apply('textarea', arguments); }
function tfoot() { return fui.apply('tfoot', arguments); }
function th() { return fui.apply('th', arguments); }
function thead() { return fui.apply('thead', arguments); }
function title() { return fui.apply('title', arguments); }
function tr() { return fui.apply('tr', arguments); }
function u() { return fui.apply('u', arguments); }
function ul() { return fui.apply('ul', arguments); }