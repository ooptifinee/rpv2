import React from 'react';
import '../../scss/PlaceAnOrder/index.scss'

const Index = ({onClickCross}) => {
    return (
        <div className='orderWrapper'>
            <div className='crossSpan' onClick={() => onClickCross(0)}>close</div>
            <div className='inputs'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Surname'/>
                <input type='text' placeholder='Phone'/>
                <input type='text' placeholder='Email'/>
            </div>
            <div className='crossSpan buy' onClick={''}>send</div>
        </div>
    );
};

export default Index;