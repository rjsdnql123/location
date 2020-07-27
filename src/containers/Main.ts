import { AuthLoding, SetLogin } from "../reducer/type";
import { setLogin } from "../action";
import { connect } from "react-redux";
import Main from "../components/Main";
console.log(Main,'aasdffdssaff')
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
  export default connect(mapStateToProps, mapDispatchToProps)(Main);