import React, {useRef, useState} from 'react';
import panoramaStyle from "./css/panorama.module.css";

const HotSpot = ({hotSpotRef, setIsModal}) => {
    const [titleDisplay, setTitleDisplay] = useState('none')
    const hot_spot_title_ref = useRef(null)

    const change_hot_spot_title_visibility = (display) => {
        hot_spot_title_ref.current.style.disabled = display
    }

    return (
        <div className={panoramaStyle.hot_spot}
             ref={hotSpotRef}
             onClick={() => setIsModal(true)}
             onMouseOver={()=>setTitleDisplay('block')}
             onMouseLeave={()=>setTitleDisplay('none')}
             onTouchStart={()=>setTitleDisplay('block')}
             onTouchEnd={()=>setTitleDisplay('none')}
        >

            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9510_5973)">
                    <circle cx="25" cy="25" r="25" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17.7341 33.2271H18.6684C18.6684 34.1747 18.4783 35.3434 19.6265 35.4929C20.206 35.5683 20.7238 35.0329 20.7238 34.4906V33.2271H29.3193V34.4906C29.3193 35.7637 31.3747 35.9415 31.3747 34.3101V33.2271C32.1056 33.2271 33.6358 33.3005 34.1083 33.2202C35.6555 32.9573 36.7252 31.8727 37 30.2976L36.983 22.7552C36.9586 21.7681 36.1196 20.8341 35.3242 20.567C33.5929 19.9855 32.0712 20.9713 31.7336 22.3823C31.4384 23.6161 31.836 26.8547 31.5616 27.9923C31.4219 28.0238 31.4184 28.0525 31.2502 28.0525H18.793C18.6247 28.0525 18.6212 28.0238 18.4815 27.9923C18.0155 26.0602 19.1149 22.7274 17.6578 21.2067C16.8178 20.3301 15.3402 20.0704 14.1571 20.8666C13.5856 21.2513 13.0951 21.9927 13.0615 22.6964C13.0046 23.8855 13.1339 28.6777 13.0535 29.3675C13.0164 29.6862 12.9652 29.8425 13.0336 30.2466C13.3003 31.8219 14.3364 32.9356 15.8816 33.2115C16.5975 33.3393 16.9687 33.2271 17.7341 33.2271Z"
                          fill="#343434"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M20.2879 26.8491H29.7553C30.5659 26.8491 30.3781 26.2261 30.3781 25.2847C30.3781 23.1603 30.0469 21.357 31.8187 19.9976C33.8171 18.4642 34.8154 19.8976 34.1705 18.1916C33.7404 17.054 32.6433 16.5 31.3125 16.5H18.7307C17.4271 16.5 16.3475 17.023 15.8898 18.148C15.8328 18.2879 15.6783 18.929 15.7052 19.0327C15.7676 19.2732 15.9318 19.0546 16.6487 19.2332C17.2781 19.3899 17.7532 19.6277 18.1899 19.9707C19.0306 20.631 19.6708 21.5453 19.6652 22.9981C19.6622 23.7401 19.665 24.4826 19.665 25.2246C19.665 26.2165 19.4743 26.8491 20.2879 26.8491Z"
                          fill="#343434"/>
                </g>
                <defs>
                    <clipPath id="clip0_9510_5973">
                        <rect width="50" height="50" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            <div className={panoramaStyle.hot_spot_title}
                 style={{display:titleDisplay}}
            >
                Rams Evo Office
            </div>
        </div>
    );
};

export default HotSpot;