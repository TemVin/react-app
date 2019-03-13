import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './SearchInput.less';

class SearchInput extends PureComponent {
  render() {
    return (
      <div>
        <form >
          <input 
            className='input'
            value={this.props.value}
            onChange={this.props.onChange}
            {...this.props}
          />
        </form>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default CSSModules(SearchInput, styles);
