import modeOptions from "../constants/modeOptions";
import actionTypes from "../constants/actionTypes";

const activeMode = (state = modeOptions.USER_MODE, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_MODE_ADMIN:
            return modeOptions.ADMIN_MODE;
        case actionTypes.CHANGE_MODE_USER:
            return modeOptions.USER_MODE;
        default:
            return state;
    }
}

export default activeMode;