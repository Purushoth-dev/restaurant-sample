import React, {useState} from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./assets/css/style.css"

function Card({props}) {

    const [ expand, setExpand ] = useState(false);

    // console.log(props);

    const outlet = (val) => (
        <div className="multi-outLets">
            {val.outletName}
        </div>
    )

    return (
        <>
            <div>
                <img className="imgs" src={props.restaurantImage}></img>
                <div className="main-box">
                <div className="header">{props.restaurantName}</div>
                <div className="sub-header">{props.cuisines}</div>
                <span className="review"> {'★'} {props.averageReview}</span>
                <div className="time">{props.displayTime}</div>
                <div className={props.outlet.length <= 1 ? "price spac-bt": "price"}>{props.displayCostForTwo}</div>
                
                {/* Outlets */}
             {props.outlet.length > 1 && (
                    <div className="button btn btn-primary spac-bt" onClick={()=>setExpand(!expand)}> {props.outlet.length} Outlets near you <span className="ritArr"><KeyboardArrowRightIcon /></span></div>
                )}

                {expand && props.outlet.map(outlet)}
              </div>
            </div>
        </>
    )
}

export default Card;