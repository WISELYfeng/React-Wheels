import React from 'react'
import './importIcons'


interface IconProps{
    name: string;
}
// Icon是一个FunctionComponent类型的组件，接收IconProps类型的参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg> 
        </span>
    )
}

export default Icon;