# fui (FOO-ee) - Functional UI

Create a reusable component style UI using regular javascript functions.

## Getting Started

Download or reference the javascript files in the /dist folder that you need
* fui.js
    * full source development version with global functions included
* *.nc
    * a 'no conflict' (nc) version without global functions included
* *.min
    * respective minified version
* *.gz
    * respective gzipped version

```html
<!-- DEVELOPMENT fui.js -->

<script src="local/path/to/dist/fui.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/gh/fixitlater/fui/dist/fui.js"></script>


<!-- PRODUCTION fui.min.js -->

<script src="path/to/dist/fui.min.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/gh/fixitlater/fui/dist/fui.min.js"></script>
```

## Usage

Create HTML elements by calling their function
```javascript
var divEl = div();
```

Add attributes and styles by passing an object to the element function.<br>
Add child elements by chaining their element function after the attribute and style object for the parent.
```javascript
var listEl = ol({ id: "todos", className: "list-todo", style: { fontSize: "20px" } },
        li("Learn fui.js"),
        li("Start using fui.js"),
        li("Profit??")
      );
```

Create complex applications by composing functions
```javascript
function DefaultButton(id, text, clickEvt) {
  return button({id: id, onClick: clickEvt, className: "btn-primary"}, text);
}

function FormSubmitButton() {
  function submit() {
    // POST to url
  }

  function render() {
    return DefaultButton("btn-submit", "Send", submit);
  }

  return render();
}
```

## Examples

HTML
```html
<div id="root"></div>
```

Javascript
```javascript
function Hello() {
	function sayHello() {
	  alert("Hello World!");
	}

  	return div(
          button({ onclick: sayHello }, "Click Me!")
      );
}

var rootEl = document.getElementById("root");
rootEl.appendChild(Hello());
```

## Author

* **FixItLater** - (https://github.com/fixitlater)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by:
  * **React** - [React Home](https://reactjs.org/)
  * **David Gilbertson** - [React app to VanillaJS](https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff)
