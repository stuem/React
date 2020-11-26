import React from 'react'
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik'
import {
    Box,
    ThemeProvider,
    Button,
    CSSReset,
    Textarea,
    Flex,
    Input
} from '@chakra-ui/core'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function Example() {
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={async (values) => {
                    await sleep(500)
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field name='firstName' placeholder='Jane' />
                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' placeholder='Doe' />
                        <label htmlFor='email'>Email</label>
                        <Field name='email' placeholder='jane@acme.com' type='email' />
                        <Box>
                            <ThemeProvider>
                                <CSSReset />
                                <Button type='submit' disabled={isSubmitting} variantColor='green' variant='outline'>确定</Button>
                            </ThemeProvider>
                        </Box>
                        {/* <button type='submit' disabled={isSubmitting}>
                            Submit
                        </button> */}
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Example
