import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdArrowDropDown } from 'react-icons/md'

import { Flex } from '../../atoms/Flex'
import styled from 'styled-components'
import { FlexProps } from 'styled-system'

export interface Props {
  children?: any
  overlay?: any
}

const BreadcrumbStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

const BreadcrumbItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
      content: '';
    }
  }

  &:after {
    margin-right: 8px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.darkGrey};
    content: ' / ';
  }
`

const OverlayStyled = styled(Flex)`
  position: relative;
  & > div {
    opacity: 0;
    visibility: hidden;
    transition: opacity 600ms, visibility 600ms;
  }

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`
const OverlayContentStyled = styled(Flex)<FlexProps>`
  position: absolute;
  top: 18px;
  width: max-content;
  background: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

export const BreadcrumbItem: React.FC<Props> = ({ overlay, children }) => {
  if (overlay) {
    return (
      <BreadcrumbItemStyled>
        {children}
        <OverlayStyled>
          <MdArrowDropDown />
          <OverlayContentStyled>{overlay}</OverlayContentStyled>
        </OverlayStyled>
      </BreadcrumbItemStyled>
    )
  }

  return <BreadcrumbItemStyled>{children}</BreadcrumbItemStyled>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.any,
  overlay: PropTypes.any
}

export const Breadcrumb: React.FC<Props> = ({ children }) => {
  return <BreadcrumbStyled>{children}</BreadcrumbStyled>
}

Breadcrumb.propTypes = {
  children: PropTypes.any
}