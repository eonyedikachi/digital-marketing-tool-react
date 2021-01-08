import React from 'react'
import {useSelector} from 'react-redux'

export default function Viewlandingeditor() {

 const   design = useSelector(state=> state.save_template.Templates.Test)
    console.log(design)

    return (
        <div className='savedlp' style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <h3>View saved template {design}</h3> 

          <div className='viewedit'>
              </div> 
        </div>
    )
}
