import PropTypes from 'prop-types';
import styles from './ContactEl.module.css';
const ContactEl = ({ id, name, number, deleteClickHandler }) => (
  <li className={styles.contactEl}>
    <span className={styles.contactText}>{name}: </span>
    <span className={styles.contactText}>{number}</span>
    <button
      className="btn"
      id={id}
      type="button"
      onClick={() => deleteClickHandler(id)}
    >
      Delete
    </button>
  </li>
);

ContactEl.defaultProps = {
  deleteClickHandler: () => {},
};

ContactEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};
export default ContactEl;
