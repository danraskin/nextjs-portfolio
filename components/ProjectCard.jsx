
import Card from '@/components/Card';

const ProjectCard = ({project}) => {
  return (
    <Card>
      <div>{project.title}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} /> */}
    </Card>
  );
};

export default ProjectCard;