import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o más")
            .max(15, "El nombre debe de ser menor de 15 caracteres")
            .required("Requerido"),
          lastName: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o más")
            .max(15, "El nombre debe de ser menor de 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 letras")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput 
              label="First Name" 
              name="name" 
              placeholder="First Name" 
            />

            <MyTextInput 
              label="Last Name" 
              name="lastName" 
              placeholder="Last Name" 
            />

            <MyTextInput 
              label="Email Address" 
              name="email"
              type="email"
              placeholder="@google.com"
            />

            <MyTextInput 
              label="Password" 
              name="password1"
              type="password"
              placeholder="******"
            />

            <MyTextInput 
              label="Confirm Password" 
              name="password2"
              type="password"
              placeholder="******"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={ handleReset }>Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
