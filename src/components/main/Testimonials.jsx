import React from 'react'
import testimonial1Img from '../../assets/img/fake-testimonial1.jfif'
import testimonial2Img from '../../assets/img/fake-testimonial2.jfif'
import testimonial3Img from '../../assets/img/fake-testimonial3.jfif'
import "./MainStyle.css"

const Testimonials = () => {
    return (
        <section className="testimonials-container">
            <div className="testimonials-center">
                <h2 className="section-title">Testimonials</h2>
                <h3 className="testiomials-h3">Discover what our satisfied customers have to say about us!.</h3>
            </div>
            <div className="testimonial-div">
                <div className="testimonial testimonial1"> 
                    <img src={testimonial1Img} alt="fake testimonial 1" className="fake-testimonials-img" />
                    <p className="fake-testimonials-p">SportFuel Hub has truly transformed my fitness journey. The supplements have given me an edge in my training, helping me achieve new levels of strength and endurance.</p>
                    <p className="name-testimonial">Jhonatan Lins</p>
                </div>
                <div className="testimonial testimonial2"> 
                    <img src={testimonial2Img} alt="fake testimonial 2" className="fake-testimonials-img" />
                    <p className="fake-testimonials-p">I've experienced remarkable results in a short time, and I can't imagine my workouts without these high-quality products.</p>
                    <p className="name-testimonial">Miranda Thompson </p>
                </div>
                <div className="testimonial testimonial3"> 
                    <img src={testimonial3Img} alt="fake testimonial 3" className="fake-testimonials-img" />
                    <p className="fake-testimonials-p">SportFuel Hub is my go-to source for top-notch supplements that deliver real, noticeable benefits.</p>
                    <p className="name-testimonial">Alisha Frexon </p>
                </div>
        </div>
        </section>
    )
}

export default Testimonials
