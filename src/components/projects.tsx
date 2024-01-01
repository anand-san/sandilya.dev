import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ALL_PROJECTS, sortProjectsByOrder } from '@/lib/constants';

export default function ProjectInfoContainer() {
  return (
    <section className='projects-info mt-10 w-full items-center'>
      <div className='mb-10 flex items-center justify-between'>
        <h6 className=' text-2xl font-bold tracking-wider'>My Work 👨‍💻</h6>
        <Link
          href='/work'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'p-0 font-semibold'
          )}
        >
          View All
          <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </div>
      <div className='space-y-4'>
        {ALL_PROJECTS.filter((project) => project.featured)
          .sort(sortProjectsByOrder)
          .map((project) => (
            <ProjectCard project={project} key={project.order} />
          ))}
      </div>
    </section>
  );
}
export interface Project {
  featured: boolean;
  duration: string;
  title: string;
  description: string;
  url?: string;
  imagePath?: string;
  caseStudyUrl?: string;
  order: number;
}

export const ProjectCard = ({
  project,
}: {
  project: Omit<Project, 'order'>;
}) => {
  const { title, description, url, imagePath, duration, caseStudyUrl } =
    project;

  return (
    <div className='flex min-h-[180px] justify-between rounded-[4px] bg-stone-100 p-4 pb-2 dark:bg-gray-800'>
      <div className='flex flex-col justify-between space-y-2 sm:max-w-[55%]'>
        {/* <p className='text-sm text-gray-400'>{duration}</p> */}
        <div>
          <span className='text-md font-bold'>{title}</span>
          <p className='pt-2 text-gray-700 dark:text-gray-400'>{description}</p>
        </div>
        <div className='space-x-4'>
          {url && (
            <Link
              href={url}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'p-0 font-semibold'
              )}
              target='_blank'
            >
              Try it out
              <ArrowUpRight className='ml-2 h-4 w-4' />
            </Link>
          )}
          {caseStudyUrl && (
            <Link
              href={caseStudyUrl || '#'}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'p-0 font-semibold'
              )}
            >
              Read case study
              <ArrowUpRight className='ml-2 h-4 w-4' />
            </Link>
          )}
        </div>
      </div>
      <Image
        alt='project-image'
        src={imagePath || '/images/projects/default-image.png'}
        width={160}
        height={160}
        className='hidden object-contain sm:block'
      />
    </div>
  );
};
