export const makeActionStrings = action => ({
    REQUEST: `${action}_REQUEST`,
    SUCCESS: `${action}_SUCCESS`,
    FAILURE: `${action}_FAILURE`
});

/**
 * Creates an action function for the specified type that
 * generates an action object with those params
 * @param {String} type 
 * @param  {...String} params 
 */
export const makeActionFunction = (type, ...params) =>
    function(...args) {
        const action = { type, payload: {} };
        params.forEach((arg, i) => {
            action.payload[params[i]] = args[i]
        });
        return action;
    }