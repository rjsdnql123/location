import { AuthLoding, SetLogin } from "../reducer/type";
import { setLogin } from "../action";
import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state:AuthLoding) => {
	console.log(state,'이거처리 porps')
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
	console.log(dispatch,'=====')
	  return {
		isLogin: (userLogin:SetLogin) => dispatch(setLogin(userLogin))
	  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Login);