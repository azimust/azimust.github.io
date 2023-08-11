interface WorkItemProps {
  id: number,
  image: any,
  title: string,
  href: string,
}

const WorkItem = ({ href, image, title }: WorkItemProps) => {
  return (
    <div className="work__card">
      <img src={image} alt="" className='work__img' />
      <h3 className="work__title">{title}</h3>
      <a href={href} className="work__button" target='_blank'>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorkItem