import ProjectCard from '@/components/ProjectCard';
import { getContentData } from '@/lib/projects';

export default async function ProjectPage({params}) {
  const project = await getContentData(params.id, 'projects');
  console.log(project)
  return (
    <div>
      <div>{project.title}</div>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </div>
  );
}
