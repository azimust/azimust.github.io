import React from 'react';

const WorkItem = (props) => {
  return (
    <div className="work__card" key={props.key}>
      <img src={props.item.image} alt="" className='work__img'/>
      <h3 className="work__title">{props.item.title}</h3>
      <a href={props.item.href} className="work__button" target='_blank'>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorkItem