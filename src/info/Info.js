import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import docsIcon from "./google-sheets-icon-png-3.jpg"

export let colors = ["#02AAB0", "#00CDAC"];

export const info = {
    firstName: "Erica",
    lastName: "Reven",
    initials: "EJR", 
    position: "a Full Stack Developer",
    punchline: "I'm a life-saving, ship-steering, bug-solving savant",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        // {
        //     emoji: '☕',
        //     text: 'Fueled by coffee'
        // },
        {
            emoji: '🌎',
            text: 'Based in NY'
        },
        {
            emoji: "⚓",
            text: "Captain and Dockmaster at Centerport Yacht Club"
        },
        {
            emoji: "🚑",
            text: "Former EMT and Medical Assistant"
        },
        {
            emoji: "📧",
            text: "erica.reven@gmail.com"
        },
        {
            emoji: <img src={docsIcon} alt="Resume Icon" style={{maxWidth: '1.5rem'}}/>,
            text: 'Resume',
            to: 'https://docs.google.com/document/d/e/2PACX-1vRx8d3n9todKjzb9Zpo4jyYm6Q-Ebbusm-7phMg224cQteZ8egd0ENClI4SCEz_LVeMiJuO2eHHI7CH/pub',
            active: 'resume',
            rel: 'noopener noreferrer',
            target: '_blank'
        }
    ],
    // resume:{
    //         emoji: <img src={docsIcon} alt="Resume Icon" />,
    //         text: 'Resume',
    //         to: 'https://docs.google.com/document/d/e/2PACX-1vRx8d3n9todKjzb9Zpo4jyYm6Q-Ebbusm-7phMg224cQteZ8egd0ENClI4SCEz_LVeMiJuO2eHHI7CH/pub',
    //         active: 'resume',
    //         rel: 'noopener noreferrer',
    //         target: '_blank'
    //     },
    socials: [
        {
            link: "https://github.com/ericareven",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/erica-reven/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/airbear_96/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },

    ],
    bio: "Hello! I'm Erica. I'm a software engineer and marine captain. I studied Health Sciences at Stony Brook University and Software Engineering at General Assembly. I enjoy traveling and am open to living almost anywhere. I look forward to networking with you!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css', 'nodejs', 'mongoose', 'express', 'ejs'],
        exposedTo: ['bootstrap', 'python', 'nextjs', 'flask', 'postgresql', 'sass']
    }
    ,
    hobbies: [
        {
            label: 'hiking',
            emoji: '⛰️'
        },
        {
            label: 'rock climbing',
            emoji: '🧗‍♀️'
        },
        {
            label: 'baking',
            emoji: '👩‍🍳'
        },
        {
            label: 'sailing',
            emoji: '⛵'
        }
    ],
    projects: [ 
        {
            title: "Alien Abduction",
            source: "https://github.com/ericareven/Alien-Abduction-Hangman",
            image: mock1
        },
        {
            title: "Nomad Sitters",
            source: "https://github.com/ericareven/Nomad-Sitters",
            image: mock2
        },
        {
            title: "Tekforest",
            live: "https://tekforest-frontend.vercel.app/",
            source: "https://github.com/ericareven/tekforest-frontend",
            image: mock3
        },
    ]
}