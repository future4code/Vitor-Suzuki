import styled from 'styled-components'


export const PostContainer = styled.div`
  display: grid;
  grid-template-areas: 
  "post-side post-title"
  "post-side post-body"
  "post-side post-footer";
  width: 80vw;
  height: 10rem;
  grid-template-columns: 1fr 30fr;
  grid-template-rows: 1fr auto 1fr;
  margin-top: 2rem;
  margin-left: 100px;
  border-radius: 10px;



`

export const PostContent = styled.div`
  display: grid;
  grid-template-areas: 
  "post-side post-title"
  "post-side post-body"
  "post-side post-footer";
  width: 80vw;
  grid-template-columns: 1fr 40fr;
  grid-template-rows: 1fr auto 1fr;

  border-radius: 10px;

  &:hover{
    cursor: pointer;
  }
`

export const PostUser = styled.div`
  display:flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
`

export const PostSide = styled.div`
  grid-area: post-side;
  background-color: rgb(245, 245, 245);

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  margin-right: 5px;
  padding: 5px;

  svg {
    color: white;
    stroke: rgb(150,150,150)
  }

  svg:first-child:hover {
    border-radius: 5px;
    background-color: rgb(220, 220, 220);
    cursor:pointer;
    stroke: red;
  }

  svg:last-child:hover {
    border-radius: 5px;
    background-color: rgb(220, 220, 220);
    cursor:pointer;
    stroke: blue;
  }

  border-radius: 5px;

  

`
export const PostTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: post-title;

  p {
    color: rgb(125,125,125)
  }

  p:hover {
    text-decoration: underline;
  }

  h3 {
    font-family: 'Varela Round', sans-serif;
  }

  h3:hover {
    color: gray;
  }

  background-color: white;

  gap: 50px;
  padding: 0px 20px;

  border-radius: 2px;

  &:hover{
    cursor: pointer;
  }

`
export const PostBody = styled.div`
  display:flex;
  padding: 0 20px;
  grid-area: post-body;
  background-color: white;

`
export const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-area: post-footer;
  background-color: white;
  border-radius: 2px;
  padding: 0px 20px;
  padding-top: 12px;
  gap: 5px;
  font-size: 14px;

  color: rgb(100,100,100);

  &:hover {
    color: rgb(200,200,200);
    cursor: pointer;
  }
  
  svg {
    font-size: 20px;
  }

`