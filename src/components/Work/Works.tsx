import { projectsData } from './Data';
import WorkItem from './WorkItem';

const Works = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((item, index) => {
        return (
          <WorkItem {...item} key={index} />
        )
      })}
    </div>
  )
}

export default Works