import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const category = ["Transportation", "Housing", "Electronics"];

function App() {
  const onSelected = (item: string) => {
    console.log(item);
  };
  let items = ["Taipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung"];

  const [drink, setDrink] = useState({
    type: "coke",
    price: 30,
    location: {
      x: 0,
      y: 0,
    },
  });

  const handleDrink = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 50
    // }
    // setDrink(newDrink)
    setDrink({
      ...drink,
      location: { ...drink.location, x: 10 },
    });
  };

  const [display, setDisplay] = useState(false);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      decription: "Buy a car",
      amount: 10000,
      category: "Transportation",
    },
    { id: 2, decription: "Buy a house", amount: 100000, category: "Housing" },
    { id: 3, decription: "Buy a book", amount: 100, category: "Education" },
    {
      id: 4,
      decription: "Buy a computer",
      amount: 1000,
      category: "Electronics",
    },
  ]);

  const [selectedCategory, setSelectedCategory ] = useState("")

  const visibleExpense = selectedCategory ? expenses.filter( expense => expense.category === selectedCategory): expenses

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
      <Like
        handleOnClick={() => {
          console.log("clicked");
        }}
      />
      <Form />
      <div className="mb-3 mt-3">
        <ExpenseFilter onSeletCategory={(category) => setSelectedCategory(category)}/>
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
      <div className="mt-5">
        <ExpenseForm />
      </div>
    </>
  );
}

export default App;
