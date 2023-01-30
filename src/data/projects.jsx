import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';

const projects = [
    {
        id:1,
        name:"The Dev Hub",
        image: Project1,
        github:"https://github.com/the-dev-hub-project",
        live:"https://www.the-dev-hub.devnathan.com/",
        description: "Organization tool to facilitate job search. The app has full CRUD actions and equiped with Firebase authentication and styling was done using Tailwind."
    },
    {
        id: 2,
        name: "Dealio",
        image: Project2,
        github:"https://github.com/Dealio-Dev-Nathan",
        live:"https://online-store-pt8ruqtva-guillermoaviles.vercel.app/",
        description: "An online store where users can buy and sell items. The application was built using MERN stack technologies and it has full CRUD actions."
    },
    {
        id:3,
        name:"Game of Thrones",
        image: Project3,
        github:"https://github.com/nghiavo24/game-of-thrones",
        live:"https://game-of-thrones-nu.vercel.app/",
        description: "A mini-wikipedia about game show Game of Thrones. It is a deep dive into ReactJS and parsing data from 3rd-part API to present it effectively. "
    },
    {
        id:4,
        name:"Did you know that?",
        image: Project4,
        github:"https://github.com/nghiavo24/Did-you-know-that",
        live:"https://did-you-know-that.vercel.app/",
        description: "A trivia game about Marvel. HTML, CSS and vanilla JavaScript were used to build this fun game."
    },

]

export default projects