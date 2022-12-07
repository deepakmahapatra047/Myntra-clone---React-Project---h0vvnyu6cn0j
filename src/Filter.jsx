import React from 'react'
import "./Filter.css"


const Filter = () => {


    function handleRadio(e){
        if(e.target.value=="Male"){
           console.log("m")
        }
        if(e.target.value=="Female"){
            console.log("f")
         }
    }

    return (
        <div className='filter-container'>
            <div className='gender'>
                <p>Gender :-</p>
                <input type="radio" value="Male" name="gender" onChange={handleRadio}/> Male <br />
                <input type="radio" value="Female" name="gender" onChange={handleRadio}/> Female
            </div>

            <div className='dress-category'>
                <p>Categories :-</p>
                <input type="checkbox" value="white" name='white'/> White <br/>
                <input type="checkbox" value="folded-sleeves" name='folded-sleeves'/> Folded Sleeves 

            </div>
        </div>
    )
}

export default Filter
