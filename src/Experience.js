import pz1 from "./file/puzzledata.gif";
import pz2 from "./file/pz2map.gif";
import pz3 from "./file/pz3kpi.gif";
import Back from "./Back";

function Experience () {
    return(
        <div className='resume works resume-experience'>
            <Back />
            <div className="title">Puzzle Data</div>
            <div className="company-description">
                이력서에 썼더라도 다시 제대로 요약해서 쓰자.
            </div>
            {/* <div className="company-description">
                A B2B solution start-up company specializing in process analysis solutions leveraging process mining techniques to analyze customer behavior patterns and uncover insights.
            </div> */}
            <div className="summary">
                <div className="summary-title">
                    skills
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">JavaScript, Redux, 자체프레임워크, D3, Plotly</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Java, Spring, Mybatis, PostgreSQL</span>
                </div>
            </div>
            {/* <div className="summary">
                <div className="summary-title">
                    역할
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Contributed to the development of APIs for visualizing analytical tools in the back-end.</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">
                        프론트엔드 
                        Played a significant role in front-end development, creating a real-time dashboard, and contributing to the development of two visualizing analytical tools as a team member.
                    </span>
                </div>
            </div> */}
            <div className="detail first">
                <div className="summary-title">
                    roll
                </div>
                <div className="detail-title">
                    실시간 데이터 분석 대시보드 프론트엔드 파트 단독 개발
                </div>
                <img className="work-image 1" src={pz1}></img>
                <div className="explanation">
                    <div className="explanation-content">
                        <span className="dot">•</span>
                        <span className="content">실시간으로 데이터를 분석하여 표준모델에서 벗어나는 케이스들을 바로 모니터링할 수 있는 대시보드 개발.</span>
                    </div>
                    <div className ="explanation-content">
                        <span className="dot">•</span>
                        <span className="content">기준이 되는 표준모델 설정 및 수정 기능 개발.</span><br />
                    </div>
                    <div className="explanation-content">
                        <span className="dot">•</span>
                        <span className="content">데이터 분석 속도 및 화면 리프레시 속도 조절 등의 기능 개발.</span>
                    </div>
                </div>
                {/* <div className="explanation"> */}
                    
                    {/* Developed the entire real-time dashboard in the front-end. Enabled real-time monitoring of events that fall outside predefined ranges based on a standard model.<br />
                    Implemented features to customize interval time for data retrieval from the server and monitor refresh time. */}
                {/* </div> */}
            </div>
            <div className="detail">
                <div className="detail-title">
                    Comparison Frequency Map 데이터 분석 도구 프론트엔드 파트 개발
                </div>
                <img className="work-image 2" src={pz2}></img>
                <div className="explanation">
                    <span className="dot">•</span>
                    <span className="content">기존의 Map 분석도구를 활용하여 Comparison Frequency Map이 그려지는 로직 작성</span>
                    {/* Developed the Comparison Frequency Map Analysis based on Map analysis.<br />
                    Rewrote the logic for drawing maps specific to this tool. */}
                </div>
            </div>
            <div className="detail">
                <div className="detail-title">
                KPI 분석도구 백엔트 파트 개발
                </div>
                <img className="work-image 3" src={pz3}></img>
                <div className="explanation">
                    <span className="dot">•</span>
                    <span className="content">KPI 데이터 분석 api 작성.</span>
                    {/* Developed APIs for KPI analysis tools.<br />
                    Enabled users to analyze key performance indicators such as the number of cases or events, and calculate metrics like sum, average, and median of lead time or working time.<br />
                    Implemented various options for customization, including setting limitations on ranges and including/excluding specific events or workers. */}
                </div>
            </div>
        </div>
    );
}

export default Experience;