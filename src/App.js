import logo from './logo.svg';
import React from 'react'
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
import DataFetch from './components/DataFetch';
import DataFetchId from './components/DataFetchId';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  
  return (
    <div>
   {/* <UserContext.Provider value = {'madhavi'}>
    <ChannelContext.Provider value = {'madhura'}>
      <ComponentC />
    </ChannelContext.Provider>
   </UserContext.Provider> */}
     <CounterOne />
    </div>
  );
}

export default App;
