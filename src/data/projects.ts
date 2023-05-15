import {
    cards,
    social,
    todolist,
} from "../utils/icons";

type MyProjectsDataType = {
    title: string
    backgroundImage: string
    link: string
    description: string
};

export const MyProjectsData: Array<MyProjectsDataType> = [
    {
        title: 'Social Network',
        backgroundImage: cards,
        link: '',
        description: 'Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
    },
    {
        title: 'ToDo List',
        backgroundImage: social,
        link: '',
        description: 'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
    },
    {
        title: 'Counter',
        backgroundImage: todolist,
        link: '',
        description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.'
    },
    {
        title: 'Social Network',
        backgroundImage: cards,
        link: '',
        description: 'Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
    },
    {
        title: 'ToDo List',
        backgroundImage: social,
        link: '',
        description: 'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
    },
    {
        title: 'Counter',
        backgroundImage: todolist,
        link: '',
        description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.'
    },
]