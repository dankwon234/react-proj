var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');
var Header = require('./components/Header');

var App = React.createClass({
	getInitialState: function(){
		return {
			nextMember: {
				id: null,
				name: '',
				city: '',
				gender: '',
				type:''
			},
			members: [
				{id:1, name:'donald trump', city:'new york', gender:'m'},
				{id:2, name:'hillary clinton', city:'new york', gender:'f'},
				{id:3, name:'bernie sanders', city:'burlington', gender:'m'}
			],
			vipMembers:[
				{id:1, name:'rihanna', city:'new york', gender:'f'},
				{id:2, name:'leonardo dicaprio', city:'los angeles', gender:'m'},
				{id:3, name:'justin bieber', city:'vancouver', gender:'m'}
			]
		}
	},

	addMember: function(){
		var newMember = {
			id: this.state.nextMember.id,
			name: this.state.nextMember.name,
			city: this.state.nextMember.city,
			gender: this.state.nextMember.gender
		}

		console.log('Add Member: '+JSON.stringify(newMember));

		if (this.state.nextMember.type == 'vip'){
			var currentList = this.state.vipMembers;
			currentList.push(newMember);
			this.setState({
				vipMembers: currentList,
				nextMember: {
					id: null,
					name:'',
					city:'',
					gender:'',
					type:''
				}
			});
		}
		else{
			var currentList = this.state.members;
			currentList.push(newMember);
			this.setState({
				members: currentList,
				nextMember: {
					id: null,
					name:'',
					city:'',
					gender:'',
					type:''
				}
			});
		}

	},

	nextMemberUpdated: function(event){
		console.log(event.target.id+': '+event.target.value);
		this.state.nextMember[event.target.id] = event.target.value;
		this.setState({
			nextMember: this.state.nextMember
		});
	},

	render: function(){
		return (
			<div className="row">
				<div className="col-md-6">
					<Header />
					<List type="VIP" roster={this.state.vipMembers} />
					<List type="Election" roster={this.state.members} />
				</div>

				<div className="col-md-6">
					<h2>Next Member</h2>
					<input className="form-control" value={this.state.nextMember.name} onChange={this.nextMemberUpdated} type="text" name="name" id="name" placeholder="Name" /><br />
					<input className="form-control" value={this.state.nextMember.city} onChange={this.nextMemberUpdated} type="text" name="city" id="city" placeholder="City" /><br />
					<input className="form-control" value={this.state.nextMember.gender} onChange={this.nextMemberUpdated} type="text" name="gender" id="gender" placeholder="Gender" /><br />
					<input className="form-control" value={this.state.nextMember.id} onChange={this.nextMemberUpdated} type="text" name="id" id="id" placeholder="ID Number" /><br />
					<input className="form-control" value={this.state.nextMember.type} onChange={this.nextMemberUpdated} type="text" name="type" id="type" placeholder="Which list" /><br />
					<br />
					<button className="btn btn-success" onClick={this.addMember}>Add Member</button>
				</div>

			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('app'));