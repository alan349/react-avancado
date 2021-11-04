import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Obrigatório"),
  lastName: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("Obrigatório"),
  cpf: Yup.string()
    .length(11, "CPF deve possuir 11 dígitos")
    .required("Obrigatório"),
  dateBirth: Yup.date()
    .max(new Date(), "Data de Nascimento inválida")
    .required("Obrigatório"),
  gender: Yup.string()
    .required("Obrigatório"),
  celphone: Yup.string()
    .length(11, "Celular deve possuir 11 dígitos incluindo DDD")
    .required("Obrigatório"),
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        cpf: "",
        dateBirth: new Date(),
        gender: "",
        celphone: "",
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
              E-mail:
              <Field type="email" name="email" />
            </label>
            <div>
              {touched.email && errors.email ? errors.email : null}
            </div>
            <br />
            <label>
              Data de Nascimento:
              <Field type="date" name="dateBirth" />
            </label>
            <div>
              {touched.dateBirth && errors.dateBirth ? errors.dateBirth : null}
            </div>
            <br />
            <label>
              Genero:
              <Field as="select" name="gender">
                <option disabled selected value="">Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </Field>
            </label>
            <div>
              {touched.gender && errors.gender ? errors.gender : null}
            </div>
            <br />
            <label>
              Celular:
              <Field type="tel" name="celphone" />
            </label>
            <div>
              {touched.celphone && errors.celphone ? errors.celphone : null}
            </div>
            <br />
            <input type="submit" value="Enviar" />
          </Form>
        </div>
      )}
    </Formik >
  )
}

export default SignupForm;