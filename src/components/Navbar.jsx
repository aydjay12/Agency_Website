import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border-color: black;
    color: red;
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: white;

    color: red;
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const scrollToTop1 = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const scrollToTop3 = () => {
    window.scrollTo({
      top: 2100,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const scrollToTop4 = () => {
    window.scrollTo({
      top: 2800,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem onClick={scrollToTop1}>Features</MenuItem>
            <MenuItem onClick={scrollToTop2}>Services</MenuItem>
            <MenuItem onClick={scrollToTop3}>Pricing</MenuItem>
            <MenuItem onClick={scrollToTop4}>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
