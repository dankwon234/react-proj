var React = require('react');
var ListItem = require('../components/ListItem');

var List = React.createClass({

	getInitialState: function(){
		return {

		}
	},


	render: function(){
//		console.log('RENDER!');
		var memberList = this.props.roster.map(function(guest){
			return <ListItem key={guest.id} member={guest} />
		});

		return (
			<div>
				This is the {this.props.type} list!
				<ol>
					{memberList}
				</ol>

			</div>
		);
	}
});

module.exports = List;