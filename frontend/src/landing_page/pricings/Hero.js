import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <p>free equity investments and flat ₹20 traday and F&O trades </p>

        <div className=" row  border-top mt-5 p-5 ">
          <div className="col-4  mt-5 p-4">
            <img src="media/images/pricing0.svg" />
            <h2 className="fs-4 mb-4 mt-5">Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4  mt-5 p-4">
            <img src="media/images/pricingEquity.svg" />
            <h2 className="fs-4 mb-4 mt-5">Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 mt-5 p-4">
            <img src="media/images/pricingMF.svg" />
            <h2 className="fs-4 mb-4 mt-5">Free direct MF</h2>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
