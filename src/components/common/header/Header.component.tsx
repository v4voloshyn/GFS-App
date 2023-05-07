import { FC } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="/logo.png"
            height="100%"
            alt="GFS Logo"
            className="logo__img"
          />
          <span>GFS APP</span>
        </div>
      </Link>
      <div className="user">
        <FaUserGraduate className="user__avatar" />
        <span className="user__name">User Name</span>
      </div>
    </div>
  );
};
