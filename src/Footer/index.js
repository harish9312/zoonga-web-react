import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import './footer.scss';

export class Footer extends Component {

    render() {
        const popover = (
            <Popover id="popover-basic" title="Popover right">
                And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover>
        );
        return (
            <div className="footer-container" >
                <div className="footer-head" >
                    <div className="pop-over-dropdown" >
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <div>
                                <Button variant="success">Dropdown<span className="caret" /></Button>
                            </div>
                        </OverlayTrigger>
                    </div>
                    <div className="footer-left" >
                        <div className="sub" >
                            Subscribe to our Newsletter
                    </div>
                        <input className="search" placeholder="Enter your email" />
                        <button className="button" >Subscribe</button>
                    </div>
                </div>
                <div className="footer-body" >
                    <FooterData heading="Help" contents={[
                        '24x7 Customer Service',
                        'Regenerate your PAH e-Ticket',
                        'Reprint Confirmation',
                        'Regenerate-e-Ticket',
                        'Track Courier'
                    ]} />
                    <FooterData heading="Company" contents={[
                        'About Us',
                        'Blog',
                        'Careers',
                        'Contact Us',
                        'Media Center',
                        'Policies'
                    ]} />
                    <FooterData heading="Popular Events" contents={[
                        'EsselWorld',
                        'KidZania',
                        'Water Kingdom',
                        'Water Kingdom',
                        'Adventure Park',
                        'Vineyard Tour & Cycling'
                    ]} />
                    <FooterData heading="Popular Events" contents={[
                        'Australia',
                        'India',
                        'Ireland',
                        'United Arab Emirates',
                        'United States'
                    ]} />
                </div>
                <div className="footer-values" >
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        {[
                            { "href": "https://www.facebook.com/kyazoonga", pathToImage: require("./images/facebook.png"), alt: "Facebook" },
                            { "href": "https://twitter.com/kyazoonga", pathToImage: require("./images/twitter.png"), alt: "Twitter" },
                            { "href": "https://www.instagram.com/kyazoonga/", pathToImage: require("./images/instagram.png"), alt: "in" },
                            { "href": "https://www.snapchat.com/add/kyazoonga", pathToImage: require("./images/snapchat.png"), alt: "in" },
                            { "href": "https://www.linkedin.com/company/kyazoonga", pathToImage: require("./images/in.png"), alt: "Linkedin" },
                            { "href": "https://www.youtube.com/user/kyazoongachannel", pathToImage: require("./images/youtube.png"), alt: "Youtube" },
                            { "href": "https://plus.google.com/+kyazoongachannel", pathToImage: require("./images/google.png"), alt: "Google " },
                            { "href": "https://www.pinterest.com/kyazoonga/", pathToImage: require("./images/pinterest.png"), alt: "Pinterest" }
                        ].map((v => <FooterLink href={v.href} src={v.pathToImage} alt={v.alt} />))}
                    </div >
                    <div className="copyright" >
                        Copyright ©Kyazoonga. All rights reserved.
                    </div>
                </div >
            </div >
        );
    }
}

const FooterData = ({ heading, contents }) => {
    return <div className="body-container" >
        <h6 >
            {heading}
        </h6>
        {contents.map((content, index) => {
            return <div key={index} className="body-data"  >
                <a>{content}</a>
            </div>

        })}
    </div>
}

const FooterLink = ({ href, src, alt }) => {
    return <React.Fragment>
        <div><a className="" href={href} target="blank" rel="me"></a></div>
        <img src={src} alt={alt} width="32" height="32" />
    </React.Fragment>
}
