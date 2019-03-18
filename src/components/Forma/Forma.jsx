import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import FieldForm from '../FieldForm/FieldForm';

import styles from './Forma.less';

const constantFields = [
  {
    controlId : 'formBasicName',
    fieldName: 'name',
    label: 'Имя',
    type: 'text',
    placeholder: 'Введите имя',
    required: true,
  },
  {
    controlId: 'formBasicLastname',
    fieldName: 'lastname',
    label: 'Фамилия',
    type: 'text',
    placeholder: 'Введите фамилию',
    required: true,
  },
  {
    controlId: 'formBasicEmail',
    fieldName: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Введите email',
    required: true,
  },
  {
    controlId: 'formBasicPassword',
    fieldName: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите password',
    required: true,
  },
];

class Forma extends React.Component {

  createFieldForm = () => {
    const {
      fields,
      changeInput,
    } = this.props;

    return constantFields.map((item) => {
      const { fieldName } = item;
      const currentFieldIndex = fields.map(field => field.name).indexOf(fieldName);
      if (currentFieldIndex === -1) {
        return null;
      }
      const currentField = fields[currentFieldIndex];
      return (
        <FieldForm
          key={item.controlId}
          id={item.controlId}
          fieldName={currentField.name}
          data={currentField.value}
          handleChangeInput={changeInput}
          validated={this.props.validated}
          {...item}
        />
      );
    });
  }
  render() {
    let fieldsForm = this.createFieldForm();
    return (
      <Fragment>
        <Form
          onSubmit={this.props.handleAddClick}
        >
          {fieldsForm}
          <div className = 'center-block'>
            <Button 
              variant="primary"
              type="submit"
            >
              Создать
            </Button> 
          </div >
        </Form>
      </Fragment>
    );
  }
}

export default CSSModules(Forma, styles);