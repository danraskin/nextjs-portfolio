import { getContentData } from '@/lib/projects';

export default async function About() {
  const content = await getContentData( 'about' )
  return (
    <div>
      <div>About</div>
      <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </div>
  );
}