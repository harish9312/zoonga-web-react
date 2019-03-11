import React, { Component } from 'react';
import { BasePage } from '../BasePage';
import { Card } from '../Card/index';
import './home.scss';
const dataJSON = require('../data.json');




export class Home extends Component {
    render() {
        return (
            <BasePage>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <div className="top-video-container" >
                        <video className="video-data" title="3" id="bgvid3" autoplay="" loop="" muted="" poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                            <source src="http://content.kyazoonga.com/videos/video3.mp4" type="video/mp4" />Your browser does not support the video tag.
                        </video>
                        <h1 className="video-text" >
                            Tickets made simple for everyone, everywhere
                        </h1>
                    </div>
                    <div className="hot" >Hot Tickets</div>
                    <div className="text" >Get tickets to your favourite events</div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                        {dataJSON.hotTickets.map((ticDetails, index) => {
                            return <Card ticDetails={ticDetails} />
                        })}
                    </div>
                    <div className="discover-more" >
                        <button className="dis-button" >Discover More</button>
                    </div>
                </div>
            </BasePage>
        );
    }
}
