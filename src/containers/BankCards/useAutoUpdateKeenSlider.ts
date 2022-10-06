import {KeenSliderHooks, KeenSliderInstance} from "keen-slider/react";
import React, {useEffect} from "react";

type keenInstance = React.MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks>>
export const useAutoUpdateKeenSlider = (sliderRef: keenInstance, props: any): void => {
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.update(sliderRef.current.options)
        }
        //    This is for the keen-slider to work properly in environments like storybook
    }, [props]);
}
