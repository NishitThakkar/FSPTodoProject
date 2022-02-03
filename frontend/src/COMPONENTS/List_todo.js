import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../CSS/list_todo.css"
import { useSelector } from 'react-redux';

function List_todo(props) {

    const [allTodo, setAllTodo] = useState([]);

    const user = useSelector(state => state.user)
    console.log("11", user);
    var useremail = user.email

    //get todolist from database---------

    useEffect(() => {
        axios.get('http://localhost:5000/list_todo').then((res) => {

            if (res) {

                console.warn("23", res.data);
                var a = res.data

                var b = a.filter(c => c.userEmail == useremail);

                setAllTodo(b);

            } else {
                alert("err")
            }

        })
    }, []);

    //delete single todo --------------

    function deleteTodo(id) {
        alert("deleted")

        axios.get('http://localhost:5000/delete_todo?did=' + id).then(function () {

            axios.get('http://localhost:5000/list_todo').then(function (res) {

                if (res) {

                    console.warn("23", res.data);
                    var a = res.data

                    var b = a.filter(c => c.userEmail == useremail);

                    setAllTodo(b);

                } else {
                    alert("err")
                }
            })
        })
    }

    function updateTodo(id) {

        props.history.push("/Create_todo/" + id)

    }


    function fun() {
        alert("please click on update and you will be redirect your todo's page, then you will check ")
    }

    var todoList = allTodo.map(function (t) {
        return <ol key={t._id}>


            <h1>{t.title}  {(t.checkbox == true) ? <input type="checkbox" className='abcd' checked onClick={fun} /> :
                <input type="checkbox" className='abcd' onClick={fun} />
            }</h1>

            <span>{t.subTask.map(function (e, i) {

                return <li>
                    {(t.checkbox == true) ? <input type="checkbox" onClick={fun} checked style={{ marginRight: "10px" }} /> :
                        <input type="checkbox" className='abcd' onClick={fun} style={{ marginRight: "10px" }} />
                    }
                    {e}
                </li>

            })}
            </span>

            <button className="Post_btn" onClick={function () { deleteTodo(t._id) }}>delete</button>
            <button className="Post_btn" onClick={function () { updateTodo(t._id) }}>update</button>
            <hr />
        </ol>
    })

    return (
        <div>
            <div className="home_main">
                <h1 style={{ marginTop: "15px" }}>List Todo</h1>

                <div className="lt_inner">

                    {todoList}
                </div>
            </div>



        </div>
    )
}

export default List_todo
