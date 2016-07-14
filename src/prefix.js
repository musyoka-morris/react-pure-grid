import Prefixer from 'inline-style-prefixer';
const customUserAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2';
const prefixer = new Prefixer({ userAgent: customUserAgent });
export default (styles) => prefixer.prefix(styles);