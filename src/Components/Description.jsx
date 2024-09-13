function Description() {
  
  const background = {
    backgroundColor: "#f1f1f1",
    marginTop: "10%"
  }
  
  const firstdiv = {
    fontSize: "1.8rem",
    textAlign: "center",
    margin: "10%",
    paddingTop: "10%"
  }
  
  const secondiv = {
    marginTop: "10%",
    fontSize: "1.3rem",
    textAlign: 'center',
    margin: "12%"
  }
  
  const gradientTextStyle = {
   background:'linear-gradient(to right,blue,yellow)',
   WebkitBackgroundClip: 'text',
   WebkitTextFillColor: 'transparent'
};

return(
  <>
  <div style={background}>
    <div style={firstdiv}>
      <h3>
        Electrician that creates a 
        <span style={gradientTextStyle} > good </span>
        and
        <span style={gradientTextStyle}> better life </span> for customers 
      </h3>
    </div>
   
    <div style={secondiv}> 
      <p>
        Always ready for all your service at your convenience
      </p>
    </div>
    
  </div>
  
  
  </>
  )
}

export default Description
