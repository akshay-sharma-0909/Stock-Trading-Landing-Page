import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="mt-5  mb-5 fs-2  text-center text-muted">
          We pioneered the discount broking model in India.
          <br></br>
          Now, we are breaking ground with our technology.
        </h2>
        <div
          className="row  textmuted  fs-6  mt-5 p-5  border-top"
          style={{ lineheight: "1.8 ", fontSize: "1.2em" }}
        >
          <div className="col-6  p-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with
              thegoal of breaking all barriers that traders and investors face
              inIndia in terms of cost, support, and technology. We named
              thecompany Zerodha, a combination of Zero and "Rodha", the
              Sanskritword for barrier.
            </p>

            <p>
              Today, our disruptive pricing models andin-house technology have
              made us the biggest stock broker in India
            </p>

            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment
              platforms,contributing over 15% of all Indian retail trading
              volumes.
            </p>
          </div>

          <div className="col-6 p-5">
            <p>
              In addition, we run a number of popular open online educationaland
              community initiatives to empower retail traders and investors.
            </p>

            <p>
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested inseveral fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new everyday. Catch up on
              the latest updates on our{" "}
              <a href="" style={{ textDecoration: "none" }}>
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="" style={{ textDecoration: "none" }}>
                saying about us
              </a>{" "}
              or learn more about our business andproduct philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
