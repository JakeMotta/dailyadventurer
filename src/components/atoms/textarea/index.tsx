import React from "react";
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';

export const TextArea = (props: TextAreaProps) => {
    return (
        <Input.TextArea
            {...props}
            autoSize={{ minRows: 3, maxRows: 6 }}
            className="custom-textarea"
        />
    );
};