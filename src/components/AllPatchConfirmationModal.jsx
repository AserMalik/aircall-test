import React from "react";
import axios from "axios";

import '../css/components/CallPatchingModal.css'

const AllPatchConfirmationModal = (props) => {
    return (
        <div>
            <div className="bg bg2" onClick={() => props.setConfirmOpen(false)} />
                <div className="modal">
                    <div className="title">
                        Are you sure you want to {props.archive ? "archive" : "unarchive"} all calls?
                    </div>
                    <button className="button-red" onClick={() => patchAll(props.calls, props.archive, props.setConfirmOpen(false))}>
                        Yes
                    </button>
                    <button className="button-grey" onClick={() => props.setConfirmOpen(false)}>
                        No
                    </button>
            </div>
        </div>
      );
};

function patchAll(calls, archive, closeFunction) {
    calls.forEach((call) => {
        if (call.is_archived != archive) {
            axios.patch('https://cerulean-marlin-wig.cyclic.app/activities/' + call.id, {
                is_archived: archive
            })
        }  
    });
  closeFunction;
}

export default AllPatchConfirmationModal;