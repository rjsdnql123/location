import { connect } from "react-redux";
import AuthLoadingScreen from "../AuthLoadingScreen";
import { setLogin } from "../action";
import { AuthLoding, SetLogin } from "../reducer/type";

const mapStateToProps = (state:AuthLoding) => {
  console.log(state,'이거뭐얏~')
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
const mapDispatchToProps = (dispatch:Function) => {
    return {
        isLogin: (userLogin: any) => dispatch(setLogin(userLogin))
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);