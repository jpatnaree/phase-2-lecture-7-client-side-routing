import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pets">Pets</NavLink>
            <NavLink to="/new">Add Pet</NavLink>
        </nav>
    )
}

export default NavBar;