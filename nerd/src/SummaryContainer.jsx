import React from 'react';
import { connect } from 'react-redux';
import Summary from './Summary';

const SummaryContainer = props =>
  <Summary {...props} />;

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedTodosCount: state.todos.filter(t => t.isCompleted).length,
});

export default connect(
  mapStateToProps,
)(SummaryContainer);
