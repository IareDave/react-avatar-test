import React from "react";
import { render } from "react-dom";
import ReactDropzone from "react-dropzone";
import request from "superagent";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    });
  }

  onFiles = (file) => {
    ReactDropzone.map(file => (
  <div className="preview-container">
  <li key={file.name}>
    {file.name} - {file.size} bytes
  </li>
  </div>
),);
}

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    return (
      <section className="container">
    <div {...ReactDropzone({className: 'dropzone disabled'})}>
    <div className="test">
      <input className="file-container" {...ReactDropzone()} />
    </div>
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <aside>
      <h4>Files</h4>
      <ul>onFiles()</ul>
    </aside>
  </section>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);

import React from 'react';
import Dropzone from 'react-dropzone';

export default class App extends React.Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}
