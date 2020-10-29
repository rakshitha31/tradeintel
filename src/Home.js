import React, {Component} from "react"
import FadeIn from 'react-fade-in';


const home_style={
    background: '#61c8f0',
    color:'black',
    padding:'1rem'
}
const we_do={
    background: '#61c8f0',
    color:'black',
    padding:'1rem'
}
const philo={
    background: '#6dd5ed',
    color:'black',
    padding:'1rem'

}


class Home extends Component{

    render(){
        return (
        
              <div >
                  <FadeIn>
                   <h3 style={{ background:'black',color:'white', width:'120px', height:'30px', textAlign:'center'}}>About us</h3>
                    <div style={home_style}>
                     
                        <p>We are the professionals in the field of Foreign Trade (EXIM) Management
                            having over 25 years of proven experience and expertise in managing the
                            Import &amp; Export business processes and compliance. Having served few
                            export organizations for decades earlier, we have an unblemished track
                            record with our past employers as well as trade in general.</p>
                        </div><br></br>
                        <h3 style={{border:'black', background:'black', padding:'3px', width:'150px', color:'white',textAlign:'center'}}>What we do</h3>
                    <div style={we_do}>

                    <ul>            
                        <li>Guide and direct startup export companies and also the existing export
                           organization missing the right &amp; efficient business processes in each stage of
                            international supply &amp; value chain.
                       </li>
                       <li>
                          Help choose the right export &amp; import schemes that will be
                          benefitting, and a less complex way to follow the statutes.
                          </li>
    
                          <li>Help to implement the QMS (Quality Management System) in their international supply and value chain
                            process
                            </li>
                            <li>Help interpret Foreign Trade Policy and Customs laws and help raise revenue by unclaimed benefits

                             </li>
                        </ul>   
                    </div><br></br>
                <h3 style={{border:'black', background:'black',color:'white', padding:'3px', width:'240px', textAlign:'center'}}>Service Philosophy</h3>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <p style={{alignSelf:'center'}}><img src={require('./images/sp.png')} width={700} height={500}/></p>
               </div>
               </FadeIn>
        </div>
        );
    }

}


export default Home;
