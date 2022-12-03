import React from 'react'
import '../.././styles/Filter.css';
const Filter = () => {
    return (
        <div className='filter-container'>
            <div className='gender'>
                <p>Gender :-</p>
                <input type="radio" value="Male" name="gender" /> Male <br />
                <input type="radio" value="Female" name="gender" /> Female
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
