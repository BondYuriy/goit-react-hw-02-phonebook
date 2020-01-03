import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) =>
  contacts.length > 0 && (
    <ul>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li className={styles.item} key={name}>
            <Contact
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );

ContactList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
