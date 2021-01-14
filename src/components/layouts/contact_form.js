import React, { Component } from 'react';

// import postData from '../helper/postData'

const GrayBg = true;
class ContactForm extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
          name: '',
          email: '',
          subject: '',
          message: '',
        }
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      submit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        // const { setNotif } = this.props;
    
        // if (!/^[A-Za-z\s]+$/.test(name)) {
        //   setNotif({ message: 'Name is not valid', variant: 'error' });
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        //   setNotif({ message: 'Email not valid', variant: 'error' });
        // } else if (!/^[A-Za-z.\s]+$/.test(subject)) {
        //   setNotif({ message: 'Subject not valid', variant: 'error' });
        // } else if (!/^[A-Za-z.\s]+$/.test(message)) {
        //   setNotif({ message: 'Message not valid', variant: 'error' });
        // } else {
        //     console.log("new",this.state)
        //     fetch("http://52.66.208.210:8000/api/web/v1/contact-us/", {
        //         method:"Post",
        //         headers: {
        //             'Content-Type':'application/json'
        //         },
        //         body: JSON.stringify(this.state)
        //     }).then((resp) => {
        //       resp.json().then((res) => {
        //         if (res.success == true) {
        //         console.log("suess");
        //         this.setState({
        //         name: '',
        //         email: '',
        //         subject: '',
        //         message: '',
        //         })
        //     }
        //     })
        //     .catch(err => {
        //       console.error(err);
        //     });
        // })
        // }
      }
    render() {
        const { name, email, subject, message } = this.state;
        return (
            <section id="contact-form" className={this.props.GrayBg === true ? 'contact-form-area_3' : 'contact-form-area_3  contact-page-version'}>
                <div className="container">
                    <div className="section-title mb45 headline text-center">
                        <span className="subtitle text-uppercase">Send us a message</span>
                        <h2>Send Us A<span> Message.</span></h2>
                    </div>

                    <div className="contact_third_form">
                        <form className="contact_form" 
                        // action="#" method="POST" encType="multipart/form-data"
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="name" name="name" type="text" placeholder="Your Name." onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="email" name="email" type="email" placeholder="Your Email" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        <input className="number" name="subject" type="subject" placeholder="Subject" onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <textarea name="message" placeholder="Message." onChange={this.handleChange}></textarea>
                            <div className="nws-button text-center  gradient-bg text-uppercase">
                                <button type="submit" value="Submit" onClick={this.submit}>SEND EMAIL <i className="fas fa-caret-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;