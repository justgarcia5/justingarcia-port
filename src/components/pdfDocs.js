import React from 'react';

import Letter from '../pdf_files/letter.pdf'
import Resume from '../pdf_files/justin-resume.pdf'

const PdfDocs = () => (
  <div className="docs">
    <h2><b>Documents</b></h2>
    <br/>
    <div className="row">
      <a className="col-sm-6" href={Letter} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-file-pdf" />
        <p>Letter of Recomendation</p>
      </a>
      <a className="col-sm-6" href={Resume} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-file-pdf" />
        <p>Resume</p>
      </a>
    </div>
  </div>
)

export default PdfDocs
