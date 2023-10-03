import React,{useState, useEffect} from "react";
import { Box,TextField,TableContainer, Table, TableHead, TableBody, TableRow, TableCell  } from "@mui/material";
import styled from "styled-components";
import {Btn} from "../../components/btn";
import { v4 as uuidv4 } from 'uuid';
import { addCategory,getCategories,deleteCategory, updateCategory } from "../../api/api";
import { useNavigate ,useParams  } from "react-router-dom";
import { validName,validDescription,validColor } from "./valild";

const Container = styled.section`
padding: 2rem calc((100vw - 1440px) / 2 + 2rem);

@media (max-width: 480px){
    padding: 0 1rem;
}
`
const FormBox = styled(Box)`
padding: 1rem 0;
display: flex;
flex-direction: column;
gap: 1rem;

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
    #buttonBox{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
#clear{
    width: 100%;
}
#save{
    width: 100%;
}
}
`

const deleteSX = {
    "cursor":"pointer",
    "&:hover":{
        color:"var(--error)"
    }
}

const editSx = {
    "cursor":"pointer",
    "&:hover":{
        color:"#96befc"
    }
}


function AddCategory (){

    //errores

    const [errors, setError] = useState(
        {
            name: false,
            description: false,
            color: false
        }
    )

    //use state formulario

    const [valueArray, setValueArray] = useState({
        name:"",
        color:"#000000",
        description:""
    })
    
    const changeHandler = (e) => {
        setValueArray({...valueArray, [e.target.name]: e.target.value})
    }

    //reset form

    const initialValues=()=>{
        setValueArray(
            {
                name:"",
                color:"#000000",
                description:""
            }
        )
        setError(
            {
                name: false,
                description: false,
                color: false
            }
        )
    }

    //POST

    const addNewCategory = async  (data) => {
        try { 
            const newCategory ={
                ...data,
                id: uuidv4()
            }
            await addCategory(newCategory)
            }
        catch ( err){
            console.log("error post categoria", err)
        }
        setReload(reload - 1)
    }

    //GET
    const [categories, setCategories] = useState([])

    const [reload, setReload] = useState( 0 )

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
    },[reload]
    )


    //DELETE
    const deleteCat = async (data)=>{
        try {
            await deleteCategory(data);
            
        } catch (err) {
            console.log("error borrar categoria", err)
            
        }
        setReload(reload + 1)

    }

    const navigate = useNavigate(); 

    //UPDATE

    const   getUrl = useParams();

    const [btnSwitch, setBtnSwitch] = useState(false)

    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const categoriesData = await getCategories(); //api
                const foundCategory = categoriesData.find((data)=> data.id === getUrl.id)
                const toggler = ()=>{
                    if (getUrl.id !== ":id"){
                        setValueArray(foundCategory)
                        setBtnSwitch(true)
                    }
                    else{
                        initialValues();
                        setBtnSwitch(false);
                    }
                }
                toggler();
            } catch (err){
                console.log("error fetch categorias 2 ", err )
            }
            
        }
        fetchCategories(); 
    },[getUrl])

    const editCategory = async  (data) => {
        try { 
            await updateCategory(data.id, data)
            }
        catch ( err){
            console.log("error actualizar categoria", err)
        }
        navigate(`/categoria/:id`)
        setReload(reload - 1)
    }


    return<Container>
        <FormBox 
        component="form"
        onSubmit={(e)=>{
            e.preventDefault()
            addNewCategory(valueArray);
        }}
        >
            <TextField 
                label="Nombre de la categoria" 
                type="text" 
                variant="filled" 
                margin="dense" 
                fullWidth 
                sx={{backgroundColor:"var(--bg-black-5)"}}
                required
                
                name="name"
                onChange={changeHandler}
                value={valueArray.name}

                onBlur={(e)=>{setError({...errors , name:validName(e.target.value)})}}
                 error={errors.name}
                helperText={errors.name ? "El campo no puede quedar vacio." : ""} 
                />

                <TextField
                label="Descripcion de la categoria"
                type="text"
                variant="filled"
                margin="dense"
                multiline
                rows={4}
                fullWidth
                sx={{backgroundColor:"var(--bg-black-5)"}}
                required

                name="description"
                onChange={changeHandler}
                value={valueArray.description}

                onBlur={(e)=>{setError({...errors , description:validDescription(e.target.value)})}}
                 error={errors.description}
                helperText={errors.description ? "El campo no puede quedar vacio, debe tener almenos 20 caracteres." : ""} 


                />

                <TextField 
                label="Color"
                variant="filled"
                margin="dense"
                type="color"
                sx={{backgroundColor:"var(--bg-black-5)"}}

                name="color"
                onChange={changeHandler}
                value={valueArray.color}

                onBlur={(e)=>{setError({...errors , color:validColor(e.target.value)})}}
                 error={errors.color}
                helperText={errors.color ? "Escoge un color que no sea oscuro." : ""} 
                />
                
                 <Box 
                display="flex" 
                justifyContent="space-between" id="buttonBox">
                    {btnSwitch ? <Btn id="save" type="button" value="Guardar cambios" onClick={()=>editCategory(valueArray)}/> : <Btn id="save" type="submit" value="Agregar categoria"/>}
                    {btnSwitch ? <Btn id="clear" type="button" value="Cancelar" onClick={()=>{navigate(`/categoria/:id`)}}/>  : <Btn id="clear" type="button" value="Limpiar" onClick={initialValues}/>}
                </Box>
        </FormBox>
        <TableContainer sx={{paddingTop:2,paddingBottom:2}}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ width: 160, fontWeight:"bold" }}>Nombre</TableCell>
            <TableCell align="center" style={{ fontWeight:"bold" }}>Descripcion</TableCell>
            <TableCell align="center" style={{ width: 160, fontWeight:"bold" }}>Color</TableCell>
            <TableCell align="center" style={{ width: 160, fontWeight:"bold", color:"#96befc" }}>Editar</TableCell>
            <TableCell align="center" style={{ width: 160, fontWeight:"bold", color:"var(--error-2)"  }}>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { categories.map( (categories) =>(
            <TableRow key={categories.id} >
                <TableCell>{categories.name}</TableCell>
                <TableCell>{categories.description}</TableCell>
                <TableCell align="center" sx={{color:categories.color, fontWeight:"bold"}}>{categories.color}</TableCell>
                <TableCell align="center"  sx={editSx} onClick={()=>{navigate(`/categoria/${categories.id}`)}}>Editar</TableCell>
                <TableCell align="center" onClick={()=>deleteCat(categories.id)} sx={deleteSX}>Eliminar</TableCell>
                
            </TableRow> 
        ))}
        </TableBody>
      </Table>
        </TableContainer>
</Container>

}


export default AddCategory