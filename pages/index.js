import React,{useState} from "react";
// import './index.css'
import {
    ThemeProvider,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Button,
    Box
} from "@chakra-ui/core";
function Index({ children }) {
    const [count, setCount] = useState();
    // console.log(count, setCount)
    const [list, setList] = useState([]);
    const [bott, setBott] = useState();
    //增加页面内容
    function addData(value) {
        setList([
            ...list,
            value
        ])
    }
    //删除页面内容。
    function addbutton(index) {
        setBott([
            bott,
            index
        ]);
        list.splice(index, 1);
    }
    return (
        <Box className="App">
            <ThemeProvider>
                <Input placeholder="Basic usage" className="input_ls" onChange={(value) => setCount(value.target.value)}/>
                <Button colorScheme="blue" onClick={() => addData(count)}>按钮</Button>
                <h1>正在进行</h1>
                <div>
                    {
                        list.map(function (value, key) {
                            return (
                                <div className="vas" key={key}>
                                    <Editable defaultValue={value}>
                                        <EditablePreview></EditablePreview>
                                        <EditableInput></EditableInput>
                                    </Editable>
                                    <Button className="bot" onClick={(key) => addbutton(key)}>删除</Button>
                                </div>
                            )
                        })
                    }
                </div>
                <h1>已经完成</h1>
            </ThemeProvider>
        </Box>
    );
}
export default Index