import actionTypes from '../constants/actionTypes';

var adminTiming = null;

const adminTimer = store => next => action => {
    switch (action.type) {
        case actionTypes.CHANGE_MODE_ADMIN:
            adminTiming = setTimeout(() => { next({
                type: actionTypes.CHANGE_MODE_USER
            }); }, 5000);
            break;
        case actionTypes.CHANGE_MODE_USER:
            clearTimeout(adminTiming);
        default:
            clearTimeout(adminTiming);
            adminTiming = setTimeout(() => { next({
                type: actionTypes.CHANGE_MODE_USER
            }); }, 5000);
            break;
    }

    let result = next(action);

    return result;
}

export default adminTimer;