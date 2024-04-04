import Input from '@mui/material/Input';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import FormInput from '../FormComponents/FormInput';

const schema = yup.object({
  id: yup.number().required('Id is required'),
  age: yup.number().max(3, 'Max age is 3'),
  text: yup.string().length(5, 'Max length is 5')
})


const Form = () => {
  const { register, getValues, handleSubmit, control, formState: { errors,  }, reset, watch } = useForm({
    defaultValues: {
      id: '',
      age: null,
      text: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log('errors', errors);

  const handleTextChange = (e) => {
    console.log('==-->>', e.target.value);
  };

  const onSubmit = data => {
    console.log(data);
  };

  const resetFormValues = () => {
    console.log(watch('text'));

    reset({
      id: '',
      text: 'reset',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          {/*<input*/}
          {/*  style={errors.id ? { border: '1px solid red' } : {}}*/}
          {/*  {...register('id', {*/}
          {/*    required: 'Required'*/}
          {/*  })}*/}
          {/*  type="number"*/}
          {/*/>*/}
          {/*<input*/}
          {/*  {...register('text', {*/}
          {/*    onChange: handleTextChange*/}
          {/*  })}*/}
          {/*  placeholder={'--------'}*/}
          {/*  type="text"*/}
          {/*/>*/}
        </>

        <Input {...register('id')} />
        <Input {...register('text')} />

        <FormInput
          name='age'
          type='number'
          control={control}
          // validate={val => !(val % 3)}
        />


        <button type="submit">Submit</button>
        <button type="button" onClick={resetFormValues}>Reset</button>
      </form>
    </>
  );
};

export default Form;
