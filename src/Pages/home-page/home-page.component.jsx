import React, { useRef, useEffect } from "react";
import Styles from "./home-page.module.scss";
import { useInView } from "react-intersection-observer";
import Rellax from "rellax";

//IMAGES
import DogImg from "../../Assets/homepage/dog.png";
import DogImg2 from "../../Assets/homepage/dog2.png";
import PageBorder from "../../Assets/page-divider.svg";
import Buzzfeed from "../../Assets/homepage/BuzzFeed.svg";
import BusinessInsider from "../../Assets/homepage/BusinessInsider.svg";
import autoFeeder from "../../Assets/homepage/autoFeeder.png";

const HomePage = () => {
  // USE REF VARIABLES AND USEFFECT
  let dogImg = useRef(null);
  let domgImg2 = useRef(null);
  let headerText = useRef(null);

  //INTERSECTION OBSERVER SETUP
  const [section1Text, inView2, entry] = useInView({
    threshold: 0,
  });
  const [dog2, dog2View, entry2] = useInView({});

  //LOAD ANIMATION USE EFFECT
  useEffect(() => {
    const rellax = new Rellax(dogImg);
    const rellax2 = new Rellax(headerText);
    const rellax3 = new Rellax(domgImg2);

    //    window.onscroll = function () {
    //         if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600 ){
    //             rellax.destroy()
    //             console.log(document.documentElement.scrollTop)
    //         }else{
    //             rellax.refresh()
    //         }
    //     }
  }, []);

  return (
    <div className="page">
      <div className={Styles.hero}>
        <img
          ref={el => (dogImg = el)}
          data-rellax-speed="-10"
          src={DogImg}
          alt="Pet Dog"
          className={Styles.headerImg}
        />

        <div
          ref={el => (headerText = el)}
          data-rellax-speed="8"
          className={Styles.headerTextContainer}>
          <h1 className={Styles.headerh1}>
            DREAMS <br /> BERRY
          </h1>
          <br />
          <div className={Styles.quoteContainer}>
            <h3 className={Styles.headerh3}>
              "Hey! Hooman, what are you looking for? <br /> are you thinking of
              getting your bestfriend something?"
            </h3>
            <br />
            <h3 className={`${Styles.headerh3} ${Styles.name}`}>-Puggo</h3>
          </div>
        </div>
        <img src={PageBorder} alt="" className="pageBorder" />
      </div>

      {/*======================= SECTION - 1 =============================================================================== */}
      <section className={`${Styles.section1} center`}>
        <div className={`inner ${Styles.section1header}`}>
          {/* BRAND 1 */}
          <div
            ref={section1Text}
            className={
              inView2
                ? `${Styles.section1Div} ${Styles.fade1}`
                : Styles.section1Div
            }>
            <p className={Styles.brandP}>
              "Lorem ipsum adipisicing elit. Deserunt, incidunt."
            </p>

            <img className={Styles.brandLogo} src={Buzzfeed} alt="Buzzfeed" />
          </div>

          {/* BRAND 2 */}
          <div
            ref={section1Text}
            className={
              inView2
                ? `${Styles.section1Div} ${Styles.fade2}`
                : Styles.section1Div
            }>
            <p className={Styles.brandP}>
              "Lorem ipsum adipisicing elit. Deserunt, incidunt."
            </p>

            <img
              className={Styles.brandLogo}
              src={BusinessInsider}
              alt="Buzzfeed"
            />
          </div>

          {/* BRAND 3 */}
          <div
            ref={section1Text}
            className={
              inView2
                ? `${Styles.section1Div} ${Styles.fade3}`
                : Styles.section1Div
            }>
            <p className={Styles.brandP}>
              "Lorem ipsum adipisicing elit. Deserunt, incidunt."
            </p>

            <img className={Styles.brandLogo} src={Buzzfeed} alt="Buzzfeed" />
          </div>

          {/* BRAND 4 */}
          <div
            ref={section1Text}
            className={
              inView2
                ? `${Styles.section1Div} ${Styles.fade4}`
                : Styles.section1Div
            }>
            <p className={Styles.brandP}>
              "Lorem ipsum adipisicing elit. Deserunt, incidunt."
            </p>

            <img className={Styles.brandLogo} src={Buzzfeed} alt="Buzzfeed" />
          </div>
        </div>
      </section>

      {/*======================= SECTION - 2 =============================================================================== */}
      <section className={`center ${Styles.section2} center`}>
        <div className={`inner ${Styles.section2inner}`}>
          <span className={Styles.backgroundText}>ABOUT US</span>
          <img
            ref={el => (domgImg2 = el)}
            data-rellax-speed="10"
            data-rellax-percentage=".6"
            src={DogImg2}
            alt="Lovable dog"
            className={
              dog2View ? `${Styles.dog2} ${Styles.slowFade}` : Styles.dog2
            }
          />

          <div className={Styles.arcticleContainerTop}>
            <h2 className={Styles.articleTitle}>How to make your pet happy?</h2>
            <p className={Styles.section2p}>
              Looking for some easy ways to keep your dog happy and entertained?
              You’ve come to the right place. From a little more snuggle time on
              the couch to switching up your dog walking routine, here’s 25 ways
              to keep your dog happy.
            </p>
            <button className={Styles.section2Btn}>Read More</button>
          </div>

          <div ref={dog2} className={Styles.arcticleContainerBottom}>
            <h2 className={Styles.articleTitle}>
              How to make your pet happy2?
            </h2>
            <p className={Styles.section2p}>
              Looking for some easy ways to keep your dog happy and entertained?
              You’ve come to the right place. From a little more snuggle time on
              the couch to switching up your dog walking routine, here’s 25 ways
              to keep your dog happy.
            </p>
            <button className={Styles.section2Btn}>Read More</button>
          </div>
        </div>
      </section>

      {/*======================= SECTION - 3 =============================================================================== */}

      <section className={`center ${Styles.section3}`}>
        <div className={`inner ${Styles.section3Inner}`}>
          <h3 className={Styles.featuredH3Big}>FEATURED PRODUCT</h3>
          <span className={Styles.featuredSpan}>FEATURED PRODUCT</span>
        </div>
      </section>

      {/*======================= SECTION - 4 =============================================================================== */}
      <section className={`center ${Styles.section4}`}>
        <div className={`inner ${Styles.section4Inner}`}>
        
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
