
export function numberFormat(num = '', decimals = 2, info) {
	const { pre = '', suf = '', currency = true, init = '-' } = typeof info === 'object' ? info : { currency: false };
	if (num === '' || num === null || Number.isNaN(+num)) {
        console.error('Incoming amount is empty or does not meet the requirements');
	    return num || init;
	}
 
    const value = Number(num).toFixed(decimals)
    const isDot = String(value).split('.').length > 1;
    const [reg1, reg2] = [/\B(?=(\d{3})+(?!\d))/g,  /(\d)(?=(\d{3})+\.)/g]; 
    const text = value.replace(isDot ? reg2 : reg1, currency ? '$1,' : '$1')

	return pre + text + suf
}


/**
 * 获取文件base64编码
 */
export function onGetBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) reject(null)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}



export function onUUID (name = ''){
    const uid = Math.random().toString(36).slice(2, 11)
    return name ? name + uid.slice(-7) : uid
}




export function classes(init, ...names){
    return [init, ...names]?.filter(Boolean).join(' ');
}



function getScroll(win, top) {
    const nameX = top ? 'Y' : 'X'
    const nameT = top ? 'Top' : 'Left'
    let ret = win[`page${nameX}Offset`] 
    let met = `scroll${nameT}`;

    if (typeof ret !== 'number') {
        const doc = win.document;
        ret = doc.documentElement[met];
        if (typeof ret !== 'number') {
            ret = doc.body[met];
        }
    }

    return ret;
}


export function offset(el){
    const rect = el.getBoundingClientRect();
    const pos = { left: rect.left,  top: rect.top };
    const doc = el.ownerDocument;
    const win = doc.defaultView || doc.parentWindow;

    pos.top += getScroll(win, true);
    pos.left +=getScroll(win, false);
    return pos;
}


export function onCookie(name){
    return `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
}





