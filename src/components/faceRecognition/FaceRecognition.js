import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    if(imageUrl !== ''){
        return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='user input' width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.topRow, bottom: box.botRow, left: box.leftCol, right: box.rightCol}}></div>
            </div>
        </div>
        );
    }else {return null}
}

export default FaceRecognition;