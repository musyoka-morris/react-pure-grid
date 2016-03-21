export const LimitMap = [1200, 992, 768, 0];
export const ContainerWidthMap = [1170, 970, 750, 'auto'];
export const KeyMap = 'lg|md|sm|xs'.split('|');
export const OffsetMap = KeyMap.map((key) => `${key}Offset`);

export function listen(callback) {
    window.addEventListener('resize', callback);
}

export function unListen(callback) {
    window.removeEventListener('resize', callback);
}

export function getIndex() {
    const width = window.innerWidth;
    for ( let i = 0; i < LimitMap.length; i++ ) {
        if ( width >= LimitMap[i] ) {
            return i;
        }
    }
    return 0;
}