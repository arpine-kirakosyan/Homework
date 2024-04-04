import Input from '@mui/material/Input';
import { Controller } from 'react-hook-form';

const FormInput = ({
  max,
  type = 'text',
  control,
  pattern,
  validate,
  maxLength
}) => {
  return <Controller
    name="age"
    control={control}
    rules={{
      max,
      pattern,
      validate,
      maxLength,
    }}
    render={({ formState: { errors }, field: { onChange, ref, value, name } }) => {
      return <Input
        ref={ref}
        type={type}
        error={errors[name]}
        onChange={e => {
          console.log(value);
          onChange(e);
        }}
      />;
    }}
  />;
};

export default FormInput;
