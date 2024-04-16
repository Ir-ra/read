"use client";

import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";

import ERROR from "../../../public/img/input_error.svg";
import Validation from "../../../public/img/input_validation.svg";
import { Button } from "../Button/Button";

const inputStyles =
  "bg-AccentBackground w-full font-light box-border border-b border-Black placeholder:text-xxxs tablet:placeholder:text-xxs placeholder:text-Black placeholder:uppercase py-4 px-0 tablet:px-6 outline-none";

interface FormValues {
  firstName: string;
  email: string;
}

export const SubscribeForm: React.FC = () => {
  const [showValidationIcon, setShowValidationIcon] = useState(false);

  const initialValues: FormValues = {
    firstName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("ERROR"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values);
        }, 500);
        resetForm();
      }}
    >
      {({ values, errors, handleChange, handleBlur }) => (
        <Form
          className="flex flex-col tablet:flex-row w-full gap-[10px] tablet:gap-10"
          noValidate
        >
          <div className="relative w-full">
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name"
              className={inputStyles}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 relative w-full mb-[60px] tablet:mb-0">
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className={inputStyles}
              autoComplete="off"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                setShowValidationIcon(true);
                setTimeout(() => setShowValidationIcon(false), 1000);
              }}
              onBlur={handleBlur}
              value={values.email}
            />

            {showValidationIcon && (
              <div className="flex absolute bottom-[-22px] tablet:bottom-[-22px]">
                <Image src={Validation} alt="validation icon" />
                <p className="ml-1">Validation</p>
              </div>
            )}

            {errors.email && !showValidationIcon && (
              <div className="flex absolute bottom-[-22px] tablet:bottom-[-22px]">
                <Image src={ERROR} alt="error icon" />
                <p className="ml-1">{errors.email}</p>
              </div>
            )}
          </div>

          <Button title={"Subscribe"} />
        </Form>
      )}
    </Formik>
  );
};
