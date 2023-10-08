import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices';

import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
