import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({ id, description }) => (
  <div>
    <input type="checkbox" id={`todoItemCheckbox-${id}`} />
    <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
  </div>
);

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TodoItem;
