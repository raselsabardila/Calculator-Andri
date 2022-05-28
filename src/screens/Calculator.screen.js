import React, { Fragment, useState, useEffect } from "react"
import { Text, SafeAreaView, View, TextInput } from "react-native"
import ButtonOperator from "../components/molecules/ButtonOperator.molecule"
import Tailwind from "../libs/tailwind/Tailwind.lib"

const Calculator = () => {
    const [state, setState] = useState({
        value1: null,
        value2: null,
        operator: null,
        result: null
    })

    useEffect(() => {
        if(state.operator && state.value1 && state.value2) {
            switch (state.operator) {
                case "+":
                    setState({ ...state, result: state.value1 + state.value2 })
                    break;
                case "-":
                    setState({ ...state, result: state.value1 - state.value2 })
                    break;
                case "/":
                    setState({ ...state, result: state.value1 / state.value2 })
                break;case "*":
                    setState({ ...state, result: state.value1 * state.value2 })
                break;
                default:
                break;
            }
        }
    }, [state.operator])

    return (
        <Fragment>
            <SafeAreaView>
                <View style={ Tailwind.style(`w-full p-6 flex flex-col min-h-full`) }>
                    <TextInput
                        keyboardType="numeric"
                        value={ state.value1 }
                        onChangeText={ (value) => setState({ ...state, value1: value }) }
                        placeholder="Value 1"
                        style={ Tailwind.style(`w-full border-b-2 border-gray-900 p-0`) }
                    />
                    <TextInput
                        keyboardType="numeric"
                        value={ state.value2 }
                        onChangeText={ (value) => setState({ ...state, value2: value }) }
                        placeholder="Value 2"
                        style={ Tailwind.style(`w-full border-b-2 border-gray-900 p-0 mt-4`) }
                    />
                    <View style={ Tailwind.style(`w-full flex flex-row items-center justify-between mt-4`) }>
                        <ButtonOperator 
                            operator={ "+" }
                            changeOperator={ (value) => setState({ ...state, operator: value }) }
                        />
                        <ButtonOperator 
                            operator={ "-" }
                            changeOperator={ (value) => setState({ ...state, operator: value }) }
                        />
                        <ButtonOperator 
                            operator={ "/" }
                            changeOperator={ (value) => setState({ ...state, operator: value }) }
                        />
                        <ButtonOperator 
                            operator={ "*" }
                            changeOperator={ (value) => setState({ ...state, operator: value }) }
                        />
                    </View>
                    <Text style={ Tailwind.style(`text-3xl text-center mt-8 text-gray-900`) }>
                        { state.result || "Hasil" }
                    </Text>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}

export default Calculator