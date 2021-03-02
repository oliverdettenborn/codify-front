import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

export default function Button({
  to, size, color, top, bottom, left, right,
}) {
  return (
    <Link to={to || '/'}>
      <Icon
        color={color}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
      >
        <FaChevronLeft size={size * 0.65} />
      </Icon>
    </Link>
  );
}

const Icon = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  max-width: 35px;
  height: 50px;
  max-height: 35px;
  position: absolute;
  z-index: 999999999999999999999999;
  
  ${(props) => (
    css`
      left: ${props.left || 'initial'};
      top: ${props.top || 'initial'};
      right: ${props.right || 'initial'};
      bottom: ${props.bottom || 'initial'};
      color: ${props.color || '#FFF'};
      width: ${props.size || '50px'};
      height: ${props.size || '50px'};
    `
  )}
`;
