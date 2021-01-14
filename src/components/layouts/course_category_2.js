import React from "react";
import OwlCarousel from 'react-owl-carousel';
import logo from '../../assets/img/logo/python4.png';

const options = {
  margin: 25,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,

    }
  },
};

class CourseCategory extends React.Component {

  render() {
    return (
      <section id="course-category" className="course-category-section home-secound-version">
        <div className="container">
          <div className="section-title mb20 headline text-left">
            <span className="subtitle ml42  text-uppercase">GENIUS CATEGORIES</span>
            {/* <h2>Browse <span>By Category.</span></h2> */}
            <h2>Browse <span>By Skills.</span></h2>
          </div>
          <OwlCarousel className="category-item category-slide-item owl-carousel"
            {...options}
          >
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  {/* <i className="text-gradiant flaticon-technology"></i> */}
                  <i className="text-gradiant fab fa-python"></i>
                </div>
                <div className="category-title">
                  <h4>Python</h4>
                </div>
              </div>
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fas fa-database"></i>
                </div>
                <div className="category-title">
                  <h4>SQL</h4>
                </div>
              </div>
            </div>
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-book"></i>
                </div>
                <div className="category-title">
                  <h4>Data Analytics</h4>
                </div>
              </div>
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-cogwheel"></i>
                </div>
                <div className="category-title">
                  <h4>Machine Learning</h4>
                </div>
              </div>
              {/* <div className="category-icon-title text-center">
                <div className="category-icon">  flaticon-app-store flaticon-artist-tools
                  <i className="text-gradiant flaticon-business"></i>flaticon-dna flaticon-dna  flaticon-book flaticon-cogwheel
                </div>
                <div className="category-title">
                  <h4>Marketing</h4>
                </div>
              </div> */}
            </div>
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fab fa-google"></i>
                </div>
                <div className="category-title">
                  <h4>Google Ad</h4>
                </div>
              </div>

              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fab fa-searchengin"></i>
                </div>
                <div className="category-title">
                  <h4>SEO</h4>
                </div>

                {/* <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-technology-1"></i>
                </div>
                <div className="category-title">
                  <h4>PPC</h4>
                </div>
              </div> */}

              </div>
            </div>
            
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-business"></i>
                </div>
                <div className="category-title">
                  <h4>Marketing</h4>
                </div>
              </div>

              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-technology-2"></i>
                </div>
                <div className="category-title">
                  <h4>PMP</h4>
                </div>
              </div>
            </div>
           <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fab fa-docker"></i>
                </div>
                <div className="category-title">
                  <h4>Docker</h4>
                </div>
              </div>
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fas fa-american-sign-language-interpreting"></i>
                </div>
                <div className="category-title">
                  <h4>NLP</h4>
                </div>
              </div>
            </div>
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fab fa-aws"></i>
                </div>
                <div className="category-title">
                  <h4>AWS</h4>
                </div>
              </div>
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant fas fa-laptop"></i>
                </div>
                <div className="category-title">
                  <h4>Computer vision</h4>
                </div>
              </div>
            </div>
            {/* <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-dna"></i>
                </div>
                <div className="category-title">
                  <h4>Science</h4>
                </div>
              </div>

              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-cogwheel"></i>
                </div>
                <div className="category-title">
                  <h4>Enginering</h4>
                </div>
              </div>
            </div>
            <div className="category-slide-content">
              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-technology-1"></i>
                </div>
                <div className="category-title">
                  <h4>Photography</h4>
                </div>
              </div>

              <div className="category-icon-title text-center">
                <div className="category-icon">
                  <i className="text-gradiant flaticon-technology-2"></i>
                </div>
                <div className="category-title">
                  <h4>Mobile Application</h4>
                </div>
              </div>
            </div>
          */}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default CourseCategory;


// //            <div className="category-slide-content">
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-technology"></i>
// </div>
// <div className="category-title">
//   <h4>Responsive Website</h4>
// </div>
// </div>
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-app-store"></i>
// </div>
// <div className="category-title">
//   <h4>IOS Applications</h4>
// </div>
// </div>
// </div>
// <div className="category-slide-content">
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-artist-tools"></i>
// </div>
// <div className="category-title">
//   <h4>Graphic Design</h4>
// </div>
// </div>
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-business"></i>
// </div>
// <div className="category-title">
//   <h4>Marketing</h4>
// </div>
// </div>
// </div>
// <div className="category-slide-content">
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-dna"></i>
// </div>
// <div className="category-title">
//   <h4>Science</h4>
// </div>
// </div>

// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-cogwheel"></i>
// </div>
// <div className="category-title">
//   <h4>Enginering</h4>
// </div>
// </div>
// </div>
// <div className="category-slide-content">
// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-technology-1"></i>
// </div>
// <div className="category-title">
//   <h4>Photography</h4>
// </div>
// </div>

// <div className="category-icon-title text-center">
// <div className="category-icon">
//   <i className="text-gradiant flaticon-technology-2"></i>
// </div>
// <div className="category-title">
//   <h4>Mobile Application</h4>
// </div>
// </div>
// </div>

