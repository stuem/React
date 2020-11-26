import React from 'react'
import {
    Box,
    ThemeProvider,
    Button,
    CSSReset,
    Textarea,
    Flex,
    Input
} from '@chakra-ui/core'
import { Formik, Field, Form } from 'formik'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
function Basic() {
    const list = [
        {
            todol: '徐涇鎮',
            firstName: '乙+',
            lastName: '獎勵1000元',
            email: '沒有未來的日子'
        }
    ]
    return (
        <Box w='85%' margin='auto' border='1px solid peru' boxShadow='#666 0px 0px 7px'>
            <Box textAlign='center' p='5' as='h1' borderBottom='1px solid peru'>編輯</Box>
            {
                list.map((item, index) => {
                    return (
                        <Formik
                            key={index}
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: ''
                            }}
                            onSubmit={async (values) => {
                                console.log(values)
                                if (values.firstName === '' || values.lastName === '' || values.email === '') {
                                    alert('不能為空！')
                                } else {
                                    await sleep(500)
                                    alert(JSON.stringify(values, null, 2))
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box padding='10px 32px' as='h3'>
                                        <Flex>
                                            姓名：<Box>{item.todol}</Box>
                                        </Flex>
                                    </Box>
                                    <Box padding='10px 32px' as='h3'>
                                        <Flex>
                                            <span>操作：</span>
                                            <Field name='firstName'>
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta
                                                }) => (
                                                        <div>
                                                            <input type='text' placeholder={item.firstName} {...field} id='firstName' />
                                                            {meta.touched && meta.error && (
                                                                <div className='error'>{item.firstName}</div>
                                                            )}
                                                        </div>
                                                    )}
                                            </Field>
                                        </Flex>
                                    </Box>
                                    <Box padding='10px 32px' as='h3'>
                                        <Flex>
                                            <span>獎懲：</span>
                                            <Field name='lastName'>
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta
                                                }) => (
                                                        <div>
                                                            <input type='text' placeholder={item.lastName} {...field} id='lastName' />
                                                            {meta.touched && meta.error && (
                                                                <div className='error'>{item.lastName}</div>
                                                            )}
                                                        </div>
                                                    )}
                                            </Field>
                                        </Flex>
                                    </Box>
                                    <Box padding='10px 32px' as='h3'>
                                        <Flex>
                                            <span>評語：</span>
                                            <Field name='email'>
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta
                                                }) => (
                                                        <div>
                                                            <input type='text' placeholder={item.email} {...field} id='email' />
                                                            {meta.touched && meta.error && (
                                                                <div className='error'>{item.email}</div>
                                                            )}
                                                        </div>
                                                    )}
                                            </Field>
                                        </Flex>
                                    </Box>
                                    <Box disabled={isSubmitting}>
                                        <Flex justifyContent='center'>
                                            <Button type='submit' variantColor='green' variant='outline'>确定</Button>
                                        </Flex>
                                    </Box>
                                </Form>
                            )}
                        </Formik>

                    )
                })
            }
            {/* <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <label htmlFor='firstName'>First Name</label>
                    <Field id='firstName' name='firstName' placeholder='Jane' />
                    <label htmlFor='lastName'>Last Name</label>
                    <Field id='lastName' name='lastName' placeholder='Doe' />
                    <label htmlFor='email'>Email</label>
                    <Field
                        id='email'
                        name='email'
                        placeholder='jane@acme.com'
                        type='email'
                    />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik> */}
            <style jsx>
                {
                    `
                        .formi {
                            width:1100px;
                            margin: 0px auto;
                            border: 1px solid peru;
                            border-radius: 4px;
                            -webkit-box-shadow: #666 0px 0px 10px;
                            -moz-box-shadow: #666 0px 0px 10px;
                            box-shadow: #666 0px 0px 10px;

                        }
                        .formi h2{
                            text-align: center;
                        }
                        #firstName{
                            width: 950px;
                            border: 1px solid peru;
                            border-radius: 4px;
                        }
                        #lastName {
                            width: 950px;
                            border: 1px solid peru;
                            border-radius: 4px;
                        }
                        #email{
                            width: 950px;
                            border: 1px solid peru;
                            border-radius: 4px;
                        }
                    `
                }
            </style>
        </Box>
    )
}

export default Basic
