import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/allotment">Allotment</Link></li>
                <li><Link to="/onchange">Onchange</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/objects">Objects</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar;

// länkvägen i to ovan måste vara samma som i app.jsx