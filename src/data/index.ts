import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const skillsItems = [
  { name: "HTML", path: "/skill/html.svg" },
  { name: "CSS", path: "/skill/css.svg" },
  { name: "JavaScript", path: "/skill/js.svg" },
  { name: "ReactJS", path: "/skill/reactjs.svg" },
  { name: "NextJs", path: "/skill/nextjs.svg" },
  { name: "TypeScript", path: "/skill/typescript.svg" },
  { name: "NodeJS", path: "/skill/nodejs.svg" },
  { name: "Express", path: "/skill/express.svg" },
  { name: "Mysql", path: "/skill/mysql.svg" },
  { name: "Prisma", path: "/skill/prisma.svg" },
  { name: "Styled-Components", path: "/skill/styledcomponents.svg" },
  { name: "Tailwindcss", path: "/skill/tailwindcss.svg" },
];

export const formationItems = [
  {
    name: "Computer Science and engineering",
    start: "2020",
    end: "Ongoing",
    placeUrl: "/image/academy01.png",
  },
  {
    name: "Full-Stack Developer",
    start: "2021",
    end: "2022",
    placeUrl: "/image/academy02.png",
  },
  {
    name: "Designer and Multimedia",
    start: "2021",
    end: "2021",
    placeUrl: "/image/academy03.png",
  },
];

export const networkItems = [
  { href: "https://github.com/EduardoPanzo", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/jo%C3%A3o-eduardo-panzo-19672b237",
    Icon: FaLinkedinIn,
  },
  { href: "https://www.instagram.com/eduardojpanzo/", Icon: FaInstagram },
  { href: "https://www.facebook.com/joao.eduardo.52012548", Icon: FaFacebookF },
];

export const projectItems = [
  {
    name: "Jogo da Velha",
    desc: "Um Jogo onde Úsuario irá jogar e ter um senário de Desafio de Jogo de Velha",
    url: "https://eduardopanzo.github.io/Jogo-Da-velha",
    repo: "https://github.com/EduardoPanzo/Jogo-Da-velha",
    cover: "/image/jgdvlh.png",
  },
  {
    name: "portfolio",
    desc: "descrição da Habilidade e das formação e experiência em programação",
    url: "https://eduardopanzo-portfolio.vercel.app/",
    repo: "https://github.com/EduardoPanzo/portfolio",
    cover: "/image/prtfl.png",
  },
  {
    name: "Simplest App",
    desc: "set of small applications to test knowledge and train my skill",
    url: "https://eduardopanzo.github.io/simplest-App/",
    repo: "https://github.com/EduardoPanzo/simplest-App",
    cover: "/image/spa.png",
  },
];
