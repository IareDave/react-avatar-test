import React from 'react'
import Dropzone from 'react-dropzone'
import { Container, Dropbox } from './styles'
import Avatar, { ConfigProvider } from 'react-avatar'


export default class FileUpload extends React.Component {
  state = {
    files: []
  }

  onDrop = files => {
    // To upload multiple photos, use -> this.state.files.concat(files)
    this.setState({files})
  }

  render() {
    const previewStyle = {
      display: 'inline',
      maxWidth: 100,
      maxHeight: 100,
    };

    const preview = this.state.files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))

    const files = this.state.files.map(file => (
      <li key={file.name}>
      {file.name} - {file.size} bytes
      <img src={file.preview} />
      </li>
    ))

    return (
      <Container>
          <ConfigProvider avatarRedirectUrl="https://avatar-redirect.appspot.com/google/Iaredave" colors={['red', 'green', 'blue']}>
              <div>
                  <img src="https://avatar-redirect.appspot.com/google/Iaredave"
                       alt="JorgenEvens on Twitter" />
                  <Avatar size="100" round={true} name="Wim Mostmans" />
              </div>
          </ConfigProvider>
          <button onClick={this.testButton}>
        Test button
      </button>
      <Dropzone accept={["image/jpeg", "image/gif", "image/bmp", "image/png"]}
      onDrop={this.onDrop}
      maxSize={this.MAX_FILE_SIZE_BYTES = 4000000}
      >
      {({ getRootProps, getInputProps }) => (
        <section className='container'>
        <div {...getRootProps({ className: 'dropzone' })}>
        <Dropbox>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        </Dropbox>
        </div>
        <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        </aside>
        </section>
      )}
      </Dropzone>
      </Container>
    )
  }
}
