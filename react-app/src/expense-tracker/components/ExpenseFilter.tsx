import React from 'react'
import { category } from '../../App'

interface Props {
  onSeletCategory: (category: string) => void
}

const ExpenseFilter = ({ onSeletCategory }: Props) => {
  return (
    <select className="form-select" onChange={ (event) => onSeletCategory(event.target.value)}>
      <option value="">All Categories</option>
      {category.map( c => <option key={c} value={c}>{c}</option>)}
    </select>
  )
}

export default ExpenseFilter
