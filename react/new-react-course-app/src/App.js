import React, {useState} from "react";
import Counter from "./component/Counter"
import ClassCounter from "./component/ClassCounter"
import './styles/App.css';
import PostItem from "./component/PostItem";
import Postlist from "./component/Postlist";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";
import PostForm from "./component/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "description"},
        {id: 2, title: "JavaScript2", body: "description2"},
        {id: 3, title: "JavaScript3", body: "description3"},
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    return (
        <div className="App">
            <PostForm/>
            <Postlist posts={posts} title={"СПИСОК ПОСТОВ"}/>
        </div>
    );
}

export default App;
