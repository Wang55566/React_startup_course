import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import Form from "./components/Form";

function App() {
  const onSelected = (item: string) => {
    console.log(item);
  };
  let items = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];

  const [drink, setDrink] = useState({
    type: 'coke',
    price: 30,
    location: {
      x: 0,
      y: 0
    }
  })

  const handleDrink = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 50
    // }
    // setDrink(newDrink)
    setDrink({
      ...drink,
      location: {...drink.location, x: 10}
    })
  }

  const [display, setDisplay] = useState(false);
  return (
    <>
      <div>
        <ListGroup items={items} heading="Cities" onSelected={onSelected} />
      </div>
      <div>
        <Alert>
          <h1>Alert Title</h1>
          <p>Alert content</p>
        </Alert>
        {display && (
          <>
            <div className="alert alert-primary alert-dismissible" role="alert">
              A simple primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  setDisplay(false);
                }}
              ></button>
            </div>
          </>
        )}
        <Button
          handleOnClick={() => {
            setDisplay(true);
          }}
        >
          Children
        </Button>
      </div>
      <Like handleOnClick={() => {console.log('clicked')}}/>
      <Form />
    </>
  );
}

export default App;
