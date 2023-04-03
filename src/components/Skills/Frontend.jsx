import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title"></h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className='skills__add'>Bootstrap, BEM</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className='skills__add'>Sass/Scss</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Java Script</h3>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                  <div className="skills__data">
                      <i className='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">Git & Github</h3>
                      </div>
                  </div>

                  <div className="skills__data">
                      <i className='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">React</h3>
                          <span className='skills__add'>Redux</span>
                      </div>
                  </div>

                  <div className="skills__data">
                      <i className='bx bx-badge-check'></i>

                      <div>
                          <h3 className="skills__name">NPM</h3>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend