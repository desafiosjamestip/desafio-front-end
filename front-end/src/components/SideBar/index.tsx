import { Container, NavContainer, Links } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faList } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <Container>
      <NavContainer>
        <Links>
          <li className='list active'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <span className='icon'><FontAwesomeIcon icon={faBox} size='lg'/></span>
              <span className='title'>Produtos</span>
            </NavLink>
          </li>
          <li className='list'>
            <NavLink to='/categories' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <span className='icon'><FontAwesomeIcon icon={faList} size='lg'/></span>
              <span className='title'>Categorias</span>
            </NavLink>
          </li>
        </Links>
      </NavContainer>
    </Container>
  )
}

export default SideBar;