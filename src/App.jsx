import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header.jsx';
import Inbox from './pages/Inbox.jsx'
import AllCalls from './pages/AllCalls.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Inbox />} />
          <Route path = "/allcalls" element = {<AllCalls />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;