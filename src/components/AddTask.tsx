import React, { useState } from 'react';

const AddTask = ({ onAdd }: AddTaskProps): JSX.Element => {
  const initialState = {
    text: '',
    day: '',
    reminder: false,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!state.text) {
      alert('Please add a task');
      return;
    }

    onAdd({ ...state });

    setState(initialState);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          name='text'
          placeholder='Add Task'
          value={state.text}
          onChange={handleChange}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          name='day'
          placeholder='Add Day & Time'
          value={state.day}
          onChange={handleChange}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          name='reminder'
          checked={state.reminder}
          onChange={handleChange}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
