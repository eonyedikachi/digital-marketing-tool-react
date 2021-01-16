import React from 'react';
import { Link } from 'react-router-dom';

export default function Security() {
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
              className="nav-link active"
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
                <h3 id="PF">Two-Factor Authentication</h3>
                <p>
                  Two-factor authentication is a security process that requires
                  two forms of user ID to log in to MartReach. It helps keep
                  your account safe.There are two ways to do this: use an
                  authenticator app, or enable SMS account verification.
                </p>
                <h5>Use an authenticator app for two factor authentication</h5>
                <p>
                  MartReach integrates with mobile apps for two-factor
                  authentication.
                </p>

                <button class="btn my-3 button">Enable</button>

                <hr />
                <h3>Account Verification</h3>
                <p>
                  If we see patterns that seem unusual for your account, we'll
                  need to verify your identity.
                </p>
                <h5>Verify identity via SMS</h5>
                <button class="btn my-3 button">Enable</button>
                <h5>Verify identity with security questions</h5>
                <button class="btn my-3 button">Enable</button>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
