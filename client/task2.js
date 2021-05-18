let Curr = [
  {
    currency: "USD",
    rate: 1.2143  
  },
  {
    currency: "GBP",
    rate: 0.86215  
  },
  {
    currency: "AUD",
    rate: 1.5683  
  },
  {
    currency: "CAD",
    rate: 1.4720  
  },
  {
    currency: "EUR",
    rate: 1  
  }
]


function Convert(n, from, to ) {
  if (from.currency === 'EUR') return n * to.rate
  else {
    let base = n / from.rate 
    return base * to.rate
  }
}

