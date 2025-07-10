// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import excelLogo from './assets/tech_logo/excel.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import RLogo from './assets/tech_logo/R.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import CRRAOLogo from './assets/education_logo/crrao.png';
import narayanaLogo from './assets/education_logo/narayana.png';
import schlLogo from './assets/education_logo/triveni.png';

// Project Section Logo's
import placementLogo from './assets/work_logo/todo.png';
import studentLogo from './assets/work_logo/student.png';
import chartLogo from './assets/work_logo/weather.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'R', logo: RLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: ' Microsoft Excel', logo: excelLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: CRRAOLogo,
      school: "CR Rao Advanced Institute of Mathematics, Statistics and Computer Science (AIMSCS),Hyderabad",
      date: "2023-present",
      grade: "8.5 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science Data Science from CR Rao Advanced Institute of Mathematics, Statistics and Computer Science, Hyderabad. During my time at CRRAO AIMSCS, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Technology - B.Tech (Computer Science Data Science)",
    },
    {
      id: 1,
      img: narayanaLogo,
      school: "Narayana Junior College,Madinaguda",
      date: "2021-2023",
      grade: "91.8%",
      desc: "I completed my intermediate from Narayana Junior College, Madinaguda, under the state board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Intermediate(XII)-MPC",
    },
    {
      id: 2,
      img: schlLogo,
      school: "Triveni Talent School,Miyapur",
      date: "2020-2021",
      grade: "100%",
      desc: "I completed my class 10 education from Triveni Talent School, Miyapur, under the Telanagana State board.",
      degree: "State Board Of Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "TO-DO List",
      description:
        "A responsive placeA simple To-Do List web application built using HTML, CSS, and JavaScript. It allows users to add and manage their daily tasks interactively in a browser.When the Add Task button is clicked, the task is added to the list below.Clicking on a task once will toggle a “completed” style (e.g., strikethrough via CSS if implemented).Double-clicking on any task will remove it from the list entirely.ment portal for CBIT to streamline student and company interactions, featuring dashboards, placement reports, and recruiter showcases. Integrated modern UI elements with smooth navigation and social media links.",
      image: placementLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/3ved9969/TO_DO_LIST.git",
      webapp: "https://to-do-list-v160.onrender.com",
    },
    {
      id: 1,
      title: "Student Management System",
      description:
        "A full-stack Student Management System using the MERN stack to manage student records with intuitive navigation, CRUD operations, and responsive UI. Includes student listing, addition, and dashboard features for efficient record management.",
      image: studentLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/3ved9969/Student-Management-System.gitt",
      webapp: "https://student-management-system-1-rbn6.onrender.com",
    },
    {
      id: 2,
      title: "Weather Chart App",
      description:
        "A responsive weather dashboard built with React that lets users search cities and view current conditions along with a 5-day temperature forecast visualized through a dynamic line chart.",
      image: chartLogo,
      tags: ["React JS", "Node.js", "MongoDB",  "HTML", "CSS", "JavaScript"],
      github: "https://github.com/3ved9969/Weather_Chart_App.git",
      webapp: "https://weather-chart-app-dk18.onrender.com",
    },
    
    
  ];  