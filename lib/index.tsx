import React from 'react'
import ReactDom from 'react-dom'
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}

const root = document.getElementById('root')
// ReactDom.render(<div>
// <Icon name="books"/>
// <Icon name="diamond"/>
// <Icon name="design"/>
// <Icon name="flower"/>
// <Icon name="light"/>
// <Icon name="wechat"/>
// </div>, root)
ReactDom.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, root)