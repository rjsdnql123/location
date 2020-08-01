import { Posts, ReduxState, MainPostData } from "../reducer/type";
import { setPost, setLogin } from "../action";
import { connect } from "react-redux";
import Main from "../components/Main";
import axios from 'axios';

const mapStateToProps = (state:ReduxState) => {
    console.log(state,'state')
	return {
	  post: state.reducer.post,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
      return {
          isLogin: (userLogin:string) => dispatch(setLogin(userLogin)),
          postSet: () => axios.get('http://localhost:8080/post/allpost', {
        }).then(({data}:MainPostData) => {
            dispatch(setPost(data))
        })
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Main);
