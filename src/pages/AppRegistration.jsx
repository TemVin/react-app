import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';

import Forma from '../components/Forma/Forma';
import Blank from '../components/Blank/Blank';

import styles from './AppRegistration.less';

class AppRegistration extends PureComponent {
  state = {
    fields: [
      {
        name: 'name',
        value: '',
      },
      {
        name: 'lastname',
        value: '',
      },
      {
        name: 'email',
        value: '',
      },
      {
        name: 'password',
        value: '',
      },
    ],
    users: [],
    validated: false,
  };

  updateInput = ({ target: { name, value } }) => {
    const { fields } = this.state;
    const getNewState = () => (
      fields.map((item) => {
        if (item.name === name) {
          const newItem = { ...item, value };
          return newItem;
        }
        return item;
      })
    );

    const newFields = getNewState();

    this.setState({
      fields: newFields,
    });
  }

  isEmptyFields = () => {
    const { fields } = this.state;
    return fields.some(item => item.value === '');
  }

  resetFiledsValue = fields => (
    fields.map((item) => {
      const newItem = { ...item, value: '' };
      return newItem;
    })
  );

  handleAddClick = (event) => {
    const { fields, users } = this.state;
    const newObject = {};

    event.preventDefault();
    
    this.setState({ validated: true });

    if (!(this.isEmptyFields())) {
      fields.forEach((item) => {
        newObject[item.name] = item.value;
      });

      const newFields = this.resetFiledsValue(fields);

      this.setState({
        users: [
            ...users, newObject,
        ],
        fields: newFields,
        validated: false,
      });
    }
  }

    render(){
      const {
        fields,
        users,
        validated,
      } = this.state;

      return (
        <div className='container-form'>
          <Forma 
            fields={fields}
            changeInput={this.updateInput}
            handleAddClick={this.handleAddClick}
            validated={validated}
          />
          {users.length !== 0 && (<Blank users={users}/>)}
        </div>
      )
    }
  }

export default CSSModules(AppRegistration, styles);