import styled from "styled-components"

const Link = styled.a`
width: 300px;
height: 180px;
`

const CardImg = styled.img`
    width: 300px;
    height: 180px;
    border-radius:10px;
    `


function VideoCard({linkUrl, thumbnail}){
    return<Link href={`${linkUrl}`}  target="_blank">
        <CardImg src={`${thumbnail}`}/>
    </Link>
}

export default VideoCard