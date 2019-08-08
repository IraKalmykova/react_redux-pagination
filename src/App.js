import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import { loadData } from './redux/actions';
import UserList from './components/UserList/UserList';
import Pagination from './components/Pagination/Pagination';
import HomePage from './components/HomePage/HomePage';

class App extends React.Component {
  async componentDidMount() {
    this.props.payLoad();
  }

  render() {
    const { isLoaded } = this.props;

    return (
      <div className="App">
        {isLoaded
          ? (
            <>
              <UserList />
              <Pagination />
            </>
          )
          : <HomePage />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  payLoad: () => dispatch(loadData()),
});

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  payLoad: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
