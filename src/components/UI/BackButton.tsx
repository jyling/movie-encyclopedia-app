import React from 'react';
import { Button } from 'react-native';
import { useHistory } from 'react-router';

export const BackButton = (props : any) => {
    const history = useHistory();
    const backButtonClicked = () => {
        if (!props.path) {
            history.goBack()
        } else {
            history.push(props.path)
        }
    }
    return (<Button style={props.style} color={props.color} onPress={backButtonClicked} title={props.title || "Back"}></Button>)
}