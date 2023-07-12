import Link from 'next/Link'
import Card from '@/components/Card';

const ProjectCard = ({project}) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card>
        <div>{project.title}</div>
        <div>{project.description}</div>
      </Card>
    
    </Link>
  );
};

export default ProjectCard;