import './add-todo.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  static propTypes = {
    createTodoItem: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="add-todo__container">
        <div>
          <input type="text" ref={(el) => { this.todoDescriptionEl = el; }} />
        </div>
        <input
          type="button"
          value="Add"
          onClick={() => {
            if (this.todoDescriptionEl) {
              this.props.createTodoItem(this.todoDescriptionEl.value);
            }
          }}
        />
      </div>
    );
  }
}

export default AddTodo;
