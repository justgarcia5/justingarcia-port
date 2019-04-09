import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Peru from '../images/peru.jpeg'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Justin Garcia</h2>
            <img
              src={Peru}
              className="peru-pic"
              alt="avatar"
            />
          </Cell>
          <Cell className="contact-cell" col={6}>
            <h2>Contact Me</h2>
            <hr style={{ border: "solid black 2px" }}/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i style={{ color: "black" }} className="fa fa-phone-square" aria-hidden="true"/>
                    (530) 417-2205
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <a  style={{ textDecoration: "none", color: "black" }} href="mailto:justgarcia5@gmail.com" >
                      <i className="fa fa-envelope" aria-hidden="true" />justgarcia5@gmail.com
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
