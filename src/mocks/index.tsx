import LogoVertem from '../assets/images/vertem.jpg'
import LogoDuoSystem from '../assets/images/logo-duosystem.jpeg'
import LogoTesis from '../assets/images/logo-tesis.jpeg'
import LogoCompany from '../assets/images/logo-company.jpg'
//Projects
import ImageNetflix from '../assets/images/netflix-image.png'
import ImageMultistep from '../assets/images/multistep-image.png'
import ImageEcommerce from '../assets/images/ecommerce-image.png'
import ImageGithub from '../assets/images/github-image.png'
import ImageWhitecollar from '../assets/images/whitecollar-image.png'
import ImageAgency from '../assets/images/agency-image.png'
import ImageCalc from '../assets/images/calculadora-image.png'
//Education
import ImageCourseVideo from '../assets/images/curso_em_video-image.jpeg'
import ImageUdemy from '../assets/images/udemy-image.png'
import ImageUnip from '../assets/images/unip-image.jpg'

export const Urls = [
    {github: "https://github.com/EuKaique"},
    {instagram: "https://www.instagram.com/kaique_o_s/"},
    {facebook: "https://www.facebook.com/kaique.oliveirasantos.547"},
    {linkedin: "https://www.linkedin.com/in/kaique-oliveira-santos-0806a6a3/"},
]

export const Experiences = [
    {
        period: "Abr 2024 - Atualmente", 
        logo: LogoVertem, 
        occupation: "Desenvolvedor Pleno", 
        company: "Vertem", 
        description: `Trabalho realizando melhorias e correções no sistema, 
                      conforme necessidade do cliente. Sou o head front-end da squad, trabalho com React.JS,
                      Typescript, Styled components, Zustand, REST API's, Module Federation, Webpack, e outras tecnologias.
                      Utilizamos o Git como workflow e Azure DevOps`
    },
    {
        period: "Jul 2022 - Fev 2024", 
        logo: LogoDuoSystem, 
        occupation: "Desenvolvedor Júnior", 
        company: "Duo System", 
        description: `Trabalhei realizando melhorias e correções no sistema, 
                      conforme necessidade do cliente. Ajudei na realização uma transformação de digital, 
                      utilizei o React.JS com TypeScript, Styled components, Zustand, GraphQL
                      em uma estrutura Micro front-end.
                      Utilizamos o Git como workflow e Azure DevOps`
    },
    {
        period: "Ago 2021 - Mar 2022", 
        logo: LogoTesis, 
        occupation: "Desenvolvedor Júnior", 
        company: "Tesis", 
        description: `Trabalhei realizando correções e melhorias no sistema, 
                      conforme necessidade do cliente. O sistema está estruturado em PHP com banco de dados MySQL, 
                      eventualmente realizava a manutenção de códigos CSS e JAVASCRIPT(JQUERY). 
                      Trabalhei também com a extração e exportação de dados com consultas(QUERY's) no banco`
    },
    {
        period: "Abr 2018 - Jun 2018", 
        logo: LogoCompany, 
        occupation: "Analista de sistemas Júnior", 
        company: "SSI", 
        description: `Realizava a análise no banco de dados, 
                      fazendo algumas alterações em packages, procedures, sequences e functions,
                      entre outras rotinas de analista. O projeto durou em torno de 2 meses e foi um sucesso,
                      uma experiência que levarei para os próximos trabalhos. 
                      Nessa experiência trabalhei com Oracle PL/SQL, Java, Git e um pouco da metodologia SCRUM.`
    },
    {
        period: "Jul 2014 - Dez 2014", 
        logo: LogoCompany, 
        occupation: "Auxiliar Administrativo", 
        company: "CIM", 
        description: `Realizava, rotinas operacionais e administrativas. 
                      Criação de relatórios, planilhas excel, 
                      conferência de contratos da empresa e lançamento no sistema da empresa.`
    },
]

export const Projects = [
    {
        id: 1,
        image: ImageNetflix,
        title: "Netflix clone",
        description: "Desenvolvimento da interface Netflix, usando React.js e Typescript",
        link: "https://netflix-clone-yd6r.vercel.app/"
    },
    {
        id: 2,
        image: ImageMultistep,
        title: "Formulário Multi step",
        description: "Criação de um formulário, usando React.js e Typescript",
        link: "https://multiform-pi.vercel.app/"
    },
    {
        id: 3,
        image: ImageEcommerce,
        title: "Mercado rápido - Ecommerce",
        description: "Criação de um template, usando Html, Css e Javascript",
        link: "https://eukaique.github.io/Ecommerce/"
    },
    {
        id: 4,
        image: ImageGithub,
        title: "Localiza Github",
        description: "Desenvolvimento de um sistema que localiza githubs, usando React.js",
        link: "https://localizador-github-github-finder-qxci5srbf-eukaique.vercel.app/"
    },
    {
        id: 5,
        image: ImageWhitecollar,
        title: "Whitecollar",
        description: "Desenvolvimento de um website, usando Next.js e Typescript",
        link: "https://consulting-webflow.vercel.app/"
    },
    {
        id: 6,
        image: ImageAgency,
        title: "Agência de serviços",
        description: "Criação de uma landing page, usando Html, Css e Javascript",
        link: "https://eukaique.github.io/Agencia-servicos/"
    },
    {
        id: 7,
        image: ImageCalc,
        title: "Calculadora",
        description: "Criação de uma calculadora, usando Html, Css e Javascript",
        link: "https://eukaique.github.io/Calculadora-Cientifica/"
    }
]

export const Educations = [
    {
        id: 1,
        image: ImageUnip,
        title: "Universidade paulista",
        course: "Ciência da computação",
        date: "Dez - 2017"
    },
    {
        id: 2,
        image: ImageCourseVideo,
        title: "Curso em vídeo",
        course: "Html5",
        date: "Dez - 2019"
    },
    {
        id: 3,
        image: ImageCourseVideo,
        title: "Curso em vídeo",
        course: "MySQL",
        date: "Fev - 2020"
    },
    {
        id: 4,
        image: ImageUdemy,
        title: "Udemy",
        course: "PHP 7 completo",
        date: "Abr - 2022"
    },
    {
        id: 5,
        image: ImageUdemy,
        title: "Udemy",
        course: "Laravel e Vue.js",
        date: "Jul - 2022"
    },
    {
        id: 6,
        image: ImageUdemy,
        title: "Udemy",
        course: "React.js e Next.js",
        date: "Mai - 2023"
    }
]