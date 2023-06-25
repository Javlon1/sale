import * as React from 'react'
import './Contact.scss'
import map from '../../../Assets/Img/logo.png'

export default function Contact() {
    return (
        <section className='contact'>
            <div className='container'>
                <h2 className='container__title'>Contact</h2>
                <p className='container__subtitle'><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, soluta!</em></p>
                <div className="container__contactUs">
                    <div className="container__contactUs__map">
                        <img src={map} alt="" />
                    </div>
                    <div className="container__contactUs__info">
                        <ul className='container__contactUs__info__list'>
                            <li className='container__contactUs__info__list__item'>
                                <i className='bi bi-telephone-fill'></i>
                                <p>+880 1234 567890</p>
                            </li>
                            <li className='container__contactUs__info__list__item'>
                                <i className='bi bi-telephone-fill'></i>
                                <p>+880 1234 567890</p>
                            </li>
                            <li className='container__contactUs__info__list__item'>
                                <i className='bi bi-telephone-fill'></i>
                                <p>+880 1234 567890</p>
                            </li>
                        </ul>
                    </div>

                    <form className='container__contactUs__form' action="">
                        <input type="text" name="name" placeholder="Name:" />
                        <input type="email" name="email" placeholder="Email:" />
                        <input type="text" name="subject" placeholder="Subject:" class="contact_input" />
                        <textarea rows="5" name="text" placeholder="Text:" />
                        <button type='submit'>submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}
