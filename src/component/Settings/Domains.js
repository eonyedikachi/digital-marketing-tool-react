import React from 'react';
import { Link } from 'react-router-dom';

export default function Domains() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#F4F5F7',
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link "
              id="view-contact-tab"
              data-toggle="tab"
              to="/dashboard/Settings/"
              role="tab"
              aria-controls="view-contact"
              aria-selected="false"
            >
              Contact Information
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link"
              id="import-tab"
              data-toggle="tab"
              to="/dashboard/Settings/Security"
              role="tab"
              aria-controls="import"
              aria-selected="false"
            >
              Security
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active"
              id="manage-tab"
              data-toggle="tab"
              to="/dashboard/Settings/Domains"
              role="tab"
              aria-controls="manage"
              aria-selected="false"
            >
              Domains
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link "
              id="manage-tab"
              data-toggle="tab"
              to="/dashboard/Settings/ManageMyAccount"
              role="tab"
              aria-controls="manage"
              aria-selected="false"
            >
              Manage My Account
            </Link>
          </li>
        </ul>
      </div>
      <div className="container" style={{ backgroundColor: '#F4F5F7' }}>
        <div className="Jumbotron">
          <div className="card p-3">
            <div className="card-body overflow-auto">
              <div class="active tabcontent">
                <h3 id="PF"> Verify Your Email Domain</h3>
                <p>
                  Verify your email domain to use as a “from” address when you
                  send emails and automations. You can also authenticate the
                  domain to improve deliverability. Have questions? Read how to
                  verify your email domain.
                </p>

                <button class="btn my-3 button">Verify Email Domain</button>

                <hr />
                <h3>Connect Your Domain</h3>
                <p>
                  Have a domain you already own? Connect it to give your landing
                  pages and website a more professional look. Have questions?
                  Read how to connect your domain or subdomain to MartReach.
                </p>
                <button class="btn my-3 button">Connect Domain</button>
                <hr />
                <h3>Purchase a New Domain</h3>
                <p>
                  Find a custom domain name to help visitors remember your brand
                  and drive traffic to your website. Have questions? Read how to
                  purchase a domain with MartReach.
                </p>
                <button class="btn my-3 button">Find Domains</button>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
