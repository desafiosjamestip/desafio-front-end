import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #fff;
`;

export const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 10px;
  bottom: 20px;
  background: #4d5bf9;
  width: 300px;
  border-radius: 10px;
  border-left: 15px solid #4d5bf9;
  box-sizing: initial:
  transform: width 0.5s;
  @media (max-width: 760px) {
   bottom: 0;
   top: 93%;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   border-left: 0;
  }
`;

export const Links = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 5px;
  padding-top: 40px;
  li {
    position: relative;
    list-style: none;
    width: 100%;
    a {
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #fff;
      &.active {
        background: #fff;
        color: #333;
        border-radius: 20px 0 0 20px;
      }
      .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .title {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        white-space: normal;
      }
    }
  }
  @media (max-width: 760px) {
    padding: 0;
    width: 100%;
    display: flex;
    li {
      a {
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #333;
      &.active {
        background: none;
        color: #fff;
        border-radius: none;
      }
      .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 0;
        line-height: 60px;
        text-align: center;
      }
      .title {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        white-space: normal;
      }
    }
    }
  }
`;