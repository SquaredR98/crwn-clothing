import {Fragment} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='crwn-logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className={`nav-link ${(location.pathname==='/shop') ? 'active' : ''}`} to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet /> 
        </Fragment>
    )
}

export default Navigation;