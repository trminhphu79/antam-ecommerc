import React from 'react' ; 

const Filter = () => {
    return (
        <div className='filter'>
            <h6>sắp xếp theo :</h6>
            <div className="wrapper">
                <button className='active'>giảm - tăng</button>
                <button>tăng - giảm</button>
            </div>
            <span>|</span>
            <div className='wrapper'>
                <button className='active'>A - Z</button>
                <button>Z - A</button>
            </div>
        </div>
     );
}
 
export default Filter;