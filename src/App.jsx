import appStyle from './App.module.css'
import PanoramaView from "./companents/PanoramaView.jsx";
import Modal from "./companents/Modal.jsx";
import {useState} from "react";
import DetailedView from "./companents/DetailedView.jsx";

function App() {
    const [isModal, setIsModal] = useState(false)
  return (
    <div className={appStyle.container}>
        <PanoramaView setIsModal={setIsModal} />
        <Modal isModal={isModal} setIsModal={setIsModal} ChildComponent={<DetailedView />}/>
    </div>
  )
}

export default App
