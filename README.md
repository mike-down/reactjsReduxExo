#The First deliverable for the exercise</br>
<h3>Objective : editing the web app interface using "react inline styles",</h3></br>

  <p>=> components/App.js : adding a title and some div markups to have a code more organised, centering the elements, changing the colors, adding borders.</p>
  <p>=> components/Todo.js : centering the list items, removing the dots in the beginning of the list items, adding a border in the bottom of each one of them.</p>
  <p>=> components/TodoList.js : putting the list in the center.</p>
  <p>=> containers/AddTodo.js : adding style to the button (border, colors, pointer, hover...),centering the elements, adding style to the input markup and the placeholder.</p>


#The Second deliverable for the exercise</br>
<h3>Objective : changing the functionalities of the web app</h3></br>

  <p>=>actions/index.js: adding action creators the 3 buttons validate, invalidate and comfirm.</p>
  <p>=>components/Todo.js: adding 3 buttons validate, invalidate and comfirm, adding 5 props: valid as number(0 for possible stat,1 for valid stat, 2 for invalid stat), comfirm as a boolean , 3 function for the onclick function for each one of the buttons.</p>
  <p>=>components/TodoList.js: linked the 3 functions with others functions that takes the "TodoId" as an argument</p>
  <p>=>containers/visibleTodoList.js: rewrite the mapDispatchToProps function which is a function that it use to regroup all the action creators with there events.</p>
  <p>=>reducers/todos.js : modify the reducers to execute the needed transformation when the action is detected. the reducer todo change the state of the todos objects, and the todos reducer create a new store object without altering the old stores object of the application.</p>

#Conclution:
<p>This is actually the first time I work with reactjs, redux freamwork and ES6/ES2015, I find some difficulty to understand the syntax of EX6, how it work and what's driving it, but with the help of some tutorials, I first start by learning how reactjs works then how to use it, especially "react inline styles" that I used for the first part of this exercise. After that I start working on understanding redux, and than I analyze the code of the application to find where I should modify it, I find it really hard at first to decide what to change but every things become clear to me after some time setting in front of the code and reading it again and again after that I know exactly there to make my editing.</p>
<p>Finally, I really like the way redux works it's a special architecture and I new way of thinking the web apps, I really enjoy passing time working with it, and I can say the same things about reactjs. the JavaScript new syntax is really great, I love it, easy and quick ones you know it.</p>
