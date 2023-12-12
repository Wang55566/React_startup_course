import React from "react";
import { category } from "../../App";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="mb3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amout" className="form-label">
          Amount
        </label>
        <input id="amout" type="number" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {category.map( c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
