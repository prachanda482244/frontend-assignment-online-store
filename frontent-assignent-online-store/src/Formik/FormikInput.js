import React, { useState } from 'react'
import { Field } from 'formik'
const FormikInput = ({name}) => {
    // const [placeholder,setPlaceholder]= useState('Search Here')
    const [placeholder,setPlaceholder]= useState('Search Here')
  return (
    <Field name={name}>

                {
                    ({ field, form, meta }) => {
                        return (
                            <div >
                                <input {
                                   ...meta.touched && meta.error ?    
                                   setPlaceholder(meta.error): setPlaceholder(placeholder)
                                }
                                placeholder={placeholder}
                                 className='search-bar' 
                                id={name}
                                    value={meta.value} 
                                  onChange={field.onChange}     
                                />
                                {/* {
                                    meta.touched && meta.error ? <div className='absolute top-6 left-96' style={{ color: "red" }}>{meta.error}</div> : null
                                } */}
                            </div>
                        )
                    }
                }
            </Field>
  )
}

export default FormikInput