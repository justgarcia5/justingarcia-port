import React from 'react'

class SubmitComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      image: ''
    }
  }

  onChange(e) {
    let file = e.target.files

    let reader = new FileReader()
    reader.onload = (e) => {
      console.loge('file reader', e.target.result)
    }
  }

  render(){
    return(
      <div onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    )
  }
}

export default SubmitComponent
