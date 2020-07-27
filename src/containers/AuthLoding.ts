import { connect } from "react-redux";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import { setLogin, setInformation } from "../action";
import {  Information, ReduxState } from "../reducer/type";

const mapStateToProps = (state:ReduxState) => {
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
  const mapDispatchToProps = (dispatch:Function) => {
      return {
          isLogin: (userLogin: string) => dispatch(setLogin(userLogin)),
          information: (userInformation:Information) => dispatch(setInformation(userInformation))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);