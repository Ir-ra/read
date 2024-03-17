'use client'

export default function ProductDetails({params, prod} :
  {params: { id: string },
  prod?: {
    id: string;
    category?: string;
    cover?: string;
    autor?: string;
    bookName: string;
    price?: string;
    new?: string;
    sale?: boolean;
  };} ) {
   
  return (
    <div>
      details about book with id {params.id}
      
    </div>
  )
}
