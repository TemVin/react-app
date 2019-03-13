import React, { PureComponent } from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules';

import SearchContainer from './SearchContainer';
import Country from './Country';

import styles from './App.less';

/* для получения данных с удаленного сервера
http://api.population.io:80/1.0/countries
*/
const url = './src/countries.json';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filter: '',
          };
    this.filterCountries = this.filterCountries.bind(this);
    }

    componentWillMount() {
      axios(url)
      .then((response) => {
        const { status, data } = response;
  
        if (status === 200) {
          this.setState({
            items: data,
          });
        }
      })
    }
    
    filterCountries(e){
      this.setState({filter: e.target.value.replace(/^\s+/g, '')})
    }
  
    render(){
      let { filter, items } = this.state;
      if(filter){
        items = items.filter( item =>
          item.toLowerCase()
          .includes(filter.toLowerCase()))
      }
  
      return (
        <div className='container'>
          <SearchContainer
            value={filter}
            onChange={this.filterCountries}            
          />
          {filter.length !== 0 && items.map((item, id) => 
            <Country key={id} country={item} />)
          }
        </div>
      )
    }
  }

export default CSSModules(App, styles);