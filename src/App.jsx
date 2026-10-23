import { useState } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {ColorPicker} from './Pages/ColorPicker';
import {Counter} from './Pages/Counter';
import { Home } from './Pages/Home';
import { Layout } from './Layout';
import ToDoList from './Pages/ToDoList';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/color-picker" element={<ColorPicker/>}/>
          <Route path="/todo-list" element={<ToDoList/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
