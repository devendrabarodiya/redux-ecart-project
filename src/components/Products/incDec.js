import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/CartAction';

const Counter = ({ counterId, count, increment, decrement, price }) => {
    const total = count * price;
  return (
    <div>
      <p> Qty : {count}</p>
      <button onClick={() => decrement(counterId)}> - </button>
      <button onClick={() => increment(counterId)}> + </button> 
      {/* <p> Price : {price} </p> */}
      {/* <p>total : {total} </p>  */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter.counters[ownProps.counterId] || 1,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

