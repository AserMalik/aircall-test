import React from "react";
import axios from 'axios';

import '../css/components/CallPatchingModal.css'

const CallPatchingModal = (props) => {
    return (
        <div>
            <div className="bg" onClick={() => props.setIsOpen(false)} />
            <div className="modal">
                <div className="title">
                    <h6><b>{props.direction}</b></h6>
                </div>
                <button class="closeBtn" onClick={() => props.setIsOpen(false)}>
                    X
                </button>
                <div className="callDetails">
                    <table className="callInfoTable">
                        <tr>
                            <td>Id</td>
                            <td>{props.id}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{ formatTime(props.created_at)} </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{ formatDate(props.created_at)} </td>
                        </tr>
                        <tr>
                            <td>From</td>
                            <td>{props.from}</td>
                        </tr>
                        <tr>
                            <td>To</td>
                            <td>{props.to}</td>
                        </tr>
                        <tr>
                            <td>Via</td>
                            <td>{props.via}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>{props.duration} s</td>
                        </tr>
                        <tr>
                            <td>Call Type</td>
                            <td>{props.call_type}</td>
                        </tr>
                    </table>
                </div>

                <div>
                <button className="button-grey" onClick={() => patch(props.id,!props.is_archived,props.setIsOpen(false))}>
                    {props.is_archived ? "Unarchive" : "Archive"}
                </button>
                </div>
                </div>
        </div>
      );
};

const patch = (callId, is_archived, setClose) => {
    axios.patch('https://cerulean-marlin-wig.cyclic.app/activities/' + callId, {
        is_archived: is_archived
    })
    setClose
}

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute:'2-digit' }
    return new Date(dateString).toLocaleTimeString(undefined, options)
  }

export default CallPatchingModal;