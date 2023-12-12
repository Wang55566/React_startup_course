import React from "react";
import { category } from "../../App";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(1).max(1000000),
  category: z.enum(category)
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<ExpenseFormData>({ resolver: zodResolver(schema)})

  return (
    <form action="">
      <div className="mb3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <div className="text-danger">{errors.description.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="amout" className="form-label">
          Amount
        </label>
        <input {...register('amount')} id="amout" type="number" className="form-control"></input>
        {errors.amount && <div className="text-danger">{errors.amount.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register('category')} id="category" className="form-select">
          <option value=""></option>
          {category.map( c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <div className="text-danger">{errors.category.message}</div>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
