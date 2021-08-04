import React, {useState} from 'react';
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

                <div className="header">{props.restaurantName}</div>
                <div className="sub-header">{props.cuisines}</div>
                <div className="review"> {'★'} {props.averageReview}</div>
                <div className="time">{props.displayTime}</div>
                <div className={props.outlet.length <= 1 ? "price spac-bt": "price"}>{props.displayCostForTwo}</div>

                {/* Outlets */}
             {props.outlet.length > 1 && (
                    <div className="button btn btn-primary spac-bt" onClick={()=>setExpand(!expand)}> {props.outlet.length} Outlets near you </div>
                )}

                {expand && props.outlet.map(outlet)}

            </div>
        </>
    )
}

export default Card;