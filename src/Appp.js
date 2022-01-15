import React from 'react'
const Appp = () => {
    return (
      
      <div className="container">
        <div className="h">
          <div className="header">
            <span className="logo">
              <img src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1" alt="" />
            </span>
            <div className="selection-container" id="lang-switcher">
              <div className="select-wrapper">
                <label htmlFor="switcher" className="label">
                  <span className="label-text">Select Language</span>
                </label>
                <div className="select-arrow medium prefix globe">
                  <select className="select-medium" id="switcher" tabIndex={0} placeholder="lang-switcher">
                    <option selected lang="en" data-language="en" value="/in/" data-country="IN">English
                    </option>
                    <option lang="hi" value="/in-hi/" data-language="hi" data-country="IN">हिन्दी</option>
                  </select>
                </div>
              </div>
            </div>
            <a href="#" className="redButton">Sign In</a>
          </div>
        </div>
        <div className="story-cards">
          <div className="hero-card">
            <div className="story-card-background">
              <div className="img-wrapper">
                <img className="img" src="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/2c7c702c-ed2b-4437-9786-5e9bbcb11599/IN-en-20211011-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/2c7c702c-ed2b-4437-9786-5e9bbcb11599/IN-en-20211011-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/2c7c702c-ed2b-4437-9786-5e9bbcb11599/IN-en-20211011-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/2c7c702c-ed2b-4437-9786-5e9bbcb11599/IN-en-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
              </div>
              <div className="img-gradient" />
            </div>
            <div className="story-card-text">
              <h1 id className="story-card-title">Unlimited movies, TV shows and more.</h1>
              <h2 id className="story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
              <form className="email-form" method="GET">
                <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your
                  membership.</h3>
                <div className="email-form-lockup">
                  <ul className="simpleForm structural ui-grid">
                    <li className="field-email">
                      <div className="Input">
                        <div className="InputPlacement">
                          <label className="input_id" placeholder="email">
                            <input type="email" name="email" className="nfTextField" id="id_email_hero_fuji"  tabIndex={0} autoComplete="email" maxLength={50} minLength={5} dir />
                            <label htmlFor="id_email_hero_fuji" className="placeLabel">Email address</label>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="our-story-cta-container cta-link-wrapper">
                    <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex={0} role="link" data-uia="our-story-cta-hero_fuji">
                      <span id className="cta-btn-txt" data-uia>Get Started</span>
                      <span id className="chevron-right-arrow" data-uia>
                        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                          <desc>chevron</desc>
                          <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd">
                          </path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form></div>
          </div>
        </div>
        <div className="hero-card animation-card watchOn">
          <div className="animation-card-container">
            <div className="story-card-text">
              <h1 className="story-card-title">Enjoy on your TV.</h1>
              <h2 className="story-card-subtitle">Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray Players and more.</h2>
            </div>
            <div className="story-card-img-container">
              <div className="story-card-animation-container">
                <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                <div className="story-card-animation">
                  <video className="story-card-video" autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card animation-card flipped">
          <div className="animation-card-container">
            <div className="story-card-text">
              <h1 className="story-card-title">Download your shows to watch offline.</h1>
              <h2 className="story-card-subtitle">Save your favourites easily and always have something to watch.</h2>
            </div>
            <div className="story-card-img-container">
              <div className="story-card-animation-container">
                <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                <div className="story-card-animation">
                  <div className="story-card-animation-image">
                    <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                  </div>
                  <div className="story-card-animation-text">
                    <div className="text-0">Stranger Things</div>
                    <div className="text-1">Downloading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card animation-card watchOn Device">
          <div className="animation-card-container">
            <div className="story-card-text">
              <h1 className="story-card-title">Watch everywhere.</h1>
              <h2 className="story-card-subtitle">Stream unlimited movies and TV shows on your phone,tablet, laptop,
                and TV.</h2>
            </div>
            <div className="story-card-img-container">
              <div className="story-card-animation-container">
                <img alt="" className="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" data-uia="our-story-card-img" />
                <div className="story-card-animation">
                  <video className="story-card-video" autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card animation-card flipped">
          <div className="animation-card-container">
            <div className="story-card-text">
              <h1 className="story-card-title">Create profiles for children.</h1>
              <h2 className="story-card-subtitle">"Send children on adventures with their favourite characters in a
                space made just for them-free with your membership."</h2>
            </div>
            <div className="story-card-img-container">
              <div className="story-card-animation-container">
                <img alt="" className="story-card-img" src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" data-uia="our-story-card-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card card-contents footer-card " style={{position: 'relative'}}>
          <div className="site-footer-wrapper centered dark">
            <div className="site-footer">
              <p className="footer-top">Questions? Call <a className="footer-top-a" href="#">000-800-040-1843</a>
              </p>
              <ul className="footer-links structural">
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Help Centre</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Account</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Media Centre</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Investor Relations</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Jobs</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Ways to Watch</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Privacy</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Cookie Preferences</span>
                  </a>
                </li><li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Corporate Information</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Speed Test</span>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a className="footer-link" href="#">
                    <span>Legal Notices</span>
                  </a>
                </li>
                <li className="footer-link-item originals-link">
                  <a className="footer-link" href="#">
                    <span>Only on Netflix</span>
                  </a>
                </li>
              </ul>
              <div className="selection-container fot" id="lang-switcher">
                <div className="select-wrapper">
                  <label htmlFor="switcher" className="label">
                    <span className="label-text">Select Language</span>
                  </label>
                  <div className="select-arrow medium prefix globe">
                    <select className="select-medium" id="switcher" tabIndex={0} placeholder="lang-switcher">
                      <option selected lang="en" data-language="en" value="/in/" data-country="IN">English
                      </option>
                      <option lang="hi" value="/in-hi/" data-language="hi" data-country="IN">हिन्दी</option>
                    </select>
                  </div>
                </div>
              </div>
              <p className="footer-country">Netflix India</p>
            </div>
          </div>
        </div>
      </div>
  

      
    )
}

export default Appp
