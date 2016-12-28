import React, { PropTypes } from 'react'
/***********************beginStyle***********************/
const styles={
  text :{
    listStyleType : 'none',
    borderBottom : '1px solid white',
    width: '100%',
    marginRight: '-20px',
    marginLeft: '-20px'
  },
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
  msTouchAction: 'manipulation',
      touchAction: 'manipulation',
  cursor: 'pointer',
  WebkitUserSelect: 'none',
     MozUserSelect: 'none',
      msUserSelect: 'none',
          userSelect: 'none'
}};
/**********************endStyle************************/

const Todo = ({onClickinva, onClickva, onClickcomf, comfirm, valid, text }) => (
  <li style={styles.text} >
     <label style={Object.assign({},{textDecoration: valid ===2 ? 'line-through' : 'none'})}>{text}</label>
   <button id="validbtn" onClick={onClickva}
     style={Object.assign({},styles.btn,{display: (valid ===0 && comfirm !== true) ? 'initial' : 'none',})} >validate</button>
   <button id="invalidbtn" onClick={onClickinva}
    style={Object.assign({},styles.btn,{display: (valid ===0 && comfirm !== true) ? 'initial' : 'none',})} >invalidate</button>
  <button id="comfirmbtn" onClick={onClickcomf}
    style={Object.assign({},styles.btn,{display: (valid ===0 && comfirm === false)||(comfirm===true) ? 'none' : 'initial',})} >comfirm</button>
  </li>
)

Todo.propTypes = {
  onClickinva: PropTypes.func.isRequired,
  onClickva: PropTypes.func.isRequired,
  onClickcomf: PropTypes.func.isRequired,
  comfirm: React.PropTypes.bool.isRequired, // false = possible, true = comfirmed
  valid: React.PropTypes.number.isRequired, // 0 = possible, 1 = valide, 2 = invalide
  text: PropTypes.string.isRequired
}

export default Todo
