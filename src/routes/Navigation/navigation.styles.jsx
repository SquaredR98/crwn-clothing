import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled(Link)`
  width: 100%;
  padding-left: 1rem;
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

// .navigation {
  

//   .logo-container {
//     
//   }

//   .nav-links-container {

//     .nav-link {
//     }
//   }
// }
