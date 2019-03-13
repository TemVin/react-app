import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Country.less';

const Country = (props) => (
    <div className='block-country'>
        <h4 className='item'>{props.country}</h4>
    </div>
)

Country.propTypes = {
    nameCountry: PropTypes.string,
};

export default CSSModules(Country, styles);