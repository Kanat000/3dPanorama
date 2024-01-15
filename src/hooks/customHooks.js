import {useEffect} from "react";


export const useSettingsByUpdatingImgNum = (imgNum, hotSpotRef, imgRef) => {
    const update_styles = (spot_display, spot_pos_top, spot_pos_left, img_pos) =>{
        hotSpotRef.current.style.display = spot_display;
        hotSpotRef.current.style.top = spot_pos_top;
        hotSpotRef.current.style.left = spot_pos_left;
        imgRef.current.style.objectPosition = img_pos;
    }
    useEffect(() => {//изменение расположение хот стопа по отношение к углам просмотра
        switch (imgNum){
            case 18:
                update_styles('block', '55%',
                    '48%','47% 53%');
                break;
            case 49:
                update_styles('block', '44%',
                    '35%','35% 44%');
                break;
            case 86:
                update_styles('block', '36%',
                    '60%','60% 34%');
                break;
            default:
                hotSpotRef.current.style.display = 'none';
        }
    }, [imgNum]);
}