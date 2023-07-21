//화면 가운데 정렬, 앱 타이틀(일정관리)룰 보여줌. children으로 내부 JSX를 props로 받아와서 렌더링 

import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>Todo List</div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default TodoTemplate;