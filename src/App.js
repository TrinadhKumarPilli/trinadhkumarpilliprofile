import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { onClickDecrement, onClickIncrement } from './Reducers/Actions/LoginActions';

function App() {
  const {increment, decrement} = useSelector((state)=>({
    increment: state.loginReducer.increment,
    decrement: state.loginReducer.decrement
  }))
  const dispatch = useDispatch();
  return (
    <div>
      <h2>this is trinadh</h2>
      <button onClick={()=> dispatch(onClickIncrement(increment+1))}>Increase me</button>
      <h4>{increment}</h4>
      <br/>
      <br />
      <button onClick={()=> dispatch(onClickDecrement(decrement-1))}>decrease me</button>
      <h4>{decrement}</h4>
    </div>
  );
}

export default App;
