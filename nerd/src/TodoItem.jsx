import './todoItem.css';
import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({ id, description }) => (
  <div className="todo-item__container">
    <div>
      <input type="checkbox" id={`todoItemCheckbox-${id}`} />
      <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
    </div>
    <input type="button" value="Delete" />
  </div>
);

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TodoItem;
