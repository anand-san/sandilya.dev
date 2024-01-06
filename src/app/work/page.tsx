import { ProjectCard } from '@/components/projects';
import { ALL_PROJECTS, sortProjectsByOrder } from '@/lib/constants';

export const metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function Page() {
  return (
    <div className='space-y-4'>
      {ALL_PROJECTS.sort(sortProjectsByOrder).map((project) => (
        <ProjectCard project={project} key={project.order} />
      ))}
    </div>
  );
}
