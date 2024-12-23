import { Fragment, useContext } from 'react' ;
import { Outlet , Link } from 'react-router-dom';

import CartIcon from '../../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../../assets/083 crown.svg';
import { UserContext } from '../../../contexts/user.context';

import {signOutUser} from '../../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/' >
          <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/Shop'>
               Shop
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                  SIGN OUT 
                </span>
              ) : (
                <Link className='nav-link' to='/auth'>
                  SIGN IN 
               </Link>
              )}
              <CartIcon />
          </div>
          <CartDropDown />
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;