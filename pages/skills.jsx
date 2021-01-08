import next from 'next';
import styled from 'styled-components';
import Text from "../components/atoms/Text";
import Head from 'next/head'

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim } from "../animation";


const Skills = () => {
    return (
        <SkillsSection>
            <Head>
                <link href='https://css.gg/arrange-front.css' rel='stylesheet'></link>
                <link href='https://css.gg/smartphone.css' rel='stylesheet'></link>
                <link href='https://css.gg/album.css' rel='stylesheet'></link>
            </Head>
            <SkillsHeader>
                <Text variant="second-headline">
                    <motion.h2 variants={titleAnim} animate="show">Skillsets</motion.h2>
                </Text>
            </SkillsHeader>
            <SkillsBoxes>
                <SkillsBox>
                    <Icon><i class="gg-arrange-front"></i></Icon>
                    <Text variant="paragraph">Developing blazing fast web applications for seamless user interaction.</Text>
                </SkillsBox>
                <SkillsBox>
                <Icon><i class="gg-smartphone"></i></Icon>
                    <Text variant="paragraph">Mobile-first, responsive design layout for all devices is a top priority.</Text>
                </SkillsBox>
                <SkillsBox>
                    <Icon><i class="gg-album"></i></Icon>
                    <Text variant="paragraph">Constantly continues to learn new technologies and keeping up-to-date with the freshest trends.</Text>
                </SkillsBox>
            </SkillsBoxes>
            <SkillsImages>
                <center>
                    <img src="/images/react-logo.png" alt=""/>
                    <img src="/images/javascript-logo.png" alt=""/>
                    <img src="/images/node-logo.png" alt=""/>
                    <img src="/images/html-logo.png" alt=""/>
                    <img src="/images/sass-logo.png" alt=""/>
                    <img src="/images/photoshop-logo.png" alt=""/>
                    <img src="/images/mongodb-logo.png" alt=""/>
                    <img src="/images/firebase-logo.png" alt=""/>
                    <img src="/images/jquery-logo.png" alt=""/>
                    <img src="/images/bootstrap-logo.png" alt=""/>
                </center>
            </SkillsImages>
        </SkillsSection>
    )
}


// SCSS 

const SkillsSection = styled.section`
    background: ${({theme}) => theme.colors.bg};
    height: 90vh;
    width: 100vw;
    padding: 2rem;
    width: 90%;
    margin: 0 auto;
`;

const SkillsHeader = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;
`

const SkillsBoxes = styled.div`
    display: block;
    @media screen and (min-width: 768px) {
        display: flex;
    }
`

const SkillsBox = styled.div`
    flex: 33%;
    p {
        padding: 2rem;
        text-align: center;
    }
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.palette.purple[400]};
    i {
        transform: scale(2.0);
        margin: 1rem;
    }
`

const SkillsImages = styled.div`
    padding: 1rem 2rem;
        img {
            width: 60px;
            height: 60px;
            margin: 1rem;
            border-radius: 5%;
        }
`

export default Skills;

