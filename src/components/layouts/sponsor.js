import React from "react";

const SponsorClass = "sponsor-section";

const SponsorTitle = true;
const SponsorNav = true;


import OwlCarousel from 'react-owl-carousel';


const options = {
  margin: 2,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  autoplay: false,
  dots: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 6,

    }
  },
};

class Sponsor extends React.Component {
  render() {
    
    return (
      <section id="sponsor" className={this.props.SponsorClass ? this.props.SponsorClass : 'sponsor-section'}>
        <div className="container">
          {this.props.SponsorTitle === true 
            ? 
            (<div className="section-title-2 mb65 headline text-left">
            <h2>
              Genius <span>Sponsors.</span>
            </h2>
            </div>) 
            : 
            ('') 
          }
         
          <OwlCarousel {...options} className={this.props.SponsorNav === true ? ('sponsor-item sponsor-1 owl-carousel') : ('sponsor-item sponsor-2 owl-carousel') }>
          {/* <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/acc.png')} alt="" />
            </div> */}
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/acc1.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/hcl1.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/ib.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/kp.jpg')} alt=""  height="150px"/>
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/am1.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/RBS1.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/ab.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/pg.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s3.png')} alt=""  height="150px"/>
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/sy.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/nielsen.png')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/if.png')} alt="" />
            </div>

            {/* <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-1.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-2.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-3.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-4.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-5.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-6.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-6.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-6.jpg')} alt="" />
            </div>
            <div className="sponsor-pic text-center">
              <img src={require('../../assets/img/sponsor/s-6.jpg')} alt="" />
            </div> */}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default Sponsor;
