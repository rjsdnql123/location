import { connect } from "react-redux";
import axios from 'axios';
import { HeaderTitle } from "@react-navigation/stack";
import PostDetail from "../components/PostDetail";
import { setPost } from "../action";
import { MainPostData } from "../reducer/type";

const mapStateToProps = (state) => {
    console.log(state,'poost')
    return {
        post: state.reducer.post,
        userId: state.reducer.information.user_Id
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        writingComment: (userId, postId,Contents) => axios.post('http://localhost:8080/comments/comments', {
            userId: userId,
            postId: postId,
            Contents: Contents
        }).then((result) => {
            console.log(result,'mapdispatch')
        }),
        postSet: () => axios.get('http://localhost:8080/post/allpost', {
        }).then(({data}:MainPostData) => {
            dispatch(setPost(data))
        })
    }
}

export default connect(mapStateToProps, mapDispachToProps)(PostDetail)