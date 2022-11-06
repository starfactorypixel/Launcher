import {useCallback} from "react";

export interface RearCamera {
    rearCameraHandler: () => void;
}

export function useRearCamera(): RearCamera {
    const rearCameraHandler = useCallback(() => undefined, []);

    return {rearCameraHandler};
}
