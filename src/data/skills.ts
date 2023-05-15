import {
    reactIcon,
    bashIcon,
    axiosIcon,
    cssIcon,
    htmlIcon,
    gitIcon,
    githubIcon,
    jsIcon,
    materialUIIcon,
    reduxIcon,
    sassIcon,
    tsIcon,
} from "../utils/icons";

type MySkillsDataType = {
    title: string
    path: string
    alt: string
};

export const MySkillsData: Array<MySkillsDataType> = [
    {
        title: 'React',
        path: reactIcon,
        alt: 'React'
    },
    {
        title: 'Bash',
        path: bashIcon,
        alt: 'Bash'
    },
    {
        title: 'Axios',
        path: axiosIcon,
        alt: 'Axios'
    },
    {
        title: 'CSS3',
        path: cssIcon,
        alt: 'CSS3'
    },
    {
        title: 'HTML5',
        path: htmlIcon,
        alt: 'HTML5'
    },
    {
        title: 'Git',
        path: gitIcon,
        alt: 'Git'
    }, {
        title: 'GitHub',
        path: githubIcon,
        alt: 'GitHub'
    },
    {
        title: 'JavaScript',
        path: jsIcon,
        alt: 'JavaScript'
    }, {
        title: 'Material UI',
        path: materialUIIcon,
        alt: 'Material UI'
    },
    {
        title: 'Redux',
        path: reduxIcon,
        alt: 'Redux'
    },
    {
        title: 'SASS',
        path: sassIcon,
        alt: 'SASS'
    },
    {
        title: 'TypeScript',
        path: tsIcon,
        alt: 'TypeScript'
    },
]