import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import style from "./ContactList.module.css";
import { deleteContactsOperation } from "../../redux/operations/contactsOperations";


// ======================================================================
const ContactList = () => {
  const filter = useSelector((state) => state.filter);
  const filterContacts = useSelector((state) =>state.contacts.filter((elem) => elem.name.toLowerCase().includes(filter))
  );
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  const deleteUserContact = (id) => {
    dispatch(deleteContactsOperation('contacts',id));
  };

  return (
    <TransitionGroup component="ul" className={style.contact__list}>
      {(contacts.length > 1 ? filterContacts : contacts).map((elem, index) => (
        <CSSTransition
          key={elem.id}
          in={filterContacts.length > 0}
          timeout={250}
          classNames={style}
        >
          <li className={style.contact__item}>
            <p className={style.contact__style}>
              {index + 1 + "."}
              {elem.name + ":"}
            </p>
            <p className={style.contact__style}>{elem.number}</p>

            <Button
              type="button"
              onClick={() => deleteUserContact(elem.id)}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
