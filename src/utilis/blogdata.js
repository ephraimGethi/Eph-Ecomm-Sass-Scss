import blogImg1 from '../../src/assets/images/blog/01.jpg';
import blogImg2 from '../../src/assets/images/blog/02.jpg';
import blogImg3 from '../../src/assets/images/blog/03.jpg';
import blogImg4 from '../../src/assets/images/blog/04.jpg';
import blogImg5 from '../../src/assets/images/blog/05.jpg';
import blogImg6 from '../../src/assets/images/blog/06.jpg';
import blogImg7 from '../../src/assets/images/blog/07.jpg';
import blogImg8 from '../../src/assets/images/blog/08.jpg';
import blogImg9 from '../../src/assets/images/blog/09.jpg';
import blogImg10 from '../../src/assets/images/blog/10.jpg';
import blogImg11 from '../../src/assets/images/blog/11.jpg';
import blogImg12 from '../../src/assets/images/blog/12.jpg';

const blogList = [
    {
        id: 1,
        imgUrl: blogImg1,
        imgAlt: 'Blog Thumb',
        title: 'Advancements in Software Engineering: A Deep Dive',
        desc: 'Explore the latest trends and technologies shaping the future of software development.',
        commentCount: '5',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Jan 10, 2024' },
        ],
    },
    {
        id: 2,
        imgUrl: blogImg2,
        imgAlt: 'Blog Thumb',
        title: 'The Role of ICT in Modern Healthcare Systems',
        desc: 'An analysis of how information and communication technology is revolutionizing healthcare.',
        commentCount: '8',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Mar 15, 2024' },
        ],
    },
    {
        id: 3,
        imgUrl: blogImg3,
        imgAlt: 'Blog Thumb',
        title: 'Cybersecurity Trends: Protecting Data in the Digital Age',
        desc: 'Insights into the latest cybersecurity threats and how to safeguard against them.',
        commentCount: '12',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'May 5, 2024' },
        ],
    },
    {
        id: 4,
        imgUrl: blogImg4,
        imgAlt: 'Blog Thumb',
        title: 'Building Scalable Web Applications with React and Django',
        desc: 'Learn how to integrate React frontend with Django backend for seamless user experiences.',
        commentCount: '6',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Jul 20, 2024' },
        ],
    },
    {
        id: 5,
        imgUrl: blogImg5,
        imgAlt: 'Blog Thumb',
        title: 'Database Optimization Strategies for High-Performance Systems',
        desc: 'Explore indexing, caching, and query optimization techniques for PostgreSQL.',
        commentCount: '4',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Sep 10, 2024' },
        ],
    },
    {
        id: 6,
        imgUrl: blogImg6,
        imgAlt: 'Blog Thumb',
        title: 'Mastering Asynchronous Task Processing with Celery in Django',
        desc: 'Understand background task execution using Celery and Redis for scalability.',
        commentCount: '10',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Nov 5, 2024' },
        ],
    },
    {
        id: 7,
        imgUrl: blogImg7,
        imgAlt: 'Blog Thumb',
        title: 'API Security Best Practices in Modern Web Applications',
        desc: 'Learn how to secure your REST and GraphQL APIs against common vulnerabilities.',
        commentCount: '7',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Dec 20, 2024' },
        ],
    },
    {
        id: 8,
        imgUrl: blogImg8,
        imgAlt: 'Blog Thumb',
        title: 'How AI and Machine Learning Are Transforming FinTech',
        desc: 'Explore AI-powered fraud detection, risk assessment, and personalized banking solutions.',
        commentCount: '9',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Jan 25, 2025' },
        ],
    },
    {
        id: 9,
        imgUrl: blogImg9,
        imgAlt: 'Blog Thumb',
        title: 'Developing Scalable Microservices with Django and FastAPI',
        desc: 'Learn how to build and deploy high-performance microservices in Python.',
        commentCount: '6',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Feb 10, 2025' },
        ],
    },
    {
        id: 10,
        imgUrl: blogImg10,
        imgAlt: 'Blog Thumb',
        title: 'The Future of Cloud Computing in Enterprise IT',
        desc: 'Explore multi-cloud strategies and Kubernetes for enterprise scalability.',
        commentCount: '11',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Feb 25, 2025' },
        ],
    },
    {
        id: 11,
        imgUrl: blogImg11,
        imgAlt: 'Blog Thumb',
        title: 'Building a Real-Time Chat App with WebSockets and Django Channels',
        desc: 'Step-by-step guide on integrating WebSockets in Django for live chat functionality.',
        commentCount: '14',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Mar 5, 2025' },
        ],
    },
    {
        id: 12,
        imgUrl: blogImg12,
        imgAlt: 'Blog Thumb',
        title: 'Using GraphQL with Django and React for Efficient Data Fetching',
        desc: 'Learn how to build powerful GraphQL APIs and integrate them into React applications.',
        commentCount: '13',
        btnText: 'Read More',
        metaList: [
            { iconName: 'icofont-ui-user', text: 'Ephraim Gethi' },
            { iconName: 'icofont-calendar', text: 'Mar 11, 2025' },
        ],
    },
];

export default blogList;
