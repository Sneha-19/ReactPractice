import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road <br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:">
                            confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                {/* <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn"
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;