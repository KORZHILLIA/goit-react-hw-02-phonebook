import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const inputChangeHandler = ({ target }) => {
    const { value } = target;
    onChange(value);
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={inputChangeHandler} />
    </>
  );
};

Filter.defaultProps = {
  onChange: () => {},
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
export default Filter;
