import { useFormik } from "formik";
import { FC } from "react";
type FormProp = {
  onSubmit: (data: { email: string; password: string }) => void;
};
const LoginForm: FC<FormProp> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: any) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
