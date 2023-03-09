import React from 'react'

const About = ({ data }) => {
  console.log(data);
  return (
    <div className='about'>
    <div className='about-header'>
      <h3>About</h3>
    </div>
    <div className='about-card'>
      {data.map(item => {
        return (
          <div key={JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default About