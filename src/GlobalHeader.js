import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeaderAction from './GlobalHeaderAction';
import ProfileAvatar from './ProfileAvatar';

const logo = 'CWDS';
const searchIcon = () => <i className="fa fa-search" />;
const addIcon = () => <i className="fa fa-plus" />;
const notificationIcon = () => <i className="fa fa-bell" />;

class GlobalHeader extends React.Component {
  render() {
    const {
      logoCallback,
      profileId,
      profileName,
      profileAvatar,
      searchCallback,
      addNewCallback,
      notificationsCallback,
      logoutCallback,
    } = this.props;
    return (
      <header role="banner">
        <div className="container">
          <nav className="row">
            <div className="col-xs-1 col-sm-1">
              <div className="logo">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={logoCallback}
                >
                  {logo}
                </button>
              </div>
            </div>
            <div className="col-xs-11 col-sm-11">
              <div className="pull-right">
                <ul className="header-actions">
                  <GlobalHeaderAction
                    icon={searchIcon()}
                    ariaLabel="search"
                    callback={searchCallback}
                    profileId={profileId}
                  />
                  <GlobalHeaderAction
                    icon={addIcon()}
                    ariaLabel="add new"
                    callback={addNewCallback}
                    profileId={profileId}
                  />
                  <GlobalHeaderAction
                    icon={notificationIcon()}
                    ariaLabel="notifications"
                    callback={notificationsCallback}
                    profileId={profileId}
                  />
                  <li>
                    <p className="profile">{profileName}</p>
                  </li>
                  <li>
                    <ProfileAvatar
                      profileId={profileId}
                      profileAvatar={profileAvatar}
                      logoutCallback={logoutCallback}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

GlobalHeader.propTypes = {
  /** callback for logo (CWDS) */
  logoCallback: PropTypes.func,
  /** profile name / user name */
  profileName: PropTypes.string,
  /** profile avatar */
  profileAvatar: PropTypes.node,
  /** profile id OR user id if a user is logged in */
  profileId: PropTypes.string,
  /** callback to logout user */
  logoutCallback: PropTypes.func,
  /** callback to customize search functionality */
  searchCallback: PropTypes.func,
  /** callback to customize 'Add New' functionality */
  addNewCallback: PropTypes.func,
  /** notification callback to show notifications */
  notificationsCallback: PropTypes.func,
};

GlobalHeader.defaultProps = {
  profileName: '',
};

export default GlobalHeader;
