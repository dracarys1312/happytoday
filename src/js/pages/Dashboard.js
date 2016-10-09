import React from "react";

export default class Dashboard extends React.Component{
	render(){
		console.log(this.props);
		const { query } = this.props.location;
		const { params } =this.props;
		const { article } = params;
		const {date, filter} = query;
		return (
			<div>
				<div class ="page-header">
					<h1>Dashboard {(this.props.params.article)}</h1>
					<h4>Overall index of Happy Today</h4>
				</div>

			</div>
		);
	}
}
