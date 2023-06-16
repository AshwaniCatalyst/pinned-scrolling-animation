"use client";
import React, { useRef, useEffect } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const PinnedScroll = () => {
  const pinnedRef = useRef();
  const scrollingSectionsRef = useRef([]);
  useEffect(() => {
    const currentSection = scrollingSectionsRef.current;
    currentSection.forEach((section, i) => {
      const prevBgColor =
        i === 0 ? "" : currentSection[i - 1].dataset.nextbgcolor;
      const anim = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          pin: false,
          scrub: true,
        //   ease: "Power2.easeInOut",
        },
      });

      const loadAvoid = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "-10000 center",
          end: "bottom center",
          pin: false,
          scrub: true,
        },
      });
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        pin: false,
        scrub: true,
        ease: "none",

        onEnter: () =>
          gsap.to(pinnedRef.current, {
            background: section.dataset.nextbgcolor,
            stagger: 1,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(pinnedRef.current, {
            background: prevBgColor,
            stagger: 1,
            overwrite: "auto",
          }),
      });
      if (i === 0) {
        loadAvoid.to(".a3", {
          y: "5000%",
          opacity: 0,
        });
        loadAvoid.to(".a4", {
          y: "5000%",
          opacity: 0,
        });
        loadAvoid.to(".a5", {
          y: "5000%",
          opacity: 0,
        });
        loadAvoid.to(".a6", {
          y: "5000%",
          opacity: 0,
        });
        loadAvoid.to(".a2", {
          y: "5000%",
          opacity: 0,
        });
      }
      if (i === 0) {
        anim.to(".innerImage", {
          scaleX: 1,
        });
        anim.to(".a1", {
          scale: 0.7,
          y: -30,
        });
      }
      if (i === 1) {
        anim.fromTo(
          ".a2",
          {
            y: 400,
            x: 0,
            opacity: 1,
            scale: 0.8,
            overwrite: "auto",
          },
          {
            duration: 1.5,
            y: -30,
            x: 0,
            opacity: 1,
            overwrite: "auto",
          }
        );
        anim.to(".a2", {
          scale: 0.7,
          y: -30,
        });
        anim.to(".a1", {
          opacity: 0,
        });

        anim.fromTo(
          ".a3",
          {
            y: 400,
            x: 0,
            opacity: 1,
            scale: 0.8,
            overwrite: "auto",
          },
          {
            duration: 1.5,
            y: -30,
            x: 0,
            opacity: 1,
            overwrite: "auto",
          }
        );
        anim.to(".a3", {
          scale: 0.7,
          y: -30,
        });
        anim.to(".a2", {
          opacity: 0,
        });

        anim.fromTo(
          ".a4",
          {
            y: 400,
            x: 0,
            opacity: 1,
            scale: 0.8,
            overwrite: "auto",
          },
          {
            duration: 1.5,
            y: -30,
            x: 0,
            opacity: 1,
            overwrite: "auto",
          }
        );
        anim.to(".a4", {
          scale: 0.7,
          y: -30,
        });
        anim.to(".a3", {
          opacity: 0,
        });
      }
      if (i == 2) {
        anim.to(".innerImage", {
          height: "80%",
        });
        anim.fromTo(
          ".a4",
          {
            y: -30,
            x: 0,
            scale: 0.7,
          },
          {
            y: -85,
            x: -85,
            scale: 0.5,
          }
        );
        anim.fromTo(
          ".a5",
          {
            scale: 0.4,
            y: 100,
            x: -90,
            opacity: 0,
          },
          {
            duration: 1.5,
            y: 70,
            x: -90,
            opacity: 1,
          }
        );
        anim.fromTo(
          ".a6",
          {
            scale: 0.4,
            y: 35,
            x: 120,
            opacity: 0,
          },
          {
            duration: 1.5,
            y: 25,
            x: 120,
            opacity: 1,
          }
        );
      }
      if (i === 3) {
        anim.fromTo(
          ".a6",
          {
            y: 25,
            x: 120,
            opacity: 1,
          },
          {
            y: 45,
            x: 300,
            duration: 1.5,
            opacity: 0,
          }
        );
        anim.fromTo(
          ".a5",
          {
            y: 70,
            x: -90,
            opacity: 1,
          },
          {
            x: 300,
            duration: 1.9,
            opacity: 0,
          }
        );
        anim.fromTo(
          ".a4",
          {
            y: -100,
            x: -100,
            scale: 0.5,
          },
          {
            y: 0,
            x: 0,
            scale: 0.7,
            duration: 1.9,
          }
        );
      }
    });
    ScrollTrigger.create({
      trigger: ".row",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="left col-sm-6">
            <div className="detailsWrapper ">
              <div
                ref={(el) => (scrollingSectionsRef.current[0] = el)}
                className="details  d1"
                data-nextbgcolor="linear-gradient(180deg, rgba(12,38,196,1) 18%, rgba(59,11,103,1) 96%)"
              >
                <div className="info-text-container">
                  <div className="Section-info-text">
                    <h2>
                      An exciting
                      <br />
                      development for
                      <br />
                      local development
                    </h2>
                    <p>
                      <b>Netlify’s full platform in your terminal.</b>
                      <br></br>
                      Spin up a project in seconds, configure
                      <br />
                      your build, test edge and serverless
                      <br />
                      functions, and deploy globally — all from
                      <br />
                      your command line.
                    </p>
                    <button className="pin-sec-btn">
                      <a href="">Launch your project now</a>
                    </button>
                  </div>
                </div>

                <div className="employeeCardContainer ">
                  <div className="Section-employee-card">
                    <div className="employee-quote">
                      <p>
                        There isn’t any way we could have developed our site in
                        the time we did without Netlify.{""}
                      </p>
                    </div>
                    <div className="employee-info">
                      <div className="employee-img">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/e9b5803840094d2583bc945e2a9c3cf2abc3fbe9/22b82/v3/img/build/xth_gr38jk-80.webp"
                          alt="employee-img"
                        />
                      </div>
                      <div className="employee-details">
                        <h3>Erin Kissane</h3>
                        <p>CO-FOUNDER, THE COVID TRACKING PROJECT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (scrollingSectionsRef.current[1] = el)}
                className="details d2"
                data-nextbgcolor="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
              >
                <div className="info-text-container">
                  <div className="Section-info-text">
                    <h2>
                      Build with anything,
                      <br />
                      connect to
                      <br />
                      everything
                    </h2>
                    <p>
                      <b>All your tools. All your data. Together.</b>
                      <br />
                      With first-class support for every modern
                      <br />
                      web framework and a broad ecosystem of
                      <br />
                      API integrations, Netlify helps you build any
                      <br />
                      kind of site or app you can imagine using
                      <br />
                      the best tools for the job.
                    </p>
                    <button className="pin-sec-btn">
                      <a href="">Explore our integrations</a>
                    </button>
                  </div>
                </div>

                <div className="employeeCardContainer">
                  <div className="Section-employee-card">
                    <div className="employee-quote">
                      <p>
                        Using Next.js with Netlify, our customer eased their web
                        team’s workflow and saw better overall performance.
                      </p>
                    </div>
                    <div className="employee-info">
                      <div className="employee-img">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/5bc0f5e13cf7213c158fe23601e8013cecc2b216/425c4/v3/img/build/ygz5ic-inm-80.webp"
                          alt="employee-img"
                        />
                      </div>
                      <div className="employee-details">
                        <h3>Yashar Rassoulli</h3>
                        <p>CTO, MYPLANET</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (scrollingSectionsRef.current[2] = el)}
                className="details d3"
                data-nextbgcolor="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
              >
                <div className="info-text-container">
                  <div className="Section-info-text">
                    <h2>
                      Time to deploy: Push
                      <br />
                      to Git, and that’s it
                    </h2>
                    <p>
                      <b>Fast, resilient network for web apps.</b>
                      <br />
                      Every deploy publishes your apps to be
                      <br />
                      served across all of our global edge
                      <br />
                      locations. Your own web servers and CDN
                      <br />
                      are no longer required.
                    </p>
                    <button className="pin-sec-btn">
                      <a href="">Get started for free</a>
                    </button>
                  </div>
                </div>

                <div className="employeeCardContainer">
                  <div className="Section-employee-card">
                    <div className="employee-quote">
                      <p>
                        Our website is more flexible and reliable, and performs
                        three times faster than before.
                      </p>
                    </div>
                    <div className="employee-info">
                      <div className="employee-img">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/1e26fdbf20101108d978117ddaba937584a41531/dac18/v3/img/build/ydtilyltrn-80.webp"
                          alt="employee-img"
                        />
                      </div>
                      <div className="employee-details">
                        <h3>Alicia Samue</h3>
                        <p>VICE PRESIDENT OF INFORMATION TECHNOLOGY, LONGO'S</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (scrollingSectionsRef.current[3] = el)}
                className="details  d1"
                data-nextbgcolor="linear-gradient(180deg, rgba(12,38,196,1) 18%, rgba(59,11,103,1) 96%)"
              >
                <div className="info-text-container">
                  <div className="Section-info-text">
                    <h2>
                      An exciting
                      <br />
                      development for
                      <br />
                      local development
                    </h2>
                    <p>
                      <b>Netlify’s full platform in your terminal.</b>
                      <br></br>
                      Spin up a project in seconds, configure
                      <br />
                      your build, test edge and serverless
                      <br />
                      functions, and deploy globally — all from
                      <br />
                      your command line.
                    </p>
                    <button className="pin-sec-btn">
                      <a href="">Launch your project now</a>
                    </button>
                  </div>
                </div>

                <div className="employeeCardContainer ">
                  <div className="Section-employee-card">
                    <div className="employee-quote">
                      <p>
                        There isn’t any way we could have developed our site in
                        the time we did without Netlify.{""}
                      </p>
                    </div>
                    <div className="employee-info">
                      <div className="employee-img">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/e9b5803840094d2583bc945e2a9c3cf2abc3fbe9/22b82/v3/img/build/xth_gr38jk-80.webp"
                          alt="employee-img"
                        />
                      </div>
                      <div className="employee-details">
                        <h3>Erin Kissane</h3>
                        <p>CO-FOUNDER, THE COVID TRACKING PROJECT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-sm-6">
            <div className="imageCard ">
              <div ref={pinnedRef} className="image">
                <div className="innerImage">
                  <div className="innerImageWrapper a1">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                  <div className="innerImageWrapper a2">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2018/03/06/21/09/easter-3204589_640.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                  <div className="innerImageWrapper a3">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2018/10/15/17/50/dog-3749561_640.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                  <div className="innerImageWrapper a4">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/11/13/08/33/dog-2944964_960_720.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                  <div className="innerImageWrapper a5">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/04/03/17/35/animals-2198994_640.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                  <div className="innerImageWrapper a6">
                    <div className="inner-img-container">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg"
                        alt="img1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinnedScroll;
