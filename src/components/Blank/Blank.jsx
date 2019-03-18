import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Table } from 'react-bootstrap';

import styles from './Blank.less';

class Blank extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <div className='blank-container'>
        <h2>Ваши данные</h2>
        <Table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Почта</th>
                    <th>Пароль</th>
                </tr>
                {
                  users.map( (item, index) => {
                    return (
                      <tr key={item.password}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                      </tr>
                    )
                  })
                }
            </thead>
        </Table>
      </div>
    );
  }
}

Blank.propTypes = {
  users: PropTypes.array,
};

export default CSSModules(Blank, styles);