console.log('app.js is running');

// JSX - JavaScript XML
// const template = <p>This is JSX</p>;
const template = React.createElement(
		"h1",
		{id: "someid"},
		"I made a header tag!"
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);