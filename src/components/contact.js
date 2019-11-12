import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Peru from '../images/peru.jpeg'


class Contact extends Component {
  render() {
    return(
      <div className="container">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>Justin Garcia</h1>
            <img
              src={Peru}
              className="img-fluid peru-pic"
              alt="avatar"
            />
          </Cell>
          <Cell col={6}>
            <h1>Contact Me</h1>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px'}} >
                    <i style={{ color: "black" }} className="fa fa-phone-square" aria-hidden="true"/>
                    (530) 417-2205
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px'}}>
                    <a  style={{ textDecoration: "none", color: "black" }} href="mailto:justgarcia5@gmail.com" >
                      <i className="fa fa-envelope" aria-hidden="true"/>justgarcia5@gmail.com
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
