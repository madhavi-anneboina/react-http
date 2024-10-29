import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import HookCounter from './components/HookCounter';
import FunctionForm from './components/FunctionForm';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervelClassCounter from './components/IntervelClassCounter';
import IntervelHookCounter from './IntervelHookCounter';


function App() {
  return (
    <div>
      <IntervelClassCounter />
      <IntervelHookCounter />
    </div>
  );
}

export default App;
