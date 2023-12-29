import { Project } from '@/components/projects';

export const SOCIAL_URLS = {
  TWITTER: 'https://twitter.com/anandsan_',
  LINKEDIN: 'https://www.linkedin.com/in/anandsandilya/',
  GITHUB: 'https://github.com/anand-san',
};

export const sortProjectsByOrder = (a: Project, b: Project) =>
  a.order - b.order;

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
