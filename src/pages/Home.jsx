import UpdateBrazeConnection from "../UpdateBrazeConnection";
import UpdateBrazeUser from "../UpdateBrazeUser";

export default function Home() {
    return (
        <>
        <div>
            <UpdateBrazeConnection/>
        </div>
        <div>
            <UpdateBrazeUser/>
        </div>
        </>
    )
}