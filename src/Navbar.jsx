import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="navbar" style={{backgroundColor: '#11162A'}}>
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img className="d-inline-block align-text-top" src="https://cdn.braze.eu/appboy/communication/assets/image_assets/images/650346a9ba4e76004e3ecc1a/original.png" height={"30"} width={"30"}></img>
                <span className="fs-4" style={{color: '#F9F5F0'}}>Stitchbox</span>
            </Link>
            <ul className="nav nav-pills">
                <CustomLink to="/user">User</CustomLink>
                <CustomLink to="/contentcards">Content Cards</CustomLink>
                <CustomLink to="/inappmessages">In App Messages</CustomLink>
                <CustomLink to="/webpush">Web Push</CustomLink>
                <CustomLink to="/featureflags">Feature Flags</CustomLink>
            </ul>
            </div>
        </nav>
        </>
    )
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className="nav-item">
            <Link to={to} {...props} className={isActive ? "nav-link active" : "nav-link"} style={{color: '#F9F5F0'}}>
                {children}
            </Link>
        </li>
    )
}