import React, { useEffect } from 'react';
import {emergepaySdk, TransactionType, Method} from 'emergepay-sdk';
const GravatiyPayment = () => {
  //These values are provided by ChargeItPro and should be set before attempting to run any of the following SDK methods.

  
const handelclick = ()=>{
  const oid = "1251514267";
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aWQiOjU5MSwib2lkIjoxMjUxNTE0MjY3LCJ0b2tlbl91c2UiOiJvcnQiLCJybmQiOjE5ODI0NTk4MzIuODI0NDM4NiwiZ3JvdXBzIjpbIk9yZ0FQSVVzZXJzIl0sImlhdCI6MTYzNTg3MzAwNn0.xJQdGWyZot2u3ugyZrK10KtSG4vLtkF3BeN9oWz5NsE";
const environmentUrl = "https://api.emergepay-sandbox.chargeitpro.com/virtualterminal/v1";


  const emergepay = new emergepaySdk({ oid, authToken, environmentUrl });
  

//Get an external transaction id to use in future SDK requests
const externalTransactionId = emergepay.getExternalTransactionId();
  

//Start a transaction and get a transaction token.
//The transactionType you choose will depend on what type of transaction you are trying to complete.
//The method you choose will depend on which integration type you chose (modal, urlPage, or fields).
//base_amount and external_tran_id are required in the fields array.
emergepay.startTransaction({
    transactionType:TransactionType.CreditSale ,
    method: Method.Modal ,
    fields: [
        { id: "base_amount", value: "10.01" },
        { id: "external_tran_id", value: emergepay.getExternalTransactionId() }
    ]
})
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});
  
  




}

  return (
    <div>
      <button onClick={handelclick} className='btn btn-success'>payment</button>
    </div>
  );
};

export default GravatiyPayment;