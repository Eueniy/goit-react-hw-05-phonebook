import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ContactListItem from "./../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={styles}>
          <li className={styles.contactListItem}>
            <ContactListItem
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
