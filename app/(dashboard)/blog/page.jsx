import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css';
import { getSortedProjectsData } from '@/lib/projects';

export default async function BlogPosts() {
  const projects = await getSortedProjectsData();
  // console.log('in Projects component', projects);
  return (
    <div className='flex-container'>
      <h2 className={utilStyles.headingXl}>Blog Posts</h2>
      <div>
        {/* {projects.map(project => (
          <div key={project.index}>
            <ProjectCard project={project}/>
          </div>
        ))} */}
      nothing to see here yet...
      </div>
    </div>
  );
}