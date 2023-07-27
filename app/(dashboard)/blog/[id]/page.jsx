import { getContentData } from '@/lib/projects';
// import Image from 'next/image';

export default async function BlogPage({params}) {
  const project = await getContentData( 'projects', params.id );
  // console.log(project)
  return (
    <div className='flex-container'>
      <div className='content' dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </div>
  );
}
