import React from "react";

const WhiteBg = true;

class AboutUs extends React.Component {
  render() {
    return (
      <section id="about-us" className={this.props.WhiteBg === true ? 'about-us-section home-secound home-third' : 'about-us-section'}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-resigter-form backgroud-style relative-position">
                <div className="register-content">
                  <div className="register-fomr-title text-center">
                    <h3 className="bold-font">
                      <span>Register for </span> Free Demo Class.
                    </h3>
                    {/* <p>More Than 122K Online Available Courses</p> */}
                  </div>
                  <div className="register-form-area">
                    <form
                      className="contact_form"
                      action="#"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="contact-info">
                        <input
                          className="name"
                          name="name"
                          type="text"
                          placeholder="Your Name."
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="nbm"
                          name="nbm"
                          type="number"
                          placeholder="Your Number"
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="email"
                          name="email"
                          type="email"
                          placeholder="Email Address."
                        />
                      </div>
                      <select>
                        <option value={9}>
                          Select Course.
                        </option>
                        <option value={10}>Web Design</option>
                        <option value={11}>Web Development</option>
                        <option value={12}>Php Core</option>
                      </select>
                      <div className="contact-info">
                        <input
                          type="text"
                          id="datepicker"
                          placeholder="Date."
                        />
                      </div>
                      <textarea placeholder="Message." defaultValue={""} />
                      <div className="nws-button text-uppercase text-center white text-capitalize">
                        <button type="submit" value="Submit">
                          SUBMIT REQUEST{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-mockup">
                <img src={require('../../assets/img/about/phone.png')} alt="" />
              </div>
            </div>
            {}
            <div className="col-md-7">
              <div className="about-us-text">
                <div className="section-title relative-position mb20 headline text-left ">
                  <span className="subtitle ml42 text-uppercase">
                    SORT ABOUT US
                  </span>
                  <h2>
                    We are <span>DigiTech Vidya </span>
                    {/* work since 1980. */}
                  </h2>
                  <p>
                  DigiTech Vidya aims to make quality education accessible to anyone who wants to learn.
                  DigiTech Vidya is India's #1 online AI Bootcamp focused on helping people acquire the skills 
                  they need to thrive in the digital economy.
                  </p>
                </div>
                <div className="about-content-text">
                  <p>
                  DigiTech Vidya is an Online Training Institute with Head 
                  Office in Heart of India,  which provides the Best business
                  analyst course, Digital marketing course in Delhi, Data 
                  Science Course in Delhi, AI Course in Delhi, Machine Learning
                  Course in Delhi, Data Analytics Institute in Delhi, Web 
                  Designing Course in Delhi, Python Course in Delhi, Applied 
                  Artificial Intelligence Course, Business Analytics Institute 
                  in Delhi, and AWS Training.
                  </p>
                  <div className="about-list mb65 ul-li-block ">
                    <ul>
                      <li> 15+ Real world Projects and 300 + Case Study.</li>
                      <li> Life Time Access.</li>
                      <li> 100% Job accurance program.  </li>
                      <li> All of our courses designed as per company requirements.</li>
                    </ul>
                  </div>
                  <div className="about-btn ">
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        About Us <i className="fas fa-caret-right" />
                      </a>
                    </div>
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        contact us <i className="fas fa-caret-right" />
                      </a>
                    </div>
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

export default AboutUs;
