import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { AddPostContainer, ScreenContainer } from './styled'
import AddPostForm from './AddPostForm'
import Typography from '@material-ui/core/Typography'

const AddRecipePage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <AddPostContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Novo Post</Typography>
        <AddPostForm/>
      </AddPostContainer>
    </ScreenContainer>
  )
}

export default AddRecipePage