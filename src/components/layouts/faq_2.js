import React from "react";

class FaqTwo extends React.Component {

  componentDidMount() {
    $(".tab-content-1").hide();
    $(".tab-content-1:first").show();

    /* if in tab mode */
    $("ul.product-tab").on("click", "li", function () {

      $(".tab-content-1").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();

      $("ul.product-tab li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").on("click", function () {

      $(".tab-content-1").hide();
      var d_activeTab = $(this).attr("rel");
      $("#" + d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

      $("ul.product-tab li").removeClass("active");
      $("ul.product-tab li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.product-tab li').last().addClass("tab_last");
  }

  render() {
    return (
      <section id="faq" className="faq-section faq-secound-home-version backgroud-style">
        <div className="container">
          <div className="section-title mb45 headline text-center">
            <span className="subtitle text-uppercase">DIGITECH VIDYA COURSE FAQ</span>
            <h2>Frequently<span> Ask & Questions</span></h2>
          </div>

          <div className="faq-tab mb45">
            <div className="faq-tab-ques  ul-li">
              <div className="tab-button text-center mb45">
                <ul className="product-tab">
                  <li className="active" rel="tab1">GENERAL </li>
                  <li rel="tab2"> COURSES </li>
                  <li rel="tab3"> TEACHERS </li>
                  <li rel="tab4">  EVENTS  </li>
                  <li rel="tab5">  OTHERS  </li>
                </ul>
              </div>
  
						<div className="tab-container">

            <div id="tab1" className="tab-content-1 pt35">
                  <div id="accordion" className="panel-group">
                    <div className="panel">
                      <div className="panel-title" id="headingOne">
                        <h3 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Career support should I expect from this program?
												</button>
                        </h3>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="panel-body">
                        DigiTech Vidya job assurance program is an India special offering in partnership with companies to help you land your dream job.
                        <br/>* Resume Building
                        <br/>* Career Mentoring
                        <br/>* Interview Preparation
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingTwo">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Will you forward my resume to the recruiter?
												</button>
                        </h3>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="panel-body">
                        No, DigiTech Vidya will never forward your resume to the recruiter directly.We will give you jobs to apply for on the portal.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingThree">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How do I enrolled in the course?
												</button>
                        </h3>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="panel-body">
                        You can contact us for special discounts or make an online payment using any of the following options:

                        <br/>* Debit & Credit Card
                        <br/>* UPI /QR
                        <br/> <span className="ml42">* UPI </span>    
                        <br/> <span className="ml42"> * Google pay </span>     
                        <br/>* NetBanking
                        <br/>* Wallet 
                        <br/> <span className="ml42"> * Phonepe  </span>      
                        <br/> <span className="ml42"> * Airtel Money </span>      
                        <br/> <span className="ml42"> * FreeCharge </span>      
                        <br/> <span className="ml42"> * Jio Money </span>      
                        <br/> <span className="ml42"> * Payzapp </span>  
                        <br/> <span className="ml42"> * Mobikwik </span> 
                        <br/>* EMI 
                        <br/> <span className="ml42"> * Credit Card EMI  </span>      
                        <br/> <span className="ml42"> * ZEST Money </span>      
                        <br/> <span className="ml42"> * Early Salary </span>      
                        <br/> <span className="ml42"> * Debit card EMI (Soon) </span>      
                        <br/> <span className="ml42"> * Bajaj EMI (Soon) </span>  
                        <br/> <span className="ml42"> * Instacred (Soon) </span> 
                        <br/> <span className="ml42"> * Pay Later </span>     
                        <br/>* ePayLater 
                        <br/>* Simpl (Soon)
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingFoure">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                          If I need to cancel my enrollment, can I get a refund?
												</button>
                        </h3>
                      </div>
                      <div id="collapseFoure" className="collapse" data-parent="#accordion">
                        <div className="panel-body">
                        Yes, you can cancel your enrollment if necessary. We will refund the course price after deducting admission fee. To learn more, please read our Refund Policy.
                        </div>
                      </div>
                    </div>
                  </div>
							</div>
  

							{/* <div id="tab1" className="tab-content-1 pt35">
                  <div id="accordion" className="panel-group">
                    <div className="panel">
                      <div className="panel-title" id="headingOne">
                        <h3 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to Register or Make An Account in DigiTech Vidya?
												</button>
                        </h3>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="panel-body">
                          In HOME section SORT ABOUT US you will register for free demo class.
											</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingTwo">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is DigiTech Vidya Courses?
												</button>
                        </h3>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="panel-body">
                        DigiTech Vidya is an Online Training Institute provides Digital Marketing course, Data Science course, AI course, Machine Learning course, Data Analytics course, Web Designing course, Python course, Applied Artificial Intelligence course, Business Analytics course, and AWS Training.
                      	</div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingThree">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What are the prerequisites for enrollment ?
												</button>
                        </h3>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="panel-body">
                        Basic knowledge of Domain & Computer.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingFoure">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                          What if i have more queries ?
												</button>
                        </h3>
                      </div>
                      <div id="collapseFoure" className="collapse" data-parent="#accordion">
                        <div className="panel-body">
                          For further queries you will just give us a call at +91 9934699512,
                        </div>
                      </div>
                    </div>
                  </div>
  
							</div>
   */}
							<div id="tab2" className="tab-content-1 pt35">
                  <div id="accordion-2" className="panel-group">
                    <div className="panel">
                      <div className="panel-title" id="headingSix">
                        <h3 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                          I am not able to access the online classe. Who can help me?
												</button>
                        </h3>
                      </div>
                      <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordion-2">
                        <div className="panel-body">
                        Contact us:
                        <br/>* Call - +91 9934699512
                        <br/>* Email - Info@digitechvidya.com  
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingSeven">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          No Pre-requisites
												</button>
                        </h3>
                      </div>
                      <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion-2">
                        <div className="panel-body">
                        All the concept descussed have  been intuited from fundamental level to an advanced level with practice implementation at every stage of the course allowing every course participant to Master the skills irrespective of the background they came from.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingEight">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          Submitting an assignment is mandatory?
												</button>
                        </h3>
                      </div>
                      <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion-2">
                        <div className="panel-body">
                        Yes, it is mandatory to submit all course assignments/exercises before deadline. It is also mandatory for job assurance program.
                       </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-title" id="headingNine">
                        <h3 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          How can I improve my skills?
												</button>
                        </h3>
                      </div>
                      <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion-2">
                        <div className="panel-body">
                        We have 300+ case studies to help you to understand concepts. 15+ Course Assignments to help you to get hands on experience.
                       </div>
                      </div>
                    </div>
                  </div>
							</div>
  
							<div id="tab3" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> Who are the instructors ?</h3>
                        <p>All of our highly qualified teachers are industry experts with years of relevant industry experience.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> How are they selected?</h3>
                        <p>Each of them has gone through a rigorous selection process that includes profile screening, teaching evaluation, and a training demo before they are certified to train for us. We also ensure that only those trainers with a high alumni rating remain on our faculty.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is teaching assistance?</h3>
                        <p>Our teaching assistants are to ensure the course path is being followed and help you enrich your learning experience, from class onboarding to project Mentoring and job assistance. Teaching assistance is available during business hours.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Why class on Saturday and Sunday only.</h3>
                        <p>Our all teacher are working. And  they design every class according to students requirements. They ensure that each topic delivered to our students In very easy way.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
							<div id="tab4" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
							<div id="tab5" className="tab-content-1 pt35">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> What is Genius Courses?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> What Lorem Ipsum Dolor Sit Amet Consectuerer?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ques-ans mb45 headline">
                        <h3> How to Register or Make An Account in Genius?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>

                      <div className="ques-ans mb45 headline">
                        <h3> Adipiscing Diamet Nonnumy Nibh Euismod?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                      </div>
                    </div>
                  </div>
                </div>
						</div>
            </div>
          </div>

          <div className="about-btn text-center">
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">Make Question <i className="fas fa-caret-right"></i></a>
            </div>
            <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
              <a href="#">contact us <i className="fas fa-caret-right"></i></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqTwo;
