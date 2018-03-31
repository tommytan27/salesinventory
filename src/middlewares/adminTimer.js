import actionTypes from '../constants/actionTypes';
import modeOptions from '../constants/modeOptions';

var adminTiming = null;
var timeout = 0;

const adminTimer = store => next => action => {
    switch (action.type) {
        case actionTypes.CHANGE_MODE_ADMIN:
            timeout = action.timeout;
            adminTiming = setTimeout(() => { next({
                type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
            }); }, timeout * 60000);
            break;
        case actionTypes.CHANGE_MODE_USER:
            clearTimeout(adminTiming);
        default:
            let activeMode = store.getState().activeMode;
            if (activeMode === modeOptions.ADMIN_MODE) {
                clearTimeout(adminTiming);
                adminTiming = setTimeout(() => { next({
                    type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
                }); }, timeout * 60000);
            }
            break;
    }

    let result = next(action);

    return result;
}

export default adminTimer;