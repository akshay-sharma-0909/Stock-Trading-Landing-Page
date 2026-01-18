import React from 'react';

function Brokeage() {
    return (
    <div className="container">
        <div className='row border-top mt-4 p-4 ' >
            <div className='col-8 '>
                <a href="" style={{textDecoration:"none"}}>
                <h3 className='mt-4 fs-5 text-center' >Brokerage calculator</h3></a>
                <ul className='text-muted' style={{lineHeight:"3", fontSize:"13px"}}>
                    <li >Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +GST per order </li>
                    <li> Digital contact notes will be sent via e-mail</li>
                    <li>Physical copies of contract notes , if required ,shall be charged ₹20 per contract note, Courier charges apply</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per exceuted order for equity (whichever is lower)</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹200 per exceuted order for equity (whichever is lower)</li>
                    <li> If the account is in debit balance , any order placed will be charged ₹40 per executed order instead of ₹20 per executed order</li> 
                </ul>


            </div>
            <div className='col-4'>
                <a href="" style={{textDecoration:"none"}}><h3 className='mt-4  fs-5 text-center'>List of charges</h3></a>
            </div>
        </div>
    </div>
    );
}

export default Brokeage
