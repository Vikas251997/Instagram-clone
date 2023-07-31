import React from 'react'

const Input = ({ 
    name ='',
    label ='',
    type = 'text',
    placeholder = '',
    className=''
}) => {
    return (
        <div class="mb-4">
            {
            label &&
            <label className="block text-gray-700 text-sm font-bold mb-2" for={name}>
                {label}
            </label>
           }  
            <input className={`shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline &{className}`}
            id={name} type={type} placeholder={placeholder}/>
        </div>
    )
}
  

export default Input