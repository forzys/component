import { memo } from "react"; 
 
export default memo((props)=>{ 

    return (
        <div style={{ width: 200, margin: '120px'}}>
            <div>
                <a href="tel:12345678910">电话</a>
            </div>
            <div>
                <a href="sms:12345678910,12345678911?body=你好">android短信</a> 
            </div>
            <div>
                <a href="sms:/open?addresses=12345678910,12345678911&body=你好">ios短信</a>
            </div>
            <div>
                <a href="wx://">ios短信</a> 
            </div>
 
  
        </div>
    )
})