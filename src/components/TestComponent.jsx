import CloseButton from './Buttons/closeButton/CloseButton'
import LinksButtons from './Buttons/linkButton/LinksButtons'
import ToggleSwitch from './Buttons/pageConfig/PageConfig'
import CardsCarousel from './Sections/Carousel/CardsCarousel'

const TestComponent = () => {
  return (
    <div>
    <LinksButtons/>
    <CloseButton/>
    <ToggleSwitch label=" " />

    <CardsCarousel/>
    </div>
  )
}

export default TestComponent