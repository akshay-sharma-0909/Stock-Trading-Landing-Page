import React from 'react';

function Pricing() {
    return (
    <div className="container p-5">
        <div className='row '>
            <div className='col-6'>
                <h1>Unbeatable pricing</h1>
                <p className='text-muted mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=""style={{textDecoration:"none"}}> See pricing <i class="fa-solid fa-arrow-right"></i></a>
            
            </div>
            
            <div className='col-6'>
                <div className='row  text-center'>
                    <div className='col  p-2 border'>
                        <h1 className='mt-2'>₹0</h1>
                        <p className='mt-4'>free equity delivery and <br></br> direct mutual funds</p>
                    </div>
                    <div className='col p-2 border'>
                        <h1 className='mt-2'>₹20</h1>
                       <p className='mt-4'>Intraday and F&O</p>

                    </div>
                </div>
                
                
                        

                
        
                
                
            </div>
        </div>
        </div>
    );
}

export default Pricing
