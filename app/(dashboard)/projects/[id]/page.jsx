import { getContentData } from '@/lib/projects';
import Image from 'next/image';

export default async function ProjectPage({params}) {
  const project = await getContentData( 'projects', params.id );
  console.log(project)
  return (
    <div className='flex-container'>
      <div>{project.title}</div>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </div>
  );
}
