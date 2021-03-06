import React from "react"
import RepoTile from "../components/RepoTile"

class UserShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSlug: props.match.params.user_slug,
      user: {},
      userRepos: []
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchUserRepos = this.fetchUserRepos.bind(this)
  }

  fetchUser() {
    fetch(`/api/v1/users/${this.state.userSlug}`, {
      credentials: "same-origin"
    }).then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  fetchUserRepos() {
    fetch(`https://api.github.com/users/${this.state.userSlug}/repos`)
    .then(response => {
      if (response.ok) { return response; }
      else { throw new Error("Could not reach GitHub server!") }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ userRepos: body })
    })
    .catch(error => this.props.error(error.message));
  }

  componentDidMount() {
    this.fetchUser()
    this.fetchUserRepos()
  }

  render() {
    return (
      <div className="profile-show">
        <img src={`${this.state.user.avatar_url}`} alt={`${this.state.user.name} profile photo`} className='profile-icon-large' />
        <div className='user-show-page-name'>
          <h2><a href={this.state.user.github_url || this.state.user.html_url}>{this.state.user.name}</a></h2>
          <span className="vote">Followers : {`${this.state.user.followers}`}</span>
          <span className="vote">Following : {`${this.state.user.following}`}</span>
        </div>
        <br />
        <div className="repo-description">{this.state.user.bio}</div>
        <br />
        <h4 className='text-center'>{`${this.state.user.name}'s repositories:`}</h4>
        <RepoTile searchResults={this.state.userRepos} id='user-repos' />
      </div>
    )
  }
}

export default UserShowPage;
