import {
    cards,
    social,
    todolist,
    counter
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
        link: 'https://github.com/yneskladovae/Social-network',
        description: 'Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
    },
    {
        title: 'ToDo List',
        backgroundImage: todolist,
        link: 'https://github.com/yneskladovae/Todolist-Redux',
        description: 'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
    },
    {
        title: 'Cards',
        backgroundImage: social,
        link: 'https://github.com/yneskladovae/rtk-cards',
        description: 'SPA for learning. Allows creating and editing your own card packs and cards. Using simple smart random for learning.'
    },
    {
        title: 'Counter',
        backgroundImage: counter,
        link: 'https://github.com/yneskladovae/Advanced-counter',
        description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.'
    },
]