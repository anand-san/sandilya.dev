import { ProjectCard } from '@/components/projects';
import { ALL_PROJECTS, sortProjectsByOrder } from '@/lib/constants';

export const metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function Page() {
  return (
    <section className='pt-6 sm:pt-2'>
      <div className='flex flex-col'>
        <div className='flex-1 space-y-4'>
          <p className='text-lg text-muted-foreground sm:text-xl'>
            A summary of my work and contributions.
          </p>
        </div>
      </div>
      <hr className='m-auto my-10 w-24' />

      <div className='space-y-4'>
        {ALL_PROJECTS.sort(sortProjectsByOrder).map((project) => (
          <ProjectCard project={project} key={project.order} />
        ))}
      </div>
    </section>
  );
}
