import React, { useState } from "react";
// import "./todolist.css"
import {
    Input,
    Checkbox,
    Button,
    Box,
} from "@chakra-ui/core";
function Index() {
    const [count, setCount] = useState("");
    const [list, setList] = useState([]);
    // const [checkedItems, setCheckedItems] = React.useState([false, true]);
    // console.log(checkedItems)
    //增加页面内容
    const addData = (value) => {
        if (value) {
            setCount("");
            setList([
                ...list,
                value
            ])
        }
    }
    //删除
    function liClick(e) {
        list.splice(e, 1);
        setList([...list]);
    };
    //修改
    function setCounTinp(e) {
        let input = document.getElementById("input" + e);
        var value = input.value;
        if (value) {
            list[e] = value;
            setList([...list]);
            input.value = "";
        }
    }
    //完成
    function setCheckedItems(e, i) {
        let setche = document.getElementById("setche" + e);
        if (i === true) {
            setche.className = "done"
        } else {
            setche.className = ""
        }
    }
    return (
        <Box className="App" w="80%">
            <Input errorBorderColor="red.300" value={count} onChange={(e) => setCount(e.target.value)} />
            <Button variantColor="teal" size="xs" onClick={() => addData(count)}>添加</Button>
            <h1><br></br></h1>
            {
                list.map((item, index) =>
                    <Box key={index}>
                        <Input id={"input" + index} placeholder={item} size="sm" w="20%" />
                        <Checkbox onChange={(e) => setCheckedItems(index, e.target.checked)} />
                        <span id={"setche" + index}>{item}</span>
                        <Button h="1.75rem" size="sm" onClick={() => setCounTinp(index)}>修改</Button>
                        <Button h="1.75rem" size="sm" onClick={(e) => liClick(index)}>删除</Button>
                    </Box>
                )
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
    );
}
export default Index