import React from 'react';

import '../css/components/callEntry.css'
import IncomingCallSvg from './svgs/IncomingCallSvg.jsx'
import OutgoingCallSvg from './svgs/OutgoingCallSvg.jsx'

const CallEntry = (props) =>{

  return (
    <div className='container-call'>
      <div className ='icon'>{props.direction == "inbound" ? <IncomingCallSvg />: <OutgoingCallSvg />}</div>
      <div className ='callerInfo'>
        <span>
          <p class="callTargetName">{props.from ?  props.from : "Unknown Call Target"}</p>
          <p>tried to call on {props.via ? props.via : "Unknown Id"}</p>
        </span>
      </div>
      <div className = 'time'>
        {formatTime(props.created_at)}
      </div>
    </div>
  );
}

export default CallEntry;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric"}
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const formatTime = (dateString) => {
  const options = { hour: '2-digit', minute:'2-digit' }
  return new Date(dateString).toLocaleTimeString(undefined, options)
}

CallEntry.js