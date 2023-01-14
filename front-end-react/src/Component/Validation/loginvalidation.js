import * as Yup from "yup"

export const userSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').trim().required('Required'),
    password:Yup.string().min(4,"password doit contenir 4 caractere").trim().required("password obligatoire")

  });
