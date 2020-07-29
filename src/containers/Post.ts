import { connect } from "react-redux";
import axios from 'axios';
import Post from "../components/Post";
import { MainPostData } from "../reducer/type";
import { setPost } from "../action";


const mapStateToProps = (state) => {
    console.log(state)
    return {
        userId: state.reducer.information.user_Id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        writing: (userId,title,contents) => axios.post('http://localhost:8080/post/post' , {
            userId: userId,
            title: title,
            Contents: contents
        }).then((result) => {
            console.log(result, 'Post result')
             axios.get('http://localhost:8080/post/allpost', {
            }).then(({data}:MainPostData) => {
                dispatch(setPost(data))
            })
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
