import React from 'react';
import { Link } from 'react-router-dom';

export default function ManageMyAccount() {
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
              className="nav-link "
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
              className="nav-link active"
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
                <h3 id="PF"> Manage my Data</h3>
                <h3>Export Data</h3>

                <p>
                  You can export most of your account data into CSV files. We’ll
                  bundle everything together in a single Zip file and send an
                  email to{' '}
                  <span className="unique email-address">User e-mail</span> when
                  it’s done. We have a limit of one export in a 24-hour period.
                  You can download your most recent completed export.
                </p>
                <div>
                  <input
                    type="radio"
                    value="Campaigns"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Campaigns
                  <input
                    type="radio"
                    value="Audience"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Audience
                  <input
                    type="radio"
                    value="Reports"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Reports
                  <input
                    type="radio"
                    value="Templates"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Templates
                  <input
                    type="radio"
                    value="Gallery"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Gallery
                  <input
                    type="radio"
                    value="Events"
                    name="radio"
                    className="m-1"
                  />{' '}
                  Events
                </div>

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
