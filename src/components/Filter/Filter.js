import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import s from '../ContactForm/ContactForm.module.css';



export const Filter = () => {
    const filterValue = useSelector(state => state.filter);
    const dispatch = useDispatch();
    
    const handlerFilterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };


    return (
        <div className={s.container}>
            <label>
            Find contacts by name
            <input type="text" name="filter" value={filterValue} onChange={handlerFilterChange} />
        </label>
        </div>
    )
}