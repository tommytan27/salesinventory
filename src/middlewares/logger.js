const logger = store => next => action => {
    console.group(action.type);
    console.info('Dispatching', action);
    let result = next(action);
    console.log('Next state', store.getState());
    console.groupEnd(action.type);
    return result;
}

export default logger;