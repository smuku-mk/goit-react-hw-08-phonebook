import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error ? <div>Request in progress...</div> : <ContactList />}
    </>
  );
};
