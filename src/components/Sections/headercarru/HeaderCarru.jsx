import cena from "../../../assets/cena4.png"
import "./Headercarru.css"

const HeaderCarru = () => {
  return (
    <div className="headerCarru">
       <img src={cena} />
        <h1>Find all characters in one place.</h1>
    </div>
  )
}

export default HeaderCarru