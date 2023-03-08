import React from 'react';
import '../../scss/PlaceAnOrder/index.scss'


const Index = ({onClickCross}) => {
    return (
        <div className='orderWrapper'>
            <div id='crossSpan' onClick={() => onClickCross(0)}>X</div>
            <div>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Surname'/>
                <br />
                <input type='text' placeholder='Phone'/>
                <input type='text' placeholder='Email'/>
            </div>
        </div>
    );
};

export default Index;