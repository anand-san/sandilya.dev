import { getBlogPosts } from '@/lib/blog-mdx-utils';
import { ProjectCard } from '@/components/projects';
import { ALL_PROJECTS, sortProjectsByOrder } from '@/lib/constants';

export const metadata = {
  title: 'Blog',
  description:
    'Read my case studies, thoughts on software development, design, and more.',
};

export default function Page() {
  let allBlogs = getBlogPosts();

  allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className='container py-6 lg:py-10'>
      <div className='flex flex-col'>
        <div className='flex-1 space-y-4'>
          <p className='text-lg text-muted-foreground sm:text-xl'>
            Things that I have worked on
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
