import anisuki from '../../../imgs/anisuki.jpg'
import huddle from '../../../imgs/huddle.jpg'
import react from '../../../imgs/react-web.jpg'
import rps from '../../../imgs/rps.jpg'

const data = [
    {
        title: "Anisuki - Anime Resource Website",
        url: "https://acorbillo.github.io/anisuki/",
        img: <img src={anisuki} className='project-img'/>,
        description: `This website is my first-ever project as a beginner web developer, created with a passion for anime. Anisuki provides a collection of useful links, including news, articles, websites, and applications, that anime enthusiasts can explore to enhance their anime-watching experience. The website is built using HTML and CSS and features a responsive design for optimal viewing on various devices.`
    },
    {
        title: "Huddle Landing Page",
        url: "https://acorbillo.github.io/landing-page-frontend-mentor/",
        img: <img src={huddle} className='project-img'/>,
        description: `This project is my solution for the "Huddle landing page with alternating feature blocks" challenge on Frontend Mentor. The challenge involves building a landing page and aiming to replicate the provided design as closely as possible. I have implemented the solution using HTML and CSS, and the page is designed to be responsive, adapting to different screen sizes.`
    },
    {
        title: "Rock Paper Scissors Game",
        url: "https://acorbillo.github.io/rock-paper-scissors-game/",
        img: <img src={rps} className='project-img'/>,
        description: `This project is a simple implementation of the classic game "Rock Paper Scissors" using Vanilla JavaScript, HTML, and CSS. In this version, you can play against the computer, and the game ends after each round with an option to play again.`
    },
    {
        title: "ReactJS Documentation",
        url: "https://aco-react-simple-website.netlify.app/",
        img: <img src={react} className='project-img'/>,
        description: `This project marks my initial venture into developing a website using ReactJS. It serves as a simplified emulation of the React documentation, featuring three distinct pages: Docs, Blog, and Community. Notably, the website boasts responsiveness across diverse devices, ensuring a seamless user experience. Its primary purpose is to facilitate my learning of ReactJS while presenting fundamental information from the official React documentation in a user-friendly manner.`
    },
]

export default data