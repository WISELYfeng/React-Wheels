import React from 'react'
import './importIcons'


interface IconProps{
    name: string;
    onClick: React.MouseEventHandler<SVGElement>;
}
// Icon是一个FunctionComponent类型的组件，接收IconProps类型的参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;