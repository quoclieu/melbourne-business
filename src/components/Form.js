import React from 'react';

import './Form.css';

class Form extends React.Component {

  render() {

    return (
      <div className='center form'>
        <div className='formHeading'>What type of business are you building?</div>
        <form>
          <div className="inputs">
            <div className="inputTitle">Business type</div>
            <select name="business-type">
              <option value="">Please select</option>
              <option value="">Accomodation</option>
              <option value="">Admin and Support Services</option>
              <option value="">Agriculture and Mining</option>
              <option value="">Arts and Recreation Services</option>
              <option value="">Business Services</option>
              <option value="">Construction</option>
              <option value="">Education and Training</option>
              <option value="">Electricity, Gas, Water and Waste Services</option>
              <option value="">Finance and Insurance</option>
              <option value="">Food and Beverage Services</option>
              <option value="">Health Care and Social Assistance</option>
              <option value="">Manufacturing</option>
              <option value="">Public Administration and Safety</option>
              <option value="">Real Estate Services</option>
              <option value="">Retail and Hiring Services</option>
              <option value="">Rental and Hiring Services</option>
              <option value="">Retail Trade</option>
              <option value="">Other</option>
            </select>
          </div>

          <div className="inputs">
            <div className="inputTitle">Rent range</div>
            <input type="text" placeholder="$500" name="min-range"/> to <input type="text" placeholder="$1000" name="max-range"/>
          </div>

          <div className="inputs">
            <div className="inputTitle">Pedestrian Traffic</div>
            <input type="radio" name="ped-traffic" value="yes"/> Yes <br/>
            <input type="radio" name="ped-traffic" value="no"/> No
          </div>

          <div className="inputs">  
            <a className="submit" href="http://www.google.com">Submit</a>
          </div>
        </form>
      </div>
    );
  }
};

export default Form;
