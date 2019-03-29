import React, { Component } from 'react';
import { resMsg } from 'rober19-config';

class Members extends Component {
  NewMember() {}

  render() {
    return (
      <div className="container">
        <h1>Formulario</h1>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Jack" id="first_name" type="text" className="validate" />
                <label>Nombre</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" placeholder="Frost" />
                <label>Apellido</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="CC #.###.###" id="first_name" type="text" className="validate" />
                <label>IDENTIFICACION CIUDADANA</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" placeholder="4" />
                <label>Rama-ID</label>
              </div>
            </div>

            <div className="row">
            <div className="col s6">
                <select className="browser-default">
                  <option defaultValue="" disabled selected>
                    Choose your option
                  </option>
                  <option defaultValue="1">Option 1</option>
                  <option defaultValue="2">Option 2</option>
                  <option defaultValue="3">Option 3</option>
                </select>
                <label>Semestre</label>
              </div>
              <div className="col s6">
                <select className="browser-default">
                  <option defaultValue="" disabled selected>
                    Choose your option
                  </option>
                  <option defaultValue="1">Option 1</option>
                  <option defaultValue="2">Option 2</option>
                  <option defaultValue="3">Option 3</option>
                </select>
                <label>Rama</label>
              </div>
            </div>          

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" placeholder="jack@frost.com"/>
                <label>Email</label>
              </div>
            </div>

          </form>
        </div>

        <div className="row">
          <table className="striped centered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rama</th>
                <th>Rama ID</th>
                <th>.</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
                <td>$0.87</td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
                <td>$3.76</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$3.76</td>
                <td>$7.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Members;
