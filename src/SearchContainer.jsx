import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import SearchInput from './SearchInput';

import styles from './SearchContainer.less';

class SearchContainer extends PureComponent {
  render() {
    return (
      <div>
          <h4 className='title'>
            Search countries
          </h4>
          <SearchInput
            placeholder="search..."
            onChange={this.props.onChange}
            value={this.props.value}
          />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  onChangeFilter: PropTypes.func,
  filterValue: PropTypes.string,
};

export default CSSModules(SearchContainer, styles);
