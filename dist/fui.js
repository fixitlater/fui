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
				if (property in el)
				{
					var val = child[property];

					if (property === "style")
					{
						setStyles(el, val);
					}
					else if (val)
					{
						el[property] = val;
					}
				}
				else if (property.startsWith("data-"))
				{
					var val = child[property];
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
			createElement: function() { return createElement(arguments[0], Array.prototype.slice.call(arguments, 1)); },
			a: function() { return createElement('a', arguments); },
			button: function() { return createElement('button', arguments); },
			canvas: function() { return createElement('canvas', arguments); },
			div: function() { return createElement('div', arguments); },
			h1: function() { return createElement('h1', arguments); },
			h2: function() { return createElement('h2', arguments); },
			h3: function() { return createElement('h3', arguments); },
			h4: function() { return createElement('h4', arguments); },
			h5: function() { return createElement('h5', arguments); },
			h6: function() { return createElement('h6', arguments); },
			header: function() { return createElement('header', arguments); },
			i: function() { return createElement('i', arguments); },
			input: function() { return createElement('input', arguments); },
			label: function() { return createElement('label', arguments); },
			li: function() { return createElement('li', arguments); },
			ol: function() { return createElement('ol', arguments); },
			optgroup: function() { return createElement('optgroup', arguments); },
			option: function() { return createElement('option', arguments); },
			p: function() { return createElement('p', arguments); },
			pre: function() { return createElement('pre', arguments); },
			select: function() { return createElement('select', arguments); },
			span: function() { return createElement('span', arguments); },
			table: function() { return createElement('table', arguments); },
			thead: function() { return createElement('thead', arguments); },
			tbody: function() { return createElement('tbody', arguments); },
			tfoot: function() { return createElement('tfoot', arguments); },
			tr: function() { return createElement('tr', arguments); },
			th: function() { return createElement('th', arguments); },
			td: function() { return createElement('td', arguments); },
			ul: function() { return createElement('ul', arguments); },
			form: function() { return createElement('form', arguments); }
		};
	}

	if (window.fui === undefined)
	{
		window.fui = fui();
	}
})(window, document);
function a() { return fui.a.apply(null, arguments); }
function button() { return fui.button.apply(null, arguments); }
function canvas() { return fui.canvas.apply(null, arguments); }
function div() { return fui.div.apply(null, arguments); }
function h1() { return fui.h1.apply(null, arguments); }
function h2() { return fui.h2.apply(null, arguments); }
function h3() { return fui.h3.apply(null, arguments); }
function h4() { return fui.h4.apply(null, arguments); }
function h5() { return fui.h5.apply(null, arguments); }
function h6() { return fui.h6.apply(null, arguments); }
function header() { return fui.header.apply(null, arguments); }
function i() { return fui.i.apply(null, arguments); }
function input() { return fui.input.apply(null, arguments); }
function label() { return fui.label.apply(null, arguments); }
function li() { return fui.li.apply(null, arguments); }
function ol() { return fui.ol.apply(null, arguments); }
function optgroup() { return fui.optgroup.apply(null, arguments); }
function option() { return fui.option.apply(null, arguments); }
function p() { return fui.p.apply(null, arguments); }
function pre() { return fui.pre.apply(null, arguments); }
function select() { return fui.select.apply(null, arguments); }
function span() { return fui.span.apply(null, arguments); }
function table() { return fui.table.apply(null, arguments); }
function thead() { return fui.thead.apply(null, arguments); }
function tbody() { return fui.tbody.apply(null, arguments); }
function tfoot() { return fui.tfoot.apply(null, arguments); }
function tr() { return fui.tr.apply(null, arguments); }
function th() { return fui.th.apply(null, arguments); }
function td() { return fui.td.apply(null, arguments); }
function ul() { return fui.ul.apply(null, arguments); }
function form() { return fui.form.apply(null, arguments); }