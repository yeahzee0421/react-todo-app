import React from 'react';
import './TodoListitem.scss'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListitem = ({todo, onRemove, onToggle}) => {
    const{text, checked, id} = todo;
    return (
        <div className='TodoListitem'>
            <div className= {cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div> 
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default React.memo(TodoListitem);