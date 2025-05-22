import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Alishba Siddique',
  initials: 'AS',
  url: 'https://alishbasiddique.vercel.app',
  location: 'Lahore, Pakistan',
  locationLink: 'https://www.google.com/maps/place/lahore',
  description:
    'Full Stack Developer passionate about building innovative solutions and creating impactful technology.',
  summary:
    'I am a dedicated Full Stack Developer with expertise in MERN stack, Python, and various web technologies. My experience spans across web development, AI/ML projects, and game development, with a focus on delivering high-quality software solutions.',
  avatarUrl: '/me.png',
  skills: [
    'JavaScript',
    'Node.js',
    'React.js',
    'Python',
    'PHP',
    'HTML5',
    'CSS3',
    'C++',
    'Java',
    'MERN Stack',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'Git',
    'GitHub',
    'React',
    'Bootstrap',
    'Material UI',
    'Tailwind CSS',
    'GSAP',
    'Framer-motion',
    'Numpy',
    'Pandas',
    'Sklearn',
    'PyTorch',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'alishbasiddique38@gmail.com',
    tel: '+923219431478',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Alishba-Siddique',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alishba-siddique/',
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:alishbasiddique38@gmail.com',
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'Stack Studios',
      href: 'https://stackstudios.com',
      badges: [],
      location: 'Lahore, Pakistan',
      title: 'Full Stack Developer',
      logoUrl: '/stackstudios.png',
      start: 'August 2024',
      end: 'Present',
      description:
        'Led the development of dynamic web applications using MERN stack, resulting in 40% improved user engagement and 25% faster page load times. Implemented RESTful APIs and microservices architecture, reducing server response time by 35%. Mentored junior developers and established coding standards, improving team productivity by 30%. Integrated CI/CD pipelines using GitHub Actions, reducing deployment time by 50%.',
    },
    {
      company: 'Fiverr',
      badges: [],
      href: 'https://fiverr.com',
      location: 'Lahore, Pakistan',
      title: 'Freelance Web Developer',
      logoUrl: '/fiverr.png',
      start: 'November 2023',
      end: 'Present',
      description:
        'Delivered 15+ successful web development projects with 100% client satisfaction rate. Implemented SEO best practices resulting in 60% increase in organic traffic for client websites. Developed custom WordPress themes and plugins, reducing development time by 40%. Integrated payment gateways and third-party APIs, increasing client revenue by 35%. Built responsive, mobile-first websites achieving 95+ Google PageSpeed scores.',
    },
    {
      company: 'Vaival Solutions',
      href: 'https://vaivalsolutions.com',
      badges: [],
      location: 'Lahore, Pakistan',
      title: 'Associate Web Developer',
      logoUrl: '/vaival.png',
      start: 'January 2024',
      end: 'July 2024',
      description:
        'Developed and maintained 5+ client websites using React and Node.js, achieving 99.9% uptime. Implemented automated testing using Jest and React Testing Library, reducing bug reports by 45%. Optimized database queries and implemented caching strategies, improving application performance by 40%. Collaborated with UX designers to implement pixel-perfect designs, resulting in 50% increase in user engagement.',
    },
    {
      company: 'HCC Technology Foundation',
      href: 'https://hcctf.com',
      badges: [],
      location: 'Lahore, Pakistan',
      title: 'Web Developer Trainee',
      logoUrl: '/htf.png',
      start: 'September 2022',
      end: 'December 2022',
      description:
        'Completed intensive training in PHP and Laravel, developing 3 full-stack applications. Implemented MVC architecture and RESTful APIs, improving code maintainability by 60%. Created responsive web interfaces using Bootstrap and JavaScript, achieving 90+ accessibility scores. Participated in daily code reviews and pair programming sessions, improving code quality by 40%.',
    },
    {
      company: 'Mindstorm Studios',
      href: 'https://mindstormstudios.com',
      badges: [],
      location: 'Lahore, Pakistan',
      title: 'Game Developer Fellow',
      logoUrl: '/mindstorm.png',
      start: 'July 2021',
      end: 'October 2021',
      description:
        'Developed 2 hyper-casual games using Unity and C#, achieving 10,000+ downloads. Implemented game mechanics and UI systems, resulting in 4.5/5 average user rating. Optimized game performance, reducing memory usage by 30% and improving frame rate by 40%. Collaborated in a 4-person team to deliver projects ahead of schedule, achieving top 296 ranking among 1600 participants.',
    },
  ],
  education: [
    {
      school:
        'University of the Punjab, Faculty of Computing and Information Technology',
      href: 'https://pucit.edu.pk',
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: '/pucit.png',
      start: '2019',
      end: '2023',
    },
    {
      school: 'Coursera',
      href: 'https://coursera.org',
      degree: 'Digital Transformation with Google Cloud',
      logoUrl: '/coursera.png',
      start: '2023',
      end: '2023',
    },
    {
      school: 'Coursera',
      href: 'https://coursera.org',
      degree: 'Python for Data Science and AI By IBM',
      logoUrl: '/coursera.png',
      start: '2023',
      end: '2023',
    },
    {
      school: 'Coursera',
      href: 'https://coursera.org',
      degree: 'Introduction to Generative AI Google Cloud',
      logoUrl: '/coursera.png',
      start: '2023',
      end: '2023',
    },
  ],
  projects: [
    {
      title: 'Diabetic Retinopathy Detection',
      href: 'https://huggingface.co/spaces/Alishba404/detection-of-diabetic-retinopathyhttps://huggingface.co/spaces/Alishba404/detection-of-diabetic-retinopathy',
      dates: '2023',
      active: true,
      description:
        'Developed a Deep Learning-based Diabetic Retinopathy Detection system using ResNet-50, PyTorch, and deployed it as an interactive Gradio Web App.',
      technologies: [
        'Python',
        'PyTorch',
        'ResNet-50',
        'Gradio',
        'Deep Learning',
      ],
      image: '',
      video: '/videos/diabetic-retinopathy.mp4',
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Alishba-Siddique/diabetic-retinopathy-ai',
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: 'MERN Stack ECG',
      href: 'https://eastcoastgrowersct.com/',
      dates: '2024',
      active: true,
      description:
        'Built and Deployed Full Stack Company Website for East Coast Developers for Clients in America using GSAP for animations, React, Tailwind for Front-end and PHP for backend Email service.',
      technologies: ['React', 'Tailwind CSS', 'GSAP', 'PHP', 'MERN Stack'],
      image: '',
      video: '/videos/ecg.mp4',
      links: [
        {
          type: 'Website',
          href: 'https://eastcoastgrowersct.com/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: 'PARFUM - Ecommerce App',
      href: 'https://github.com/Alishba-Siddique/parfum',
      dates: '2023',
      active: true,
      description:
        'Parfum is an ecommerce application built with the power of React, Strapi, and Stripe payment checkout.',
      technologies: ['React', 'Strapi', 'Stripe', 'JavaScript', 'CSS'],
      image: '',
      video: '/videos/parfum.mp4',
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Alishba-Siddique/parfum',
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: 'Movie Recommendation System',
      href: 'https://movie-recommender-system-alishba.streamlit.app/',
      dates: '2023',
      active: true,
      description:
        'A content-based recommendation engine built with Python, Streamlit, Scikit-learn, and TMDB dataset & API integration.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'TMDB API'],
      image: '',
      video: '/videos/movie-recommender.mp4',
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Alishba-Siddique/movie-recommender',
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    
  ],
  hackathons: [
    {
      title: 'GDSC-IBA Datathon101',
      date: '2023',
      description: 'Participated in Google Developer Student Club Datathon',
    },
    {
      title: 'Microsoft Soft OpenCV MLSA',
      date: '2023',
      description: 'Microsoft Learn Student Ambassador Program',
    },
  ],
} as const;
