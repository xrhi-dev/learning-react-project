import {useState} from 'react';

function ColorPickerTool()
{
    const [color,setColor] = useState("#FFFFFF");
    const handleColorChange = (e) =>
    {
        setColor(e.target.value)
    }
    return(
        <>  
        <h1 className='text-center font-bold scale-200 mt-10'>COLOR PICKER</h1>
            <div className='p-25 px-10 m-10   rounded-lg ring-2 shadow-xl transition-colors duration-150 ease-linear ' style={{ backgroundColor: color }}>  
                <h1>Selected color: {color}</h1>  
            </div>     
                <div className='flex flex-col items-center justify-center'>
                    <label>Choose a Color:</label>
                    <input className='scale-150 rounded-full ' type='color' onChange={handleColorChange}></input>
                </div> 
            
        </>
    )
}

export default ColorPickerTool