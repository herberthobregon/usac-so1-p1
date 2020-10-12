import React from 'react';
import style from './product.module.css'

const Comm = ({user, comment}) => {


    return(
        <div className={style.product} >
            <h3>{user}:</h3>
            <p>{comment}</p>
        </div>
    )
}
export default Comm;