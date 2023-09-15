import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css';
import { getSortedProjectsData } from '@/lib/projects';

export default async function BlogPosts() {
  const blogPosts = await getSortedProjectsData('blog');
  // console.log('in Projects component', projects);
  return (
    <div className='flex-container'>
      <h2 className={utilStyles.headingXl}>Blog Posts</h2>
      <div>
        {blogPosts.map(blog => (
          <div key={blog.index}>
            <ProjectCard project={blog} directory="blog"/>
          </div>
        ))}
      </div>
    </div>
  );
}