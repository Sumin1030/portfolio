import { Link } from "react-router-dom";
function Back() {
    return (
        <Link to='/' className="resume resume-menu back-link">
            <label className="back-label">BACK</label>
        </Link>
    )
}

export default Back;