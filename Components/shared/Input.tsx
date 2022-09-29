import React,  { FC } from 'react';
import {Box, Stack} from "@chakra-ui/react";
import {ErrorMessage, Field} from "formik";
interface InputProps {
    name:string,
    inputCLassName?:string,
    errorMessage?:string,
    type:string,
    placeholder:string
}
const InputFeild:FC<InputProps> = ({name ,inputCLassName,placeholder,errorMessage,type="text"}) => {
    return (
        <>
            <Stack>
            <Field id={name} name={name} type={type} className={inputCLassName}  placeholder={placeholder} px={"1.5rem"}></Field>
            <Box color="red.500" mb={"1.5rem"}>
             <ErrorMessage className={errorMessage} name={name}/>
            </Box>
        </Stack >

        </>
    );
};

export default InputFeild;
