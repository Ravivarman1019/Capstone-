
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendEmail } from './store/emailSlice';

const Compose = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Compose Email</h2>
      <Formik
        initialValues={{ recipient: '', subject: '', message: '' }}
        validationSchema={Yup.object({
          recipient: Yup.string().email('Invalid email address').required('Required'),
          subject: Yup.string().required('Required'),
          message: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(sendEmail(values));
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="recipient">Recipient</label>
          <Field name="recipient" type="email" />
          <ErrorMessage name="recipient" />

          <label htmlFor="subject">Subject</label>
          <Field name="subject" type="text" />
          <ErrorMessage name="subject" />

          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Compose;
