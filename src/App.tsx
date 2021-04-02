import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AlertComponent from './components/Alert';
import Header from './components/Header';

interface IInfoTextObject {
  id: number;
  date: number;
  text: string;
}

const testObject: IInfoTextObject = {
  id: 0,
  date: new Date().getFullYear(),
  text: 'Hello',
};

function App() {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string | object>('');

  const handleToggle = () => {
    // toggle
    text ? setText('') : setText(testObject);
  };

  const getData = async (latitude: string, longitude: string) => {};

  const changeState = (infoTextObject: IInfoTextObject): void => {
    setText(testObject);
  };

  return (
    <Container as="section" fluid="md" className="d-none d-sm-block">
      <Row className="row1 mx-auto p-3">
        <Col xs={6} md={3}>
          1 of 2
        </Col>
        <Col xs={6} md={3}>
          2 of 2
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          1 of 2
        </Col>
        <Col xs={12} md={6}>
          2 of 2
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Header />
      </Row>
      <Row>
        <AlertComponent show={show} setShow={setShow} />
      </Row>
      <Button
        className="m-2"
        size="lg"
        type="button"
        onClick={handleToggle}
        variant="outline-primary"
      >
        Primary
      </Button>
    </Container>
  );
}

export default App;
