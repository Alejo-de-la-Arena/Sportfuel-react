import './Contact.css'

const Contact = () => {
    return (
            <section className="contact">
                <h2 className="section-title"> ¡Contact Us! </h2>
                <input className="inp-contact" type="text" placeholder="Full Name..."  />
                <br />
                <input className="inp-contact" type="email" placeholder="Email..." name="mail" id="email"  />
                <br />
                <input className="inp-contact" type="number" placeholder="Phone Number..." name="cellnum" id="cellnumber" />
                <br />
                <button className="btn-contact" role="button">Send</button>
            </section>
    );
}
export default Contact
