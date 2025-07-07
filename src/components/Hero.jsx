import { ArrowDownToDot } from "lucide-react";
import React from "react";
import { Carousel } from "antd";

function Hero() {
  const contentStyle = {
    height: "400px",
    color: "",
    lineHeight: "",
    textAlign: "center",
    background: "",
  };
  return (
    <div className="flex pt-10 scroll-smooth flex-col items-center mt-10">
      <img src="ELogo.png" alt="logo" className="w-92" />
      <h1 className="text-2xl md:text-4xl mb-2 md:tracking-widest">
        Beyond<span className="text-gray-400 ml-3">Business</span>
      </h1>
      <p className="mb-7 text-center text-gray-400 max-w-[50rem]">
        A mission to restore & sustain Africa Reimagining how African
        communities live, build, and thrive through climate-smart solutions that
        uplift lives while healing the planet.
      </p>

      <section id="our-services" className="scroll-smooth mt-10">
        <div className="flex flex-col gap-3 scroll-smooth">
          <div className="flex flex-col justify-center items-center">
            <div className="w-1/2 bg-white">
              <div className="flex items-center justify-center mb-8 space-X-2">
                <div className="h-1 w-10 bg-gray-200"></div>
                <div className="flex items-center">
                  <span className="text-black font-bold text-lg">
                    THE OPPORTUNITY
                  </span>
                </div>
                <div className="h-1 w-10 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center w-fit">
              <img
                src="susarchi.jpg"
                className="h-[11rem] w-[16rem] md:h-[18rem] md:w-[20rem]"
              />
              <h1 className="mt-5 font-bold text-green-900">
                Sustainable Architecture
              </h1>

              <button className="border px-3 md:px-7 md:py-2 mt-5">
                Learn more
              </button>
            </div>
            <div className="flex flex-col items-center w-fit">
              <img
                src="greencon.jpg"
                className="h-[11rem] w-[16rem] md:h-[18rem]  md:w-[20rem]"
              />
              <h1 className=" mt-5 font-bold text-green-900">
                Green Consulting
              </h1>

              <button className="border px-3 md:px-7 md:py-2 mt-5">
                Learn more
              </button>
            </div>
            <div className="flex flex-col items-center w-fit">
              <img
                src="pexels.jpg"
                className="h-[11rem] w-[16rem] md:h-[18rem] md:w-[20rem]"
              />
              <h1 className=" mt-5 font-bold text-green-900">
                Renewable Energy
              </h1>

              <button className="border px-3 md:px-7 md:py-2 mt-5">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen w-full bg-gray-100 mt-20">
        <div className="flex items-center mt-3 justify-center mb-8 space-X-2">
          <div className="h-1 w-10 bg-white"></div>
          <div className="flex items-center">
            <span className="text-black font-bold text-lg">THE VISION</span>
          </div>
          <div className="h-1 w-10 bg-white"></div>
        </div>
        <div className="flex flex-col justify-center items-center-safe">
          <div className="w-1/2 bg-white"></div>
          <img src="cloud.png" className="w-[50rem] mt-3 mb-20 h-[18rem]" />
          <ul className="list-[list-style-type:circle] flex flex-col gap-7 text-gray-600">
            <li>
              Climate Resilience Building infrastructure that withstands
              environmental challenges
            </li>
            <li>
              African Leadership Positioning Enova at the forefront of
              sustainable development
            </li>
            <li>
              Innovative Design Creating solutions that blend beauty with
              functionality
            </li>
            <li>
              Collaborative Approach Partnering across sectors for maximum
              impact
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full">
        <div className="hidden md:block">
          <div className="flex">
            <div className="w-1/2 bg-gray-200 pl-60 shadow-md py-40">
              <img
                src="pexels.jpg"
                className="w-[50rem] h-[10rem] md:w-[30rem] md:h-[20rem]"
              />
            </div>
            <div className="w-1/2 bg-white mt-[10rem]">
              <div className="flex items-center justify-center mb-8 space-X-2">
                <div className="h-1 w-10 bg-gray-200"></div>
                <div className="flex md:items-center">
                  <span className="text-black font-bold text-lg">
                    OUR STORY
                  </span>
                </div>
                <div className="h-1 w-10 bg-gray-200"></div>
              </div>
              <Carousel autoplay>
                <div>
                  <div style={contentStyle}></div>
                </div>
                <div>
                  <div style={contentStyle}>
                    <h1>Hello world</h1>
                    <p className="px-[5rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel atque eaque doloribus sequi quisquam asperiores? Sunt
                      eligendi tempore sit expedita sed voluptate earum nam.
                      Excepturi iste quaerat similique aperiam soluta.
                    </p>
                  </div>
                </div>
                <div>
                  <div style={contentStyle}>
                    <h1>Hello world</h1>
                    <p className="px-[5rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel atque eaque doloribus sequi quisquam asperiores? Sunt
                      eligendi tempore sit expedita sed voluptate earum nam.
                      Excepturi iste quaerat similique aperiam soluta.
                    </p>
                  </div>
                </div>
                <div>
                  <div style={contentStyle}>
                    <h1>Hello world</h1>
                    <p className="px-[5rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel atque eaque doloribus sequi quisquam asperiores? Sunt
                      eligendi tempore sit expedita sed voluptate earum nam.
                      Excepturi iste quaerat similique aperiam soluta.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center justify-center mb-8 space-X-2">
            <div className="h-1 w-10 bg-gray-200"></div>
            <div className="flex md:items-center">
              <span className="text-black font-bold text-lg">OUR STORY</span>
            </div>
            <div className="h-1 w-10 bg-gray-200"></div>
          </div>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}></div>
            </div>
            <div>
              <div style={contentStyle}>
                <h1>Hello world</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  atque eaque doloribus sequi quisquam asperiores? Sunt eligendi
                  tempore sit expedita sed voluptate earum nam. Excepturi iste
                  quaerat similique aperiam soluta.
                </p>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <h1>Hello world</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  atque eaque doloribus sequi quisquam asperiores? Sunt eligendi
                  tempore sit expedita sed voluptate earum nam. Excepturi iste
                  quaerat similique aperiam soluta.
                </p>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <h1>Hello world</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  atque eaque doloribus sequi quisquam asperiores? Sunt eligendi
                  tempore sit expedita sed voluptate earum nam. Excepturi iste
                  quaerat similique aperiam soluta.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="h-screen w-full bg-gray-100 mt-20">
        <div className="flex items-center mt-3 justify-center mb-8 space-X-2">
          <div className="h-1 w-10 bg-white"></div>
          <div className="flex items-center">
            <span className="text-black font-bold text-lg">THE MISSION</span>
          </div>
          <div className="h-1 w-10 bg-white"></div>
        </div>
        <div className="flex flex-col justify-center items-center-safe">
          <div className="w-1/2 bg-white"></div>
          <img src="pexels.jpg" className="w-[50rem] mt-3 mb-20 h-[18rem]" />
          <ul className="list-[list-style-type:circle] flex flex-col gap-7 text-gray-600">
            <li>
              Climate Resilience Building infrastructure that withstands
              environmental challenges
            </li>
            <li>
              African Leadership Positioning Enova at the forefront of
              sustainable development
            </li>
            <li>
              Innovative Design Creating solutions that blend beauty with
              functionality
            </li>
            <li>
              Collaborative Approach Partnering across sectors for maximum
              impact
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero;
