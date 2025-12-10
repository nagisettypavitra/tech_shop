import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row pt-4 pb-4 pl-4">
          {/* Column 1 */}
          <div className="col-md-3">
            <h1 className="mb-4 footer_first_align">Tech-Shop</h1>
            <ul className="list-unstyled">
              <li>
                <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  className="input-group flex-nowrap pt-2 pb-2 footer_inputs form-control input-bg"
                />
              </li>
              <li>
                <button
                  type="button"
                  className="btn float-start p-2 mt-3 fw-bolder button_facebook"
                >
                  Subscribe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 text-center">
            <h1 className="mb-4">Help</h1>
            <ul className="list-unstyled cursor-pointer">
              <li><p className="footer_hover">FAQs</p></li>
              <li><p className="footer_hover">Track Order</p></li>
              <li><p className="footer_hover">Cancel Order</p></li>
              <li><p className="footer_hover">Return Order</p></li>
              <li><p className="footer_hover">Warranty Info</p></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 text-center">
            <h1 className="ps-md-3 mb-4">Policies</h1>
            <ul className="list-unstyled cursor-pointer">
              <li><p className="footer_hover">Return Policy</p></li>
              <li><p className="footer_hover">Security</p></li>
              <li><p className="footer_hover">Sitemap</p></li>
              <li><p className="footer_hover">Privacy Policy</p></li>
              <li><p className="footer_hover">Terms & Conditions</p></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 text-center">
            <h3 className="ps-md-0 mb-4">Company</h3>
            <ul className="list-unstyled cursor-pointer">
              <li><p className="footer_hover">About Us</p></li>
              <li><p className="footer_hover">Contact Us</p></li>
              <li><p className="footer_hover">Service Center</p></li>
              <li><p className="footer_hover">Careers</p></li>
              <li><p className="footer_hover">Affiliates</p></li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="text-start">
          <div className="row pt-2 pl-4">
            <div className="col-8">
              <p>2025 | All Right Reserved &copy; <span className="footer_hover fw-bolder">Hema Kothapalli</span></p>
            </div>
            <div className="col-4 text-end">
              <div className="d-flex flex-row justify-content-evenly">
                <FaFacebookF className="fs-5 cursor-pointer footer_hover" />
                <FaTwitter className="fs-5 cursor-pointer footer_hover" />
                <FaInstagram className="fs-5 cursor-pointer footer_hover" />
                <FaLinkedinIn className="fs-5 cursor-pointer footer_hover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
