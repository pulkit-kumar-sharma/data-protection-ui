import React from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import TokenizationService from '../../service/TokenizationService';

const Tokenize = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    TokenizationService.tokenize(input).then((res) => {
        setOutput(res.data);
    });
  };

  return (
    <>
      <Container className="w-100 bg-info p-5" fluid>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-3">
            <Form.Control
              className="form-control-lg p-5 text-center"
              placeholder="Enter Input Here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            <h2>Tokenize</h2>
          </Button>
        </Form>
      </Container>
      <Container className="w-100 bg-primary p-5 text-center" fluid>
        <h1 className="text-light">Tokenized Value : {output}</h1>
      </Container>
    </>
  );
};

export default Tokenize;
