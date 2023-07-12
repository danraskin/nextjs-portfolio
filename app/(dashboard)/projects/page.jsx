import Link from "next/link";

import ProjectCard from '@/components/ProjectCard';
import utilStyles from '@/styles/utils.module.css';
import { getSortedProjectsData } from '@/lib/projects';

export default function Projects() {
  const projects = getSortedProjectsData();
  return (
    <div className='flex-container'>
      <h2 className={utilStyles.headingXl}>Projects</h2>
      <div>
        {projects.map(project => (
          <div key={project.index}>
            <Link href={`/projects/${project.id}`}>
              <ProjectCard project={project}/>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}