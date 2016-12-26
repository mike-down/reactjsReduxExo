import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

/***********************beginStyle***********************/
const styles = {
      well : {
       margin: 'auto',
       width: '25%',
       minHeight: '20px',
       padding: '19px',
       marginBottom: '20px',
       backgroundColor: '#34495e',
       border: '1px solid #e3e3e3',
       borderRadius: '20px 0'
     },
     text : {
       textAlign: 'center',
       color : 'white'
     },
     centre : {
         margin: 'auto',
         width: '80%',
         border: '3px solid white',
         padding: '19px',
         backgroundColor : '#FFB435',
         borderRadius: '20px 0'
     }

};
/**********************endStyle************************/

const App = () => (
  <div>
    <div style={styles.well}>
      <h3 style={styles.text}>TODOs</h3>
      <div style={styles.centre}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </div>
    </div>
  </div>
)

export default App
