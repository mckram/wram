import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  color: black;
  padding: 20px;
  margin-left:40%;

  li {
    color: black;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: white;
    color:white;
    text-align: center;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: auto;
    width: 300px;
    padding-top: 4.5rem;
    margin: auto;
    padding-right: 30px;
    border-radius: 6px;
  }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "rgb(35, 43, 121)" : "rgb(35, 43, 121)")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [burg, setBurg] = useState("#1d2679");
  const [open, setOpen] = useState(false);
  const navFont= "#1d2679";

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setBurg("#1d2679") : setBurg("#1d2679");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const clicker = () => {
    setOpen(!open);
  }
  return (
    <>
      <StyledBurger open={open} onClick={clicker}>
        <div style={{ backgroundColor: burg }} />
        <div style={{ backgroundColor: burg }} />
        <div style={{ backgroundColor: burg }} />
      </StyledBurger>
      <Ul className = 'ul' open={open}>
        <NavLink
          className={({ isActive }) => (isActive ? "Links" : "LinksA")}
          style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
          to="/services"
          onClick={() => setOpen(!open)}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "Links" : "LinksA")}
          style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
          to="/contact"
          onClick={() => setOpen(!open)}
        >
          Contact
        </NavLink>
      </Ul>
    </>
  );
};

export default Burger;
