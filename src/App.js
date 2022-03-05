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
        <Row className="bg-dark pb-5">
          <Col className="bg-dark">
            <Tokenize />
          </Col>
          <Col className="bg-dark">
            <DeTokenize />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
