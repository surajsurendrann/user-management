import React from "react";
import styled from "styled-components";
import AddDetailsSection from "../components/AddDetailsSection";
import Navbar from "../components/Navbar";

const AddUser = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <AddDetailsSection />
      </Wrapper>
    </>
  );
};

export default AddUser;

const Wrapper = styled.div`
  display: flex;
`;
