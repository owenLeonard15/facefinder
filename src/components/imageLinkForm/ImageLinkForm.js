import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div >
            <p className='f3 white'>
                {'The Magic Eye will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3 bg-black ba b--white'>
                    <input className='f4 pa2 w-70 bg-black br-2 white' type='text' 
                        placeholder='image url'
                        onChange={onInputChange}
                        />
                    <button className='w-30 grow f4  ph3 pv2 dib white bg-black br2' 
                        onClick={onButtonSubmit}>detect</button> 
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;