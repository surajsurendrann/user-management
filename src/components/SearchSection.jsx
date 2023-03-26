import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchSection = () => {
  return (
    <>
      <SearchContainer>
        <SearchInput placeholder="search" />
        <Link to="/adduser">
          <AddUser>Add User</AddUser>
        </Link>
      </SearchContainer>
      {}
    </>
  );
};

export default SearchSection;

const SearchContainer = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  padding-left: 5px;
`;

const AddUser = styled.button`
  height: 30px;
  border: none;
  color: white;
  background: black;
  padding: 0px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #5b5b5b;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
