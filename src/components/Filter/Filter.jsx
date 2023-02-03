import PT from 'prop-types';

const Filter = ({ onHandleFilter }) => {
  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input type="text" onChange={onHandleFilter} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onHandleFilter: PT.func.isRequired,
};
