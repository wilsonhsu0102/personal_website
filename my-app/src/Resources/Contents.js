import { faInstagram, faFacebookF, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquareRootAlt, faCertificate, faMedal, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';

// About me
import profilePic1 from './Profile1.png';
import profilePic2 from './Profile2.jpg';
import profilePic3 from './Profile3.jpg';
import resume from './Wilson_Hsu_Resume.pdf';
// Education
import UofTLogo from './UofTLogo.png';
// Experiences
import rocsautLogo from '../Resources/ROCSAUTLogo.png';
import ECCCLogo from '../Resources/ECCCLogo.png';
import CoinbaseLogo from '../Resources/Coinbase.svg.webp';

// Projects
import IM1 from '../Resources/IM1.png';
import IM2 from '../Resources/IM2.png';
import IM3 from '../Resources/IM3.png';
import IM4 from '../Resources/IM4.gif';
import IM5 from '../Resources/IM5.gif';
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
            typedText: [
                "I'm a software developer.",
                "I graduated from UofT.",
                "I'm open for a FT job."
            ]
        },
        {
            navText: "About me",
            title: "About Me",
            id: "about",
            profileImgs: [profilePic1, profilePic2, profilePic3],
            description: "Hi! I am Wilson, welcome to my website and here is a little bit about myself.👨‍💻<br /><br />" +
                "I graduated from the University of Toronto with a Honour Bachelor of Science degree in Computer " +
                "Science. I have work experience at Coinbase and Environment and Climate Change Canada.<br /><br />" +
                "Aside from being a passionate and goal-driven Software Developer, I have decent knowledge on algorithms, data structures, and " +
                "project experience in areas, such as Promotional content marketplace, Web-scraping Facebook posts, Particle simulation with " +
                "parallel programming, Crypto car rental app. Currently, I am most interested in learning and working with cloud applications, " +
                "automation solutions and backend development.<br /><br />" +
                "Don't hesitate to reach out!🎉"
                ,
            resume: resume
        },
        {
            navText: "Project",
            id: "project",
            projects: [
                {
                    name: 'Inforum Marketing',
                    image: IM1,
                    modal: {
                        images: [IM1, IM2, IM3, IM4, IM5],
                        date: "Dec. 2021",
                        links: ["https://github.com/dcsil/Inforum", "https://drive.google.com/file/d/1PJIiylXd2JDWF3O5YDPvfhbGYb_3E5Gq/view?usp=sharing"],
                        linkDescriptions: ["Repo Link", "Demo Video"],
                        description: ["A React/Node.js promotional content marketplace that specifically target the Millennial/Gen-Z generation."
                            , "Users can share posted marketing campaigns to their social media to earn rewards points."
                            , "Companies are able to utilize our website to promote their products, offerings, and even collect data on how their campaigns performed."]
                    }
                },
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
            navText: "Experience",
            id: "experience",
            experiences: [
                {
                    title: "Software Engineer",
                    companyLogo: CoinbaseLogo,
                    brief: "Coinbase | Remote, North America | May. 2022 - Jan. 2023",
                    details: [
                        "Designed and implemented new features on services that are responsible for all customer Kubernetes resource life cycle. Services are critical to Coinbase Cloud products and nearly every customer interaction on platform has to go through.",
                        "Enhanced the Reaper Kubernetes CronJobs by upgrading resource protection logic, returns more precise and informative output message. Repaired the suspended CronJobs which estimated to save Coinbase Cloud $1M/year.",
                        "Part of the tiger team to build an alert triggered auto-action service, which would save each dev team 20-40 hours per week from dealing with common incidents that can be resolved with a predefined Temporal workflow."
                    ]
                }, {
                    title: "Web Application Developer",
                    companyLogo: ECCCLogo,
                    brief: "Environment and Climate Change Canada | North York, ON | Aug. 2020 - Aug. 2021",
                    details: [
                        "Involved in design discussions related to ECCC’s transition to cloud, built the POC app to test feasibility.",
                        "Worked in all phases of the SDLC for our department-wide project that organizes 150+ web applications in ECCC.", 
                        "Developed and maintained several MVC applications that are responsible for regulating and enforcing the 4 major effluent regulations in Canada."
                    ]
                }, {
                    title: "Vice-president of Operation",
                    companyLogo: rocsautLogo,
                    brief: "Taiwan (ROC) Student Association at UofT | Toronto, ON | Mar 2019 - Apr. 2020",
                    details: [
                        "Recruited and lead a team of 8 people to engage in face-to-face meetings, phone calls, email conversations with numerous potential sponsors of the student association.",
                        "Evaluated and managed all cash flows for our student association of over 150 active members.",
                        "Profited over $2,000 at the end of the year from sponsors and various events that the student association hosted."
                    ]
                }
            ]
        },
        {
            navText: "Skill",
            id: "skill",
            skills: [
                {
                    category: "Programming Language",
                    tools: ["GoLang", "Python", "Javascript", "C", "C#", "SQL", "HTML", "CSS", "Java", "Dr.Racket", "Haskell"]
                },
                {
                    category: "Web Development",
                    tools: ["React", "Express.js", "Node.js", "Bootstrap", "Flask", "ASP.NET", "Blazor", "Entity.js", "Postman", "Selenium"]
                },
                {
                    category: "Database",
                    tools: ["SSMS", "MongoDB", "PostgreSQL", "MySQL"]
                },
                {
                    category: "Other",
                    tools: ["Kubernetes", "AWS", "Temporal", "Terraform", "Metabase", "Retool", "Numpy"]
                }
            ]
        },
        {
            navText: "Education",
            id: "education",
            school: {
                logo: UofTLogo,
                infos: [
                    {
                        icon: faGraduationCap,
                        detail: "H.B.Sc. | 2017 - 2021"
                    }, {
                        icon: faCode,
                        detail: "Specialize in Computer Science"
                    }, {
                        icon: faSquareRootAlt,
                        detail: "Minor in Mathematics"
                    }, {
                        icon: faMedal,
                        detail: "Dean's List Scholar"
                    }, {
                        icon: faCertificate,
                        detail: "CGPA:3.85/4.00"
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
                    code: "CSC367",
                    title: "Parallel Programming",
                    link: "https://fas.calendar.utoronto.ca/course/csc367h1"
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
                    code: "CSC454",
                    title: "The Business of Software",
                    link: "https://fas.calendar.utoronto.ca/course/csc454h1"
                }, {
                    code: "CSC485",
                    title: "Computational Linguistics",
                    link: "https://fas.calendar.utoronto.ca/course/csc485h1"
                }, {
                    code: "CSC491",
                    title: "Capstone Design Project",
                    link: "https://fas.calendar.utoronto.ca/course/csc495h1"
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