import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ALL_PROJECTS, sortProjectsByOrder } from '@/lib/constants';

export default function ProjectInfoContainer() {
  return (
    <section className='projects-info mt-6 w-full items-center'>
      <h6 className='my-8 text-2xl font-bold tracking-wider'>My Work</h6>

      <div className='space-y-4'>
        {ALL_PROJECTS.filter((project) => project.featured)
          .sort(sortProjectsByOrder)
          .map((project) => (
            <ProjectCard project={project} key={project.order} />
          ))}
      </div>
      <div className='py-6 lg:py-10'>
        <Link
          href='/work'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'p-0 font-semibold'
          )}
        >
          View all projects
          <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
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
    <div className='flex h-[180px] justify-between'>
      <div className='space-y-2 sm:max-w-[50%]'>
        <p className='text-sm text-gray-400'>{duration}</p>
        <h2>{title}</h2>
        <h3 className='tracking-wider text-gray-500 dark:text-gray-400'>
          {description}
        </h3>
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
        width={200}
        height={200}
        className='hidden rounded-full object-contain sm:block'
      />
    </div>
  );
};
