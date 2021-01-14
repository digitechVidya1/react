import React, { Component } from 'react';


import OwlCarousel from 'react-owl-carousel';


const options = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
};


const testimonial= [
    {
      view: 'One of the best Artificial intelligence Course. In this course I learn everything like data science, python, NLP, machine learning, deep learning. I thing it is best  Artificial intelligence Course in Delhi,Best Data science Institute in Delhi,Data Science Institute in Delhi',
      name: 'DEVENDRA SINGH CHUNDAWAT',
    },
    {
      view: 'A very good institute. The instructor are very good. A best institute for artificial intelligence course in delhi . It includes a briefed course for data science course in delhi .  In my opinion every student should approach this institue for artifical intelligence course and data science course .',
      name: 'Kuldeep'
    },
    {
      view: 'Business analytics Course in Delhi, business analytics Institute in Delhi, Data Science Course in Delhi, Data Science Institute in Delhi this is a best institute in delhi.',
      name: 'Vishesh Khandelwal'
    },
    {
      view: 'Best data science institute in Delhi..😊 You will learn everything form scratch. Mathematics behind algorithm.Time &amp; space taken by algorithm After this course I have confidence I can crack an interview.',
      name: 'Hitesh Gehlot'
    }
  ];

  const testimonialList = testimonial.map((item) =>
  <div className="student-qoute text-center">
  <p>“{item.view}”</p>
  <div className="student-name-designation">
      <span className="st-name bold-font">{item.name} </span>
      <span className="st-designation">India</span>
  </div>
</div>

  );
class Testimonial extends Component {
    render() {
        return (

            <section id="testimonial-secound" className="secound-testimoinial-section">
                <div className="container">
                    <div className="testimonial-slide">
                        <div className="section-title mb35 headline text-center">
                            <span className="subtitle text-uppercase">WHAT THEY SAY ABOUT US</span>
                            <h2>Students <span>Testimonial.</span></h2>
                        </div>

                        <OwlCarousel {...options} className="testimonial-secound-slide-area owl-carousel">
                            {testimonialList}
                            {/* <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div> */}

                            {/* <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>

                            <div className="student-qoute text-center">
                                <p>“This was our first time lorem ipsum and we <b> were very pleased with the whole experience</b>. Your price was lower than other companies. Our experience so we’ll be back in the future lorem ipsum diamet.”</p>
                                <div className="student-name-designation">
                                    <span className="st-name bold-font">Robertho Garcia </span>
                                    <span className="st-designation">Graphic Designer</span>
                                </div>
                            </div>
                         */}
                        </OwlCarousel>
                    </div>
                </div>
            </section>


        );
    }
}

export default Testimonial;