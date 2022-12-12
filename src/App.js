import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import Blog from './components/blog/Blog';
import Works from './components/works/Works';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;