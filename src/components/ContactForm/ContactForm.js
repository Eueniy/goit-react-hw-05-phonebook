import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) {
      return;
    }
    this.props.onSubmitData({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      number: "",
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              placeholder="Enter number"
              name="number"
              value={number}
              required
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.submitButton} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
