import React from 'react'

import linkedin from '../../imgs/linkedin.png'
import github from '../../imgs/github.png'
import html from '../../imgs/html.png'
import css from '../../imgs/css.png'
import js from '../../imgs/js.png'
import react from '../../imgs/react.png'
import python from '../../imgs/python.png'
import me from '../../imgs/profile.jpg'

function Hero() {
  return (
    <section className='section' id='home'>

        <div className='profile'>

            <div>
                <h2>Front-End Developer</h2>
                <p>Hi, I'm Angelo Clint Orbillo. A passionate self-taught front-end developer based in Philippines.</p>

                <div className='profile-links'>

                    <a href="https://www.linkedin.com/in/acorbillo0120/" target='_blank'>
                        <img src={linkedin}alt="linkedin" />
                    </a>
                    <a href="https://github.com/acorbillo" target='_blank'>
                        <img src={github} alt="github" />
                    </a>

                    <div className='stack'>

                        <p>Tech Stack |</p>
                        <div>
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={react} alt="" />
                            <img src={python} alt="" />
                        </div>

                    </div>

                </div>

            </div>

            <div className='profile-img'>
                <img src={me} alt="" />
            </div>

        </div>

    </section>
  )
}

export default Hero