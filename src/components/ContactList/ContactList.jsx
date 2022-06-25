import PropTypes from 'prop-types';
import ContactEl from './ContactEl';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteClickHandler }) => {
  const contactsList = contacts.map(({ id, name, number }) => (
    <ContactEl
      key={id}
      deleteClickHandler={deleteClickHandler}
      name={name}
      number={number}
    />
  ));
  return <ul className={styles.list}>{contactsList}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
  deleteClickHandler: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteClickHandler: PropTypes.func,
};

export default ContactList;
