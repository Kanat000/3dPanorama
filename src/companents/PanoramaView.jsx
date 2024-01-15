import React, {useEffect, useRef, useState} from 'react';
import panoramaStyle from './css/panorama.module.css'
import img1 from '../assets/0.jpg'
import HotSpot from "./HotSpot.jsx";
import {useSettingsByUpdatingImgNum} from "../hooks/customHooks.js";

const PanoramaView = ({setIsModal}) => {
    const imgRef = useRef(null);
    const hotSpotRef = useRef(null);
    const intervalRef = useRef(null);
    const [mouseDown, setMouseDown] = useState(false)
    const [movementStep, setMovementStep] = useState(0);
    const [imgNum, setImgNum] = useState(18);
    const [touchPreviousClientX, setTouchPreviousClientX] = useState(0);

    useSettingsByUpdatingImgNum(imgNum, hotSpotRef, imgRef)

    const start_panorama = (event) => {//функция каторая вызывается когда пользователь нажимет вниз кнопку мышки\ стартовая функция
        imgRef.current.style.cursor = 'grabbing';
        setMouseDown(true)
        if(event.touches)
            setTouchPreviousClientX(event.touches[0].clientX)
    }
    const do_panorama = (event) => {//функция для выполнение саму задачу осуществление работу панорамы
        let movement_x = event.movementX;
        if(event.type==="touchmove" && event.touches) {
            movement_x = event.touches[0].clientX - touchPreviousClientX
            setTouchPreviousClientX(event.touches[0].clientX)
        }
        if (mouseDown) {//Проверяем, была ли нажата кнопка мыши.
            if (movementStep > 5) {//И по измением расположением мыши мы обновляем данные
                if (imgNum === 119) {
                    setImgNum(0);//изменяем картинку после каждый 5 пикселей
                } else {
                    setImgNum(prevState => prevState + 1);
                }
                setMovementStep(0)
            } else if (movementStep < (-5)) {
                if (imgNum === 0) {
                    setImgNum(119);
                } else {
                    setImgNum(prevState => prevState - 1);
                }
                setMovementStep(0)
            }// чтобы получилось цикл если картинки доходить до самой последний и будем начать счет сначала
            setMovementStep(prevState => prevState + movement_x);
        }
    }
    const end_panorama = () => {//Функция каторая выполниться когда пользователь отпускает кнопку мыши вверх\ завершивщая функция
        let diff = 0;
        let updater = 1;

        if (imgNum < 18) diff = 18 - imgNum;// Программа проверяет если пользователь опустил мышку не доходя до самой основные виды угла панораммы
        // то тогда программа автоматически сам переносить пользователя к ближающую угла панорамы
        else if (imgNum > 18 && imgNum <= 33) {//Программа считывает количества хадов до ближащего угла и сохраняет
            diff = imgNum - 18;
            updater = -1;
        } else if (imgNum > 33 && imgNum < 49) diff = 49 - imgNum;
        else if (imgNum > 49 && imgNum <= 67) {
            diff = imgNum - 49;
            updater = -1
        } else if (imgNum > 67 && imgNum < 86) diff = 86 - imgNum;
        else if (imgNum > 86) {
            diff = imgNum - 86;
            updater = -1;//updater нужен для того чтобы переносить пользователя и вперед и назад / если шаг назад то тогда updater будет -1 а если вперед то тогда 1, и чтобы остаться на место нужен 0
        } else {
            diff = 0;
            updater = 0;
        }

        intervalRef.current = setInterval(() => {//использовал setInterval для того чтобы перенесения из угла к углу в панораме были более плавно
            if (diff === 1) {
                clearInterval(intervalRef.current)

            }
            diff--;

            setImgNum(prevState => prevState + updater)

        }, 20)//каждый 20 милисекунд обновляет рисунок(перерисует) пока не дойдут до самого ближного основного угла
        imgRef.current.style.cursor = 'grab';
        setMouseDown(false)
    }
    return (
        <div className={panoramaStyle.container}>
            <img src={'../src/assets/' + imgNum + '.jpg'}
                 alt="Building Panorama"
                 className={panoramaStyle.building_img}
                 ref={imgRef}
                 draggable={false}
                 onMouseDown={(event) => start_panorama(event)}
                 onTouchStart={(event) => start_panorama(event)}
                 onMouseMove={(e) => do_panorama(e)}
                 onTouchMove={(e) => do_panorama(e)}
                 onMouseUp={() => end_panorama()}
                 onTouchEnd={() => end_panorama()}
            />
            <HotSpot hotSpotRef={hotSpotRef} setIsModal={setIsModal}/>
        </div>
    );
}

export default PanoramaView;