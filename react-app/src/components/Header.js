import PropTypes from 'prop-types'
import Button from './Button'

const onClick = () => {
  console.log('click');
}

const Header = ({title}) => {
    return (
      <header className='header'>
          <h1 >{title}</h1>
          <Button color='blue' text='Add' onClick={onClick}/>
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