import  { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` property is accessed to focus the input element
        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
export default TextInputWithFocusButton;