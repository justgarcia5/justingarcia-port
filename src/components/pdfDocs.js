import React from 'react';

import Letter from '../pdf_files/letter.pdf'
import Resume from '../pdf_files/justin-resume.pdf'

const PdfDocs = () => (
  <div className="docs">
    <div>
      <h2>Documents</h2>
    </div>
    <a href={Letter} rel="noopener noreferrer" target="_blank">
      <i className="fa fa-file-pdf" />
      <p>Letter of Recomendation</p>
    </a>
    <a href={Resume} rel="noopener noreferrer" target="_blank">
      <i className="fa fa-file-pdf" />
      <p>Resume</p>
    </a>
  </div>
)

export default PdfDocs
