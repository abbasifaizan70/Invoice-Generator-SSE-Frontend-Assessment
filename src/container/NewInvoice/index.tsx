import React from 'react'
import NewInvoice from '../../components/NewInvoice'
import { FormValues } from '../../types/invoice'
import toast from 'react-hot-toast'

const NewInvoiceContainer = () => {

    const handleCreate = async (values: FormValues, { resetForm }: any) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify(values),
            });
            if(!response.ok) throw Error('Error creating invoice');

            debugger;
            toast.success("Invoice created successfully!");
            resetForm();
        }catch(err){
            toast.error(`Invoice failed successfully!`);
            console.log(err)
        }
        
        
    }

  return (
   <NewInvoice handleCreate={handleCreate} />
  )
}

export default NewInvoiceContainer