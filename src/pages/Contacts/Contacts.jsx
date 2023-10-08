import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm, ContactList, Filter } from '../../components';

import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error ? <div>Request in progress...</div> : <ContactList />}
    </>
  );
};
