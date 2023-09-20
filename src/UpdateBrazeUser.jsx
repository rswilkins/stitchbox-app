// Component purpose: give users ability to set Braze user being tracked,
// update that user afterwards, and cancel updates if desired.
// saving new user data at any time will rerender the App

import { React, useState } from "react"
import { CurrentUserData } from "./CurrentConnectionData"
import * as braze from '@braze/web-sdk'

export default function UpdateBrazeUser() {
    // state variable controlling editability of all input fields
    const [edit, setEdit] = useState(false)
    
    // state variables controlling the individual input field value, pulling from local storage
    // Braze webSDK uses externalId to track users, so we're using that here
    const [externalId, setExternalId] = useState(() => {
        if (CurrentUserData == null) return "no user set"
        return CurrentUserData
    })
    
    // function for saving new user data
    function submitData() {
        // save new data to local storage
        localStorage.setItem("stitchboxBrazeUser", JSON.stringify(externalId))
        // designate this user as the one to be tracked by Braze as well as ends the current session
        braze.changeUser(externalId)
        // toggle edit off
        setEdit(!edit)
        // refresh the browser to pull in the latest info
        window.location.reload()
    }

    function cancelChange() {
        // handle cancel action when there was no initial user to begin with
        if (CurrentUserData == null) {
            setExternalId("no user set")
        // restore state variable to its initial value
        } else {
            setExternalId(CurrentUserData)
        }
        // toggle edit off
        setEdit(!edit)
    }

    // returns different inputs & buttons based on edit state of the component
    return (
        <>
        <label htmlFor="externalId">External Id</label>
        {edit && ( <input id="externalId" value={externalId} onChange={(e) => setExternalId(e.target.value)} required></input>)}
        {!edit && ( <input disabled placeholder={externalId}></input>)}
        {!edit && ( <button onClick={() => setEdit(!edit)}>Change Connection</button>)}
        {edit && ( <button onClick={submitData}>Save Connection</button>)}
        {edit && ( <button onClick={cancelChange}>Cancel</button>)}
        </>
    )
}