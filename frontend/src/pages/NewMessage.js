import React from 'react'

function NewMessage() {
  return (
	<div>
		<div class="container2">
      <h1>Add New Message</h1>
      <form>
        <label for="body">Content:</label>
        <textarea id="body" name="body" rows="8" required placeholder='start typing...'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
	</div>
  )
}

export default NewMessage