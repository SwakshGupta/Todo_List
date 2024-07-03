import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, "too short ")
    .min(20, "too long ")
    .required("name is must"),

  email: Yup.string().email().required("Email is Must"),
});

// we have also defined our custom messages here
