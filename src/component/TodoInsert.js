import { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e =>{
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            //submit 이벤트는 브라우저에서 새로고침 발생시킴
            //이를 방지하기 위해 이 함수 호출
            e.preventDefault();
        }
    )

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input 
            placeholder='Write your todo'
            value={value}
            onChange={onChange}
            />
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;