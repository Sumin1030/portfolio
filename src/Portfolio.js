import { Link } from "react-router-dom";
function Portfolio() {
  return (
        <div className="portfolio resume resume-works">
            <div className="title">Work Experience</div>
            <Link to='/experience'>
                <label className='work-experience'>
                    Puzzle Data, Seoul, Korea<br />
                    2021.04 - 2023.05<br />
                    Full-Stack Web Developer
                </label>
            </Link>
            <div className="title">Project</div>
            <Link to='/project'>
                <label className='project'>
                    Sumin In Canada<br />
                    2023.09 - 2024.04<br />
                    Personal Project
                </label>
            </Link>
        </div>
)   ;
}

export default Portfolio;
