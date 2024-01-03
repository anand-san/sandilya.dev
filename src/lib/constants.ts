import { Project } from '@/components/projects';

export const SOCIAL_URLS = {
  TWITTER: 'https://twitter.com/anandsan_',
  LINKEDIN: 'https://www.linkedin.com/in/anandsandilya/',
  GITHUB: 'https://github.com/anand-san',
};

export const sortProjectsByOrder = (a: Project, b: Project) =>
  a.order - b.order;

export interface Testimonial {
  name: string;
  designation?: string;
  message: string;
  imageUrl?: string;
  classNames: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    order: 1,
    title: 'Talab App',
    description:
      'Talab is all about your craving for this favorite liquor. 😁 It is a one-tap solution to integrate your own Theka into your mobile phone.',
    url: 'https://play.google.com/store/apps/details?id=com.talabapp&hl=de&gl=US',
    caseStudyUrl: '/blog/talab-app',
    imagePath: '/images/projects/talab.png',
    featured: true,
    duration: '2021',
  },
  {
    order: 2,
    title: 'Bluprint',
    description:
      'Empowering businesses to efficiently manage employee data, contracts, and compliance in one centralized platform ',
    url: 'https://ps.leadsquaredapps.com',
    imagePath: '/images/projects/bluprint/main.png',
    featured: true,
    duration: '2021',
  },
  {
    order: 3,
    title: 'Quantilope GmbH',
    description:
      'An automated, end-to-end platform mapping the entire market research process from the research question to the questionnaire design, professional panel management, in-depth analysis, and data visualization.',
    url: 'https://www.quantilope.com/',
    imagePath: '/images/projects/quantilope/main.png',
    featured: false,
    duration: '2021',
  },
  {
    order: 4,
    title: 'Mieterengel GmbH',
    description:
      'MieterEngel helps tenants find affordable solutions to rental problems - legally secure, fast and digital.',
    url: 'https://mieterengel.de/',
    imagePath: '/images/projects/mieterengel/main.png',
    caseStudyUrl: '/blog/mieterengel',
    featured: false,
    duration: '2021',
  },

  {
    order: 5,
    title: 'Leadsquared',
    description:
      'Marketing automation and customer relationship management (CRM) solution for businesses, serving clients in industries such as finance, e-commerce, education, health etc',
    url: 'https://leadsquared.com/',
    imagePath: '/images/projects/leadsquared/main.png',
    featured: false,
    duration: '2021',
  },
  {
    order: 8,
    title: 'Covid19 India - Case Tracker Android App',
    description:
      'I built this app to track the covid19 cases in India. Users can see the total number of cases, people recovered, and losses based on the area they are living as well as overall country or the world. I sold this app later to Elewat Solutions',
    imagePath: '/images/projects/elewat/main.png',
    featured: false,
    duration: '2021',
  },

  {
    order: 9,
    title: 'Epic Games Store - Unofficial Android App',
    description:
      'As Epic Games does not have an official app for their store on Android, I built this app to help users browse the store and get notified about the offers and free games',
    imagePath: '/images/projects/epic-games-store-android/main.png',
    featured: false,
    duration: '2021',
  },
  {
    order: 6,
    title: 'Odd Beans Coffee',
    description:
      'I helped odd beans coffee setup their store. They are a coffee roastery based in bhubaneswar with a mission to let everyone experience the real taste of Good Coffee.',
    url: 'https://www.oddbeanscoffee.com/',
    imagePath: '/images/projects/oddbeanscoffee/main.jpg',
    featured: false,
    duration: '2021',
  },
  {
    order: 7,
    title: 'Sure Clickz',
    description:
      'E-Commerce store of Xerobit Ventures India that provides a comprehensive range of IT electronics and digital products. I worked with them in designing and developing the online store',
    url: 'https://sureclickz.com/',
    imagePath: '/images/projects/xerobit/main.png',
    featured: false,
    duration: '2021',
  },
];

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Biswajit Das',
    designation: 'Managing Director, Xerobit Ventures',
    message:
      'Exceeded all my expectations, From initial consultation to the final product, every step of the process was handled with professionalism and expertise.',
    imageUrl: '/images/testimonials/biswajit.png',
    classNames: 'testimonial-1',
  },
  {
    name: 'Rizwan Ali',
    designation: 'Engineering Manager',
    message:
      'Anand did an excellent job in managing and improving our systems consistently, He bought energy and dependability that has made him crucial to the team.',
    imageUrl: '/images/testimonials/rizwan.png',
    classNames: 'testimonial-2',
  },
  {
    name: 'Saurav Mishra',
    designation: 'Engineering Manager',
    message:
      'Anand is passionate about writing quality code and solving problems through the development of creative and innovative software.',
    imageUrl: '/images/testimonials/saurav.png',
    classNames: 'testimonial-3 !hidden sm:!block',
  },
  {
    name: 'Harshit',
    designation: 'Technical Lead',
    message:
      'Anand is an exceptional software engineer, very easy going and enjoyable to be around.',
    imageUrl: '/images/testimonials/harshit.png',
    classNames: 'testimonial-4 !hidden sm:!block',
  },
];
