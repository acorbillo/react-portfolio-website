import React from 'react';

import coding from '../../imgs/coding.jpg'

function About() {

  return (
    <section id='about' className="section">
        <div className='about-wrapper'>
            <div className='about-img'>
                <img src={coding} alt=""/>
            </div>
            <div className='about-text'>
                <h3>About Me!</h3>
                <p>Hi everyone. I'm a self-taught developer who is passionate about coding and constantly learning. I love exploring new technologies and experimenting with new programming languages.</p>

                <p>Aside from coding, I have a few hobbies that keep me busy. I enjoy listening to music, watching anime, and movies. I find that these hobbies help me unwind and get creative inspiration for my projects. I am currently a marketing major student, but my love for programming has led me down a different path. I believe that programming has the power to change the world and I want to be a part of that change.</p>
            </div>
        </div>
    </section>
  )
}

export default About