import React,{useEffect, useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import { Box,MenuItem,TextField } from "@mui/material"
import {Btn} from "../../components/btn"
import styled from "styled-components"

import { validDescription, validImg, validLink, validTitle } from "./valid"

import { useNavigate } from "react-router-dom"

import { addVideo, getCategories } from "../../api/api"



const FormBox = styled.section`
padding: 2rem calc((100vw - 1440px) / 2 + 2rem);

#save{
    background-color:var(--color-primary);
    border-color: var(--color-primary);
}

#save:hover{
    color: var(--color-primary);
    background-color: inherit;
}

#clear{
    color:var(--bg-black-2);
    background-color: var(--bg-black-4);
    border-color: var(--bg-black-4);
}

#clear:hover{
    color:var(--font-color);
    background-color: var(--error-2);
    border-color:var(--error-2) ;
}

@media (max-width: 480px){

    padding: 1rem;
    #buttonBox{
        flex-direction: column;
        gap: 1rem;
    }

    #clear{
        width: 100%;
    }
    #save{
        width: 100%;
    }

    #buttonBox > div > button{
        width: 100%;
    }
}
`


function AddVideo (){

    /*errores*/

    const [errorTitle, setTitle]=useState(false)
    const [errorLink, setLink]=useState(false)
    const [errorImg, setImg]=useState(false)
    const [errorDescription, setDescription]=useState(false)

    const [errorCategory, setCategory] = useState(false)

    const clearErrors = ()=>{
        setTitle(false);
        setLink(false);
        setImg(false);
        setDescription(false);
        setCategory(false);
    }

    //form value user state

    const [valueArray, setValueArray] = useState({
        title:"",
        videoUrl:"",
        imgLink:"",
        category:"",
        description:""
    })
    
    const changeHandler = (e) => {
        setValueArray({...valueArray, [e.target.name]: e.target.value})
    }


    //form reset button 
    const initialValues=()=>{
        setValueArray(
            {
                title:"",
                videoUrl:"",
                imgLink:"",
                category:"",
                description:""
            }
        )
        clearErrors();
    }

    
    //router navigate
    const navigate = useNavigate();
    const changeCategory = ()=>navigate("/categoria/:id");
    const changeHome = ()=>navigate("/")

    //get categories
    const [videoCategories, setCategories] = useState([])

    useEffect (()=>{
        const fetchCategories = async ()=>{
            try{
                const categoriesData = await getCategories(); //api
                setCategories(categoriesData);
            } catch (err){
                console.log("error fetch categorias ", err )
            }
            
        }
        fetchCategories();
    },[]
    )

    //post video

    const addNewVideo = async  (data) => {
        try { 
            const videoCategory = data.category 
            const selectedCategorie = videoCategories.find( (categories) => categories.id === videoCategory)
            if (selectedCategorie) {
                const newVideo = {
                    ...data,
                    category: selectedCategorie.id,   
                    id:uuidv4()
                };

                await addVideo(newVideo);
            }
        }
        catch ( err){
            console.log("error post video", err)
        }
    } 
    



    return <FormBox>
        <Box 
        component="form"
        display="flex"
        flexDirection="column" 
        gap="1rem"
        onSubmit={(e)=>{
            e.preventDefault()
            addNewVideo(valueArray);
            changeHome();
        }}>

        <TextField 
                label="Titulo" 
                type="text" 
                variant="filled" 
                margin="dense" 

                error={errorTitle}
                helperText={errorTitle ? "El campo no puede quedar vacio." : ""} 

                name="title"
                onChange={changeHandler}
                value={valueArray.title}
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}} 
                onBlur={(e)=>{setTitle(validTitle(e.target.value))}}
                required
                />

        <TextField 
                label="Link del video" 
                type="text" 
                variant="filled" 
                margin="dense" 

                error={errorLink}
                helperText={errorLink ? "El campo no puede quedar vacio." : ""} 

                name="videoUrl"
                onChange={changeHandler}
                value={valueArray.videoUrl}
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}} 
                onBlur={(e)=>{setLink(validLink(e.target.value))}}
                required
                />

        <TextField 
                label="Link de miniatura" 
                type="text" 
                variant="filled" 
                margin="dense" 

                error={errorImg}
                helperText={errorImg ? "El campo no puede quedar vacio." : ""} 

                name="imgLink"
                onChange={changeHandler}
                value={valueArray.imgLink}
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}} 
                onBlur={(e)=>{setImg(validImg(e.target.value))}}
                required
                />
                
        <TextField 
                label="Categoría" 
                type="text" 
                variant="filled" 
                margin="dense" 
                select

                error={errorCategory}
                helperText={errorCategory ? "Selecciona una categoria" : ""} 

                name="category"
                onChange={changeHandler}
                value={valueArray.category} //este lo tengo que cambiar por un useEffect
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}} 
                required
                onBlur={(e)=>{setCategory(e.target.value.length <= 0  ) }}
                >
                    { videoCategories.map( (categories) =>(
                        <MenuItem 
                        key={categories.id}
                        value={categories.id}>
                            {categories.name}
                        </MenuItem> 
                    ))}
                </TextField>

        <TextField 
                label="Descripción" 
                type="text" 
                variant="filled" 
                margin="dense" 

                error={errorDescription}
                helperText={errorDescription ? "La descripcion tiene que ser mayor o igual a 20 caracteres" : ""} 

                name="description"
                onChange={changeHandler}
                value={valueArray.description}
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}} 
                onBlur={(e)=>{setDescription(validDescription(e.target.value))}}
                required
                multiline
                rows={6}
                />


            <Box 
            display="flex" 
            justifyContent="space-between" id="buttonBox">
                <Box 
                display="flex"
                justifyContent="space-between"
                gap="1rem">
                    <Btn id="save" type="submit" value="Guardar"/>
                    <Btn id="clear" type="button" value="Limpiar" onClick={initialValues}/>
                </Box>
                <Btn id="add" type="button" value="Nueva Categoría" onClick={changeCategory}/>
            </Box>
            
        </Box>
    </FormBox>
}

export default AddVideo