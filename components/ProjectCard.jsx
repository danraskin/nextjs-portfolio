import Link from 'next/link'
import Card from '@/components/Card';

const ProjectCard = ({project}) => {
  return (
    <Link href={`/projects/${project.id}`} style={{textDecoration: 'none'}}>
      <Card>
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div dangerouslySetInnerHTML={{ __html: project.excerpt }} />
      </Card>
    
    </Link>
  );
};

export default ProjectCard;