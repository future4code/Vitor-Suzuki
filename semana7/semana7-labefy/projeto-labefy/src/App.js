import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    playlists: [],
    inputName: "",
    inputSearch: "",
    resultSearch: [],
    playlistTrack: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const header = {
      headers: {
        Authorization: "vitor-suzuki-paiva"
      }
    }
    axios.get(url, header)
      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value })
  }

  handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      this.createPlaylist()
    }
  }

  handleSearchEnter = (e) => {
    if (e.keyCode === 13) {
      this.searchPlaylists  ()
    }
  }

  handleSearch = (e) => {
    this.setState({ inputSearch: e.target.value })
  };

  createPlaylist = () => {
    const header = {
      headers: {
        Authorization: "vitor-suzuki-paiva"
      }
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputName,
    }

    axios.post(url, body, header)
      .then(() => {
        alert("Playlist criada com sucesso!")
        this.setState({ inputName: "" })
        this.getAllPlaylists()
      })
      .catch(() => {
        alert("Tente novamente :(")
      })

  }

  searchPlaylists = () => {
    const header = {
      headers: {
        Authorization: "vitor-suzuki-paiva"
      }
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.inputSearch}`

    axios.get(url, header)
      .then((res) => {
        this.setState({ resultSearch: res.data.result.playlist })
        this.setState({ inputSearch: "" })
      })
      .catch((err) => {
        console.log(err.response)
      })

  }

  renderPlaylistComponents = () => {
    return this.state.playlists.map((pl) => {
      return <li key={pl.id}>{pl.name}</li>
    })
  }

  renderResultSearch = () => {
    return this.state.resultSearch.map((playlist) => {
      return <li key={playlist.id} onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</li>
    })
  }

  getPlaylistTracks = (id) => {
    const header = {
      headers: {
        Authorization: "vitor-suzuki-paiva"
      }
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios.get(url, header)
    .then((res) => {
      console.log(res.result)
    })
    .catch((err) => {
      this.setState({})
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Labefy</h1>
          <hr />
          <h2>Minhas Playlists</h2>
          {this.renderPlaylistComponents()}
        </div>
        <hr />
        <div>
          <h2>Criar Playlist</h2>
          <input value={this.state.inputName} onChange={this.handleName} onKeyDown={this.handleClickEnter}></input>
          <button onClick={this.createPlaylist}>Criar</button>
        </div>
        <hr />
        <div>
          <h2>Procurar Playlist</h2>
          <input value={this.state.inputSearch} onChange={this.handleSearch} onKeyDown={this.handleSearchEnter}></input>
          <button onClick={this.searchPlaylists}>Procurar</button>
          {this.renderResultSearch()}
        </div>
      </div>
    );
  }
}



