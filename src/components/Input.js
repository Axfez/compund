import styled from "styled-components";
import { useField } from "formik";

const Control = styled.div`
margin-bottom:20px;
`
const Label = styled.label`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

color:#000;
display:block;
margin-bottom:5px;
font-weight:bold;
font-family:'Roboto', sans-serif;
`

const MyInput = styled.input`
outline: none;
padding: 8px;
border: solid 1px #FFC147;
border-radius: 50px;
align-items:center;
`

const ErrorMessage = styled.div`
color:red;
`


const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </Control>
    )
}
export default Input