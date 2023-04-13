






import React, { useState, useLayoutEffect } from "react";
import { useTimeAuto } from '@/common/hooks'
 
const Timing = React.memo((props)=>{
	const [date, func] = useTimeAuto()
	const [timing, setTiming] = useState('');

	useLayoutEffect(()=>{
		const timer = func.timeout(()=>{
			const [now, appendZero] = [new Date(), func?.appendZero];
			setTiming(appendZero(now.getHours()) + ':' + appendZero(now.getMinutes()) + ':' + appendZero(now.getSeconds()))
		}, 1000, -1);
		return ()=> timer();
	},[func]);
	
	return props?.time ? timing : date?.join('  | ')
})

export default Timing