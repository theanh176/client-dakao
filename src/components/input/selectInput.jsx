import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";

/**
 * Custom select input component with label for forms.
 * @param {Object} props - Component props.
 * @param {string} [props.title="Title"] - The title or label for the select input.
 * @param {string} [props.name="name"] - The name attribute for the select input.
 * @param {string} [props.placeholder="..."] - The placeholder text for the select input.
 * @param {Function} [props.onGenderChange] - A callback function to be called when the select value changes.
 * @param {Array} [props.options=[]] - An array of option objects for populating the select input.
 * @param {import("antd").FormItemProps} [props.formItemProps] - Additional props to be passed to the Form.Item component.
 * @returns {JSX.Element} - Rendered component.
 */
export default function SelectInput({
	title = "Title",
	name = "name",
	placeholder = "...",
	onGenderChange,
	options = [],
	formItemProps,
	...props
}) {
	return (
		<div className="inputSelect_custom">
			<Form.Item
				name={name}
				label={
					<h1 className="text-base font-semibold text-[#09395e] w-max text-left whitespace-pre-wrap">
						{title}
					</h1>
				}
				rules={[
					{
						required: true,
					},
				]}
				{...formItemProps}
			>
				<Select
					placeholder={placeholder}
					onChange={onGenderChange}
					allowClear
					{...props}
				>
					{options?.map((item, index) => (
						<Option key={index} value={item.value}>
							{item.label}
						</Option>
					))}
				</Select>
			</Form.Item>
		</div>
	);
}
