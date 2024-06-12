import React from 'react'
import cn from '@/utils/class-names'

import { Button } from "@/components/ui/button"
import { Form, Formik } from "formik";
import FormikInput from '@/components/ui/form/input';
import { contactSchema, ContactUsType } from '@/validation/contact.schema';
import { Textarea } from 'rizzui';
type Props = {
    className: string
}

const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: ""
}

function ContacUsForm({ className }: Props) {

    const createConnection = async (values: ContactUsType) => {
    }

    return (
        <div className={cn(className, "bg-[#fff] p-8 rounded-2xl")}>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={createConnection}
            >
                {({ values }) => (
                    <Form className="flex flex-col items-start space-y-2 w-full">
                        <div className='grid grid-cols-2 justify-between gap-4 w-full'>
                            <FormikInput
                                label=""
                                placeholder="First Name"
                                color="primary"
                                size="lg"
                                name="firstName"
                                className="border-none border-b w-full"
                            />

                            <FormikInput
                                label=""
                                placeholder="Last Name"
                                color="primary"
                                size="lg"
                                name="lastName"
                                className="border-none border-b w-full"
                            />
                        </div>

                        <FormikInput
                            label=""
                            placeholder="Company name (optional)"
                            color="primary"
                            size="lg"
                            name="companyName"
                            className="border-none border-b w-full"
                        />
                        <FormikInput
                            label=""
                            placeholder="Email"
                            color="primary"
                            size="lg"
                            name="email"
                            className="border-none border-b w-full"
                        />
                        <FormikInput
                            label=""
                            type='tel'
                            placeholder="Phone Number"
                            color="primary"
                            prefix="+251"
                            size="lg"
                            name="phone"
                            className="border-none border-b w-full"
                        />

                        <Textarea
                            placeholder='Message'
                            className='w-full'
                            name='message'
                        />

                        <div className='flex justify-center w-full'>
                            <Button type='submit'
                                className='px-16 mt-8 py-5 text-2xl rounded-full text-white font-bold border-[3px] bg-primary hover:text-white hover:bg-primary'
                            >
                                Send
                            </Button>
                        </div>


                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default ContacUsForm