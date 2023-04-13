
import Configure from '@/components/icons/configure'
import './index.css'


export default (props)=>{ 
    return (
        <figure>
            <span><img src={[props?.img, props.src]} /></span>
            <figcaption>
                <Configure pic fontSize="12px" />
 
                {[props?.title, props.children]}
            </figcaption>
        </figure>
    )
}