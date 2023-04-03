import React from 'react';
import { projectsData } from './Data';
import WorkItem from './WorkItem';

const Works = () => {
  return (
    <div className="work__container container grid">
        {projectsData.map((item, index) => {
            return (
                <WorkItem item={item} key={index.id}/>
            )
        })}
    </div>
  )
}

export default Works