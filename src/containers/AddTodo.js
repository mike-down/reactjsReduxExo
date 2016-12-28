import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/***********************beginStyle***********************/
const styles ={
        btn : {
          display: 'inline-block',
          padding: '6px 12px',
          marginBottom: '0',
          backgroundColor : '#83C1FF',
          color : 'black',
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: '1.42857143',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          backgroundImage: 'none',
          border: '1px solid transparent',
          borderRadius: '4px',
          marginLeft: '10px',
          msTouchAction: 'manipulation',
              touchAction: 'manipulation',
          cursor: 'pointer',
          WebkitUserSelect: 'none',
             MozUserSelect: 'none',
              msUserSelect: 'none',
                  userSelect: 'none'
        },
        row : {
          marginRight: '-15px',
          marginLeft: '-15px'
        },
        inputStyle : {
          margin: '0',
          lineHeight: 'normal',
          fontSize: '15',
          height:'30px',
          color: 'inherit',
          borderRadius: '4px'
        }
}
/**********************endStyle************************/

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form style={styles.row} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div style={styles.centre}>
            <input placeholder="Any possible defect ?" style={styles.inputStyle} ref={node => {
              input = node
            }} />
          <button id='submitbtn' onMouseEnter={function(){
                                                document.getElementById('submitbtn').style.backgroundColor = '#2994FF';
                                                document.getElementById('submitbtn').style.color = 'white';
                                              }
                                              }
                                 onMouseLeave={function(){
                                                document.getElementById('submitbtn').style.backgroundColor = '#83C1FF';
                                                document.getElementById('submitbtn').style.color = 'black';}
                                              }
                                style={styles.btn} type="submit">
              Add Todo
            </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
