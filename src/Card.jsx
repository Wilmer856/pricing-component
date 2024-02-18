export function Card({id, type, price, storage, users, send}) {
    return (
        <div key={id} className="card">
            <h2 className="card-primary">{type}</h2>
            <h3 className="card-price"><span>$</span>{price}</h3>
            <div className="card-details">
                <div className="card-detail-item">
                    <span>{storage} Storage</span>
                </div>
                <div className="card-detail-item">
                  <span>{users} Users Allowed</span>
                </div>
                <div className="card-detail-item">
                  <span>Send up to {send} GB</span>
                </div>
            </div>
            <button className="learn-btn">Learn More</button>
        </div>
    )
}