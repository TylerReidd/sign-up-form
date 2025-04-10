import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { bootcamps } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import {FormStyle, StyleDiv, TextLabel} from './inputs'


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`


const validationSchema = Yup.object().shape({
	bootcamp: Yup.mixed().oneOf(
		bootcamps.choices,
		"Please choose from one of the selections"
	),
	linkedin: Yup.string().required("This field is required"),
	github: Yup.string().required("This field is required"),
	portfolio: Yup.string().required("This field is required"),
});

const InfoIntakeForm = (props) => {
	const bootcampOptions = [];
	bootcamps.choices.forEach((element) => {
		let camp = { label: `${element}`, value: `${element}` };
		bootcampOptions.push(camp);
	});
	return (
		<Formik
			initialValues={{
				bootcamps: "",
				linkedin: "",
				github: "",
				portfolio: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					bootcamps: values.bootcamps,
					linkedin: values.linkedin,
					github: values.github,
					portfolio: values.portfolio,
				});
				console.log("info intake", props.currentForm);
			}}
			render={({
				values,
				errors,
				touched,
				setFieldValue,
				setFieldTouched,
				isSubmitting,
			}) => (
				<Form>
					<FormStyle>
						<h3>Tell us more about you</h3>

						<Inputs.SelectInput
							options={bootcampOptions}
							key={bootcamps.name}
							label={bootcamps.name}
							name={bootcamps.value}
							onBlur={setFieldTouched}
							onChange={setFieldValue}
						/>
            <StyleDiv>

						<TextLabel htmlFor="github">Github: </TextLabel>
						<Inputs.TextInput id="github" name="github"></Inputs.TextInput>
            </StyleDiv>
            
            <StyleDiv>

						<TextLabel htmlFor="portfolio">Portfolio: </TextLabel>
						<Inputs.TextInput
							id="portfolio"
							name="portfolio"></Inputs.TextInput>
            </StyleDiv>

        <StyleDiv>
						<TextLabel htmlFor="linkedin">Linkedin: </TextLabel>
						<Inputs.TextInput id="linkedin" name="linkedin"></Inputs.TextInput>
        </StyleDiv>

						<Button type="submit">Submit</Button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default InfoIntakeForm;

