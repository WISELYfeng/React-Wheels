import React from 'react'

interface IconProps{
    name: string;
}
// Icon是一个FunctionComponent类型的组件，接收IconProps类型的参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    )
}

export default Icon;