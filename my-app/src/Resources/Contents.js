import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquareRootAlt, faCertificate, faBrain, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';

// About me
import profilePic1 from './Profile1.jpg';
import profilePic2 from './Profile2.png';
import profilePic3 from './Profile3.jpg';
import resume from './WilsonHsu_Resume.pdf';
// Education
import UofTLogo from './UofTLogo.png';
// Experiences
import rocsautLogo from '../Resources/ROCSAUTLogo.png';
import ECCCLogo from '../Resources/ECCCLogo.png';
// Projects
import NDTP1 from '../Resources/NDTP1.png';
import ER1 from '../Resources/ER1.png';
import ER2 from '../Resources/ER2.jpg';
import UNI1 from '../Resources/UNI1.png';
import UNI2 from '../Resources/UNI2.png';
import UNI3 from '../Resources/UNI3.png';
import UNI4 from '../Resources/UNI4.png';
import PW1 from '../Resources/PW1.png';
import PW2 from '../Resources/PW2.png';
import PW3 from '../Resources/PW3.png';
import PW4 from '../Resources/PW4.png';
import PW5 from '../Resources/PW5.png';
import LO1 from '../Resources/LO1.png';
import LO2 from '../Resources/LO2.png';
import LO5 from '../Resources/LO5.gif';
import LO6 from '../Resources/LO6.gif';
import LO7 from '../Resources/LO7.gif';
import LO8 from '../Resources/LO8.gif';
import GC1 from '../Resources/GC1.png';
import GC2 from '../Resources/GC2.png';

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
            id: "education",
            school: {
                logo: UofTLogo,
                infos: [
                    {
                        icon: faGraduationCap,
                        detail: "H.B.Sc. | 2017 - 2022 (Expected)"
                    }, {
                        icon: faCode,
                        detail: "Specialize in Computer Science"
                    }, {
                        icon: faBrain,
                        detail: "Focus Area in Artificial Intelligence"
                    }, {
                        icon: faSquareRootAlt,
                        detail: "Minor in Mathematics"
                    }, {
                        icon: faCertificate,
                        detail: "CGPA:3.83/4.00"
                    },
                ]
            },
            courses: [
                {
                    code: "CSC301",
                    title: "Intro. to Software Engineering",
                    link: "https://fas.calendar.utoronto.ca/course/csc301h1"
                }, {
                    code: "CSC309",
                    title: "Programming on the Web",
                    link: "https://fas.calendar.utoronto.ca/course/csc309h1"
                }, {
                    code: "CSC311",
                    title: "Intro. to Machine Learning",
                    link: "https://fas.calendar.utoronto.ca/course/csc311h1"
                }, {
                    code: "CSC324",
                    title: "Principles of Programming Languages",
                    link: "https://fas.calendar.utoronto.ca/course/csc324h1"
                }, {
                    code: "CSC343",
                    title: "Intro. to Databases",
                    link: "https://fas.calendar.utoronto.ca/course/csc343h1"
                }, {
                    code: "CSC369",
                    title: "Operating Systems",
                    link: "https://fas.calendar.utoronto.ca/course/csc369h1"
                }, {
                    code: "CSC373",
                    title: "Algorithm Design and Analysis",
                    link: "https://fas.calendar.utoronto.ca/course/csc373h1"
                }, {
                    code: "CSC384",
                    title: "Intro. to AI",
                    link: "https://fas.calendar.utoronto.ca/course/csc384h1"
                }, {
                    code: "CSC485",
                    title: "Computational Linguistics",
                    link: "https://fas.calendar.utoronto.ca/course/csc485h1"
                }
            ]
        },
        {
            navText: "Experience",
            id: "experience",
            experiences: [
                {
                    title: "Web Application Developer",
                    companyLogo: ECCCLogo,
                    brief: "Environment and Climate Change Canada | North York, ON | Aug. 2020 - Aug. 2021",
                    details: [
                        "Worked in an Agile team which is responsible for upgrading and maintaining several .NET MVC web applications that enforce the 4 major effluent regulations in Canada.",
                        "Wrote SQL scripts to generate test cases for performance testing, and a Windows program that cleans/convert undesirable data formats in production database.",
                        "Designed and developed the brand new Business Application Tracker app that is used to keep track and report all resource allocations within the Business e-Solution Division."
                    ]
                }, {
                    title: "Vice-president of Operation",
                    companyLogo: rocsautLogo,
                    brief: "Taiwan (ROC) Student Association at UofT | Toronto, ON | Mar 2019 - Apr. 2020",
                    details: [
                        "Evaluated and managed all cash flows for our student association of over 200 active members.",
                        "Recruited and lead a team of 8 people to engage in face-to-face meetings, phone calls, emails with numerous potential sponsors.",
                        "In charged of purchasing event items, booking locations and keeping track of inventories."
                    ]
                }
            ]
        },
        {
            navText: "Skill",
            id: "skill",
            skills: [
                {
                    category: "Artificial Intelligence",
                    tools: ["PyTorch", "Scikit-learn", "Keras", "NumPy"]
                },
                {
                    category: "Programming Language",
                    tools: ["Python", "C", "C#", "SQL", "Javascript", "HTML", "CSS", "Java", "Dr.Racket", "Haskell"]
                },
                {
                    category: "Web Development",
                    tools: ["ASP.NET", "Blazor", "Entity.js", "React", "Angular.js", "Express.js", "Node.js", "Bootstrap", "Postman", "Flask"]
                },
                {
                    category: "Database",
                    tools: ["SSMS", "MongoDB", "PostgreSQL"]
                }
            ]
        },
        {
            navText: "Project",
            id: "project",
            projects: [
                {
                    name: 'Personal Website',
                    image: PW1,
                    modal: {
                        images: [PW1, PW2, PW3, PW4, PW5],
                        date: "Jan. 2021",
                        links: ["https://github.com/wilsonhsu0102/person_website"],
                        linkDescriptions: ["Repo Link"],
                        description: ["A fully responsive React website that presents part of me and the experience that I have."
                            , "Built with various fun and famous frameworks such as Bootstrap, EmailJS, React-Spring, React-Particles, React-Scroll, etc."
                            , "Please contact me via the \"Leave me a message\" section at the bottom of the page if you have suggestions about this website"]
                    }
                },
                {
                    name: 'Neural Dependency Parser',
                    image: NDTP1,
                    modal: {
                        images: [NDTP1],
                        date: "Sep. 2020",
                        links: ["https://github.com/wilsonhsu0102/Computational-Linguistic/tree/master/A1"],
                        linkDescriptions: ["Repo Link"],
                        description: ["Made a transition-based parser that would parse a sentence into a dependency graph."
                            , "Implemented a feedforward-NN using PyTorch library to predict the next projective transition to apply to the sentence parser."
                            , "The model was trained in mini-batches on 39832 sentences and achieved 89.8% accuracy on 2416 test sentence."]
                    }
                },
                {
                    name: 'EtherRide',
                    image: ER1,
                    modal: {
                        images: [ER1, ER2],
                        date: "Jan. 2019",
                        links: ["https://github.com/yuxuanyao/EtherRide", "https://devpost.com/software/etherride"],
                        linkDescriptions: ["Repo Link", "DevPost Link"],
                        description: ["Car rental app that won the Best Aragon App award at UofTHacksVI out of 100+ participating teams."
                            , "Smart contract created/stored on the Ethereum Blockchain and managed using Aragon platform."
                            , "Integrated SmartCar API to remotely lock/unlock smart vehicles once transactions are verified."]
                    }
                },
                {
                    name: 'UNI',
                    image: UNI2,
                    modal: {
                        images: [UNI1, UNI2, UNI3, UNI4],
                        date: "Nov. 2019",
                        links: ["https://github.com/wilsonhsu0102/UNI", "https://shrouded-oasis-64494.herokuapp.com/"],
                        linkDescriptions: ["Repo Link", "Website Link"],
                        description: ["A MERN web application built to help university students plan events during busy school days, shorten the distance between \"UNI\"."
                            , "Users can upload pictures, customize profile and connect with others if the ❤️ is mutual."
                            , "Supports account validation, administrator mode, real time chatting, event planning."]
                    }
                },
                {
                    name: 'LiftOvers',
                    image: LO1,
                    modal: {
                        images: [LO1, LO2, LO5, LO6, LO7, LO8],
                        date: "Nov. 2019",
                        links: [],
                        linkDescriptions: [],
                        description: ["Designed, developed and delivered a management web application for a NPO named LiftOvers, who's main goal is to reduce food waste around the Toronto region."
                            , "The purpose of the application is to create an automated solution that would cut down the human resource expenditure on processing lift requests and recording keeping purposes."
                            , "Functionality includes: User validation, Administrator access, Twilio integration, Lift request confirmations and tracking, User information updates."]
                    }
                },
                {
                    name: 'Game Centre',
                    image: GC1,
                    modal: {
                        images: [GC1, GC2],
                        date: "Oct. 2017",
                        links: ["https://github.com/wilsonhsu0102/minimax_puzzle_solver"],
                        linkDescriptions: ["Repo link"],
                        description: ["A game centre console app that consist of two basic games: Subtract Square, Stone Henge",
                            "User can choose to play against AI player that is implemented with minimax algorithm."]
                    }
                }
            ]
        },
        {
            navText: "Contact me",
            id: "contact",
            emailJS: {
                serviceId: "service_w4a75zg",
                templateId: "template_pd4mq6p",
                userId: "user_p4TidKTSLLuOWcfALVvLN"
            }
        }
    ]
}

export default contents;