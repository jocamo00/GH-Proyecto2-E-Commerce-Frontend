import React from 'react';


const Footer = () => {
    return ( 

        // Footer
        <div class="container-fluid">
            {/* Newsletter */}
            <div class="row container-newsletter">
                <div class="col-md-6 txt-newsletter">
                    <h2>Newsletter</h2>
                    <p>Sign Up Our Newsletter:</p>
                </div>
                <div class="col-md-6 form-newsletter">
                    <input class="input-newsletter" type="email" placeholder="Enter your email address"/>
                    <button class="btn-newsletter">SUBSCRIBE</button>
                </div>
            </div>
            {/* Fin newsletter */}
       
            <div class="row container-footer">
                <span>Copyright© 2020, all Rights Reserved.</span>
            </div>
        </div>
        // Fin footer
     );
}
 
export default Footer;