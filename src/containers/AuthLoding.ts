import { connect } from "react-redux";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import { setLogin } from "../action";
import { AuthLoding, SetLogin } from "../reducer/type";

const mapStateToProps = (state:AuthLoding) => {
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
      return {
          isLogin: (userLogin: SetLogin) => dispatch(setLogin(userLogin))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);