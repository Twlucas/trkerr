import React, { Component } from "react";
import ClientDataService from "../services/client.service";

export default class AddClient extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveClient = this.saveClient.bind(this);
    this.newClient = this.newClient.bind(this);
    this.state = {
      name: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  saveClient() {
    var data = {
      name: this.state.name
    };
    ClientDataService.create(data)
      .then(response => {
        this.setState({
          name: response.data.name
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newClient() {
    this.setState({
      name: ""
    });
  }
  
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newClient}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="div-component-black">
                <nav css="bootstrap-simple-center">
                    <tr>
                      <a>
                        <imput class="add-client.component.js">
                          ADD TODO
                        </imput>
                      </a>
                    </tr>
                </nav>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
              <button onClick={this.saveClient} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}
