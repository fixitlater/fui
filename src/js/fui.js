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