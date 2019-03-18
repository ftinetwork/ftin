import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import './Sidenav.less';

//const isNews = (match, location) => location.pathname.match(/trending/);
const isWallet = (match, location) => location.pathname.match(/wallet/);
const isReplies = (match, location) => location.pathname.match(/replies/);
const isFtin = (match, location) => location.pathname.match(/ftin/);

const Sidenav = ({ username }) =>
  username ? (
    <ul className="Sidenav">
    
     <li>
        <NavLink to="/ftin" activeClassName="Sidenav__item--active" isActive={isFtin}>
          <i className="iconfont icon-flag" />
          <FormattedMessage id="ftin" defaultMessage="FTIN" />
        </NavLink>
      </li>
    
      
     
{/* <li>
        <NavLink to="/" activeClassName="Sidenav__item--active" exact>
          <i className="iconfont icon-clock" />
          <FormattedMessage id="feed" defaultMessage="Feed" />
        </NavLink>
      </li> 
       <li>
        <NavLink to="/trending" activeClassName="Sidenav__item--active" isActive={isNews}>
          <i className="iconfont icon-headlines" />
          <FormattedMessage id="news" defaultMessage="News" />
        </NavLink>
      </li>  */}

      <li>
        <NavLink to="/replies" activeClassName="Sidenav__item--active" isActive={isReplies}>
          <i className="iconfont icon-message" />
          <FormattedMessage id="replies" defaultMessage="Replies" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/wallet" activeClassName="Sidenav__item--active" isActive={isWallet}>
          <i className="iconfont icon-wallet" />
          <FormattedMessage id="wallet" defaultMessage="Wallet" />
        </NavLink>
      </li>
     
      <li>
        <NavLink to={`/@${username}`}>
          <i className="iconfont icon-mine" />
          <FormattedMessage id="my_profile" defaultMessage="My profile" />
        </NavLink>
      </li>

    </ul>
  ) : null;

Sidenav.propTypes = {
  username: PropTypes.string,
};

Sidenav.defaultProps = {
  username: undefined,
};

export default Sidenav;
