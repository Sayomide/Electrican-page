import Description1 from "./Description1"
import Description2 from "./Description2"
import Description3 from "./Description3"

function Description() {

const background = {
    backgroundColor: "#f1f1f1",
    marginTop: "10%"
  }
  
return(
  <>
  <div style={background}>
    <Description1 />
    <Description2 />
    <Description3 />
  </div>
  </>
  )
}

export default Description
