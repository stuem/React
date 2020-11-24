import React, { useState } from 'react'
// import "./todolist.css"
import {
  Input,
  Checkbox,
  Button,
  Box
} from '@chakra-ui/core'

function Index() {
  const data = [{
    todo: '事情',
    finshed: false
  },
  {
    todo: '事情2',
    finshed: true
  },
  {
    todo: '事情3',
    finshed: false
  }]
  // const [count, setCount] = useState("");
  const [list, setList] = useState(data)
  // 增加页面内容
  function addData() {
    const Ipus = document.getElementById('Ipus')
    if (Ipus.value) {
      const item = {
        todo: Ipus.value,
        finshed: false
      }
      const temp = list
      temp.push(item)
      console.log(temp)
      setList([
        ...temp
      ])
      Ipus.value = ''
    }
  }

  // 修改
  function setCounTinp(e) {
    const input = document.getElementById('input' + e)
    const value = input.value
    console.log(value)
    if (value) {
      list[e].todo = value
      setList([...list])
      input.value = ''
    }
  }

  // 删除
  function liClick(e) {
    list.splice(e, 1)
    setList([...list])
  };
  // 完成
  function setCheckedItems(i) {
    const check = document.getElementById('check' + i).checked
    list[i].finshed = check
    setList([...list])
  }

  return (
    <Box className='App' w='80%'>
      <Box>
        <Input id='Ipus' errorBorderColor='red.300' placeholder='large size' />
        <Button variantColor='teal' size='xs' onClick={addData}>添加</Button>
      </Box>
      {
        list.map((item, index) => {
          return (
            // console.log(item,index)
            <Box key={index}>
              <Input id={'input' + index} placeholder={item.todo} size='sm' w='20%' />
              <Checkbox id={'check' + index} onClick={(e) => setCheckedItems(index)} isChecked={item.finshed} />
              <span className={item.finshed ? 'done' : ''}>{item.todo}</span>
              <Button h='1.75rem' size='sm' onClick={() => setCounTinp(index)}>修改</Button>
              <Button h='1.75rem' size='sm' onClick={() => liClick(index)}>删除</Button>
            </Box>
          )
        })
      }
      <style global jsx>
        {`
							.done{
								text-decoration: line-through;
								color: #ccc;
						}
					`}
      </style>
    </Box>
  )
}
export default Index
