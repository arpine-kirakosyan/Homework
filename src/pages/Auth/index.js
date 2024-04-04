import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormInput from '../../components/FormComponent/FormInput';

import "./index.css";

const Auth = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, control, formState: { errors }, name } = useForm({
    defaultValues: {
      id: "",
      name: "",
      age: null
    },
    mode: "onChange"
  });

  const onSubmit = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">

      <FormInput control={control} type="text" placeholder="Name" required />
      <FormInput control={control} type="number" pattern={/(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6}) /}
                 placeholder="Phone number" required />
      <FormInput control={control} type="email" pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} placeholder="Email"
                 required />
      <FormInput control={control} type="checkbox" required />
      <button>Submit</button>
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
