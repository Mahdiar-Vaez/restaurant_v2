import React, { useState } from "react";
export default function useFormFields (){
    const [fields,setFields]=useState({})
    const handleFields=(e)=>{
        e?.target?.value&&setFields({...fields,[e?.target?.name]:e?.target?.value})
    }
    return [fields,handleFields]
}