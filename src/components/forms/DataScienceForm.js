import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { dataSciSkills } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import { FormStyle, StyleDiv, TextLabel } from "../meta/inputs";
import group122 from "./imgs/Group122.svg";

const FullForm = styled.div`
	width: 100%;
	height: 100%;
`;

const Button = styled.button`
	background-color: #00c9b1;
	color: #f6f6f6;
	border: none;
	width: 183px;
	height: 50px;
`;
const BackBtn = styled.button`
	background-color: #1f1216;
	color: #00c9b1;
	font-size: 16px;
	border: none;
	width: 183px;
	height: 50px;
`;

const validationSchema = Yup.object().shape({
	data_sci_skillset: Yup.array().min(
		1,
		"Please choose from one of the selections"
	),
	why_join: Yup.string().required("This field is required"),
});

const DataScienceForm = (props) => {
	const dataSciOptions = [];
	dataSciSkills.choices.forEach((element) => {
		let skill = { label: `${element}`, value: `${element}` };
		dataSciOptions.push(skill);
	});

	return (
		<Formik
			initialValues={{
				data_sci_skillset: [],
				why_join: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					data_sci_skillset: values.data_sci_skillset,
					why_join: values.why_join,
				});
				console.log("data science", props.currentForm);
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
						<h2>TELL US A LITTLE ABOUT YOUR INTERESTS...</h2>
						<img alt="some fields are required" src={group122} />
						<div className="container">
							<Inputs.SelectFieldRequired
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={dataSciSkills.name}
								label={dataSciSkills.name}
								name={dataSciSkills.value}
								options={dataSciOptions}
								placeholder="Select up to 4"
							/>

							<StyleDiv>
								<TextLabel htmlFor="whyJoin">
									Tell us why you'd like to join The COOP.
								</TextLabel>
								<Inputs.TextInputRequired
									id="whyJoin"
									name="why_join"
									//TODO: Update placeholder when switched
									// placeholder="" 
									/>
							</StyleDiv>
						</div>
							<div className="button-container">
								<BackBtn
									onClick={() =>
										props.setCurrentForm({ ...props.currentForm, role: "" })
									}>
									{" "}
									&lt; Back{" "}
								</BackBtn>
								<Button type="submit">Next</Button>
							</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default DataScienceForm;
