// Simple example of React.createElement:-
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World from React!"
);


// Now this example shows how we make a nested structure using React.createElement for this example -
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an H1 tag!</h1>
 *      </div>
 * </div>
 */

// STRUCTURE of createElement - React.createElement(type, props, children)
const parent1 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
        React.createElement("h1", {}, "I am an H1 tag!" )
    )
);

// Now this example shows how we create a Siblings of child for this example - We have to pass an array as the third argument to createElement to create multiple children.
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an H1 tag!</h1>
 *      </div>
 * </div>
 */

// STRUCTURE of createElement - React.createElement(type, props, children)
const parent2 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am an H1 tag!" ),
        React.createElement("h2", {}, "I am an H2 tag!" )
    ])
);

// Now this example shows how we create a two child of same parent for this example - We have to pass an array as the third argument to createElement to create multiple children.
/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am an H1 tag!</h1>
 *         <h2>I am an H2 tag!</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am an H1 tag!</h1>
 *         <h2>I am an H2 tag!</h2>
 *      </div>
 * </div>
 */

// STRUCTURE of createElement - React.createElement(type, props, children)
const parent3 = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I am an H1 tag!" ),
        React.createElement("h2", {}, "I am an H2 tag!" )
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am an H1 tag!" ),
        React.createElement("h2", {}, "I am an H2 tag!" )
    ])
]);

// But seeing the above code it is very difficult to understand the structure of the HTML. So to solve this problem we use JSX.

console.log(parent3); // This is not an HTML tag now, This will log a React element (which is bascially a Javascript object) to the console.

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(parent3);  // render takes a react element and converts it into HTML and passing it to the root div in index.html file.