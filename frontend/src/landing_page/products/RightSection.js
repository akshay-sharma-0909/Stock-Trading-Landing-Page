import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 p-5 mt-5 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div >
            <a href={learnMore} style={{textDecoration:"none"}}> learnmore→</a>
            
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
        <div className="col-6 ">
            <img src={imageURL}></img>
          </div>
      </div>
    </div>
  );
}

export default RightSection;
