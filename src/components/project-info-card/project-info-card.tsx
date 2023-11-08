import { ChevronRightCircle } from 'lucide-react';
import Link from 'next/link';

export default function ProjectInfoCard() {
  return (
    <section className='mx-6 mt-6 grid items-center lg:container sm:grid-cols-2 sm:gap-3 md:mt-0'>
      {/* <h1 className="text-center text-3xl my-8 uppercase tracking-wider">
        Projects
      </h1> */}
      {PROJECTS.sort(sortByOrder).map(
        ({ order, title, description, url, imagePath }) => (
          <Link key={order} href={url} target='_blank'>
            <div
              className={`my-2 h-64 rounded-2xl border transition-all md:h-[320px] ${imagePath} cursor-pointer bg-gradient-to-br from-orange-50 via-sky-50 to-fuchsia-50 bg-cover bg-center bg-no-repeat bg-origin-padding shadow-lg hover:shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.2)] dark:from-stone-700 dark:to-zinc-800 dark:hover:shadow-[inset_0_0_0_2000px_rgba(255,255,255,0.5)]`}
            >
              <div className='flex items-center justify-between rounded-2xl rounded-b-none p-4'>
                <span className='max-w-sm overflow-hidden text-ellipsis whitespace-nowrap'>
                  <h1 className='text-2xl font-semibold text-zinc-800 dark:text-zinc-200'>
                    {title}
                  </h1>
                  <h4 className='dark:font-semilight w-8 text-sm font-light text-zinc-500 dark:text-zinc-200'>
                    {description}
                  </h4>
                </span>

                <ChevronRightCircle
                  size={28}
                  className='transition-all hover:rotate-[-45deg]'
                />
              </div>
            </div>
          </Link>
        )
      )}
    </section>
  );
}

const sortByOrder = (a: Project, b: Project) => a.order - b.order;

interface Project {
  order: number;
  title: string;
  description: string;
  url: string;
  imagePath: string;
}
const PROJECTS: Project[] = [
  {
    order: 3,
    title: 'Talab App',
    description: 'Liquor Trivia App',
    url: 'https://play.google.com/store/apps/details?id=com.talabapp&hl=de&gl=US',
    imagePath: "bg-[url('/images/projects/talab.png')]",
  },
  {
    order: 4,
    title: 'Bluprint',
    description:
      'Streamlining workforce management and empowering the business to efficiently manage employee data, contracts, and compliance in one centralized platform ',
    url: 'https://ps.leadsquaredapps.com',
    imagePath: "bg-[url('/images/projects/bluprint.png')]",
  },
  {
    order: 1,
    title: 'Odd Beans Coffee',
    description: "Experiience the real taste of 'Good Coffee'",
    url: 'https://www.oddbeanscoffee.com/',
    imagePath: "bg-[url('/images/projects/oddbeanscoffee.png')]",
  },
  {
    order: 5,
    title: 'Quantilope GmbH',
    description: '',
    url: 'https://www.quantilope.com/',
    imagePath: "bg-[url('/images/projects/quantilope.webp')]",
  },
  {
    order: 6,
    title: 'Mieterengel GmbH',
    description: '',
    url: 'https://mieterengel.de/',
    imagePath: "bg-[url('/images/projects/mieterengel.jpg')]",
  },
  {
    order: 7,
    title: 'Leadsquared',
    description: '',
    url: 'https://leadsquared.com/',
    imagePath: "bg-[url('/images/projects/leadsquared.png')]",
  },
];
