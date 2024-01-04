import React, { useState } from 'react';
import CallEntry from './CallEntry.jsx';
import CallPatchingModal from '../components/CallPatchingModal.jsx';

import '../css/components/callFeed.css'

const CallFeed = (props) =>{
  const [isOpen, setIsOpen] = useState(false);

  dates = []
  var newDate = false;
  //assume items are ordered
  return props.posts.map(item => {
    if (props.archived == item.is_archived) {
      const callDate = formatDate(item.created_at);
      if (!dates.includes(callDate)){
        dates.push(callDate)
        newDate = true;
      } else {
        newDate = false;
      }
      return (
        <div className="container-callfeed" key = {item.id}>
          {newDate ? <div className="newDayDivider">
                        <span className='text'>{callDate}</span>
                        <div className='line'>
                      </div>
          </div> : "" }
          {isOpen && <CallPatchingModal key = {item.id} 
            id = {item.id} 
            from = {item.from}
            to = {item.to} 
            via = {item.via}
            created_at = {item.created_at}
            duration = {item.duration}
            is_archived = {item.is_archived} 
            direction = {item.direction}
            call_type = {item.call_type}
            setIsOpen={setIsOpen} />}
          
          <div onClick = {() => setIsOpen(true)}>
            <CallEntry key = {item.id}
                from = {item.from}
                via = {item.via}
                created_at = {item.created_at}
                direction = {item.direction}             
            /> 
          </div>
        </div>    
        )
      }
    }
  )
};

var dates = []

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric"}
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export default CallFeed;

CallFeed.js