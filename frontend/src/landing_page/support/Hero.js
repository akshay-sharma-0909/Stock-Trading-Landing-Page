import React from 'react';

function Hero() {
    return (
    <section className='container-fluid' id="SupportHero">
        <div className=' p-3 ' id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Ticket</a>
        </div>
        <div className=' row p-5 mx-5 ' id="supportWrap">
            <div className='col-6  ' >
                <h1 className='fs-4'>Search for answer or browser help topics to create a ticket</h1>
                <input  placeholder="Eg:how to i activate F&o, why is my order getting rejected." className='border p-3  ' style={{width:"80%", borderRadius:"10px"}} />
                <br></br>
                <br></br>
                <a href="">Track segemnt activation</a>
                
                <a href="">Intraday</a>
                <a href="">margins</a>
                <a href="">Kite user manual</a>
            </div>
            <div className='col-6   '>
                <h1 className='fs-4'>Featured</h1>
                <ol className='mt-4  ' style={{lineHeight:"2"}}> 
                
                    <li>
                        <a href="">Current Takeovers and Delisting-January 2024</a>
                <br></br>
                    </li>
                    <li src="1"><a href=""> Latest Intraday leverages -MIS&CO</a></li>
                </ol>
                
                
                

            </div>
            </div>
         
    </section>

        
    );
}

export default Hero
