import * as Yup from "yup";
export const contactSchema = Yup.object().shape({
    firstName: Yup.string().required("Name Required"),
    lastName: Yup.string().required("Name Required"),
    companyName: Yup.string().optional(),
    email: Yup.string().required("Email Required").email("Please use valid Email"),
    phone: Yup.string().min(1)
        .required("Phone number is required")
        .matches(/^\d{9}$/, "Phone number must be 9 digits long"),
    message: Yup.string().required("Message")
})

type ContactUsType = Yup.InferType<typeof contactSchema>;
export type { ContactUsType };