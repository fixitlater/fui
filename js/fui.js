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

		function createElement(elType, firstChild, ...otherChildren) {
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
			a: function(...args) { return createElement('a', ...args); },
			button: function(...args) { return createElement('button', ...args); },
			canvas: function(...args) { return createElement('canvas', ...args); },
			div: function(...args) { return createElement('div', ...args); },
			h1: function(...args) { return createElement('h1', ...args); },
			h2: function(...args) { return createElement('h2', ...args); },
			h3: function(...args) { return createElement('h3', ...args); },
			h4: function(...args) { return createElement('h4', ...args); },
			h5: function(...args) { return createElement('h5', ...args); },
			h6: function(...args) { return createElement('h6', ...args); },
			header: function(...args) { return createElement('header', ...args); },
			i: function(...args) { return createElement('i', ...args); },
			input: function(...args) { return createElement('input', ...args); },
			label: function(...args) { return createElement('label', ...args); },
			li: function(...args) { return createElement('li', ...args); },
			ol: function(...args) { return createElement('ol', ...args); },
			optgroup: function(...args) { return createElement('optgroup', ...args); },
			option: function(...args) { return createElement('option', ...args); },
			p: function(...args) { return createElement('p', ...args); },
			pre: function(...args) { return createElement('pre', ...args); },
			select: function(...args) { return createElement('select', ...args); },
			span: function(...args) { return createElement('span', ...args); },
			table: function(...args) { return createElement('table', ...args); },
			thead: function(...args) { return createElement('thead', ...args); },
			tbody: function(...args) { return createElement('tbody', ...args); },
			tfoot: function(...args) { return createElement('tfoot', ...args); },
			tr: function(...args) { return createElement('tr', ...args); },
			th: function(...args) { return createElement('th', ...args); },
			td: function(...args) { return createElement('td', ...args); },
			ul: function(...args) { return createElement('ul', ...args); }
		}
	}

	if (window.fui === undefined)
	{
		window.fui = fui();
	}
})(window, document);