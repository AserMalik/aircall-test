import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import CallFeed from '../components/CallFeed.jsx';
import AllPatchConfirmationModal from '../components/AllPatchConfirmationModal.jsx';

//import myData from '../data.json'

const Inbox = () =>{
  const [posts, setPosts] = useState([]);
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    axios.get('https://cerulean-marlin-wig.cyclic.app/activities')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container-feed">
      {isConfirmOpen && <AllPatchConfirmationModal archive={true} setConfirmOpen={setConfirmOpen} calls={posts} />}
      <button type = "button" className='container-button' onClick={() => setConfirmOpen(true)}>Archive All Calls</button>
      <div id="container-feed">
        <CallFeed posts={posts} archived={false} />
      </div>
    </div>
  );
}

export default Inbox;

Inbox.js

/*By calling the API on page click, even thought I'm making more calls, the data will be update on every click.
A possible upgrade is to call first on load, store in Pinia, then call in background every X seconds.*/