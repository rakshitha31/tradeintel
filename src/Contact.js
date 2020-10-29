import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import FadeIn from 'react-fade-in';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <FadeIn>
        <Grid className="contact-grid" style={upper_block_style}>
          <Cell col={6}>
            <kbd><h2>Ramu H N</h2></kbd>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGJO1PXy4L6DQ/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=7Pzj6NlvyTfZ7xGcvhBpwNfx8ko0Fwxti_Wim9j0jkA"
              alt="avatar"
              style={{height: '100px'}}
               /><br></br><br></br>
             <p style={{ width: '100%', margin: 'auto' }}>I have 30+ years of experience in the EXIM space. Having worked as an EXIM Head at Karle Group and Gokaldas Images, I have keen insight into the industry and will be happy to help your business.</p><br></br><br></br>
              Connect with me on <a href='linkedin.com'>Linkedin</a>
          </Cell><br></br>
          </Grid>
          <Cell col={6}><br></br>
            <div className="contact-list" style={contact_style}>
            <h2 style={{background:''}}>Contact Us</h2>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <kbd>M : (+91) 9108091447/ 9620652198 / 9449137666</kbd>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <kbd>Email us at : <a href = "mailto: tradeintel@gmail.com">tradeintel@gmail.com</a></kbd>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    <kbd>Address : No.35(72/A), 20 TH B Main, 1 st R Block, Rajajinagar, Bangalore 560010</kbd>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
          </FadeIn>
      </div>
    )
  }
}

const contact_style={
  background: 'black',
  color:'white',
  padding:'1.5rem'
}

const upper_block_style={
  background: '#61c8f0',
  padding:'1.5rem'
}

export default Contact;