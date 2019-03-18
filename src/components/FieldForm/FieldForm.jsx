import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

class FieldForm extends React.Component {
    render() {
      const {
        data,
        type,
        placeholder,
        controlId,
        label,
        required,
        handleChangeInput,
        fieldName,
        feedback,
      } = this.props;

      return (
        <Fragment>
            <Form.Group controlId={controlId}>
                <Form.Label>{label}</Form.Label>
                <Form.Control 
                  name={fieldName}
                  value={data}
                  type={type}
                  placeholder={placeholder}
                  required ={required}
                  onChange={handleChangeInput}       
                />
                <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
            </Form.Group>
        </Fragment>
      );
    }
  }

export default FieldForm;
