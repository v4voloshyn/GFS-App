import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useThemeContext } from '../../hooks/useThemeContext';

import { Switch } from './theme-switcher/Switch.component';

import './Header.scss';

const headerAnimations = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

export const Header: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <motion.div
      className="header"
      variants={headerAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
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
        <Switch theme={theme} toggleTheme={toggleTheme} />
        <FaUserGraduate className="user__avatar" />
        <span className="user__name">User Name</span>
      </div>
    </motion.div>
  );
};
