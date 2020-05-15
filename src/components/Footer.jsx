import React from 'react';


const Footer = () => {
    return ( 

        // Footer
        <div className="container-fluid">
            {/* Newsletter */}
            <div className="row container-newsletter">
                <div className="col-md-6 txt-newsletter">
                    <h2>Newsletter</h2>
                    <p>Sign Up Our Newsletter:</p>
                </div>
                <div className="col-md-6 form-newsletter">
                    <input className="input-newsletter" type="email" placeholder="Enter your email address"/>
                    <button className="btn-newsletter">SUBSCRIBE</button>
                </div>
            </div>
            {/* Fin newsletter */}
       
            <div className="row container-footer">
                <span>Copyright© 2020, all Rights Reserved.</span>
            </div>
        </div>
        // Fin footer
     );
}
 
export default Footer;