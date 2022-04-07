import React,{useState} from 'react'
import Avatar from '../components/Avatar'

export default function TestAvatar() {
  const [imgUrl, setImgUrl] = useState("https://tse2-mm.cn.bing.net/th/id/OIP-C.JPaFw0vH2f6Qy44aUfZ4jgAAAA?pid=ImgDet&rs=1")
  return (
    <div>
      <Avatar value={imgUrl} onChange={(newImgUrl)=>{
        setImgUrl(newImgUrl)
      }}/>
    </div>
  )
}
