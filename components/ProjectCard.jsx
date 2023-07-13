import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card';

const ProjectCard = ({project}) => {
  return (
    <Link href={`/projects/${project.id}`} style={{textDecoration: 'none'}}>
      <Card >
        <div>{project.title}</div>
        <div class='card-content' dangerouslySetInnerHTML={{ __html: project.image}}/>
        <div class='card-content'>{project.description}</div>
      </Card>
    
    </Link>
  );
};

export default ProjectCard;