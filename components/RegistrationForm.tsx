import { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  SimpleGrid,
  Grid,
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  Input,
  Image,
  Text,
  Textarea,
  HStack,
  Button,
  Heading,
  Select,
  Switch,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  useClipboard,
  useToast,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  const [isSending, setSending] = useState(false);
  const toast = useToast();

  // add additional validation for all the pieces of state
  const RegistrationSchema = Yup.object().shape({
    // title: Yup.string()
    //   .min(2, "Please enter at least 2 characters")
    //   .required("Event title is required"),
    // description: Yup.string(),
    // startDate: Yup.string().required("Start Date is required."),
    // endDate: Yup.string().required("End Date is required."),
    // siteLogo: Yup.string().required("Site Logo is required"),
    // pinEnabled: Yup.boolean(),
    // pin: Yup.string().when("pinEnabled", {
    //   is: true,
    //   then: Yup.string().required("Pin is required"),
    // }),
  });

  const handleSubmit = async (values) => {
    setSending(true);

    const { firstName, lastName, email, programInstance } = values;
    const res = await fetch("/api/create-registrant", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        programInstance: programInstance,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const apiResponse = await res.json();

    if (apiResponse) {
      toast({
        title: "Registered!",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      }),
        setSending(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "youremail@email.com",
        programInstance: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit, errors, touched, values, setFieldValue }) => (
        <Form>
          <Box>
            <Field name='firstName'>
              {({ field, form }) => (
                <FormControl
                  marginTop={4}
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <FormLabel color='gray.900' htmlFor='title'>
                    First Name
                  </FormLabel>

                  {form.errors.firstName && form.errors.firstName ? (
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  ) : null}
                  <Input
                    {...field}
                    id='firstName'
                    placeholder='First Name'
                    color='gray.900'
                    border='1px solid'
                    borderColor='gray.300'
                  />
                </FormControl>
              )}
            </Field>
            <Field name='lastName'>
              {({ field, form }) => (
                <FormControl
                  marginTop={4}
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel color='gray.900' htmlFor='title'>
                    Last Name
                  </FormLabel>

                  {form.errors.lastName && form.errors.lastName ? (
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  ) : null}
                  <Input
                    {...field}
                    id='lastName'
                    placeholder='Last Name'
                    color='gray.900'
                    border='1px solid'
                    borderColor='gray.300'
                  />
                </FormControl>
              )}
            </Field>
            <Field name='email'>
              {({ field, form }) => (
                <FormControl
                  marginTop={4}
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel color='gray.900' htmlFor='title'>
                    Email
                  </FormLabel>

                  {form.errors.email && form.errors.email ? (
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  ) : null}
                  <Input
                    {...field}
                    id='email'
                    placeholder='youremail@emailaddress.com'
                    color='gray.900'
                    border='1px solid'
                    borderColor='gray.300'
                  />
                </FormControl>
              )}
            </Field>
            <Field name='programInstance'>
              {({ field, form }) => (
                <FormControl
                  marginTop={4}
                  isInvalid={
                    form.errors.programInstance && form.touched.programInstance
                  }
                >
                  <FormLabel color='gray.900' htmlFor='title'>
                    Program Instance
                  </FormLabel>

                  {form.errors.programInstance &&
                  form.errors.programInstance ? (
                    <FormErrorMessage>
                      {form.errors.programInstance}
                    </FormErrorMessage>
                  ) : null}
                  <Input
                    {...field}
                    id='programInstance'
                    color='gray.900'
                    border='1px solid'
                    borderColor='gray.300'
                  />
                </FormControl>
              )}
            </Field>

            <Button
              mt={4}
              colorScheme='green'
              type='submit'
              isLoading={isSending}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
