import Link from 'next/link'
import Card from '@/components/Card';

const ProjectCard = ({project, directory}) => {
  return (
    <Link href={`/${directory}/${project.id}`} style={{textDecoration: 'none'}}>
      <Card >
        <div>{project.title}</div>
        <div className='date'>{project.date}</div>
        <div className='card-content' dangerouslySetInnerHTML={{ __html: project.image}}/>
        <div className='card-content'>{project.description}</div>
      </Card>
    
    </Link>
  );
};

export default ProjectCard;