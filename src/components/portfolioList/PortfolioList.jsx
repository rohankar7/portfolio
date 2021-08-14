import React from 'react'
import './portfolioList.css';

const PortfolioList = (props) => {
    return (
        <li className={props.active? 'portfolioList active_li' : 'portfolioList'} onClick={()=>props.setSelected(props.id)} >
            {
                props.title
            }
        </li>
    )
}

export default PortfolioList
