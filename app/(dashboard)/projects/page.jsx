import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css'

export default function Projects() {
  return (
    <div className='projects'>
      <h2 className={utilStyles.headingXl}>Projects</h2>
      <ProjectCard />
    </div>
  );
}