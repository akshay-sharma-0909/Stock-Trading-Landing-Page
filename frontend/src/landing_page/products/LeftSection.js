import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 p-5  mt-4">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>tryDemo →</a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration:"none" }}>
              learnMore →
            </a>
          </div>

          <div className="mt-3">
            {" "}
            <a href={googlePlay}>
              <img src="/media/images/googlePlaybadge.svg" />
            </a>
            <a href={appleStore} style={{ marginLeft: "50px" }}>
              <img src="/media/images/appstorebadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
