import React from "react";
import { Dropdown as AntDropdown, DropdownProps } from "antd";

export const Dropdown = ({ ...props }: DropdownProps) => {
    return <AntDropdown {...props} />;
};
