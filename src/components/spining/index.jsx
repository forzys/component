
 
import { useMemoizedFn } from '@/common/hooks' 
import Loading from "@/components/icons/loading"

export default (props)=>{ 
    const onLoading = useMemoizedFn((value)=>{
        return props?.loading ? value : null
    });

    return (
        <div style={{ position: 'relative' }}>
            {
                [
                    onLoading( 
                        <div className="spinner" >
                            <div className="spining">
                                <div className="spinner_icon"> <Loading /> </div>
                                <div className="spinner_text"> {'loading...'} </div>
                            </div>
                        </div> 
                    ),
                    <div className={`spinner-container ${props.loading ? 'spinner-blur': ''}`}>
                        {props.children}
                    </div> 
                ]
            }
        </div>
    )
}