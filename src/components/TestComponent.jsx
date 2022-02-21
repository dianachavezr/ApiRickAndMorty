import CloseButton from './Buttons/closeButton/CloseButton'
import LinksButtons from './Buttons/linkButton/LinksButtons'
import ToggleSwitch from './Buttons/pageConfig/PageConfig'

import Carousel from './Sections/Carousel/Carousel'


const TestComponent = () => {
  return (
    <div>
    <LinksButtons/>
    <CloseButton/>
    <ToggleSwitch label=" " />

    <Carousel/>
    </div>
  )
}

export default TestComponent