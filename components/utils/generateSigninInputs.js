import React from 'react';
import { Form, Icon, Input } from 'antd';

export default (decorator, formInputs) => (
	formInputs.map(input => {
	    const { field, iconType, placeholder, rules, type } = input;
		const InputComponent = field === 'description' ? Input.TextArea : Input;

	    return (
	        <Form.Item key={field}>
	            {
	                decorator(field, { rules })(
	                    <InputComponent
	                        placeholder={placeholder}
	                        prefix={<Icon type={iconType} />}
	                        type={type}
	                    />
	                )
	            }
	        </Form.Item>
	    );
	})
);
