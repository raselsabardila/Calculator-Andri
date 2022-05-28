import React, { Fragment } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Tailwind from "../../libs/tailwind/Tailwind.lib"

const ButtonOperator = ({ operator, changeOperator }) => {
    return (
        <Fragment>
            <TouchableHighlight onPress={ () => changeOperator(operator) }>
                <View style={ Tailwind.style(`w-14 h-8 border-2 border-gray-900 flex flex-row items-center justify-center`) }>
                    <Text style={ Tailwind.style(`text-xl text-gray-900`) }>
                        { operator }
                    </Text>
                </View>
            </TouchableHighlight>
        </Fragment>
    )
}

export default ButtonOperator