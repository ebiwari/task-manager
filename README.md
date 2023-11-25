<h2>Step 1- run npm install </h2>

<h2>Query Task</h2>
<p>
    localhost:${port}/tasks: Retrieve all tasks.<br>
    localhost:${port}/tasks/:id: Retrieve a single task by its ID.
<p>

<h2>Add Task</h2>
<p>make post request  localhost:${port}/tasks: Create a new task.<br>
json parameter is needed with data value below<br>
<blockquote>{
    title:your title
    description:your description
}</blockquote></p>

<h2>Update Task</h2>
<p>make put request  localhost:${port}/tasks/:id: Update an existing task by its ID.<br>

json parameter is needed with data value below

<blockquote>
{
    title:your title(optional)
    description:your description(optional)
}</blockquote></p>

<h2>Delete task</h2>
<p>make a delete request  localhost:${port}/tasks/:id: Delete a task by its ID.</p>
