const devices = [
    {
      "Title": "Laptop",
      "Price": 20000
    },
    {
      "Title": "Smartphone",
      "Price": 15000
    },
    {
      "Title": "Tablet",
      "Price": 12000
    },
    {
      "Title": "Smartwatch",
      "Price": 5000
    },
    {
      "Title": "Headphones",
      "Price": 3000
    }
  ]
  

export async function GET() {
    const res = await fetch( {
        
        
    })
    const data = await res.json()
   
    return Response.json({ data })
  }