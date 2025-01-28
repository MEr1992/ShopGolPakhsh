export const ContactUs1 = () => {
    return(
        <>
            <div className="page-content bg-light">   
                {/* banner */}
                <div className="contact-bnr bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-info style-1 text-start text-white">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.1s">DISCOVER US</h2>
                                    <p className="text wow fadeInUp" data-wow-delay="0.2s"><span className="text-decoration-underline"><a  href="our-team.html">Pixio is here to help you;</a></span> <br> Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                                    <div className="contact-bottom wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="contact-left">
                                            <h3>Call Us</h3>
                                            <ul>
                                                <li>+01-123-456-7890</li>
                                                <li>+01-123-456-7890</li>
                                            </ul>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-area1 style-1 m-r20 m-md-r0 wow fadeInUp" data-wow-delay="0.5s">
                                    <form className="dz-form dzForm" method="POST" action="script/contact_smtp.php">
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact"/>
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0"/>
                                        <div className="dzFormMsg"></div>
                                        <label className="form-label">Your Name</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzName"/>
                                        </div>
                                        <label className="form-label">Email Address</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzEmail"/>
                                        </div>
                                        <label className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzPhoneNumber"/>
                                        </div>
                                        <label className="form-label">Massage</label>
                                        <div className="input-group m-b30">
                                            <textarea name="dzMessage" rows="4" required className="form-control m-b10"></textarea>
                                        </div>
                                        <div className="input-recaptcha m-b30">
                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                            <input className="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha"/>
                                        </div>
                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn w-100 btn-white btnhover">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-inner-2 pt-0">
                    <div className="map-iframe map">
                        <iframe src="../../https@www.google.com/maps/embed@pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!004187594F" style="border:0; width:100%; min-height:100%; margin-bottom: -8px;" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <button className="scroltop" type="button"><i className="fas fa-arrow-up"></i></button>	
        </>
    );
}