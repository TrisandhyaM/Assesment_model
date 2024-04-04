import React from "react"
import "./main.css"

const Home = () => {
    return (
        <div className='body'>
        
       
            <div className='banner'>
                
                <div className='model'>
                    <div className='model_pic'>
                        <div><img src='https://learningtechcoding.github.io/Ecommerece-Page-html/woman.png' alt='' height="700px" width="600px" /></div>
                    </div>
                    <div className='text'>
                       
                        <h1 className="just">JUST <h3 className='newarival'>NEW ARRIVALS</h3></h1>
                        <h1 className="for" >FOR<h1 className='you'> YOU </h1></h1>
                        
                        <span className='onlineorder'><br />
                            <h2 className='order'>FOR ONLINE<br/><span>ORDER</span></h2>
                            <h2>30%<br />OFF</h2>
                        </span>
                    </div>
                </div>
                
            </div>
    
        </div>
        
    )
}

export default Home;