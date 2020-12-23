import styled from "styled-components"
import React from "react"
import THON from "./IMG_3049.jpg"
import XC from "./IMG-0014.JPG"
import Nav from "./Nav"

const PageHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background:
    linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
    linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
    background-color:#708090;
    background-size: 64px 128px;
}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #FAF0E6;
    height: auto; 
    width: 600px;
    border-radius: 25px;
    align-items: center;
    font-family: Times;
    margin: 100px 150px 100px 150px
`;

const Picture = styled.img`
    border-radius: 25px;
    height: 100%;
    width: 50%;
`;

const Title = styled.h2`
    font-size: 40px;
    margin: 20px 0px 20px 0px;
`;
const Text = styled.p`
    font-family: Times;
    font-size: 25px;
    margin: 20px 25px 20px 25px;
    text-align: center;
`;

const Image = styled.a`
    margin: 40px 25px 40px 25px;
    text-align: center;
`;

function Hobbies() {
    return (
        <div>
            <Nav />
            <PageHolder>
                <Wrapper>
                    <Image target="_blank" href="https://donate.thon.org/participant/43623">
                        <Picture src={THON} />
                    </Image>
                    <Title>Penn State THON</Title>
                    <Text>I participate in THON which is a student run organization that fundraises for the Four Diamonds Foundation. I have been a part of the THON community since I was a freshman in high school and it was one of the biggest driving forces that brought me to Penn State. I love fundraising and spending time with the amazing people in the THON community and love getting to throw an amazing event for the kids. If you are interested in donating, click the image above!</Text>
                </Wrapper>
                <Wrapper>
                    <Image target="_blank" href="https://www.strava.com/">
                        <Picture src={XC} />
                    </Image>
                    <Title>Club Cross Country</Title>
                    <Text>Ever since I was in fifth grade, I have loved running. I learned from my dad but eventually got faster than him and started running on my own. When I got to high school, I began running cross country and loved the sport and the people I met doing it. Now I run club cross country and Penn State and am hoping to run a marathon by the time I graduate. This is probably one of my greatest passions and easily my favorite hobby. Click the image above for a link to my Strava!</Text>
                </Wrapper>
            </PageHolder>
        </div>

    );
}

export default Hobbies