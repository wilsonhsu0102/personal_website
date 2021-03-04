import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import resume from './WilsonHsu_Resume.pdf';

import profilePic1 from './Profile1.jpg';
import profilePic2 from './Profile2.png';
import profilePic3 from './Profile3.jpg';

const contents =
{
    contactLinks: [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/hsu-wilson/",
            icon: faLinkedinIn
        },
        {
            name: "Github",
            href: "https://github.com/wilsonhsu0102",
            icon: faGithub
        },
        {
            name: "Mail",
            href: "mailto:wilsonhsu0102@gmail.com",
            icon: faEnvelope
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/ho.ho.hotwheels/",
            icon: faFacebookF
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/3wheels.on/",
            icon: faInstagram
        },
        {
            name: "Twitter",
            href: "https://twitter.com/wilsonhsu0102",
            icon: faTwitter
        }
    ],
    pages: [
        {
            navText: "Welcome",
            id: "welcome",
            titleText: "Hi, I am Wilson Hsu",
            typedText: [
                "I'm a software engineer.",
                "I study at UofT.",
                "I'm interested in A.I."
            ]
        },
        {
            navText: "About me",
            title: "About Me",
            id: "about",
            profileImgs: [profilePic1, profilePic2, profilePic3],
            description: "Hi! I am Wilson, happy to have you and here is a little background about me.👨‍💻<br /><br />" +
            "I'm a 4<sup>th</sup> year Computer Science student at University of Toronto, currently on my coop term, working for Environment and Climate Change Canada as a Web Application Developer.<br /><br />" +
            "Computers have always been a thing to me when I was growing up. In the beginning it was simply for games, then it got a whole lot more interesting after I learned to look into the logic (🧙‍♂️ the magic) behind the screen." +
            "My world has changed since that moment. From replicating the Snake game by watching Youtube tutorials and building simple Email bot to annoy my friend. All that leads to later on winning an award with my team at a hackathon and learning to classify handwritten digits using convolutional neural network.<br /><br />" +
            "It has been a great journey, and I can't wait to see what else is ahead for me. I am open to all opportunities, but Software Engneering and Machine Learning is of particular interest to me.",
            resume: resume
        },
        {
            navText: "Education",
            id: "education"
        },
        {
            navText: "Experience",
            id: "experience"
        },
        {
            navText: "Skill",
            id: "skill"
        },
        {
            navText: "Project",
            id: "project"
        },
        {
            navText: "Contact me",
            id: "contact"
        }
    ]
}

export default contents;