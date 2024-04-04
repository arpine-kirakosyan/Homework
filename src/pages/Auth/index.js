import { useState } from 'react';
import DateRangePicker from 'react-date-range/dist/components/DateRangePicker';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import FormInput from '../../components/FormComponent/FormInput';

import "./index.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Auth = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const { handleSubmit, control } = useForm({
    defaultValues: {
      id: "",
      name: "",
      age: null,
      range: {
       selection: {
         key: 'selection',
         startDate: '',
         endDate: ''
       }
      }
    },
    mode: "onChange"
  });

  const onSubmit = (data) => {
    // navigate("/");
    console.log('data, ', data);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <FormInput name={'name'} control={control} type="text" placeholder="Name" required />
      <FormInput name={'phone'} control={control} type="number"
                 placeholder="Phone number" required />
      <FormInput name={'email'} control={control} type="email" pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} placeholder="Email"
                 required />
      <FormInput name={'check'} control={control} type="checkbox" required />
      <button>Submit</button>

      <Controller
        name='range'
        control={control}
        render={({field: { onChange, ref, value}}) => {

          return (
            <DateRangePicker
              ref={ref}
              ranges={[value.selection]}
              onChange={e => {
                onChange({
                  selection: {
                    key: e.selection.key,
                    startDate: e.selection.startDate,
                    endDate: e.selection.endDate
                  }
                })
              }}
            />
          )
        }}
      />

        {/*<Button variant="contained" >Contained</Button>*/}
      {/*<input type="text"*/}
      {/*  {...register("id",{*/}
      {/*    required: 'Required'*/}
      {/*  })}/>*/}
      {/*<input type="tel"*/}
      {/*       {...register("phone",{*/}
      {/*         required: 'Required'*/}
      {/*       })}/>*/}
      {/*<input type="email"*/}
      {/*       {...register("email",{*/}
      {/*         required: 'Required'*/}
      {/*       })}/>*/}
      {/*<input type="checkbox"/>*/}

    </form>
  );
};
export default Auth;
