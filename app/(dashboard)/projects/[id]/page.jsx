import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css'

export default function Projects() {
  return (
    <div className='flex-container'>
      <h2 className={utilStyles.headingXl}>Projects</h2>
      <ProjectCard />
    </div>
  );
}