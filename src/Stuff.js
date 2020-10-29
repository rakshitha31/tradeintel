import React,{ Component } from "react"
import Accordion from "./Accordion";
import FadeIn from 'react-fade-in';


class Stuff extends Component{
  render(){
      return(
        <div>
          
        <h2>Our Expertice and Services</h2><br></br>
        <Accordion>
          <div label='Advisory and Process Management'>
            <p style={{fontFamily:'arial'}}>
              <ul>
                <li>Credentials for export businesses under EOU, SEZ Unit,DTA with Advance License/Export etc </li>
                <li>Analyze statute matters like Foreign Trade Policy/Procedures, Nexus, Customs/GST/FEMA regulations</li>
              </ul>
            </p>
          </div>
          <div label='Advisory on Export incentives'>
            <p>
              <ul>
                <li>MEIS, SEIS, ROSL and Duty</li>
                <li>Handling end-to-tend of ongoing and backlog cases</li>
              </ul>
            </p>
            
          </div>

          <div label='Matters Pertianing DGFT licenses'>
            <p>
            All matters pertaining to DGFT Licenses, EODC, Policy Relaxation Committee
            representation, eBRC issues etc with the DGFT (Director General of Foreign Trade) Head
            Quarter New Delhi.
            </p>
          </div>

          <div label='Exporting to EU'>
            <p>
              
            REX Registration for Exporters to EU countries.
            </p>
          </div>

          <div label='Customs and Central Excise'>
            <p>
            Matters of Customs and Central Excise litigation after prior verification of strength and
            weakness of the case.
            </p>
          </div>

          <div label='SVB and AEO Licenses'>
            <p>
            Matters in concern with SVB (Special Valuation Branch), AEO(Authorized Economic
            Operator) Certification, Electronic Self Sealing registration with Customs.
            </p>
          </div>

          <div label='GST'>
            <p>
            GST matters only in relation to ITC (Input Tax Credit) and IGST refunds on Exports.
            </p>
          </div>

          <div label='Advisory and representation'>
            <p>
            Advisory and representation on behalf of client to finalize trade terms like International
            Commercial Terms (INCO), Shipping Terms, Delivery Terms, Payment Terms.
            </p>
          </div>

          <div label='Representaion to Government on behalf of client'>
            <p>
            Representation to the Government on client’s behalf to take up the genuine policy and
            procedural issues under FTP and Customs.
            </p>
          </div>

          <div label='Representaion of Indian Vendors to US customer'>
            <p>
            Resident representation services for Advisory &amp; guidance to Indian Vendors on behalf of
            US Customer for vendor management in regard to ‘First Sale’ doctrine program i.e. US
            Customs Duty Saving program
            </p>
          </div>

        </Accordion>
        <hr ></hr>

    <h2 style={{background:'#4fb2d8', padding:'1.5rem', textAlign:'center'}}>Our Clients</h2>
   

 <div style={{display:'inline'}}>
    <p style={{textAlign:"center"}}><img src={require('./images/Malema.png')} width={250}/></p>
    <p style={{textAlign:"center"}}><img src={require('./images/Recaro.png')} width={150} /></p>
    <p style={{textAlign:"center"}}><img src={require('./images/gi.png')} width={100} height={100}/></p>

 
  <p style={{textAlign:"center"}}><img src={require('./images/sourcing_united.jpg')}  height={70} /></p>
  <p style={{textAlign:"center"}}><img src={require('./images/imax.png')} width={200} /></p>
  <p style={{textAlign:"center"}}><img src={require('./images/ayana.png')} width={200} /></p>
  <p style={{textAlign:"center"}}><img src={require('./images/ace.png')} width={100} height={100} /></p>
  </div>
 
      </div>
     
    );
    
  }
}


export default Stuff;
 
