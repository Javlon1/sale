import * as React from 'react'
import'./About.scss'
import tel from '../../../Assets/Img/intro.jpg'

export default function About() {
    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className="container__left">
                    <img src={tel} alt="" />
                </div>
                <div className="container__right">
                    <h2 className='container__right__title'>O названия</h2>
                    <p className='container__right__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae odit dolor modi ex culpa fugiat aut nobis harum, ea velit a at beatae! Ea temporibus doloremque qui animi at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio asperiores, tenetur quos officiis laborum mollitia vel magnam deserunt eligendi culpa aliquam modi praesentium repudiandae?</p>
                    <ul className='container__right__list'>
                        <p>установить</p>
                        <a href="/" className='container__right__list__item'><i className="bi bi-android2"></i></a>
                        <a href="/" className='container__right__list__item'><i className="bi bi-apple"></i></a>
                    </ul>
                </div>
            </div>
        </section>
    )
}
