import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPostFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'

const AddPostForm = () => {
  const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddPostFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar</>}
        </Button>
      </AddPostFormContainer>
    </form>
  )
}

export default AddPostForm