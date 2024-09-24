import lampholder from "../assets/IMG_20231223_145733.jpg"

function Description2() {
  
  const overallhead = {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    margin: "14%"
  }

  const head = {
    marginTop: "15%",
    textAlign: 'center',
  }
  
  const middle = {
    color: "grey",
    marginTop: "4%",
    lineHeight: "30px",
    textAlign: "center"
  }
  
  const tail = {
    width: "100%",
    height: "3px",
    backgroundColor: 'lightblue',
    borderRadius: "5px",
  }
  
  const lampholders = {
    width: "100%",
    height: "250px",
    borderRadius: "10px",
    marginBlock: "20%"
  }
  
  return(
    <>
     <div style={overallhead}>
      <div>
        <h2 style={head}>Protect</h2>
        <p style={middle}>Protect and control your property’s with our work and avoid blows.</p>
        <p style={tail}></p>
      </div>
      
      <div>
        <h2 style={head}>Engage</h2>
        <p style={middle}>Helping and engage in working with you everytime(sometimes) theres an issue.</p>
        <p style={tail}></p>
      </div>
      
      <div>
        <h2 style={head}>Earn</h2>
        <p style={middle}>Maximise your property’s earning when you have an adequate powerlight without any disturbance.</p>
        <p style={tail}></p>
      </div>
      
      <div>
        <h2 style={head}>Capacity</h2>
        <p style={middle}>We have the ability to work efficiently in noth homes and industry or your companies for low and high sort of works.</p>
        <p style={tail}></p>
      </div>
      
       <div>
        <h2 style={head}>Expertise</h2>
        <p style={middle}> We are an expertise with major experience needed for each works.</p>
        <p style={tail}></p>
       </div>
       
       <div>
        <h2 style={head}>Accountability</h2>
        <p style={middle}> We are accountable of materials used based on our agreements.</p>
        <p style={tail}></p>
       </div>
       
       <img src={lampholder} style={lampholders} alt="lampholder" />
       
       <p>
         Recognised as a pioneer in outdoor immersive media by
       </p>
       
     </div>
    </>
    )
}

export default Description2