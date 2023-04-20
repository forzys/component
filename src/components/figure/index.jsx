
import Configure from '@/components/icons/configure'
import Media from '@/components/icons/media'
import './index.css' 

export default (props)=>{
    return (
        <figure>
            <span><img src={[props?.img, props.src]} /></span>
            <figcaption style={{ fontSize: 16, padding: '0 6px'}}>
                <Media picture />
                <span className='name'>image</span>
                <span className='info'>
                    {[props?.title, props.children]}
                </span>
                <Configure expand fontSize="18px" strokeWidth="3" style={{ cursor: 'pointer' }} />
            </figcaption>
        </figure>
    )
}