/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { BsPencil } from 'react-icons/bs';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

export default function EditImage({ user, setUser }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noDrag: true, maxFiles: 1, accept: 'image/*' });

  useEffect(() => {
    acceptedFiles.forEach((file) => {
      const body = new FormData();
      body.append('image', file);

      axios
        .post(`${process.env.REACT_APP_URL_API}/users/${user.id}/upload-image`, body,
          { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          setUser({
            ...user,
            avatarUrl: response.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [acceptedFiles]);

  return (
    <div>
      <Avatar src={user.avatarUrl} email={user.email} name={user.name} round size={140} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'pink', 'blue'])} style={{ position: 'absolute' }} />
      <StyledDiv {...getRootProps()}>
        <BsPencil />
        EDITAR
        <input {...getInputProps()} />
      </StyledDiv>
    </div>
  );
}

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
    font-size: 40px;
  }

`;
