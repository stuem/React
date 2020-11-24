import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import {
  Input,
  Checkbox,
  Button,
  Box
} from '@chakra-ui/core'
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

console.log(EXCHANGE_RATES)
function ExchangeRates ({ onDogSelected }) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  console.log(loading, error, data)
  //   const [list, setList] = useState(data.rates)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
      <Box>
          <Box>
              <Input id='Ipus' pr='4.5rem' errorBorderColor='red.300' placeholder='搜索框' />
              {/* <Button>添加</Button> */}
            </Box>
          {
                data.rates.map((item, index) => {
                    // console.log(item.currency, index)
                  <div key={index}>
                      {/* <Checkbox /> */}
                      <p> {item.currency}:{item.rate} </p>
                    </div>
                })
            }
        </Box>
  )
}

export default ExchangeRates
