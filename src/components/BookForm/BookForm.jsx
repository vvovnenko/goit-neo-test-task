import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import { useId, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookForm.module.css";
import Button from "../Button/Button.jsx";

const BookingSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Comment is required"),
});

const initialValues = {
  username: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export default function BookForm() {
  const [startDate, setStartDate] = useState(null);

  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookingDateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success(
      "Your booking request has been successfully sent to the console",
    );
    actions.resetForm();
    setStartDate(null);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <label htmlFor={nameFieldId}>
              <Field
                className={css.field}
                type="text"
                name="username"
                id={nameFieldId}
                placeholder="Name*"
              />
              <ErrorMessage
                className={css.error}
                name="username"
                component="span"
              />
            </label>
            <label htmlFor={emailFieldId}>
              <Field
                className={css.field}
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>
            <label htmlFor={bookingDateFieldId}>
              <DatePicker
                className={css.field}
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFieldValue("bookingDate", date);
                }}
                placeholderText="Booking date*"
                dateFormat="dd.MM.yyyy"
                onFocus={() => setStartDate(startDate)}
              />
              <ErrorMessage
                className={css.error}
                name="bookingDate"
                component="span"
              />
            </label>
            <label htmlFor={commentFieldId}>
              <Field
                className={css.comment}
                as="textarea"
                name="comment"
                id={commentFieldId}
                placeholder="Comment*"
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </label>
            <Button submit={true}>Send</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
