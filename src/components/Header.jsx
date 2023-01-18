import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const handlerAdd = () => {
    dispatch({
      type: 'INCREMENT',
      //   payload: ['A', 'B', 'C'],
    });
  };

  const handlerSub = () => {
    dispatch({
      type: 'DECREMENT',
      // payload:''
    });
  };

  const { count } = useSelector((state) => state.first);
  return (
    <div className="header">
      <button onClick={handlerAdd}> +</button>
      <div> {count}</div>
      <button onClick={handlerSub}> -</button>
    </div>
  );
};

export default Header;
