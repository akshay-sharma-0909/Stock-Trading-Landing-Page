import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <p className="mt-3  p-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>

        <h3>The Zerodha Universe
</h3>
<p className="mt-3">Extend your trading and investment experience even further with our partner platforms

</p>
<div className="col-4 p-5  ">
    <img
          src="\media\images\zerodhaFundhouse.png"
          alt="zerodhaFundhouse"
          style={{ width: "60%"  }}
        ></img>
        <p  className="mt-3">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>

        <img
          src="\media\images\streakLogo.png"
          alt="StreakLogo"
          style={{ width: "60%" , marginTop:"30px" }}
        ></img>
        <p  className="mt-3">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
</div>

<div className="col-4 mt-3 p-5">
        <img
          src="\media\images\sensibullLogo.svg"
          alt="sensibullLogo"
          style={{ width: "70%" }}
        ></img>
        <p className="mt-3">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
<img
          src="\media\images\smallcaseLogo.png"
          alt="smallcaseLogo"
          style={{ width: "60%" , marginTop:"40px" }}
        ></img>
        <p className="mt-3">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
        </div>
<div className="col-4 p-5  mb-5">
        <img
          src="media\images\goldenpiLogo.png"
          alt="smallcaseLogo.png"
          style={{ width: "60%" }}
        ></img>
        <p className="mt-3">
          Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
  
</p>
<img
          src="\media\images\dittoLogo.png"
          alt="ditto"
          style={{ width: "60%"  , marginTop:"30px"}}
        ></img>
        <p className="mt-3">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
</div>

      </div>
  );
}

export default Universe;
