import React from "react";
import { Button as AntButton, ButtonProps } from "antd";

export const Button = ({ children, ...props }: ButtonProps) => {
    return <AntButton {...props}>{children}</AntButton>;
};

