import React, {useRef, useState} from 'react';

import detailStyle from './css/detail.module.css'

import img1 from '../assets/Popap (Интерьер)/i-00.jpg'
import img2 from '../assets/Popap (Интерьер)/i-1.jpg'
import img3 from '../assets/Popap (Интерьер)/i-22.jpg'

const DetailedView = (props) => {
    const [imgIndex, setImgIndex] = useState(0)

    let imgArr = [img1, img2, img3]

    return (
        <div className={detailStyle.container}>
            <div>
                <button disabled={imgIndex === 0} onClick={()=>setImgIndex(prevState => prevState-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12"/>
                    </svg>
                </button>
            </div>
            <div className={detailStyle.imgFrame}>
                <img src={imgArr[imgIndex]} alt="Интерьер" className={detailStyle.img}/>
            </div>
            <div>
                <button disabled={imgIndex===imgArr.length-1} onClick={()=>setImgIndex(prevState => prevState+1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default DetailedView;