import Card from '@/components/Card';

const ProjectCard = ({project}) => {
  return (
    <Card>
      <div>{project.title}</div>
      <div>text</div>
      <div>preview</div>
    </Card>
  );
};

export default ProjectCard;