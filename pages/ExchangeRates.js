import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { Formik } from 'formik'
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

// console.log(EXCHANGE_RATES)
function ExchangeRates({ onDogSelected }) {
    const { loading, error, data } = useQuery(EXCHANGE_RATES)
    console.log(loading, error, data)
    //   const [list, setList] = useState(data.rates)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    //   return data.rates.map(({ currency, rate }) => (
    //       <div key={currency}>
    //           <p>
    //               {currency}: {rate}
    //             </p>
    //         </div>
    //   ))
    //   return data.rates.map((item, index) => {
    //         // console.log(item.currency, index)
    //       <div key={index}>
    //           <p> {item.currency}:{item.rate} </p>
    //         </div>
    //   })
    return (
        <Box
            height="40px"
            bg="teal.400"
            width={[
                "100%", // base
                "50%", // 480px upwards
                "25%", // 768px upwards
                "15%", // 992px upwards
            ]}>
            <Box>
                <Input id='Ipus' pr='4.5rem' errorBorderColor='red.300' placeholder='搜索框' />
                {/* <Button>添加</Button> */}
            </Box>
            {
                data.rates.map(({ currency, rate }) => (
                    //   console.log(currency, rate)
                    // <Checkbox></Checkbox>
                    <Box key={currency}>
                        <p> {currency}:{rate} </p>
                    </Box>
                ))
            }
        </Box>
    )
}

export default ExchangeRates
