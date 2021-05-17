import React from 'react';
import { Button } from 'react-native-elements';
import { useHistory } from 'react-router';
import tailwind from 'tailwind-rn';

export const BackButton = (props : any) => {
    const history = useHistory();
    const backButtonClicked = () => {
        if (!props.to) {
            history.goBack()
        } else {
            history.push(props.to)
        }
    }
    return (<Button style={[props.style, tailwind("bg-blue-500 px-5")]} onPress={backButtonClicked} title={props.title || "Back"}></Button>)
}