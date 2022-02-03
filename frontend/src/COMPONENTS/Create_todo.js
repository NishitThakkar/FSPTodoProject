import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../CSS/create_todo.css"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Create_todo(props) {

    const [title, setTitle] = useState("")
    const [todo, setTodo] = useState("")
    const [singletitle, setSingletitle] = useState("")
    const [subTask, setSubTask] = useState([]);
    const [checkbox, setCheckbox] = useState(false);

    const user = useSelector(state => state.user)
    var userEmail = user.email

    function setValue(e) {

        e.target.name === "Title" && setTitle(e.target.value);
        e.target.name === "Todo" && setTodo(e.target.value);
    }

    function sendData() {
        var data = {
            title, subTask, userEmail, checkbox: false
        }

        axios.post("http://localhost:5000/create_todo", data).then(function (res) {
            alert(res.data)
            console.log(data, "data");
        })
        setTodo("")
        setTitle("")
        setSubTask([])
    }

    var uid = props.match.params.id;


    function checkboxEvent(i) {
        alert("you have finished all your task")
        setCheckbox(true)

    }

    useEffect(() => {
        if (uid) {
            axios.get("http://localhost:5000/todo_byid?uid=" + uid)
                .then((res) => {
                    console.log("res.data", res.data);
                    setTitle(res.data[0].title);
                    setSubTask(res.data[0].subTask);
                    setCheckbox(res.data[0].checkbox);
                });

        }
    }, []);

    function updateData() {
        var data = {
            title, subTask, checkbox
        };
        data._id = uid
        axios.post("http://localhost:5000/updatTodo", data).then((res) => {
            alert(res.data);

        });
    }

    function getTitle() {
        setSingletitle(title)
    }



    function getSubTitle() {

        setSubTask((old) => {
            return [...old, todo]
        })
        setTodo("")
    }

    function deleteSingleTodo(id) {

        console.warn("deleted", id);



        setSubTask((old) => {
            return old.filter(function (item, index) {
                return index !== id
            })
        })

    }


    var xyz = subTask.map(function (d, id) {
        return <span>
            <li>
                {(uid) && (checkbox == true) ? < input type="checkbox" className='abcd' checked /> :
                    (checkbox == false) ? < input type="checkbox" className='abcd' /> : <span></span>

                }
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>{d}</span>
                <button className='btnsm btn-danger' onClick={function () { deleteSingleTodo(id) }}>delete</button>
            </li>


        </span>

    })
    console.warn("134", checkbox);
    return (
        <div>
            <div className="home_main">
                <h1 className='cr_h1'>Todo App</h1>
                <div className="home_inner">
                    <span>Todo Title : <input type="text" name="Title" value={title} onChange={function (e) { setValue(e) }} />
                        <button className='btnsm btn-success' style={{ marginLeft: "10px" }} onClick={getTitle}> New List </button></span>

                    <span>

                        {
                            (uid) && (checkbox == true) ? <input type="checkbox" name="" value={checkbox} onClick={function () { checkboxEvent(uid) }} checked /> :
                                (checkbox == false) ? <input type="checkbox" name="" value={checkbox} onClick={function () { checkboxEvent(uid) }} /> : <span></span>

                        }

                    </span>


                    {singletitle}  <br /> <br />



                    <span>
                        Sub Task : <input type="text" name="Todo" value={todo} onChange={function (e) { setValue(e) }} />

                        <button className='btnsm btn-info' style={{ marginLeft: "10px" }} onClick={getSubTitle}> New Step </button>
                    </span>

                    <ol>
                        {xyz}
                    </ol>


                    {
                        (uid) ? <button className="Post_btn" onClick={updateData}>update</button> :
                            <button className="Post_btn" onClick={sendData}>Post</button>

                    }
                </div>
            </div>
        </div >
    )
}

export default Create_todo







{/* <button className="Post_btn" onClick={sendData}>Post</button>
                    <button className="Post_btn" onClick={updateData}>update</button> */}