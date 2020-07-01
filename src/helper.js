import * as Yup from "yup";

const validation = Yup.object({
  name: Yup.string()
    .min(3, "Must have at least 3 characters.")
    .max(16, "Can not be over 16 characters long.")
    .required('Name is required.'),
  email: Yup.string().email("Invalid email.").required('Email is required.'),
  message: Yup.string()
    .min(20, "Must have at least 20 characters.")
    .required("Message is required."),
});

export { validation };
