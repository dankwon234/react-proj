var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');

var App = React.createClass({

	render: function(){
		return (
			<div>
				Show me the REACT!
				<List />
			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('app'));