import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{


render(){
const {onDelete,onIncrement,onClick,onReset,counters}=this.props;
return (
<div>
<button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
{this.props.counters.map(counter =>
<Counter
 key={counter.id}
 onDelete={this.props.onDelete}
 onIncrement={this.props.onIncrement}
//  value={counter.value}
//  id={counter.id}
counter={counter}
>
{/* <h4>{counter.value}</h4> */}
</Counter>)}
{/* selected={true} */}
</div>);
}


}
export default Counters;