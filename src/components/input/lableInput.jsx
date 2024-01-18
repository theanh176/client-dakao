import React from "react";
import "./Input.scss";
import { Form, Input } from "antd";

/**
 * Custom input component with label for forms.
 * @param {Object} props - Component props.
 * @param {string} props.title - The title or label for the input.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.name - The name attribute for the input.
 * @param {Array} props.rules - An array of validation rules for the input.
 * @param {import("antd").FormItemProps} props.formItemProps - Additional props to be passed to the Form.Item component.
 * @returns {JSX.Element} - Rendered component.
 */
export default function LabelInput({
	title = "Title",
	placeholder = "...",
	name = "name",
	rules = [],
	formItemProps,
}) {
	return (
		<div className="input_custom">
			<Form.Item
				name={name}
				label={
					<h1 className="text-base font-semibold text-[#09395e] w-max text-left whitespace-pre-wrap">
						{title}
					</h1>
				}
				rules={rules}
				{...formItemProps}
			>
				<Input placeholder={placeholder} />
			</Form.Item>
		</div>
	);
}
