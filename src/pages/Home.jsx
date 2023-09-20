import UpdateBrazeConnection from "../UpdateBrazeConnection";
import UpdateBrazeUser from "../UpdateBrazeUser";

export default function Home() {
    return (
        <>
        <div>
            <h1>Welcome to Stitchbox</h1>
            <p>Stitchbox is a simple web app featuring fully functional Braze Web SDK and REST API integrations.</p>
        </div>
        <div>
            <UpdateBrazeConnection/>
        </div>
        <div>
            <UpdateBrazeUser/>
        </div>
        </>
    )
}