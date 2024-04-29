import React from 'react'

const About = (props) => {
  return (
    <div>
      <aside>
      <img src = "https://via.placeholder.com/215" alt="Blog logo"/>
      <p>{props.about}</p>
      </aside>
    </div>
  )
}

export default About
