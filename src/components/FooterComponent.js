import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:">
                                confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="mailto:"></a>
                            <a className="btn btn-social-icon btn-facebook" href="mailto:"></a>
                            <a className="btn btn-social-icon btn-linkedin" href="mailto:"></a>
                            <a className="btn btn-social-icon btn-twitter" href="mailto:"></a>
                            <a className="btn btn-social-icon btn-google" href="mailto:"></a>
                            <a className="btn btn-social-icon" href="mailto:"></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>@ Copyright 2020 Sneha's Restaurant</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;