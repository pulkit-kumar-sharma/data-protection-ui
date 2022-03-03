import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Tokenize from "./components/Tokenize/Tokenize";
import DeTokenize from "./components/DeTokenize/DeTokenize";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
    <Header/>
      <Container className="w-100" fluid>
        <Row className="p-5">
          <Col className="p-5 m-2">
            <Tokenize />
          </Col>
          <Col className="p-5 m-2">
            <DeTokenize />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
