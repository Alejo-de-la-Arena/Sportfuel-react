import React from 'react'
import "./MainStyle.css"

const ValuePropositions = () => {
    return (
        <section className="value-propositions">
                <div className="value-prop">
                    <i className='bx bx-dumbbell'></i>
                    <h3 className="value-title">Enhance Performance</h3>
                    <p className="value-description">Fuel your workouts with supplements designed to boost your performance and endurance.</p>
                </div>
                <div className="value-prop">
                    <i className='bx bx-heart'></i>
                    <h3 className="value-title">Optimize Health</h3>
                    <p className="value-description">Our products promote overall well-being, helping you lead a healthy and active lifestyle.</p>
                </div>
                <div className="value-prop">
                    <i className='bx bx-shield'></i>
                    <h3 className="value-title">Premium Quality</h3>
                    <p className="value-description">Trust in our products backed by quality standards, ensuring you get the best results.</p>
                </div>
        </section>
    )
}
export default ValuePropositions