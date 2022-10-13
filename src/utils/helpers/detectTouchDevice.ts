export const detectTouchDevice = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }
    const supportsTouch = 'ontouchstart' in window || window?.matchMedia("(pointer: coarse)")?.matches;
    return !!supportsTouch
}
