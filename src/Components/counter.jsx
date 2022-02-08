import React, {Component} from 'react';
class Counter extends Component{
// state={
// value: this.props.counter.value,
// tags: ['tag1','tag2','tag3']
// // imageUrl:'https://picsum.photos/200'
// //{/* <React.Fragment> */} 12 line
//  // {/* <img src={this.state.imageUrl} alt=""/> */} 13 {/* </React.Fragment> */} 16
// };

// constructor(){
// super();
// this.handleIncrement=this.handleIncrement.bind(this);
// }

// handleIncrement=(pro)=>{
// console.log(pro);
// this.setState({value: this.state.value+1});
// // console.log('Increment Clicked',this);
// }




styles={
fontSize: 10,
fontWeight: "bold",
color: "red"
};
styles1={
fontSize: 30,
fontWeight: "bold",
color: "red"
};

// renderTags(){
// if(this.state.tags.length===0) return <p>There are no tags!</p>;
//
// return <ul>
//        <li>
//        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
//        </li>
//        </ul>;
// }

componentDidUpdate(prevProps,prevState){
console.log('prevProps',prevProps);
console.log('prevState',prevState);
if(prevProps.counter.value!=this.props.counter.value){
//update data from database
}
}

componentWillUnmount(){
console.log("counter-unmount");
}


render(){
console.log("pro",this.props);
return (
<div>
{this.props.children}
<h1>{this.props.id}</h1>
{/* <h1><span style={this.state.value===0 ? this.styles:this.styles1} className="badge m-2 badge-warning">{this.formatCount()}</span></h1> */}
<span style={this.props.counter.value===0 ? this.styles:this.styles1} className="badge m-2 badge-warning">{this.formatCount()}</span>
<button onClick={()=>
//                  this.handleIncrement(this.state.value)
this.props.onIncrement(this.props.counter)
                 } className="btn btn-secondary btn-sm">Increment</button>

<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

{/* {this.state.tags.length===0 && <h1>Please create a new Tag!</h1>} */}
{/* {this.renderTags()} */}
</div>

);
}
formatCount(){
const {value}=this.props.counter;
return value===0?"ZERO":value;
}
}
export default Counter;
