import React from 'react';
import { Icon } from '@iconify/react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/azimbek-toktosunov/" className="home__social-icon" target='_blank'>
          <Icon icon="cib:linkedin" />
        </a>
        <a href="https://github.com/azimust" className="home__social-icon" target='_blank'>
          <Icon icon="cib:github" />
        </a>
        <a href="https://vk.com/azimust" className="home__social-icon" target='_blank'>
          <Icon icon="cib:vk" />
        </a>
        <a href="https://www.codewars.com/users/azimust" className="home__social-icon" target='_blank'>
          <Icon icon="cib:codewars" />
        </a>
    </div>
  )
}

export default Social