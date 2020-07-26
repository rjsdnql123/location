import { connect } from "react-redux";
import AuthLoadingScreen from "../AuthLoadingScreen";
import { setLogin } from "../action";
console.log(setLogin,'setLogin')

const mapStateToProps = (state) => {
	console.log(state,'mapstateto porps')
	return {
	  setLogin: state.reducer.setLogin,
	  };
  };
const mapDispatchToProps = (dispatch, userLogin) => {
  console.log(dispatch,'=====', userLogin)
    return {
        onClick: () => dispatch(setLogin(userLogin))
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);