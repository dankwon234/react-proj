var React = require('react');
var ListItem = require('../components/ListItem');

var List = React.createClass({

	getInitialState: function(){
		return {
			index: 0,
			nextMembers: [
				{id:6, name:'caitlin', gender:'f'},
				{id:7, name:'donald trump', gender:'m'},
				{id:8, name:'dan', gender:'m'}
			],
			members: [
				{id:1, name:'chad', gender:'m'},
				{id:2, name:'jenn', gender:'f'},
				{id:3, name:'marie', gender:'f'},
				{id:4, name:'JD', gender:'m'},
				{id:5, name:'jake', gender:'m'}
			]
		}
	},

	addMember: function(){
		console.log('ADD MEMBER');
		var nextMember = this.state.nextMembers[this.state.index];
		

		var currentMembers = this.state.members;
		currentMembers.push(nextMember);

		this.setState({
			members: currentMembers,
			index: this.state.index+1
		});
	},

	render: function(){
		console.log('RENDER!');
		var memberList = this.state.members.map(function(member){
			return <ListItem key={member.id} member={member} />
		});

		return (
			<div>
				This is a list!
				<ol>
					{memberList}
				</ol>

				<button onClick={this.addMember}>ADD</button>

			</div>
		);
	}
});

module.exports = List;