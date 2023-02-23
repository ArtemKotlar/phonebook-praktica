import { Component } from 'react';
import { Backdrop, Content } from './Modal.styled';

class Modal extends Component {
  state = {};
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>
    );
  }
}

export default Modal;
