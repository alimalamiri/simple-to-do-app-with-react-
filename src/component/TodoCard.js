import { useState } from "react";
import Modal from "./Modal"
import Backdrop from "./Backdrop"
import MoreInformations from "./MoreInformation"
console.log(MoreInformations)

function TodoCard(props) {
    const [isModalOpen , setIsModalOpen ] =  useState(false);
    const [isInfoOpen , setIsInfoOpen] = useState(false)
    const [complit , setNotComplit] = useState(false)
    

    function deletHandler() {
        setIsModalOpen(true)
    }
    function closeModalHandler (){
        setIsModalOpen(false)
    }
    function infoHandler () {
        setIsInfoOpen(true)
    }
    function closeInfoHandler () {
        setIsInfoOpen(false)
    }
    function handleComplit () {
        setNotComplit(!complit)
        setIsInfoOpen(false)

    }

    
    return (
        <div className="card">
            <h2> {props.title}</h2>
            <div className="action">
                <button className="btn" onClick={deletHandler}>del</button>
                <label className="complit-label" style={{color : complit ? "green" : "brown"}} >{complit ? "complit" : "not complit"} </label>
                <button className="btn btn-info" onClick={infoHandler}> more info</button>
            </div>
            {isInfoOpen && <MoreInformations  handleComplit={handleComplit} title = {props.title} info = {props.info}  onCancel = {closeInfoHandler}/>}
            {isInfoOpen && <Backdrop onClose = {closeInfoHandler}/>}
            {isModalOpen && <Modal  onCancel = {closeModalHandler}/>}
            {isModalOpen && <Backdrop onClose = {closeModalHandler}/>}



        </div>
    )
}

export default TodoCard;