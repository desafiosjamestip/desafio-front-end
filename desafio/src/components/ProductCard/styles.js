import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;

  width: 100%;
  height: fit-content;

  padding: 24px;
  margin-bottom: 24px;

  /* MOBILE */

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 16px;
  }
`

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 100%;

  h3 {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.gray[200]};

    margin-bottom: 24px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 8px;
  }

  /* MOBILE */

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    a {
      margin: 0;
      margin-bottom: 16px;
    }
  }
`

export const ProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  margin-right: 16px;

  background: ${({ edit }) => (edit ? '#31F7DC' : '#F26767')};

  border: none;
  border-radius: 4px;

  transition: opacity .3s ease-in;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    margin: 0;
  }
`
