import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
                <Link to ="/">Main</Link>
            </li>
            <li className="list-group-item">
                <Link to ="/login">Login</Link>
            </li>
            <li className="list-group-item">
                <Link to ="/users">Users</Link>
            </li>
        </ul>
    )
}
 
export default NavBar