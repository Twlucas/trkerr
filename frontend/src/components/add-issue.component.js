import React, { Component } from "react";
import IssueDataService from "../services/issue.service";

export default class AddIssue extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeClient = this.onChangeClient.bind(this);
    this.onChangeState = this.onChangeState(this);
    this.saveIssue = this.saveIssue.bind(this);
    this.newIssue = this.newIssue.bind(this);
    this.state = {
      title: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDesc(e) {
    this.setState({
        description: e.target.value
    })
  }

  onChangeClient(e) {
    this.setState({
        clientId: e.target.value
    })
  }

  onChangeState(e) {
    this.setState({
        stateId: e.target.value
    })
  }

  saveIssue() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration,
      clientId: this.state.clientId,
      userId: this.state.userId,
      stateId: this.state.stateId
    };
    IssueDataService.create(data)
      .then(response => {
        this.setState({
          title: response.data.title
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newIssue() {
    this.setState({
      title: "",
      description: ""
    });
  }
  
  render() {
    return (
        <div classTitle="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button classTitle="btn btn-success" onClick={this.newIssue}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  title="title"
                />
              </div>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={this.state.description}
                    onChange={this.onChangeDesc}
                    title="description"
                />
              </div>
              <button onClick={this.saveIssue} classTitle="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}
