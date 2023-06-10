import * as types from "../Redux/actionType";

const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldstate = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MUSIC_RECORDS_REQUEST: {
      return {
        ...oldstate,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_MUSIC_RECORDS_SUCCESS: {
      return {
        ...oldstate,
        musicRecords: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_MUSIC_RECORDS_FAILURE: {
      return {
        ...oldstate,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return oldstate;
  }
};

export { reducer };
