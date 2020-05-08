import React, { useState, createContext, useContext } from 'react'
import Modal from '@tenjojeremy/web-toolkit/feedback/modal'
import Carousel from '@tenjojeremy/web-toolkit/dataDisplay/carousel'
import Image from '@tenjojeremy/web-toolkit/media/image'
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon'

export const CarouselContext = createContext(null)

export const CarouselProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(null)

  const updateCarousel = (data = [], index = 0) => {
    setShow(true)
    setData(data)
    setIndex(index)
  }

  const hideCarousel = () => {
    setShow(false)
  }

  return (
    <CarouselContext.Provider
      value={{
        updateCarousel,
      }}
    >
      <>
        <Modal
          show={show}
          style={{ width: '90%' }}
          animationStyle='centerOut'
          onClose={() => setShow(false)}
        >
          <Icon
            name='close/feather'
            color='black'
            size='26px'
            wrapperStyles={{ margin: '0 0 0 auto' }}
            onClick={hideCarousel}
          />
          <Carousel index={index} setIndex={setIndex} iconColor='black'>
            {data.map((item) => (
              <Image
                key={item}
                src={item}
                objectFit='contain'
                styles={{
                  width: ['300px', '300px', '600px'],
                  height: ['300px', '300px', '600px'],
                  margin: '--0 auto',
                }}
              />
            ))}
          </Carousel>
        </Modal>
        {children}
      </>
    </CarouselContext.Provider>
  )
}

export default () => useContext(CarouselContext)
