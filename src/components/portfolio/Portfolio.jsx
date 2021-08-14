import React from 'react'
import {useState, useEffect} from 'react';
import './portfolio.css';
import PortfolioList from '../portfolioList/PortfolioList';
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data';

const Portfolio = () => {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ]

    useEffect(()=>{
        switch(selected){
            case "featured" : setData(featuredPortfolio);
            break;
            case "web" : setData(webPortfolio);
            break;
            case "mobile" : setData(mobilePortfolio);
            break;
            case "design" : setData(designPortfolio);
            break;
            case "content" : setData(contentPortfolio);
            break;
            default: console.log('No such data item');
        }
    },[selected]);
    return (
        <div className='Portfolio' id='Portfolio'>
            <h1>Portfolio</h1>
            <ul className='portfolio_ul'>
                {
                    list.map((item, id)=>(
                        <PortfolioList title={item.title} id={item.id} active={selected===item.id} setSelected={setSelected} key={id}/>
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map((item, id)=>(
                        <div className="item" key={id}>
                            <img src={item.img} alt=''/>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio
