import React, { Component } from "react";
import Select from "react-select";

class SelectField extends Component {
	colorStyles = {
		container: (provided, state) => ({
			...provided,
			width: 200,
		}),
		// input: (provided, state) => ({
		//   display:
		// }),
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px solid #F25187",
			color: "white",
			backgroundColor: "#562636",

			padding: 5,
			width: 200,
		}),
		valueContainer: (provided, state) => ({
			...provided,
			backgroundColor: "black",
			color: "white",
		}),
		multiValue: (provided, state) => ({
			...provided,
			backgroundColor: "#F25187",
			color: "white",
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";

			return { ...provided, opacity, transition };
		},
	};
	handleChange = (value) => {
		const { onChange, name } = this.props;

		onChange(name, value);
	};

	handleBlur = () => {
		const { onBlur, name } = this.props;

		onBlur(name, true);
	};

	render() {
		const {
			id,
			name,
			label,
			placeholder,
			options,
			value,
			isMulti,
			isDisabled,
			touched,
			error,
			isClearable,
			backspaceRemovesValue,
		} = this.props;

		return (
			<div className="input-field-wrapper">
				{label && (
					<h3 className="input-label" htmlFor={name} error={error}>
						{label}
					</h3>
				)}

				<Select
					id={id}
					placeholder={placeholder}
					options={options}
					value={value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					touched={touched}
					error={error}
					isMulti={isMulti}
					isDisabled={isDisabled}
					isClearable={isClearable}
					backspaceRemovesValue={backspaceRemovesValue}
					components={{ ClearIndicator: null }}
          styles={this.colorStyles}
				/>

				{touched && error ? <p className="error-text">{error}</p> : null}
			</div>
		);
	}
}

export default SelectField;
