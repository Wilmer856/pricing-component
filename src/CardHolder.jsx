
import { Card } from "./Card"

export function CardHolder({ isMonthly }) {

    const annualDetails = [ 
      {
        id:crypto.randomUUID(), type: "Basic", price: 199.99, storage: "500 GB", users: 2, send: 3
      },
      {
        id:crypto.randomUUID(), type: "Professional", price: 249.99, storage: "1 TB", users: 5, send: 10
      },
      {
        id:crypto.randomUUID(), type: "Master", price: 399.99, storage: "2 TB", users: 10, send: 20
      }
    ]

    const monthlyDetails = [ 
      {
        id:crypto.randomUUID(), type: "Basic", price: 19.99, storage: "500 GB", users: 2, send: 3
      },
      {
        id:crypto.randomUUID(), type: "Professional", price: 24.99, storage: "1 TB", users: 5, send: 10
      },
      {
        id:crypto.randomUUID(), type: "Master", price: 39.99, storage: "2 TB", users: 10, send: 20
      }
    ]

    const selectedDetails = isMonthly ? monthlyDetails : annualDetails;


    return (
        <div className="card-container">
          {selectedDetails.map((card) => {
            return <Card {...card}/>
          })}

        </div>

    )
}