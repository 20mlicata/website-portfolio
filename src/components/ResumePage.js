import styled from "styled-components"
import React from "react"
import NavBar from "./Nav";
import IMG from "./IMG-2783.JPG"


function Page1() {

    const PageHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background:
    linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
    linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
    background-color:#708090;
    background-size: 64px 128px;
}
    
`;


    const Title = styled.h1`
        text-align: center;
        order: 0;
        font-family: Times;
        font-size: 80px;
        border-bottom-style: double;
    `;

    const ResumeText = styled.p`
        font-size: 20px;
        font-family: Times;
        color: #708090
        order: 1;
        margin-left: 40px;
        margin-right: 40px;
    `;

    const ResumeHolder = styled.div`
        display: flex;
        flex-direction: column;
        background: #FAF0E6;
        border-radius: 25px;
        width: 80%;
        margin-top: 50px;
        margin-bottom: 50px;
    `;

    const YGPA = styled.p`
        text-align: right;
    `;



    return (
        <PageHolder>
            <NavBar />
            <ResumeHolder>
                <Title>
                    My Resume
                </Title>
                <ResumeText>
                    <h1>Michael Licata</h1>
                    <p>Pennsylvania State University, Schreyer Honors College 2024</p>
                    <hr/>
                    mml6076@psu.edu | 215-805-2664 | Personal email: 20mlicata@gmail.com
                    <br/>
                    <br/>
                    <h2>Profile</h2>
                    <hr/>
                    <p>Self-taught programmer and highly motivated commuter science major with an interest in problem solving. Dedicated to learning new skills within the computer science and business industries. Looking for an internship to further develop my programming skills and to gain business experience.  </p>
                    <h2>Work/Leadership Experience</h2>
                    <hr/>
                    <h3>Wissahickon School Board Representative </h3>
                    <p>August 2018 – June 2020</p>
                    <ul>
                        <li>
                            One of four students selected to represent the student body on the school board. Spoke on issues such as grading policies, school start time, budget concerns and achievement gap concerns
                        </li>
                    </ul>
                    <h3>Pennsylvania Free Enterprise Week Student CEO</h3>
                    <p>Summer 2019</p>
                    <ul>
                        <li>
                            Led a group of students in an intensive one-week business simulation program which involved financial and marketing decisions. For more information, please go to the <a target="_blank" href="https://www.pfew.org/">PFEW Website</a>
                        </li>
                    </ul>
                    <h3>Private Tutor </h3>
                    <p>February 2019 – Present</p>
                    <ul>
                        <li>
                            Tutored students between 7th and 10th grade in Physical Science, Chemistry, Physics, Algebra, Pre-Calculus and English. Boosted exam scores for all of my students.                         </li>
                    </ul>
                    <h3>Professional Tutor</h3>
                    <p>August 2019 - August 2020</p>
                    <p>Premier Edge Prep</p>
                    <ul>
                        <li>
                            Tutored throughout my senior year in Algebra and ACT mathematics to prepare students for the ACT, Algebra assessments and Math Subject Tests
                        </li>
                    </ul>
                    <h3>Wissahickon Future Business Leaders of America (FBLA) President</h3>
                    <p>August 2018 - June 2020</p>
                    <ul>
                        <li>
                            Effectively managed a club of 350 students and 20 officers. Responsible for planning fundraisers, organizing field trips, creating club policies and managing club finances. Also organized and participated in state leadership business competition. State competitor in agribusiness and sports and entertainment management
                        </li>
                    </ul>
                    <h2>Awards</h2>
                    <hr/>
                    <ul>
                        <li>National Merit Commended Scholar (2018-2019)</li>
                        <li>National Honor Society (2018-2020)</li>
                        <li>German Honor Society (2018-2020)</li>
                        <li>Academic Excellence Scholarship (2020)</li>
                        <li>German American Partnership Program (GAPP) Student (Summer 2019)</li>
                    </ul>
                    <h2>Education</h2>
                    <hr/>
                    <h3>Wissahickon High School</h3>
                    <YGPA>GPA: 3.99/4.00 <br/>Graduation: June 2020</YGPA>
                    <h3>Penn State Schreyer</h3>
                    <YGPA>GPA: 4.00 <br/>Graduation: May 2024</YGPA>
                    <h2>Skills</h2>
                    <hr/>
                    <p>HTML, CSS, JavaScript, JSX and React framework, German language, high level mathematics</p>

                </ResumeText>
            </ResumeHolder>
        </PageHolder>
    );
}

export default Page1