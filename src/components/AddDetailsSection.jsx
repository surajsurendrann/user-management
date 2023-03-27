import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./userContext";

const AddDetailsSection = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const { addUser } = useContext(UserContext);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      designation: designation,
      email: email,
      image: image,
    };

    addUser(newUser);

    setName("");
    setDesignation("");
    setEmail("");
    setImage("");
    alert("Successfull");
  }

  return (
    <MainContainer>
      {/* Image section */}

      <Container>
        <ImageContainer>
          {image ? (
            <Img src={image} alt="" name="" />
          ) : (
            <Img
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              alt=""
              name=""
            />
          )}
        </ImageContainer>
        <InputContainer>
          <FileInputContainer>
            <FileLabel>Select an image</FileLabel>
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </FileInputContainer>
        </InputContainer>
      </Container>

      {/* Details Section */}

      <DetailsContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            required
            type="text"
            placeholder="Enter your designation"
            value={designation}
            onChange={(event) => {
              setDesignation(event.target.value);
            }}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </DetailsContainer>
    </MainContainer>
  );
};

export default AddDetailsSection;

const MainContainer = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//Image section

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  min-height: 92vh;
  align-items: center;
  background-color: #1da1f2;
`;

const ImageContainer = styled.div`
  margin: 20px 10px 0px 10px;
`;
const InputContainer = styled.div`
  margin-left: 80px;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10%;
  border: none;
`;

const FileInputContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`;

const FileInput = styled.input`
  /* margin-top: 20px; */
  position: absolute;
  font-size: 100px;
  opacity: 0;
  right: 0;
  top: 0;
`;

const FileLabel = styled.label`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

// Form

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
