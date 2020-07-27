import { Posts, ReduxState } from "../reducer/type";
import { setPost, setLogin } from "../action";
import { connect } from "react-redux";
import Main from "../components/Main";

const mapStateToProps = (state:ReduxState) => {
    console.log(state)
	return {
	  post: state.reducer.post,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
      return {
          postSet: (post: Posts[]) => dispatch(setPost(post)),
          isLogin: (userLogin:string) => dispatch(setLogin(userLogin))
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Main);