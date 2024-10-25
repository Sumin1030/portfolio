import { Link } from "react-router-dom";
import blog from "./file/pj_blog.png";
import calendar from "./file/calendar.gif";
import guestbook from "./file/guestbook.gif";
import language from "./file/language.gif";
import login from "./file/login.gif";
import main from "./file/pj_main.png";
import Back from "./Back";

function Project () {
    return(
        <div className='resume works resume-experience'>
            <Back />
            <div className="title">Sumin In Canada</div>
            <div className="project-summary">
                11시간의 시차를 극복하고 언제 어디서나 소통가능한 개인 사이트를 만들고 싶은 마음에 시작한 프로젝트입니다.<br />
                관리자가 허용을 해야만 사이트 회원가입이 가능하다는 비밀스러운 느낌을 컨셉으로 잡고, 해킹을 하는 듯한 대시보드를 구현하고자 했습니다.<br />
                기본 화면에는 컨셉에 어울리는 기능들을 생각하여 최대한 라이브러리를 쓰지 않고 구현해보았습니다. <br />
                메인기능은 블로그 글쓰기 기능으로 이 기능도 라이브러리를 쓰지 않고 구현해보았습니다.
                {/* This website facilitates communication with my family and friends in Korea, overcoming the 11-hour time difference.<br />
                It allows us to check on each other's well-being at any time.<br />
                To enhance privacy, I designed it with a hacker's monitor theme. */}
            </div>
            <div className="summary">
                <div className="summary-title">
                    Skills
                </div>
                    Javascript, React, Redux, NodeJS, Express, Mysql
            </div>
            <div className="summary">
                <div className="summary-title">
                    deployment
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">FrontEnd : GitHub Pages</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Back-End : AWS EC2 인스턴스(프리티어 이용으로 웹서버를 따로 두지 않음) </span>
                </div>
            </div>
            {/* <div className="summary"> */}
                {/* <div className="summary-title">
                    주요 기능
                </div> */}
                {/* <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">
                        대시보드 - 현재 시간, 
                        관리자 기능 - 사진 및 글 업로드
                        Exclusive Upload Access: Only the owner can upload photos and texts, ensuring privacy and control over shared content.
                    </span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">
                        방명록
                        Guestbook: Guests can leave comments and messages to interact with the owner and each other, fostering a sense of community.
                    </span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Multilingual Support: Offering support for both Korean and English languages to accommodate users from different language backgrounds.</span>
                </div> */}
            {/* </div> */}
            {/* <div className="summary">
                <div className="summary-title">
                    Future Plans
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Implement real-time chat functionality to facilitate instant communication.</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Improve the speed and efficiency of the photo uploading feature.</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Develop user customization options, allowing users to personalize their part with custom messages, names, and colors.</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">Expand the scope of the website to transform it into a platform where users can create their own websites.</span>
                </div>
            </div> */}
            <div className="detail first">
                <div className="summary-title">
                    detail
                </div>
                <div className="detail-title">
                    로그인 페이지
                </div>
                <img className="project_img" src={login} />
                <div className="explanation">
                    macOs의 터미널창을 따라 만들어 비밀스러운 컨셉의 로그인창을 구현했습니다.
                    {/* Designed to resemble macOS's terminal for a private and secretive atmosphere. */}
                </div>
            </div>
            <div className="detail">
                <div className="detail-title">
                    메인 페이지 대시보드
                </div>
                <img className="project_img" src={language} />
                <div className="explanation">
                    영어지원기능, d-Day, 실시간 초시계, 방문자 수 그래프, <br />
                    깃허브 잔디 디자인의 캘린더, 사용자 목록, 방명록 기능을 구현하였습니다.
                    {/* Features language support, real-time clock functionality, and a count-up from the first day. */}
                </div>
            </div>
            <div className="detail">
                <div className="detail-title">
                    방명록
                </div>
                <img className="project_img" src={guestbook} />
                <div className="explanation">
                    방명록에 답글기능을 무제한 depth로 작성할 수 있도록 구현하였습니다.
                    {/* Allows users to communicate with each other with unlimited depth. */}
                </div>
            </div>
            <div className="detail">
                <div className="detail-title">
                    Contribution 캘린더
                </div>
                <img className="project_img" src={calendar} />
                <div className="explanation">
                    깃허브의 잔디를 심는 것 처럼, 블로그 포스팅을 많이 할 수록 색이 진해지게끔 구현하였으나,<br />
                    포스팅을 그만큼 자주 하지 않아 방문자 수와 연결하여 방문자 수가 많을 수록 진해지도록 수정한 상태입니다.
                    {/* Styled after GitHub's contribution calendar, showing the host's login activity per day.<br />
                    Future plans to convey other contributions on the site, such as posting activity and other user login activities. */}
                </div>
            </div>
            <div className="detail last">
                <div className="detail-title">
                    블로그 기능
                </div>
                <img className="project_img" src={blog} />
                <div className="explanation">
                    관리자만 사진과 글을 등록할 수 있도록 구현하였습니다. <br />
                    라이브러리를 쓰지 않고 일단 기능을 구현하는 것에 우선순위를 두어 아직 기능을 사용하는 데에 불편함이 있는 상태입니다.<br />
                    추후 기능개선을 할 예정이었으나 개선하기 전에 귀국을 함으로써 기능개선을 하지 못했습니다.
                    {/* A platform for sharing personal experiences or writing letters to users, with the ability for users to leave comments. */}
                </div>
            </div>
            <div className="summary">
                <div className="summary-title">
                    기능별 코드 링크
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">로그인 페이지</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">깃헙 잔디</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">방명록</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content">언어지원</span>
                </div>
            </div>
            <div className="summary">
                <div className="summary-title">
                    느낀점
                </div>
                <div className='summary-content'>
                    <div className='summary-content'>
                        <span className="dot">•</span>
                        <span className="content explanation">프로젝트 시작부터 배포까지 혼자 모든 것을 경험할 수 있었던 프로젝트. 실제 사이트를 배포하여 친구들, 가족들과 소통하는 것이 재미있었음.</span>
                    </div>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content explanation">
                        이번 프로젝트에서는 떠오르는 것들을 모두 구현해보는 데에 의의를 두었다면, <br />
                        다음 프로젝트는 이번 프로젝트에서 아쉬움이 있었던 사진을 빠르게 업로드 할 수 있는 기능을 구현하는 프로젝트를 하고 싶음.
                    </span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content explanation">또, 실제로 사람들이 써볼 수 있는 서비스를 개발해보고 싶음.</span>
                </div>
                <div className='summary-content'>
                    <span className="dot">•</span>
                    <span className="content explanation">빠른 데이터 처리나 용량이 큰 데이터를 다루는 등 백엔드 파트에서의 과제가 있는 프로젝트를 하고 싶음.</span>
                </div>
            </div>
            {/* <div className="project-link" >
                <Link to='/' target="_blank">Link to this Project!</Link>
            </div> */}
        </div>
    );
}

export default Project;