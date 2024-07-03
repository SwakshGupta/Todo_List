// here we will create our whole form using the formik components previous we have used

// input tags for the form input but here for form creation handling and error messaging we are going to use the formik components

// i have created only two fields in formik you can add the radio button drop down list from lecture 73 Creating form with Formik

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const Formikform = () => {
  const NewValidation = yup.object({
    name: yup.string.required("Name is must").min(4).max(20),
    pass: yup.string.required("password is required"),
  });

  const [formData, setFormData] = useState({}); // we are using this state to display the data

  // when the form data is submitted we will store it inside this state
  return (
    <div>
      <h1>Here is the formik form</h1>

      <Formik
        validationSchema={NewValidation}
        initialValues={{ name: "", password: "" }}
        onSubmit={(values) => {
          // now wheever someone submit the form all the values of the form will get stored inside this value and then we are consoling these
          console.log(values);
          setFormData(values);
        }}
      >
        <Form>
          <label htmlFor=""> Enter Name:</label>

          <Field type="text" name="name" />
          <ErrorMessage name="name" />

          <label htmlFor=""> Password :</label>

          <Field type="text" password="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <h1>{JSON.stringify(formData)}</h1>
    </div>
  );
};

export default Formikform;

// instead of input here we write field here

// for strong password watch the 74 lecture of validation with formik
