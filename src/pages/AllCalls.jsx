import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CallFeed from '../components/CallFeed.jsx';
import AllPatchConfirmationModal from '../components/AllPatchConfirmationModal.jsx';

//import myData from '../data.json'

const AllCalls = () =>{
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
      {isConfirmOpen && <AllPatchConfirmationModal archive={false} setConfirmOpen={setConfirmOpen} calls={posts} />}
      <button className='container-button' onClick={() => setConfirmOpen(true)}>Unarchive All Calls</button>
      <div id="container-feed">
      <CallFeed posts={posts} archived={true}/>
      </div>
    </div>
  );
}

export default AllCalls;

AllCalls.js

/*Even though this looks identical to Inbox.jsx, I'm keeping it seperate because I believe it provides more developer clarity
and leaves room open to diverge the design of the two pages. */