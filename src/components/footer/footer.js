import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

class footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h4 className="title">Sumi</h4>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
                            <ul className="social-icon">
                                <Link to="/" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></Link >
                                <Link to="/" className="social"><i className="fa fa-twitter" aria-hidden="true"></i></Link >
                                <Link to="/" className="social"><i className="fa fa-instagram" aria-hidden="true"></i></Link >
                                <Link to="/" className="social"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link >
                                <Link to="/" className="social"><i className="fa fa-google" aria-hidden="true"></i></Link >
                                <Link to="/" className="social"><i className="fa fa-dribbble" aria-hidden="true"></i></Link >
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title">My Account</h4>
                            <span className="acount-icon">
                                <Link to="/"><i className="fa fa-heart" aria-hidden="true"></i> Wish List</Link >
                                <Link to="/"><i className="fa fa-cart-plus" aria-hidden="true"></i> Cart</Link >
                                <Link to="/"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link >
                                <Link to="/"><i className="fa fa-globe" aria-hidden="true"></i> Language</Link >
                            </span>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title">Category</h4>
                            <div className="category">
                                <Link to="/">Chuyển Sinh</Link >
                                <Link to="/">Đam Mỹ</Link >
                                <Link to="/">Manga</Link >
                                <Link to="/">Ngôn Tình</Link >
                                <Link to="/">Romance</Link >
                                <Link to="/">Xuyên Không</Link >
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="title">Payment Methods</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="payment">
                                <li><Link to="/"><i className="fa fa-cc-amex" aria-hidden="true"></i></Link ></li>
                                <li><Link to="/"><i className="fa fa-credit-card" aria-hidden="true"></i></Link ></li>
                                <li><Link to="/"><i className="fa fa-paypal" aria-hidden="true"></i></Link ></li>
                                <li><Link to="/"><i className="fa fa-cc-visa" aria-hidden="true"></i></Link ></li>
                            </ul>
                        </div>
                    </div>
                    <hr />>
    
                <div className="row text-center"> © 2020. Made with  by khanhkt.</div>
                </div>


            </footer>
        )
    }
}
export default footer;