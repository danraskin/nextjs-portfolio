import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css';
import { getSortedProjectsData } from '@/lib/projects';

export default async function Projects() {
  const projects = await getSortedProjectsData('projects');
  // console.log('in Projects component', projects);
  return (
    <div className='flex-container'>
      <h2 className={utilStyles.headingXl}>Projects</h2>
      <div>
        {projects.map(project => (
          <div key={project.index}>
            <ProjectCard project={project} directory="projects"/>
          </div>
        ))}

      </div>
    </div>
  );
}