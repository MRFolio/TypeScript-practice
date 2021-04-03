import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
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
  const [loading, setLoading] = useState(true);

  const handleToggle = () => {
    // toggle
    text ? setText('') : setText(testObject);
  };

  const getData = async (latitude: string, longitude: string) => {};

  const changeState = (infoTextObject: IInfoTextObject): void => {
    setText(testObject);
  };

  type Place = 'home' | 'work' | { custom: string };

  interface ITodo {
    id: number;
    text: string;
    done: boolean;
    place?: Place;
  }

  const todos: ITodo[] = [
    {
      id: 1,
      text: 'Do laundry',
      done: false,
      place: 'home',
    },
    {
      id: 2,
      text: 'Email boss',
      done: false,
      place: 'work',
    },
    {
      id: 3,
      text: 'Go to gym',
      done: false,
      place: { custom: 'Gym' },
    },
    {
      id: 4,
      text: 'Buy milk',
      done: false,
      place: { custom: 'Supermarket' },
    },
    { id: 5, text: 'Read a book', done: false },
  ];

  console.log(todos[3].place);
  const filteredTodos = todos.filter((item) => typeof item.place === 'object');

  const formattedFilteredTodos = filteredTodos.map((todo) => ({
    ...todo,
    text: `${todo.text}  in a custom place`,
  }));

  interface ITodo2 {
    id: number;
    text: string;
    done: boolean;
    place: { custom: 'Gym' | 'Supermarket' };
  }

  const filteredTodos2: ITodo2[] = [
    {
      id: 3,
      text: 'Go to gym',
      done: false,
      place: { custom: 'Gym' },
    },
    {
      id: 4,
      text: 'Buy milk',
      done: false,
      place: { custom: 'Supermarket' },
    },
  ];

  const formattedFilteredTodos2 = filteredTodos2.map((todo) => ({
    ...todo,
    text: `${todo.text}  in a ${todo.place.custom} place`,
  }));

  console.log(filteredTodos);
  console.log(formattedFilteredTodos2);

  const placeToString = (place: Place): string => {
    if (place === 'home') {
      return ' Home';
    } else if (place === 'work') {
      return ' Work';
    } else {
      return ' ' + place.custom;
    }
  };

  return (
    <>
      <Container as="section" fluid="lg" className="d-none d-sm-block">
        <Row className="row1 mx-auto p-3">
          <Col
            className="p-4 d-flex justify-content-center align-items-center"
            xs={6}
            md={3}
          >
            {loading ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
              <p className="m-1">1 of 2</p>
            )}
          </Col>
          <Col xs={6} md={3}>
            <p className="text-right">2 of 2</p>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Loading...</span>
            </Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-white shadow-sm p-5 text-center border-bottom border-info"
            xs={12}
            md={6}
            xl={4}
          >
            1 of 2
          </Col>
          <Col
            className="rounded p-3 text-center bg-light border border-warning"
            xs={12}
            md={6}
            xl={4}
          >
            2 of 2
          </Col>
        </Row>
        <Row>
          <Col className="bg-success">1 of 3</Col>
          <Col className="bg-dark">2 of 3</Col>
          <Col className="bg-info bg-gradiant">3 of 3</Col>
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
      <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
