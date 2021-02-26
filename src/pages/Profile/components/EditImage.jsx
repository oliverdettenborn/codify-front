/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { BsPencil } from 'react-icons/bs';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { NotificationManager } from 'react-notifications';
import mediaQuery from '../../../utils/mediaQuery';

export default function EditImage({ user, setUser }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noDrag: true, maxFiles: 1, accept: 'image/*' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    acceptedFiles.forEach((file) => {
      const body = new FormData();
      body.append('image', file);
      setLoading(true);

      axios
        .post(`${process.env.REACT_APP_URL_API}/users/avatar`, body,
          { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          setUser({
            ...user,
            avatarUrl: response.data,
          });
        })
        .catch(() => NotificationManager.error('Houve um erro, tente novamente mais tarde'))
        .finally(() => setLoading(false));
    });
  }, [acceptedFiles]);

  return (
    <Container>
      {loading
        ? <PacmanLoader color="#19AACA" />
        : <Avatar src={user.avatarUrl} email={user.email} name={user.name} round size={140} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'pink', 'blue'])} style={{ position: 'absolute' }} />}
      <StyledDiv {...getRootProps()}>
        <BsPencil />
        EDITAR
        <input {...getInputProps()} />
      </StyledDiv>
    </Container>
  );
}

const Container = styled.div`
  margin: 0px 0px 0px 70px;

  ${mediaQuery} {
    margin: 0px;
  }
`;

const StyledDiv = styled.div`
  width:140px;
  height:140px;
  border-radius:50%;
  opacity:0;
  position:relative;
  color: #2C8396;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  &:hover {
    background-color:#fcfcfcc4;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    opacity:100;
  }

  svg {
    font-size: 2.5rem;
  }

`;
