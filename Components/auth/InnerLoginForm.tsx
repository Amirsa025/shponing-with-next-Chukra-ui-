import {ILoginFormValues} from "../../app/forms/authentication";
import {Form} from "formik";
import InputFeild from "../shared/Input";
import {Button} from "@chakra-ui/react";

const InnerLoginForm = (props:ILoginFormValues)=>{
    return (
        <>
            <Form>
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
                        }}>ورود  </Button>
            </Form>
        </>
    )
}
export default  InnerLoginForm
