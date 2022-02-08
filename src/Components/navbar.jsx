import React, {Component} from "react";

// const NavBar=({totalCounters})=>{
// return (<nav className="navbar navbar-light bg-light">
// <a className="navbar-brand" href="#">NavBar <span style={this.styles} className="badge badge-pill badge-secondary">{totalCounters}</span></a> </nav>);
//
// };

class NavBar extends Component{
styles={
fontSize: 20,
fontWeight: "bold",
color: "red"
};
render(){
return (<nav className="navbar navbar-light bg-light">
<a className="navbar-brand" href="#">NavBar <span style={this.styles} className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a> </nav>);
}
}
export default NavBar;
