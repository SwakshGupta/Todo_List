import { useFormik } from "formik";
import { FormSchema } from "./yupSchema";

// we can use formik for handling the data, submitting the data

const Formik = () => {
  const formInitialValue = {
    // we will use these values in the input fields
    name: "",
    email: "",
  };

  const {formik,errors,handleBlur,touched} = useFormik({ // all the error are stored in this store
    // now we will use this formik we will use different properties of formik
    // this is the useFormik hook

    initialValues: formInitialValue,
    validationSchema: FormSchema, // here we have inserted the schema of the yup
    onSubmit: (
      values // when we submit the form this handle submit event will work and will save the data inside the value
    ) => {
      console.log(values);
    },
  });

  // formik has built in properties like formik.handlechange so we don't have to create use state hook for each input

  // formik.handlesubmit can be used to submit the data in the form
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={handleBlur}
          value={formik.values.name}
        />

        
        <br />
        {errors.name && touched.name ? (<span style ={{color:red}}>{errors.name}</span>):null }
        <label htmlFor="">Enter Email:</label>
        <input
          type="text"
          name="email"
          onChange={formik.handleChange} // Added this line
          value={formik.values.email}
        />
        <br />
        {errors.email && touched.email ? (<span style ={{color:red}}>{errors.name}</span>):null }
        <label htmlFor="">Enter Email:</label>
        <button onSubmit={submit}>Submit</button>
      </form>
    </div>
  );
};

export default Formik;


// we use formik and yup to achieve form handeling and form validation


/*
for yup
 
1. We have to create a schema file where we will apply all the validate rule and place them on the input fields

2. Then we will include this in the useFormik hook  

3. handle blur is use to blur the error message which is coming in the fields we want 

4. now we want the error message to come only when they are touched  so to apply that we will apply the  touch event 

5.  Strong password you can apply from 72 video of more validation with YUP and Formik 16:28

/



/*

<form>

<input   type= "" />


</form>




/


