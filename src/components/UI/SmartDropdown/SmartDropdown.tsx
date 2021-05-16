import { FlatList, Modal, ScrollView, Text, TextInput, View } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';
import tailwind from "tailwind-rn";
import { Input } from "react-native-elements/dist/input/Input";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Card } from "../Card";
import { InputWithButton } from "../InputWithButton";
import { ButtonGroup } from "react-native-elements/dist/buttons/ButtonGroup";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { RenderItem } from "./RenderItem";

export const SmartDropdown = (props) => {
    const [modalVisible, setModalVisible] = useState(props.show);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [createNew, setCreateNew] = useState(false)
    const [items, setItems] = useState(props.items || []);

    const selectedIndex = (createNew) ? 1 : 0;

    useEffect(() => {
        if (props.onValueChange) {
            props.onValueChange(value)
        }
    }, [value]);

    const ModalOpenHandler = () => {
        setModalVisible(!modalVisible)
        if (props.onModalStateChange) {
            props.onModalStateChange(modalVisible)
        }
    }
    const RemoveItemHandler = (clickedName) => {
        console.log(`item to be removed ${clickedName}`)
        setValue(value.filter(name => name != clickedName))
    }

    const AddItemHandler = (name: string) => {
        if (value.indexOf(name.toLowerCase()) == -1 && name.length > 3) {
            setValue([...value, name])
        }
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}

                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <View
                    style={tailwind("flex-1 justify-center items-center p-3")}
                >
                    <Card style={[tailwind("w-full border m-5"), {
                        minHeight: "70%"
                    }]} >
                        <View>
                            <ButtonGroup
                                onPress={(e) => { setCreateNew(e == 1) }}
                                selectedIndex={selectedIndex}
                                selectedButtonStyle={tailwind("bg-blue-600")}
                                buttonStyle={tailwind("bg-blue-400")}
                                textStyle={tailwind("text-white")}
                                buttons={["Select Existing", "Create New"]}
                            />
                            {createNew && <View style={tailwind("flex justify-between")}>
                                <InputWithButton
                                    deleteContentOnButtonClick={true}
                                    onButtonClick={AddItemHandler}
                                    button={"Add New " + ( props.title || "Items")}></InputWithButton>
                            </View>}
                            {!createNew && <DropDownPicker
                                searchable={true}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                multiple={true}
                                mode="BADGE"
                                setValue={setValue}
                                setItems={setItems}
                            ></DropDownPicker>}
                            <ScrollView style={tailwind("h-96 mt-3")}>
                                {value.map(item => (
                                    <RenderItem key={item} button="Remove" buttonStyle={tailwind("bg-red-500")} onButtonClicked={RemoveItemHandler}
                                        title={item}></RenderItem>
                                ))}
                            </ScrollView>
                        </View>


                        <Button
                            buttonStyle={tailwind("bg-blue-400 mt-3")}
                            title="Close"
                            onPress={ModalOpenHandler}
                        />
                    </Card>
                </View>
            </Modal>

            <Button
                buttonStyle={tailwind("bg-blue-400")}
                onPress={ModalOpenHandler}
                title={"Add " + (props.title || "Items")}
            />
        </View>
    )
}