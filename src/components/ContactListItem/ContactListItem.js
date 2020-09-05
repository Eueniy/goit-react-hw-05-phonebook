import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

export default function ContactListItem({ contact, onDeleteContact }) {
  return (
    <div className={styles.contactField}>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        X
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
