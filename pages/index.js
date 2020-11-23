import React, { useState } from "react";
// import './index.css'
import {
    ThemeProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    useDisclosure,
    Input,
    Button,
    Box
} from "@chakra-ui/core";
function Index() {
    const [count, setCount] = useState("");
    const [list, setList] = useState([]);
    const [listDra, setListDra] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    console.log(isOpen, onOpen, onClose);
    console.log(setListDra, listDra);
    const btnRef = React.useRef();

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
        console.log(e);
        list.splice(e, 1);
        setList([...list]);
    };
    //修改
    function setCounTinp(e, index) {
        if (e) {
            console.log(e, index);
        }
    }
    return (
        <Box className="App">
            <ThemeProvider>
                <Input value={count} onChange={(e) => setCount(e.target.value)} />
                <Button onClick={() => addData(count)}>添加</Button>
                <h1>正在进行</h1>
                <div>
                    {
                        list.map((item, index) =>
                            <Box key={index}>
                                <span ref={btnRef} onClick={onOpen}>{item}</span>
                                <Button h="1.75rem" size="sm" onClick={(e) => liClick(index)}>删除</Button>
                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Create your account</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>
                                            <FormControl>
                                                <FormLabel>First name</FormLabel>
                                                <Input ref={initialRef} onChange={(e) => setListDra(e.target.value)} placeholder={item} />
                                            </FormControl>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={onClose}>取消</Button>
                                            <Button colorScheme="blue" mr={3} onClick={() => setCounTinp(index)}>
                                                确定
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </Box>
                        )
                    }
                </div>
                <h1>已经完成</h1>
            </ThemeProvider>
        </Box>
    );
}
export default Index