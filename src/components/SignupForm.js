import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Obrigatório"),
  lastName: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Obrigatório")
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        description: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert("Dados enviados");
      }}
    >
      {({ values, touched, errors }) => (
        <div>
          <Form >
            <label>
              Nome:
              <Field type="text" name="firstName" />
            </label>
            <div>
              {touched.firstName && errors.firstName ? errors.firstName : null}
            </div>
            <br />
            <label>
              Sobrenome:
              <Field type="text" name="lastName" />
            </label>
            <div>
              {touched.lastName && errors.lastName ? errors.lastName : null}
            </div>
            <br />
            <label>
              Genero:
              <Field as="select" name="gender">
                <option>Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </Field>
            </label>
            <br />
            <label>
              Descrição:
              <Field as="textarea" name="description" />
            </label>
            <br />
            <input type="submit" value="Enviar" />
          </Form>
        </div>
      )}
    </Formik >
  )
}

export default SignupForm;