import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { ChipList } from '../../UI/ChipList/ChipList';
import { SmartDropdown } from '../../UI/SmartDropdown/SmartDropdown';

export const SmartDropdownWrapper = (props) => {
    const { name, value, loading, show, items } = props;
    const SelectedItemHandler = (e) => {
        if (props.onValueChange) {
            props.onValueChange(e)
        }
    }
    return (
        <View>
            <View style={tailwind("my-3")}>
                <Text style={tailwind("mb-3")}>{name} : </Text>
                <ChipList items={value}></ChipList>
            </View>
            {props.error != "" && <Text style={tailwind("text-red-500 mb-2")}> {props.error}</Text>}
            <SmartDropdown
                show={show || false}
                title={name}
                items={items.map(item => {
                    return {
                        label: item.name,
                        value: item.name
                    }
                })}
                onValueChange={SelectedItemHandler}
            ></SmartDropdown>
        </View>
    )
}