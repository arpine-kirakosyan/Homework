import Input from '@mui/material/Input';
import { Controller } from 'react-hook-form';

const FormInput = ({
  max,
  type = "text",
  control,
  maxLength,
  validate,
  pattern,
  required,
  placeholder

}) => {
  return <Controller
    name="age"
    rules={{ maxLength, max, pattern }}
    control={control}
    render={({ formState: { errors }, field: { onChange, ref, value, name } }) => {

      return <Input
        ref={ref}
        type={type}
        error={errors[name]}
        aria-errormessage={"asasss"}
        required={required}
        placeholder={placeholder}
        onChange={(e) => {
          console.log(value);
          onChange(e);
        }
        } />;
    }}
  />;

};
export default FormInput;
