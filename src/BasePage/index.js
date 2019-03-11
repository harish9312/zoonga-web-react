import React, { Component } from 'react';
import './basePage.scss';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

export class BasePage extends Component {
    render() {
        return (
            <div className="base-page">
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
