var React = require('react');
var ListItem = require('../components/ListItem');

var List = React.createClass({

	getInitialState: function(){
		return {

		}
	},

	render: function(){
		var memberList = this.props.roster.map(function(guest){
			return <ListItem key={guest.id} member={guest} />
		});

		var color = (this.props.type == 'VIP') ? '#CEF6F5' : '#f9f9f9';

		var randomIndex = Math.floor(Math.random() * 3);
		var selected = this.props.roster[randomIndex];
		var image = (this.props.type == 'VIP') ? <img style={{width:120}} src={'/images/'+selected.image} /> : null;

		return (
			<div style={{backgroundColor: color, border:'1px solid #ddd', marginBottom:36, padding:16}}>
				This is the {this.props.type} list!
				<ol>
					{memberList}
				</ol>

				{image}

			</div>
		);
	}
});

module.exports = List;