import React, { Component } from 'react';
import './card.scss';
import { Col } from 'react-bootstrap';

export class Card extends Component {

    render() {
        const { ticDetails } = this.props;
        return <Col md={12} sm={12} lg={4} >
            <div className="card" >
                <div className="img-section" >
                    <img width="100%" src={ticDetails.imgURL} />
                    <div className="price" >
                        INR 50 - 25,00
        </div>
                </div>
                <div className="ticket-details" >
                    <div className="schedule" >{ticDetails.dateTime}</div>
                    <h3 className="venue" >{ticDetails.detail}</h3>
                    <p className="full-venue" >{ticDetails.venue}</p>
                </div>
                <div className="card-social-link">
                    <div className="pull-left">
                        <a className="btn btn-default btn-xs ical" href="#">
                            <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                        <a className="btn btn-default btn-xs ml-10" href="#">
                            <i className="fa fa-calendar"></i> &nbsp;Google</a>
                    </div>
                    <div className="pull-right">
                        <a className="btn btn-default btn-xs btn-circle" href="#">
                            <i className="fa fa-facebook"></i></a>
                        <a className="btn btn-default btn-xs btn-circle" href="#">
                            <i className="fa fa-twitter"></i></a>
                        <a className="btn btn-default btn-xs btn-circle" href="#">
                            <i className="fa fa-twitter"></i></a>
                        <a className="btn btn-default btn-xs btn-circle" href="#">
                            <i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div></Col>
    }
}
