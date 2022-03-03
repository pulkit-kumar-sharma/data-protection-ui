import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeTokenize.module.css';
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DeTokenizationService from '../../service/DeTokenizationService';

const DeTokenize = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    DeTokenizationService.deTokenize(input).then((res) => {
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
            <h2>De-Tokenize</h2>
          </Button>
        </Form>
      </Container>
      <Container className="w-100 bg-primary p-5 text-center" fluid>
        <h1 className="text-light">De-Tokenized Value : {output}</h1>
      </Container>
    </>
  );
};

DeTokenize.propTypes = {};

DeTokenize.defaultProps = {};

export default DeTokenize;
