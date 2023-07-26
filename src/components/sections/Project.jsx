import React from 'react';

import data from './data/project-data'

function Project() {
  return (
    data.map((item, index) => {
        return (
        <div key={index} className='project-card'>
            <div className='project-text'>
                <h4 className='project-title'>{item.title}</h4>
                <p className='project-description'>{item.description}</p>
                <a href={item.url} target='_blank' className='preview'>Live Preview</a>
            </div>
            {item.img}
        </div>
        )
    })
  )
}

export default Project