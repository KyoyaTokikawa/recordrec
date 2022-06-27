declare class InputFloatLabelText extends InputText {}
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputFloatLabelText: GlobalComponentConstructor<InputFloatLabelText>
    }
}
export default InputFloatLabelText