import {React, useState} from 'react';
import './App.css';
import UpdateBrazeConnection from './UpdateBrazeConnection';
import UpdateBrazeUser from './UpdateBrazeUser';
import * as braze from '@braze/web-sdk';
import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import InAppMessages from './pages/InAppMessages';
import WebPush from './pages/WebPush';
import Home from './pages/Home';

function App() {
  // INVESTIGATE!!! I may not need to use local connection as
  // state for the App - the only purpose is to get the app to refresh
  // once the connection has been updated, but braze.initialize
  // requires a page refresh regardless
  // so I may just be able to remove this as a state for the app entirely
  
  // get latest values from browser storage
  // could I pass these as props to other components?
  const appLocalUser = localStorage.getItem("stitchboxBrazeUser")
  const appLocalConnection = localStorage.getItem("stitchboxBrazeConnection")
  // entire app dependent on Braze connection details - if these change, the whole app must rerender
  // other components save Braze connection details in local browser; initial App state uses these details if present ('' if not)
  const [connection, setConnection] = useState(() => {
      if (appLocalConnection == null) return {
        webAppAPIKey: '',
        sdkEndpoint: '',
        restAPIKey: ''
      }
      return {
        webAppAPIKey: JSON.parse(appLocalConnection).webApp,
        sdkEndpoint: JSON.parse(appLocalConnection).sdk,
        restAPIKey: JSON.parse(appLocalConnection).api
    }})

  const [user, setUser] = useState(() => {
    if (appLocalUser == null) return ''
    return JSON.parse(appLocalUser)
  })

  if (appLocalConnection != null) {
    braze.initialize(JSON.parse(appLocalConnection).webApp,{
      baseUrl: JSON.parse(appLocalConnection).sdk,
      enableLogging: true
    })
  } else {
    console.log('No connection data - Braze not initialized')
  }

  // render the App
  return (
    <div className="App">
      {/* bring in UpdateBrazeConnection component, passing App() set state function as a prop */}
      <div>
      <UpdateBrazeConnection updateBrazeConnection={setConnection}/>
      </div>
      <div>
      <UpdateBrazeUser updateBrazeUser={setUser}/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/contentcards" element={<ContentCards/>}/>
        <Route path="/inappmessages" element={<InAppMessages/>}/>
        <Route path="/webpush" element={<WebPush/>}/>
      </Routes>
    </div>
  );
}

export default App;
