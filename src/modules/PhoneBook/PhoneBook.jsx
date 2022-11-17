import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import {
  fetchContacts,
  removeContact,
  addContact,
} from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selector";
import { useDispatch } from "react-redux";

import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

import s from "./PhoneBook.module.css";

const PhoneBook = () => {

  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const contactsStore = useSelector(getContacts);
  const { items, error, loading } = contactsStore;
  
  const getVisibleContacts = () => {
    if (!filter) {
      return items;
    }
    const newItems = items.filter((e) => {
      const { name } = e;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return newItems;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAdd = useCallback(
    (el) => dispatch(addContact(el)),
    [dispatch]
  );
  const onRemove = useCallback(
    (id) => {
      dispatch(removeContact(id));
    },
    [dispatch]
  );

  const changeFilter = useCallback(
    ({ target: { value } }) => setFilter(value.trim()),
    [setFilter]
  );

  const visibleContacts = getVisibleContacts();

  return (
    <div className="container">
      <div className={s.wrapper}>
        <div>
          <h1 className="title">Phonebook</h1>
          <Filter onChange={changeFilter} />
          {loading && <p>Loading...</p>}
          {error && <p>{`Error: ${error}`}</p>}
          {items.length > 0 && !error && !loading && (
          <Contacts items={visibleContacts} onClick={onRemove} />
          )}
        </div>

        <div>
          <h2 className="title">Contacts</h2>
          <ContactForm onSubmit={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;
