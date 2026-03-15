import * as Yup from "yup";

export const employeeSchema = Yup.object({
    fullName: Yup.string().required("Full name is required")
        .min(2, "Full name must be at least 3 characters"),

    email: Yup.string().email("Please enter a valid email").required("Email is required"),

    phoneNumber: Yup.string().required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    position: Yup.string().required("Position is required"),

    employeeId: Yup.string().required("Employee ID is required")
        .min(4, "Employee ID must be at least 4 characters"),

});

export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});