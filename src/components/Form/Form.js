import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, getValues, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      id: '',
      text: '',
    }
  });

  console.log('errors', errors);



  const handleTextChange = (e) => {
    console.log('==-->>', e.target.value);
  };

  const onSubmit = data => {
    console.log(data);
  }

  const resetFormValues = () => {
    console.log(watch('text'));

    reset({
      id: '',
      text: 'reset',
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={errors.id ? { border: '1px solid red' } : {}}
          {...register('id', {
            required: 'Required'
          })}
          type="number"
        />
        <input
          {...register('text', {
            onChange: handleTextChange
          })}
          placeholder={'--------'}
          type="text"
        />
        <button type='submit'>Submit</button>
        <button type='button' onClick={resetFormValues}>Reset</button>
      </form>
    </>
  );
};

export default Form;
