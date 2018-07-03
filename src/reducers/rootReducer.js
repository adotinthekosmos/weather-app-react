import Constants from "../constants/constants";
const rootReducer = (
  state = { redirectToReferrer: false, fieldIsEmpty: true },
  action
) => {
  switch (action.type) {
    case Constants.authLogin: {
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        fieldIsEmpty: action.payload.fieldIsEmpty
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
