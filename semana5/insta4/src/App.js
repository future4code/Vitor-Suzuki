import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import perfil1 from './img/perfil1.jpg';
import post1 from './img/post1.jpg';
import perfil2 from './img/perfil2.jpg';
import post2 from './img/post2.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {

  state = {
    posts: [
      { nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
      { nomeUsuario: 'thatsamuray', fotoUsuario: perfil1, fotoPost: post1 },
      { nomeUsuario: 'nuararock', fotoUsuario: perfil2, fotoPost: post2 },
    ]
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div>
          {post.nomeUsuario},
          {post.fotoUsuario},
          {post.fotoPost},
          <hr />
        </div>
      )
    })

    return (
      <MainContainer>
        <Post
          {...listaDePosts}
        />

        <Post
          {...listaDePosts}
        />

        <Post
          {...listaDePosts}
        />
      </MainContainer>
    );
  }
}

export default App;
