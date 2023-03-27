/** @jsxImportSource @emotion/react */
import { useEffect, todoRef, todoState } from "react";
import * as S from "./style";

const TodoList = () => {

    const todo = {
        id :0,
        content : '',
        modifyFlag: false
    }

    const todoIndex = todoRef(1);
    const[todos, setLists] = todoState([]);
    const[inputs, setInputs] = todoState(todo);
    const inputRefs = [todoRef()];
    const addButtonRef = todoRef();


    const inputHandler = (e) => {
        const{name, value} = e.target;
        setInputs({...inputs, [name]:value});
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            addButtonRef.current.click();
        }
    }

    
    const addHandler = () => {
        const todo = {
            ...inputs
        };

        todo.id = todoIndex.current++;

        setLists([...todos, todo]);
    }

    return(
        <div css={S.Container}>
            <div css={S.TodoTitle}>
                <h1> TodoList</h1>
            </div>
            <div css= {S.TodoInputContainer}>
                <input type="text" css={S.TodoInput} onKeyUp={keyupHandler} placeholder='What will you do?' name='todo' ref={inputRefs[0]}/>
                <button type = "button" onClick={addHandler} ref={addButtonRef} css={S.TodoInputButton}>추가</button>
            </div>
            <div css= {S.TodoContents}> 
               {todos.map(todo => {
                    return(
                        <tr key = {todo.id}>
                            <td>{todo.content}</td>
                        </tr>

                    )
               })}
            </div>
            
        </div>
        
    )
}



export default TodoList;