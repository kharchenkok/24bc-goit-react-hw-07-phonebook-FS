import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@material-ui/core";
import style from "./Filter.module.css";
import { contactsSelector } from "../../redux/selectors/contactsSelector";
import { getFilterValue } from "../../redux/slice/filterSlice";
// =======================================================

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const contacts = useSelector((state) => contactsSelector(state))
  const userFilter = (e) => {
    
    dispatch(getFilterValue(e));
  };

  return (
    <>
       <h2 className={style.phonebook_titleContact}>My contacts:</h2>
       {contacts.length > 1 &&
    <form noValidate autoComplete="off">
    <p className={style.lable__style}>Find contact by name</p>

      <TextField
        id="filled-basic"
        label="Enter contact name:"
        variant="filled"
        onChange={userFilter}
        value={filter}
        />
    </form>
      }
        </>
  );
};

export default Filter;
