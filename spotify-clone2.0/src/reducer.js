export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  token: 
    "BQBOb-jGrook6prQy2nfri7zkjr_Z_XkbGKMyes4Cf8SySYgYFFT4VBIDuva6wZpOx-_xdQms4KsLeLZ6HK7ippyGMFPr5MSSENffMN7NvR9FkvV-IdUQ78LVL7WvQPgYTnRTbO0NEJ-AEz9g5p_l_OGXi5yTzDM-dVu8omTDZ1V8q4EIeT1",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer