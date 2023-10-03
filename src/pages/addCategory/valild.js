export function validName (name){
    if (name.length >= 3){
        return false
    }
    else{
        return true
    }
}

export function validDescription (description){
    if (description.length >= 20){
        return false
    }
    else{
        return true
    }
}
export function validColor (color){
    if (color !== "#000000"){
        return false
    }
    else{
        return true
    }
}