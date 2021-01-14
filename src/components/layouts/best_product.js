import React from "react";
import OwlCarousel from 'react-owl-carousel';


const productBG = "";

const options = {
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      nav: false,
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,

    }
  }
};

const jobinfo = [
  {
    title: "Data Science/  Data Scientist",
    module: "Advance",
    salary: "₹ 9,68,000",
    by: "By: Glassdoor"
  },
  {
    title: "Machine Learning",
    module: "Advance",
    salary: "₹ 7,86,000",
    by: "By: Glassdoor"
  },
  {
    title: "Natural Language Proccessing",
    module: "Advance",
    salary: "₹ 8,70,000",
    by: "By: Glassdoor"
  },
  {
    title: "AWS Solutions Architect",
    module: "Advance",
    salary: "₹ 6,39,000",
    by: "By: Glassdoor"
  },
  {
    title: "Artificial Intelligence",
    module: "Advance",
    salary: "₹ 12,00,000",
    by: "By: Glassdoor"
  },
  {
    title: "Deep Learning",
    module: "Advance",
    salary: "₹ 10,00,000",
    by: "By: Glassdoor"
  },
  {
    title: "Data Analysis",
    module: "Advance",
    salary: "₹ 5,59,000",
    by: "By: Glassdoor"
  },
  {
    title: "Computer Vision",
    module: "Advance",
    salary: "₹ 6,50,000",
    by: "By: Glassdoor"
  },
  {
    title: "Tableau",
    module: "Advance",
    salary: "₹ 5,09,000",
    by: "By: Glassdoor"
  },
];

const jobinfoList = jobinfo.map((item) =>
<div className="product-img-text" key={item.title}>
<div className="product-text-content relative-position ">
  <div className="best-title-price float-left">
    <div className="course-title headline ">
      <h3>
        <a href="#">{item.title}</a>
      </h3>
    </div>
    <div className="course-price1 text-center text-white gradient-bg mt25 mb25">
        <span>{item.module}</span>
      </div>
    <div className="price-start">
    Average salary in India | 
      <span>{item.salary}</span>
    </div>
    <div className="price-start">
    {item.by}               
    </div>
  </div>
</div>
</div>
);

class BestProduct extends React.Component {
  render() {
    return (
      <section id="best-product" className={this.props.productBG === true ? ('best-product-section best-product-4') : ('best-product-section')}>
        <div className="container">
          <div className="section-title-2 mb65 headline text-left ">
            <h2>
              {/* Genius <span>Best Products.</span> */}
              DigiTech <span>Browse by Top Jobs</span>
            </h2>
          </div>
          <OwlCarousel id="best-product-slide-item" className="best-product-slide owl-carousel"
            margin={25}
            items={4}
            nav
            dots={false}
            smartSpeed={1000}
            navText={["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]}
            {...options}
          >
            {jobinfoList}
            {/* <div className="product-img-text ">
              <div className="product-text-content relative-position ">
                <div className="best-title-price float-left">
                  <div className="course-title headline ">
                    <h3>
                      <a href="#">Data Science/  Data Scientist</a>
                    </h3>
                  </div>
                  <div className="course-price1 text-center text-white gradient-bg mt25 mb25">
                      <span>Advance</span>
                    </div>
                  <div className="price-start">
                  
                    <span>₹ 9,68,000</span>
                  </div>
                  <div className="price-start">
                  By: Glassdoor                
                  </div>
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-2.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-3.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-4.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text ">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-1.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text">
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-2.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  <i className="fas fa-cart-plus" />
                </div>
              </div>
            </div>
            <div className="product-img-text"> 
              <div className="product-img text-center mb20">
                <img src={require("../../assets/img/product/bp-3.png")} alt="" />
              </div>
              <div className="product-text-content relative-position">
                <div className="best-title-price float-left">
                  <div className="course-title headline">
                    <h3>
                      <a href="#">Mobile Apps Books.</a>
                    </h3>
                  </div>
                  <div className="price-start">
                    Start from
                    <span>$55.25</span>
                  </div>
                </div>
                <div className="add-cart text-center">
                  {/* <i className="fas fa-cart-plus" /> 
                  Advance
                </div>
              </div>
    </div> */}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default BestProduct;
