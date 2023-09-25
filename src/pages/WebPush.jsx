import { useState } from "react"
import { Container, Alert, Button } from "react-bootstrap"
import * as braze from '@braze/web-sdk'

// component first dependent on if the browser even supports push
// if it is supported, the PushSupportedInBrowser component does a series of more checks
export default function WebPush() {
    const [pushSupported, setPushSupported] = useState(braze.isPushSupported)
    
    return (
        <Container className="jumbotron">
            <h1 className="display-3 mt-4">Web Push</h1>
            <p className="lead">{`browser support is ${braze.isPushSupported()}, permission granted is ${braze.isPushPermissionGranted()}, blocked is ${braze.isPushBlocked()}`}</p>
            {pushSupported ? <PushSupportedInBrowser/> : <PushNotSupportedInBrowser/> }
        </Container>
    )
}

// Component to display when Push is not supported in browser
function PushNotSupportedInBrowser() {
    function seeBrowsers(){
        window.location="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
    }
    
    return (
        <Alert variant="danger">
            <Alert.Heading>Browser Not Supported</Alert.Heading>
            <p>Web Push won't work on this browser. Make sure your browser is running on the latest version, or try a different browser.</p>
            <Button variant="outline-dark" onClick={seeBrowsers}>See Supported Browsers</Button>
        </Alert>
    )
}

// component to display if Push is supported in browser, checks to see if Push has been disabled in the browser
function PushSupportedInBrowser() {
    const [pushBlocked, setPushBlocked] = useState(braze.isPushBlocked())

    return (
        <>
        {pushBlocked ? <UserHasBlockedPush/> : <UserNotBlockedPush/>}
        </>
    )
}

// alert to display if user has disabled push
function UserHasBlockedPush() {
    function visitBrowserSettings(){
        window.location="https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop"
    }
    return (
        <Alert variant="warning">
            <Alert.Heading>Web Push Blocked</Alert.Heading>
            <p>This browser supports Web Push, but has blocked it. Reset your browser settings to enable Web Push notifications.</p>
            <Button variant="outline-dark" onClick={visitBrowserSettings}>See Supported Browsers</Button>
        </Alert>
    )
}

// component to display if user has not disabled push - dependent on if push is eligible
function UserNotBlockedPush() {
    const[isPushPromptEligible, setIsPushPromptEligible] = useState(!braze.isPushPermissionGranted())
    
    
    // this logic isn't working for some reason
    
    return (
        <>
        {isPushPromptEligible ? <PushPromptEligible togglePushPrompt={setIsPushPromptEligible}/> : <NotPushPromptEligible/> }
        </>
    )
}

function PushPromptEligible({togglePushPrompt}) {
    function setPushPermission() {
        braze.requestPushPermission()
        togglePushPrompt(false)
    }
    
    return (
        <Alert variant="warning">
            <Alert.Heading>Enable Web Push In Browser</Alert.Heading>
            <p>You need to enable Web Push for this browser in order to receive Web Push notifications.</p>
            <Button variant="outline-dark" onClick={setPushPermission}>Enable Web Push</Button>
        </Alert>
    )
}


function NotPushPromptEligible() {
    function visitHelpDocs() {
        window.location = "https://www.braze.com/docs/user_guide/message_building_by_channel/push/creating_a_push_message#creating-a-push-message"
    }
    
    return (
        <Alert variant="success">
            <Alert.Heading>Ready To Receive Web Push</Alert.Heading>
            <p>This browser supports Web Push and is Web Push enabled. Fire away!</p>
            <Button variant="outline-success" onClick={visitHelpDocs}>Web Push Help Docs</Button>
        </Alert>
    )
}