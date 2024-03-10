import axios from "axios";
const AddParcel = () => {
    const token = localStorage.getItem('token');
    const handleParcelAdd = (e)=>{
        e.preventDefault();
       const merchantOrderId=  e.target.merchantOrderId.value;
       const recipientName = e.target.recipientName.value;
       const recipientAddress = e.target.recipientAddress.value;
       const stockPrice = e.target.stockPrice.value;
       const itemQuantity = e.target.itemQuantity.value;
       

       const parcelData = {
        merchantOrderId,
        recipientName,
        recipientAddress,
        stockPrice,
        itemQuantity,
        "recipientPhone": "01877777788",
        "recipientCity": "Rangpur",
        "recipientArea": "Uttara",
        "recipientZone": "Uttara",
        "amountToCollect": 450,
        "itemDescription": "2 gazet",
        "itemWeight": 1,
        "specialInstruction": "Need to carry softly.",
        "shopId": "shop-123"
       }
       const headers = {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      };
          
              axios.post('https://demo.zfcourier.xyz/api/v/1.0.0/parcels/create', parcelData, {headers})
              .then(response => {
              console.log('Response:', response.data);
              })
              .catch(error => {
              console.error('Error:', error);
              });

    }

  return (
    <div>
        <h1>Add a percel</h1>
        <form className='flex flex-col gap-4 items-center my-4' onSubmit={handleParcelAdd}>
          <input
            type='text'
            name='merchantOrderId'
            placeholder='merchantOrderId'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
          <input
            type='text'
            name='recipientName'
            placeholder='recipientName'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
            <input
            type='text'
            name='recipientAddress'
            placeholder='recipientAddress'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
            <input
            type='text'
            name='stockPrice'
            placeholder='stockPrice'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
            <input
            type='text'
            name='itemQuantity'
            placeholder='itemQuantity'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
          <button type='submit' className='text-white p-2 px-4 border-2 rounded-xl bg-emerald-500'>
            Create
          </button>
        </form>
    </div>
  )
};

export default AddParcel
