export const DATA_RECEIVED = 'DATA_RECEIVED';
export const SET_PER_PAGE = 'SET_PER_PAGE';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

const BASE_URL = 'http://dev.frevend.com/json/users.json';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export const loadData = () => (dispatch) => {
  fetch(PROXY_URL + BASE_URL)
    .then(res => res.json())
    .then(({ users }) => (
      dispatch(receiveData(users))
    ));
};

export const receiveData = users => ({
  type: DATA_RECEIVED,
  users,
});

export const setPerPage = perPage => ({
  type: SET_PER_PAGE,
  perPage,
});

export const setActivePage = activePage => ({
  type: SET_ACTIVE_PAGE,
  activePage,
});
