import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createMessage } from '../features/message/messageSlice'


function NewMessage() {
  const [text, setText] = useState('my text')

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createMessage({username:"random user", content:text}))
		// setText('')
	}
  return (
	<div>
		<div class="container2">
      <h1>Add New Message</h1>
      <form onSubmit={onSubmit}>
        <label for="body">Text:</label>
        <input id="body" name="body"  required placeholder='start typing...' value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
	</div>
  )
}

export default NewMessage