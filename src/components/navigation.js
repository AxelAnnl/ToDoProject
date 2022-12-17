import React, {Component} from 'react'

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a  href='aa' className='text-white'>
                    {this.props.titulo}
                </a>
            </nav>
        )
    }
}
export default Navigation;