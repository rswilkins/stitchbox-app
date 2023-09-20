import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav>
            <Link to="/">
                <img src="https://cdn.braze.eu/appboy/communication/assets/image_assets/images/650346acf7f44c0059dc1e9d/original.png" height={"30"} width={"30"}></img>
                <span>Stitchbox</span>
            </Link>
            <ul>
                <CustomLink to="/user">User</CustomLink>
                <CustomLink to="/contentcards">Content Cards</CustomLink>
                <CustomLink to="/inappmessages">In App Messages</CustomLink>
                <CustomLink to="/webpush">Web Push</CustomLink>
            </ul>
        </nav>
        </>
    )
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className="nav-item">
            <Link to={to} {...props} className={isActive ? "nav-link active" : "nav-link"}>
                {children}
            </Link>
        </li>
    )
}