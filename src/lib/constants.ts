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
    order: 4,
    title: 'Bluprint',
    description:
      'Empowering businesses to efficiently manage employee data, contracts, and compliance in one centralized platform ',
    url: 'https://ps.leadsquaredapps.com',
    imagePath: '/images/projects/bluprint/main.avif',
    featured: true,
    duration: '2021',
  },
  {
    order: 5,
    title: 'Quantilope GmbH',
    description: '',
    url: 'https://www.quantilope.com/',
    imagePath: '/images/projects/quantilope/main.svg',
    featured: false,
    duration: '2021',
  },
  {
    order: 6,
    title: 'Mieterengel GmbH',
    description: '',
    url: 'https://mieterengel.de/',
    imagePath: '/images/projects/mieterengel/main.jpeg',
    featured: false,
    duration: '2021',
  },

  {
    order: 6,
    title: 'Leadsquared',
    description: '',
    url: 'https://leadsquared.com/',
    imagePath: '/images/projects/leadsquared/main.png',
    featured: false,
    duration: '2021',
  },
];

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rizwan Ali',
    designation: 'Engineering Manager',
    message:
      'Anand has done an excellent job in managing and improving our systems consistently',
    imageUrl: '/images/blog/transforming-cryptosurge/1.png',
    classNames: 'testimonial-1 !hidden sm:!block',
  },
  {
    name: 'Saurav Mishra',
    designation: 'Engineering Manager',
    message:
      'Anand skills and knowledge are unparalleled. A highly reliable and capable professional.',
    imageUrl: '/images/blog/transforming-cryptosurge/1.png',
    classNames: 'testimonial-2',
  },
  {
    name: 'Harshit',
    designation: 'Technical Lead',
    message:
      'Anand is an exceptional software engineer, very easy going and enjoyable to be around.',
    imageUrl: '/images/blog/transforming-cryptosurge/1.png',
    classNames: 'testimonial-3',
  },
  {
    name: 'Biswajit Das',
    designation: 'Technical Lead',
    message: 'Anand is an exceptional software engineer',
    imageUrl: '/images/blog/transforming-cryptosurge/1.png',
    classNames: 'testimonial-4 !hidden sm:!block',
  },
];
