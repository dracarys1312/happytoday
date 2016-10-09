import React from "react";
import {Link, withRouter, browserHistory, IndexLink} from "react-router";

export default class Nav extends React.Component{

  constructor(){
    super();
    this.state ={
      collapsed: true,
    };
  }

	render(){

		const { location } = this.props;
    const { collapsed } = this.state;
    const dashboardClass = location.pathname.match(/^\/dashboard/) || location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

		return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to = "dashboard" className="navbar-brand">Happy Today</Link>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={dashboardClass}><Link to = "dashboard" activeClassName="test">Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </nav>

		);
	}
}
