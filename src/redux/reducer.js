import {
  DATA_RECEIVED,
  SET_PER_PAGE,
  SET_ACTIVE_PAGE,
} from './actions';

const initialState = {
  users: [],
  shownUsers: [],
  isLoaded: false,
  perPage: 5,
  activePage: 1,
  total: 0,
  paginationList: [],
  activeUserDesc: 0,
};

const countNumberOfPages = (total, perPage) => (
  Array(Math.ceil(total / perPage))
    .fill(1)
    .map((item, i) => i + 1)
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        isLoaded: true,
        users: action.users,
        total: action.users.length,
        paginationList:
          countNumberOfPages(action.users.length, state.perPage),
        shownUsers: [...action.users.slice(0, state.perPage)],
      };

    case SET_PER_PAGE:
      return {
        ...state,
        perPage: action.perPage,
        paginationList: countNumberOfPages(state.total, action.perPage),
        activePage: 1,
        shownUsers: [...state.users.slice(0, action.perPage)],
      };

    case SET_ACTIVE_PAGE:
      if (
        action.activePage >= 1
        && action.activePage <= state.paginationList.length
      ) {
        return {
          ...state,
          activePage: action.activePage,
          shownUsers: [...state.users.slice(
            (action.activePage - 1) * state.perPage,
            action.activePage * state.perPage
          ),
          ],
        };
      }

      return state;

    default:
      return state;
  }
};

export default reducer;
