import React from 'react'
import * as urls from '../../common/urls'

const Tutorial = () => (
  <div className='Tutorial'>
    <video controls>
      <source src={`.${urls.videoTutorial}`}/>
    </video>
  </div>
)

export default Tutorial
