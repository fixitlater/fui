# fui (FOO-ee) - Functional UI

Create a reusable component style UI using regular javascript functions.

## Examples

HTML
```html
<div id="root"></div>
```

Javascript
```javascript
function Hello() {
  return fui.div(
          fui.button({ onclick: sayHello }, "Click Me!")
      );
}

function sayHello() {
  alert("Hello World!");
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
