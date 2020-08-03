import { ReduxState, Information } from "../reducer/type";
import { setLogin, setInformation } from "../action";
import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state:ReduxState) => {
	console.log(state,'이거처리 porps')
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
	console.log(dispatch,'=====')
	  return {
		isLogin: (userLogin:string) => dispatch(setLogin(userLogin)),
		information: (userInformation:Information) => dispatch(setInformation(userInformation))

	  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Login);