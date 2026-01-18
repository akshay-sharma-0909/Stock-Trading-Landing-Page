import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-6 text-center">
            <img src="\media\images\nithinKamath.jpg" alt="nitinkamath" style={{borderRadius:"100%", width:"60%"}}></img>
            <h4 className="mt-3">  Nitin Kamath</h4>
            <p className="text-muted mt-3">Founder,CEO</p>
        </div>
        <div className="col-6 text-muted mb-5 ">
        <h1 className="mb-5">People</h1>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            Heis a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <p>Playing basketball is his zen.</p>

          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
