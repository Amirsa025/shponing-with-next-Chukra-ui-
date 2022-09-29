import React from 'react';
import { withFormik} from "formik";
import {Button} from "@chakra-ui/react";
import * as yup from 'yup';
import {ILoginFormValues} from "./index";
import InnerLoginForm from "../../../Components/auth/InnerLoginForm"
import callApi from '../../helper/callApi';


let LoginSchema:any =yup.object().shape({
    email: yup.string().required().email()
    , password:yup.string().required().min(8)
});
interface LoginFormProps {
    setCookie : any
}
const LoginForm = withFormik<LoginFormProps , ILoginFormValues>({
    mapPropsToValues : props => {
        return {
            email : '',
            password : ''
        }
    },
    handleSubmit : async (values,{props}) => {
        const response = await  callApi().post('auth/login',values)
            if (response.status ===200){
                props.setCookie('shopy-token',response.data.token ,{
                    'maxAge': 3600*24*30,
                    'domin':'localhost',
                    path : '',
                    sameSite : 'lexical'
                })
            }
    },
    validationSchema:LoginSchema
})(InnerLoginForm)

export default LoginForm;
