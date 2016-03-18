var React = require('react');

var ListItem = React.createClass({

	render: function(){
		return (
			<li>{this.props.member.name}, {this.props.member.gender} - {this.props.member.city}</li>
		);
	}
});

module.exports = ListItem;