import { Dispatch, SetStateAction } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface AlertComponentProps {
  show: boolean;
  setShow: Dispatcher<boolean>;
}

const stringToArray = <T extends {}>(arg: T): T[] => {
  return [arg];
};

const makeArray = <X, Y = string>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v1 = makeArray<number, number>(2, 5);
const v2 = makeArray<number, string>(2, 'tere');
const v3 = makeArray<string | null>('a', 'kartul');

const planets = {
  mercury: { name: 'Mercury', position: 1 },
  venus: { name: 'Venus', position: 2 },
  earth: { name: 'Earth', position: 3 },
};

interface IObjectKeys {
  [key: string]: string | number | undefined;
}

interface IPlanetObjects extends IObjectKeys {
  name: string;
  position?: number;
}

// const planetsArr: IObjectKeys[] = Object.keys(planets).map(
//   (key: any): any => planets[key]
// );
// console.log('planetsArr', planetsArr);

const AlertComponent = ({
  show,
  setShow,
}: AlertComponentProps): JSX.Element => {
  // const name = <T>(array: T[]): T => {
  //     return array.length};

  const arrayExample = [
    { id: 0, name: 'Mary' },
    { id: 1, name: 'John' },
  ];

  const exampleMap = arrayExample.map(({ id, name }) => ({
    id: id + 1,
    name: `${name} ...`,
  }));
  console.log(exampleMap);

  return (
    <>
      <Alert show={show} variant="info" dismissible className="mt-5">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
};

export default AlertComponent;
