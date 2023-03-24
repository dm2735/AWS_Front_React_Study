import React , {useEffect, useRef, useState} from "react";
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as S from "./style"

const UserList = () => {
    useEffect(()=> {
        console.log("컴포넌트 랜더링");
    }, [])

    const user = {
        id: 0,
        username:'',
        passwod:'',
        name:'',
        email:''
    }

    const [Inputs, setInputs] = useState(user);
    const inputRefs = [useRef(),useRef(), useRef(), useRef()];
    const addButtonRef = useRef();


    const inputHandler = (e) => {
        
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value});
    }

    const keyUpHandler = (e) => {
        if(e.keyCode === 13){
            let index = 0;
            switch(e.target.name){
                case 'username': index = 1; break;
                case 'password': index = 2; break;
                case 'name': index = 3; break;
                default: addButtonRef.current.click();
            }
            if(index !==0){
                inputRefs[index].current.focus();
            }
            
        }
    }
    const addHandler = () => {

    }

    const users = [
        {   
            id:1,
            username: 'aaa',
            passwod: '1234',
            name: 'AAA',
            email: 'aaa@gmail.com'
        },
        {   
            id:2,
            username: 'bbb',
            passwod: '1234',
            name: 'BBB',
            email: 'bbb@gmail.com'
        },
        {   
            id:3,
            username:  'ccc',
            passwod: '1234',
            name: 'CCC',
            email: 'ccc@gmail.com'
        }
    ]

    const userIndex = useRef(4);

    return(
        <div css={S.Container}>
            <div>
                <input type="text" onKeyUp={keyUpHandler} onchange ={inputHandler} placeholder ='username' name="username" value={0} ref={inputRefs[0]}/>
                <input type="password" onKeyUp={keyUpHandler} onchange ={inputHandler} placeholder ='password'  name="password" value={0} ref={inputRefs[1]}/>
                <input type="text" onKeyUp={keyUpHandler} onchange ={inputHandler} placeholder ='name' name="name" value={0} ref={inputRefs[2]}/>
                <input type="text" onKeyUp={keyUpHandler} onchange ={inputHandler} placeholder ='email'name="email" value={0} ref={inputRefs[3]}/>
                <button type="button" onClick={null} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                <tr>
                    <th css={S.ThAndTd}>id</th>
                    <th css={S.ThAndTd}>username</th>
                    <th css={S.ThAndTd}>password</th>
                    <th css={S.ThAndTd}>name</th>
                    <th css={S.ThAndTd}>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {

                    userIndex.current +=1;

                    return(
                        <tr>
                            <td css={S.ThAndTd}>{user.id}</td>
                            <td css={S.ThAndTd}>{user.username}</td>
                            <td css={S.ThAndTd}>{user.passwod}</td>
                            <td css={S.ThAndTd}>{user.name}</td>
                            <td css={S.ThAndTd}>{user.email}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

export default UserList;