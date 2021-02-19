import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Button,
  MenuDivider,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import axios from 'axios';
import UserAvatar from './Avatar';
import UserContext from '../context/UserContext';
import media from '../utils/mediaQuery';

const ButtonTransparent = styled(Button)`
  background: transparent!important;
`;

export default function Header({ user }) {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    axios
      .post(`${process.env.REACT_APP_URL_API}/users/signOut`,
        null,
        { headers: { Authorization: `Bearer ${user.token}` } })
      .finally(() => setUser({}));
  }

  return (
    <Container>
      <div>
        <h5>
          <Link to="home">
            codify
          </Link>
        </h5>
        <Link to="/home">
          <Text>
            Home
          </Text>
        </Link>
        <Link to="/cursos">
          <Text>
            Cursos
          </Text>
        </Link>
      </div>
      <Menu>
        <MenuButton as={ButtonTransparent} rightIcon={<FiChevronDown color="#3D3D3D" />}>
          <UserAvatar user={user} size="40" />
        </MenuButton>
        <Portal>
          <Box maxW="sm" w="100px">
            <MenuItem
              onClick={() => history.push('/perfil')}
              _hover={{ bg: 'transparent' }}
            >
              <Text>
                Perfil
              </Text>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              _hover={{ bg: 'transparent' }}
            >
              <Text>Sair</Text>
            </MenuItem>
          </Box>
        </Portal>
      </Menu>
    </Container>
  );
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: #262626;
    padding: 0 30px 15px 30px;
    margin-top: 15px;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    h5{
        color: #333333;
        font-size: 2rem;
        font-family: 'Zilla Slab Highlight', cursive;
        letter-spacing: 2px;
        margin-right: 5px;
        cursor: pointer;
    }
    .sb-avatar{
        cursor: pointer;
        margin-right: 10px;
    }

    ${media}{
      padding-left: 10px;
    }
`;
const Text = styled.h6`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    text-align: center;
    width: 100%;
    color: #262626;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    ${media}{
      margin: 10px;
    }
`;

const Divider = styled(MenuDivider)`
  border-color: #D7D7D7!important;
  opacity: 1!important;
`;

const Box = styled(MenuList)`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15)!important;
  border-radius: 0px 0px 10px 20px!important;
`;
