/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import styles from '@/styles/CarsContainer.module.scss'

const AuditThing = () => {
  const [statusHistory, setStatusHistory] = useState([])

  useEffect(() => {
    setStatusHistory([{
      currentStatus: "ORDER_CONFIRMED",
      previousStatus: "PROCESSING",
      eventCode: null,
      createTs: "2023-03-10T15:36:38Z",
      modificationTs: "2023-03-10T15:36:38Z"
    }, {
      currentStatus: "PROCESSING",
      previousStatus: "CREATED",
      eventCode: null,
      createTs: "2023-03-10T15:36:31Z",
      modificationTs: "2023-03-10T15:36:31Z"
    }])
  }, [])

  return (
    <>
      <div className={styles.auditContainer}>
        {statusHistory?.map((status) => (
          <div>{status.currentStatus}</div>
        ))}
      </div>
    </>
  )
}



export default AuditThing
