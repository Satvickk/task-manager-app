import * as yup from 'yup'

// Define the Yup schema
export const schema = yup.object({
    title: yup.string("Invalid Description").required("Title is required"),
    description: yup.string("Invalid Description").required("Description is required"),
    priority: yup
      .number("Priority is required")
      .integer("Priority is required")
      .positive("Priority is required")
      .oneOf([1, 2, 3], "Invalid priority")
      .required("Priority is required"),
  });