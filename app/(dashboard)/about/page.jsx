import { getContentData } from '@/lib/projects';
// import Link from 'next/link';

export default async function About() {
  const content = await getContentData( 'about' )
  // console.log(content);
  return (
    <div className='flex-container'>
      <div className='content' dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </div>
  );
}