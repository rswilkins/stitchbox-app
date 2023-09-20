import {React, useState} from 'react';
import * as braze from '@braze/web-sdk';
import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import InAppMessages from './pages/InAppMessages';
import WebPush from './pages/WebPush';
import Home from './pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';

// NOTE: still might be superfluous to have the appLocalUser, appLocalConnection consts below
// and also have a page CurrentConnectionData.jsx dedicated to the same thing.
// pick one or the other - I will probably need to make a const per page to make sure that resetting
// the connection data or the user data always pulls in the latest directly from the browser

function App() {
  // get latest values from browser storage
  // could I pass these as props to other components?
  const appLocalUser = localStorage.getItem("stitchboxBrazeUser")
  const appLocalConnection = localStorage.getItem("stitchboxBrazeConnection")
  // entire app dependent on Braze connection details - if these change, the whole app must rerender
  // other components save Braze connection details in local browser; initial App state uses these details if present ('' if not)

  if (appLocalConnection != null) {
    braze.initialize(JSON.parse(appLocalConnection).webApp,{
      baseUrl: JSON.parse(appLocalConnection).sdk,
      enableLogging: true
    })
  } else {
    console.log('No connection data - Braze not initialized')
  }

  if (appLocalUser != null) {
    braze.openSession()
    console.log(`Tracking user ${appLocalUser}`)
  } else {
    console.log('No Braze user set. Enter an External Id to begin tracking.')
  }

  // render the App
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/contentcards" element={<ContentCards/>}/>
        <Route path="/inappmessages" element={<InAppMessages/>}/>
        <Route path="/webpush" element={<WebPush/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
