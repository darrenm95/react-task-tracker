import { useForm } from 'react-hook-form';
import { ITask } from './TaskTracker';

type AddTaskProps = {
  onAdd(task: ITask): void;
};

type FormValues = {
  text: string;
  day: string;
  reminder: boolean;
};

const AddTask = ({ onAdd }: AddTaskProps): JSX.Element => {
  const defaultValues: FormValues = {
    text: '',
    day: '',
    reminder: false,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data: FormValues): void => {
    const id: number = Math.floor(Math.random() * 10000) + 1;
    const task: ITask = { id, ...data };
    onAdd(task);
    reset(defaultValues);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <label htmlFor='text'>Task</label>
        <input
          id='text'
          placeholder='Add Task'
          {...register('text', {
            required: 'Task is required.',
          })}
        />
        {errors.text && <p style={{ color: 'red' }}>{errors.text.message}</p>}
      </div>

      <div className='form-control'>
        <label htmlFor='day'>Day & Time</label>
        <input id='day' placeholder='Add Day & Time' {...register('day')} />
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input id='reminder' type='checkbox' {...register('reminder')} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
