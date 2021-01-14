import React, { Component } from 'react';


const contactinfo = [
    {
        icon: 'fas fa-map-marker-alt',
        primary: 'E4, Mohan Estate, New Delhi (110044)',
        second: '207, Maharana Pratap Nagar, Jaipur, Rajasthan (302012)'
    },
    {
        icon: 'fas fa-phone',
        primary: '+91 9934-699-512',
        second: '+91 7023-653-566'
    },
    {
        icon: 'fas fa-envelope',
        primary: 'info@digitechvidya.com',
        // second: 'mail@mail.com'
    }

];

const contactinfoList = contactinfo.map((item) =>
    <div className="contact-address-details" key={item.icon}>
        <div className="address-icon relative-position text-center float-left">
            <i className={item.icon} />
        </div>
        <div className="address-details ul-li-block">
            <ul>
                <li>
                    <span>Primary: </span>{item.primary}
                </li>
                <li>
                    <span>Second: </span>{item.second}
                </li>
            </ul>
        </div>
    </div>
);

class ContactTwo extends Component {
    render() {
        return (
            <section id="contact_secound" className="contact_secound_section backgroud-style">
                <div className="container">
                    <div className="contact_secound_content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-left-content">
                                    <div className="section-title  mb25 headline text-left">
                                    <div className="col-md-12 col-sm-12 col-xs-12 mb45">
                                    <div className="copy-right-menu-item  ul-li">
                                    <ul>
                                    <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <li><a href="#" className="text-white"> <i className="fas fa-caret-right text-white" /> About Us</a></li>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <li><a href="#" className="text-white"> <i className="fas fa-caret-right text-white" /> Community</a></li>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <li><a href="#" className="text-white"> <i className="fas fa-caret-right text-white" /> News</a></li>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <li><a href="#" className="text-white"> <i className="fas fa-caret-right text-white" /> Events</a></li>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <li><a href="#" className="text-white"> <i className="fas fa-caret-right text-white" /> Hackathon</a></li>    
                                    </div>
                                    </div>
                                    
                                    </ul>
                                        </div>
                                        </div>
                                        <span className="subtitle ml42  text-uppercase">CONTACT US</span>
                                    </div>

                                    <div className="contact-address mb65">
                                        {contactinfoList}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="contact_secound_form">
                                    <div className="section-title-2 mb65 headline text-left">
                                        <h2>Send Us a message</h2>
                                    </div>
                                    <form className="contact_form" action="#" method="POST" encType="multipart/form-data">
                                        <div className="contact-info">
                                            <input className="name" name="name" type="text" placeholder="Your Name." />
                                        </div>
                                        <div className="contact-info">
                                            <input className="email" name="email" type="email" placeholder="Your Email" />
                                        </div>
                                        <textarea placeholder="Message."></textarea>
                                        <div className="nws-button text-center  gradient-bg text-capitalize">
                                            <button type="submit" value="Submit">SEND MESSAGE NOW <i className="fas fa-caret-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_2 backgroud-style">
                    <div className="container">
                        <div className="back-top text-center mb45">
                            <a className="scrollup" href="#"><img src={require("../../assets/img/banner/bt.png")} alt="" /></a>
                        </div>
                        <div className="footer_2_logo text-center">
                            <img src={require("../../assets/img/logo/logo.png")} alt="" />
                        </div>

                        <div className="footer_2_subs text-center">
                            <p>We take our mission of increasing global access to quality education seriously. </p>
                            <div className="subs-form relative-position">
                                <form action="#" method="post">
                                    <input className="course" name="course" type="email" placeholder="Email Address." />
                                    <div className="nws-button text-center  gradient-bg text-uppercase">
                                        <button type="submit" value="Submit">Subscribe now</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                        
                        <div className="copy-right-menu">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="copy-right-text">
                                        <p>
                                        © 2020 DANZO TECHNOLOGY LLP All rights Reserved.
                                            {/* © 2020 - Designed & Developed by 
                                            <a href="https://jthemes.com" title="Best Premium WordPress, HTML Template Store"> Jthemes Studio</a>. All rights reserved */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="footer-social  text-center ul-li">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="copy-right-menu-item float-right ul-li">
                                        <ul>
                                            <li><a href="#">Reviews</a></li>
                                            <li><a href="#">Privacy & Policy</a></li>
                                            <li><a href="#">Term Of Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactTwo;