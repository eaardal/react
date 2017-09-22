import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { createTodo } from './todoActions';

const AddTodoContainer = props =>
  <AddTodo {...props} />;

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddTodoContainer);
