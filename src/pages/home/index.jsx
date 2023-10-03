/* import Banner from "../../components/banner"; */
import React,{useState,useEffect} from "react";
import { getCategories, getVideo } from "../../api/api";
import Carrousel from "../../components/carrousel";
/* 
fetch _> props _> map para cada objeto */



function Home (){

    const [videos, setVideos] = useState([])
    const [category, setCategory] = useState([])
    const [categoryInfo, setCategoryInfo] = useState()

    useEffect (()=>{
        const fetchVideos = async ()=>{
            try{
                const videosData = await getVideo(); //get video card info
                setVideos(videosData);

                const getCategoryInfo = await getCategories() //ged categories info
                setCategoryInfo(getCategoryInfo);

                const category = videosData.map(data=>data.category) //filter category of videos
                setCategory(category.filter((item,index) => category.indexOf(item) === index));//eliminar categorias duplicadas
            } catch (err){
                console.log("error fetch videos", err )
            }
            
        }
        fetchVideos();
    },[]
    )

    return <section>
        {/* <Banner/> */}
        {category.map((data)=><Carrousel 
        key={data}  
        data={videos.filter((video)=>video.category === data)}
        info={categoryInfo.filter((info)=>info.id === data)}

        />)}
    </section>
}

export default Home