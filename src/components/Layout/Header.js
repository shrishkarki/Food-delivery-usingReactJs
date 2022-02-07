import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.headers}>
      <h1>Khaja Khaam</h1>
      <HeaderCartButton onShow={props.onShowCart}/>
      </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="delicioius food"/>
    </div>

    </Fragment>
  );
};

export default Header;