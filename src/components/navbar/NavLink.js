import * as React from "react";
import {Link} from "gatsby";

/**
 * @param {string} location
 * @param {JSX.Element} children
 * @param {Object} style
 */
export const NavLink = ({location, children, style = {}}) => {
    return <Link to={location} className="text-2xl" style={style}>
        <span className="link relative transition-opacity duration-300 opacity-75 hover:opacity-100">
            {children}
        </span>
    </Link>
}