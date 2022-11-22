import React from "react";

const Card = (props) => {

    let badgeText 

    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText ="ONLINE"
    }
    
    return(
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={require(`../images/${props.coverImg}`)} alt=""/>
                <div className="card--stats">
                    <span hidden>{props.id}</span>
                    <img src={require('../images/star.png')} alt="" className="card--star"/>
                    <span>{props.stats.rating}</span>&nbsp;
                    <span className="gray">({props.stats.reviewCount}) •</span>&nbsp;
                    <span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p className="bottom--details"><span className="bold">From ${props.price}</span> / person</p> 
            </div>
    )
}

export default Card