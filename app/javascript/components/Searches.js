import React from "react"
import PropTypes from "prop-types"

const API = "https://api.github.com/search/repositories?q=rails&language:ruby&sort=stars&order=desc&per_page=2"

class Searches extends React.Component {

  render () {
    return (
      <React.Fragment>
        <table class="table table-dark">
          <thead>
            <th scope="col">Name</th>
            <th scope="col">Repo</th>
            <th scope="col">Watchers</th>
            <th scope="col">Score</th>
            <th scope="col">Forks</th>
            <th scope="col">Owner</th>
          </thead>
          {this.props.results.map((result, index) => (
            <tr>
              <th scope='row'>{result.full_name}</th>
              <td>{result.name}</td>
              <td>{result.watchers}</td>
              <td>{result.score}</td>
              <td>{result.forks}</td>
              <td><img src={result.owner.avatar_url} width="30" height="30"/></td>
            </tr>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

Searches.propTypes = {
  name: PropTypes.string
};
export default Searches
