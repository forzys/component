









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
