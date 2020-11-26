import React, { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";

import {
  getContactsOperation,
} from "../../redux/operations/contactsOperations";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import Layout from "../layout/Layout";
import LoaderSpiner from "../loader/Loader";

// ===================================================================

const Phonebook = () => {
  const loader=useSelector(state=>state.loader)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation("contacts"));
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      {loader?<LoaderSpiner/>:<ContactList />}
    </Layout>
  );
};

export default Phonebook;
