import * as React from 'react'
import './Intro.scss'


export default function Intro() {
    return (
        <section className='intro'>
            <div className='container'>
                <div className="container__content">
                    <h1 className='container__title'>названия</h1>
                    <p className='container__subtitle'>этот проект поможет вам найти качественную продуктов со скидками</p>
                    <ul className='container__list'>
                        <p>установить</p>
                        <a href="/" className='container__list__item'><i className="bi bi-android2"></i></a>
                        <a href="/" className='container__list__item'><i className="bi bi-apple"></i></a>
                    </ul>
                </div>
            </div>
        </section>




    )
}
