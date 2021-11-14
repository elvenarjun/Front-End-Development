import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAddTask}) => {
    return (
      <header className='header'>
          <h1 >{title}</h1>
          <Button color={showAddTask ? 'blue' : 'green'} text={showAddTask ? 'Add' : 'Close'} onClick={onAdd}/>
      </header>
    )
}

Header.defaultProps = {
  title: 'Task Runner',
}

Header.propTypes = {
  title: PropTypes.string,
}

//css in jsx
// const headingStyle = {
//   color: 'blue', 
//   backgroundColor: 'white',
// }

export default Header