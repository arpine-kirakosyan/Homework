import Input from '@mui/material/Input';
import { Controller } from 'react-hook-form';

const FormInput = ({
  name,
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
    name={name}
    rules={{ maxLength, max, pattern, required }}
    control={control}
    render={({ formState: { errors }, field: { onChange, ref, value, name } }) => {

      return <Input
        ref={ref}
        type={type}
        error={errors[name]}
        aria-errormessage={"asasss"}
        required={required}
        placeholder={placeholder}
        onChange={onChange} />;
    }}
  />;
};

export default FormInput;
