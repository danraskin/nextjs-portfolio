import { getContentData } from '@/lib/projects';
// import Image from 'next/image';

export default async function BlogPage({params}) {
  const blogPost = await getContentData( 'blog', params.id );
  console.log('blogPost: ', blogPost)
  console.log ('params', params)
  return (
    <div className='flex-container'>
      <div className='content' dangerouslySetInnerHTML={{ __html: blogPost.contentHtml }} />
    </div>
  );
}
