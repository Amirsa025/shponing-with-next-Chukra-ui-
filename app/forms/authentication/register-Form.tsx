import React from 'react';
import {Form, withFormik} from "formik";
import InputFeild from "../../../Components/shared/Input";
import {Button} from "@chakra-ui/react";
import * as yup from 'yup';
import {IRegisterFormValues} from "./index";
import callApi from "../../helper/callApi";
import Router from "next/router";
const InnerRegisterForm = (props:IRegisterFormValues)=>{
    return (
        <>
            <Form>
                <InputFeild name="name" type="text" placeholder='name' errorMessage="errorMessages" inputCLassName={"fieldName"} />
                <InputFeild name="email"  type='email'  placeholder='Email' errorMessage="errorMessages" inputCLassName={"fieldName"}  />
                <InputFeild type="password" name="password" placeholder="Password" errorMessage="errorMessages" inputCLassName={"fieldName"}  />
                <Button type='submit' fontFamily={'heading'}
                        mt={8}
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,pink.400)',
                            boxShadow: 'xl',
                        }}>ثبت نام </Button>
            </Form>
        </>
    )
}


interface RegisterFormProps {
    name?: string
}
let RegisterSchema:any =yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email()
    , password:yup.string().required().min(8)
});
const RegisterForm = withFormik<RegisterFormProps , IRegisterFormValues>({
    mapPropsToValues : props => {
        return {
            name : props.name ?? '',
            email : '',
            password : ''
        }
    },
    handleSubmit : async (values) => {
        const res = await callApi().post('/auth/register' , values);
        console.log(res)
        if(res.status === 201) {
            await Router.push('/login')
        }
    },
    validationSchema:RegisterSchema
})(InnerRegisterForm)

export default RegisterForm;
