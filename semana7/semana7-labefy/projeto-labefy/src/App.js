import './App.css';
import React from 'react';
import axios from 'axios';
import imagem from './img/red-play-button.png'

export default class App extends React.Component {
  state = {
    playlists: [],
    inputName: "",
    inputSearch: "",
    resultSearch: [],
    playlistTrack: [],
    inputNameTrack: "",
    inputArtistTrack: "",
    inputUrlTrack: "",
    select: "",
    sourceUrl: "",
    loading: false
  }

  componentDidMount() {
    this.getAllPlaylists()
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
      this.searchPlaylists()
    }
  }

  handleSearch = (e) => {
    this.setState({ inputSearch: e.target.value })
  };

  handleNameTrack = (e) => {
    this.setState({ inputNameTrack: e.target.value })
  }
  handleArtistTrack = (e) => {
    this.setState({ inputArtistTrack: e.target.value })
  }
  handleUrlTrack = (e) => {
    this.setState({ inputUrlTrack: e.target.value })
  }

  handleSelect = (e) => {
    this.setState({ select: e.target.value })
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
        console.log(res)
        this.setState({ resultSearch: res.data.result.playlist })
        this.setState({ inputSearch: "" })
      })
      .catch((err) => {
        console.log(err.response)
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
        this.setState({ playlistTrack: res.data.result.tracks })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  addTrackToPlaylist = () => {
    const header = {
      headers: {
        Authorization: "vitor-suzuki-paiva"
      }
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.select}/tracks`
    const body = {
      "name": this.state.inputNameTrack,
      "artist": this.state.inputArtistTrack,
      "url": this.state.inputUrlTrack
    }
    axios.post(url, body, header)
      .then(() => {
        alert("Música adicionada!")
      })
      .catch(() => {
        alert("Tente novamente :(")
      })

  }

  clickPlay = async (url) => {
    this.setState({loading: true})
    await this.setState({sourceUrl: url})
    this.setState({loading: false})
  }

  renderPlaylistComponents = () => {
    return this.state.playlists.map((pl) => {
      return <li key={pl.id}>{pl.name}</li>
    })
  }

  renderResultSearch = () => {
    return this.state.resultSearch.map((playlist) => {
      return <li className="track" key={playlist.id} onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</li>
    })
  }

  renderPlaylistTracks = () => {
    return this.state.playlistTrack.map((track) => {
      return <><p key={track.id}>{track.name}</p>
      <img src={imagem} onClick={() => this.clickPlay(track.url)}></img></>
      
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
          {this.renderPlaylistTracks()}
          {this.state.playlistTrack.length > 0 && !this.state.loading && <audio controls>
            <source src={this.state.sourceUrl} type="audio/mpeg"></source>
          </audio>}
          <button onClick={() => console.log(this.state)}>Teste</button>
          <hr />
          <h2>Adicionar Músicas</h2>
          <select onChange={this.handleSelect}>
            <option>Selecione a playlist</option>
            {this.state.playlists.map((playlist) => {
              return <option value={playlist.id}>{playlist.name}</option>
            })}
          </select>
          <input value={this.state.inputNameTrack} onChange={this.handleNameTrack} placeholder="Nome da música"></input>
          <input value={this.state.inputArtistTrack} onChange={this.handleArtistTrack} placeholder="Nome do artista"></input>
          <input value={this.state.inputUrlTrack} onChange={this.handleUrlTrack} placeholder="Url da música"></input>
          <button onClick={this.addTrackToPlaylist}>Adicionar</button>
        </div>
      </div>
    );
  }
}



