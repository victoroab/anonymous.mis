import React from 'react'

function Messages() {
  return (
	<div>
    <div class="container">
      <h1>Messages</h1>
      <div class="posts">
        <div class="post">
          <div class="post-header">
           
            <p class="post-date">Posted on January 1, 2022</p>
            <p class="post-user">User 1</p>
          </div>
          <div class="post-body">
            <p>This is the body of Post 1.</p>
          </div>
        </div>
        <div class="post">
          <div class="post-header">

            <p class="post-date">Posted on January 2, 2022</p>
            <p class="post-user">User 2</p>
          </div>
          <div class="post-body">
            <p>This is the body of Post 2.</p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Messages