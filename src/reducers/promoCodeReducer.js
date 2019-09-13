import { PROMO_CODE } from "../actions/types";

const initialState = {
  opsn: false,
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
