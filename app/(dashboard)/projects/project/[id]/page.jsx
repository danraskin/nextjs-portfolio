import ProjectCard from '@/components/ProjectCard';
import { getAllProjectsIds, getProjectsData } from '@/lib/projects';

export async function generateStaticParams() {
  const projects = await getProjectsData(params.id);
  console.log(projects);
};

export default function ProjectPage({params}) {
  return (
    <div>
      <ProjectCard />
      <div>in project</div>
    </div>
  );
}
