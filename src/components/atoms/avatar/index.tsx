import React from "react";
import { Avatar as AntAvatar, AvatarProps } from "antd";

export const Avatar = ({ ...props }: AvatarProps) => {
    return <AntAvatar {...props} />;
};
