const style = (props) =>
    `color: var(--chakra-colors-brand-${props.colorMode === 'light' ? '600' : '300'
    });font-weight: 500;`;

const info = (props) => [
    {
        input: 'learnAboutMe()',
        result: 'Loading data...',
    },
    {
        input: 'currentLocation',
        result: '"Lahore, Pakistan"',
    },
    {
        input: 'interests',
        result: '["Web Development", "Travelling", "Gaming"]',
    },
    {
        input: 'education',
        result: '"Bachelor of Science in Software Engineering - COMSATS"',
    },
    {
        input: 'Languages',
        result: '["Ruby", "Javascript", "Typescript"]',
    },
    {
        input: 'Frameworks',
        result: '["Ruby on Rails", "ReactJS", "Node", "ExpressJS", "NextJS"]',
    },
    {
        input: 'Databases',
        result: '["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "SQLITE"]',
    },
    {
        input: 'DevOps',
        result: '["EC2", "Docker", "Nginx", "Route 53", "RDS", "CloudFront", "Heroku", "DigitalOcean"]',
    },
    {
        input: 'contactMe',
        result: `[
          "<a style="${style(
            props
        )}" rel="noopener" href="https://github.com/hasan-devpreneur" target="_blank">Github</a>",
          "<a style="${style(
            props
        )}" rel="noopener" href="https://www.linkedin.com/in/hasan-devpreneur/" target="_blank">LinkedIn</a>"]`,
    },
];

export default info;
