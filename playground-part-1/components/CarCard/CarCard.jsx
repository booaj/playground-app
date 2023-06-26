import React from 'react'
import styles from '@/styles/CarsContainer.module.scss'

const CarCard = (car) => {
  console.log(car)

  return (
    <>
      <div className={styles.cardbody}>
        <div className={styles.cardtitle}>
          {`${car.car.carYear} ${car.car.makeName} ${car.car.modelName}`}
        </div>
        <div className={styles.cardmainimage}>
          <img src={car.car.originalPictureUrl} />
        </div>
      </div>
    </>
  )
}

export default CarCard
