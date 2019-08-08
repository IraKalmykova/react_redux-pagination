import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
import { connect } from 'react-redux';
import { setPerPage, setActivePage } from '../../redux/actions';

const Pagination = ({
  perPage,
  activePage,
  setPerPageNumber,
  paginationList,
  setActivePageNumber,
}) => (
  <div className="pagination">
    <div>
      <span className="pagination__select-label">Show</span>
      <select
        className="pagination__select"
        onChange={({ target }) => setPerPageNumber(target.value)}
        value={perPage}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>

    <ul className="pagination__list">
      <li>
        <button
          type="button"
          className={activePage === 1
            ? 'pagination__item pagination__item--disabled'
            : 'pagination__item'
          }
          onClick={() => setActivePageNumber(activePage - 1)}
        >
          Prev
        </button>
      </li>
      {paginationList.map(paginationItem => (
        <li key={paginationItem}>
          <button
            type="button"
            className={
              activePage === paginationItem
                ? 'pagination__item pagination__item--active'
                : 'pagination__item'
            }
            onClick={() => setActivePageNumber(paginationItem)}
          >
            {paginationItem}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          className={activePage === paginationList.length
            ? 'pagination__item pagination__item--disabled'
            : 'pagination__item'
          }
          onClick={() => setActivePageNumber(activePage + 1)}
        >
          Next
        </button>

      </li>
    </ul>
  </div>
);

const mapStateToProps = state => ({
  perPage: state.perPage,
  activePage: state.activePage,
  paginationList: state.paginationList,
});

const mapDispatchToProps = dispatch => ({
  setPerPageNumber: perPage => dispatch(setPerPage(perPage)),
  setActivePageNumber: activePage => dispatch(setActivePage(activePage)),
});

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setPerPageNumber: PropTypes.func,
  paginationList: PropTypes.arrayOf(PropTypes.number),
  setActivePageNumber: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  setPerPageNumber: () => {},
  paginationList: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
