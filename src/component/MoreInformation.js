import React  from 'react';

function MoreInformations(Props) {

    
    function cancelInfoHandler () {
        Props.onCancel()
    }

    

    return (
 
        <div className="more-information">
            <h1>{Props.title}</h1>
            <h3>{Props.info}</h3>

            <button className="btn btn--alt" onClick={cancelInfoHandler} >close</button>
            <button className="btn btn-comp" onClick={Props.handleComplit} >complit</button>
            <button className="btn btn-not" onClick={Props.handleComplit} >not complit</button>
        </div>

    )
}

export default MoreInformations
