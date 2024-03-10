
const ParcelCard = ({order}) => {
    const {merchantOrderId, recipientName, recipientPhone, recipientAddress,itemQuantity
        ,itemDescription , amountToCollect, _id, handleUpdate =()=>{}   } = order;
    // console.log(order)
  return (
    <div className="flex justify-start gap-3 border mb-5 bg-slate-200 rounded border-emerald-500">
      <div className="flex flex-col items-start p-5">
        <p className="text-xl">ID</p>
        <p>Merchent O_Id: {merchantOrderId}</p>
        <p></p>
      </div>
      <div className="flex flex-col items-start p-5">
        <p className="text-xl">Recipient Info.</p>
        <p>Recipient Name: {recipientName}</p>
        <p>Recipient Phone: {recipientPhone}</p>  
        {/* <p>Recipient Address: {recipientAddress}</p> */}
      </div>
      <div className="flex flex-col items-start p-5">
        <p className="text-xl">Order Info</p>
        <p>Items Quantity:{itemQuantity}</p>
        <p>Items Description: {itemDescription}</p>
        <p></p>
      </div>
      <div className="flex flex-col items-start p-5">
        <p className="text-xl">Amount</p>
        <p>Amount to collect: {amountToCollect}</p>
      </div>
      
    </div>
  )
};

export default ParcelCard
