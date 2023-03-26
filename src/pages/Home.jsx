import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const parsedUserData = JSON.parse(localStorage.getItem("userData2")) || [];
    setUsers(parsedUserData);
  }, []);
  // console.log(users);
  return (
    <>
      <Navbar />
      <Container>
        <SearchSection />
        <CardWrapper>
          {users.map((user) => (
            <Card user={user} key={user.id} />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  margin: 0px 60px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
`;
