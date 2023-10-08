import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm, ContactList, Filter } from '../../components';

import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { Wrapper } from './Contacts.styled';

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
      <Wrapper>
        <h2>Filter</h2>
        <Filter />
        <h2>Contacts</h2>
        {isLoading && !error ? <div>Request in progress...</div> : <ContactList />}
      </Wrapper>
    </>
  );
};
