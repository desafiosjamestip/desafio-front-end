import { useState, Ref, useEffect, createRef, HTMLAttributes } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {
  InputRoot,
  InputWrapper,
  InputLabel,
  InputField,
  HintsWrapper,
  InputMessage,
  CharactersCounter,
  Prefix,
} from './TextField.styles';

enum ValidState {
  valid = 'valid',
  neutral = 'neutral',
  invalid = 'invalid',
}

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'tel' | 'email' | 'password';
  id: string;
  label: string;
  errorMessage?: string;
  helperText?: string;
  prefix?: string;
  charLimit?: number;
  disabled?: boolean;
  state?: keyof typeof ValidState;
  defaultValue?: string;
  registerRef?: Ref<HTMLInputElement>;
  required?: boolean;
  step?: string;
  min?: number;
  max?: number;
}

const TextField = ({
  type = 'text',
  id,
  label,
  errorMessage = '',
  helperText = '',
  prefix = '',
  charLimit,
  disabled = false,
  state = 'neutral',
  defaultValue = '',
  registerRef,
  required = false,
  min,
  max,
  ...rest
}: TextFieldProps) => {
  const elementRef = createRef<HTMLInputElement>();
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsfocused] = useState(false);
  const [valueLength, setValueLength] = useState(0);
  const isValid = state === 'valid';
  const isInvalid = state === 'invalid';

  useEffect(() => {
    setValueLength(elementRef?.current?.value?.length || 0);
    setValue(elementRef?.current?.value || '');
  }, [elementRef]);

  const handleOnBlur = () => {
    setIsfocused(false);
  };

  const handleOnFocus = () => {
    setIsfocused(true);
  };

  const isActive = value !== '' || isFocused;

  const showInputMessage = isInvalid || helperText !== '';

  const inputMessage = isInvalid ? errorMessage : helperText;

  const hasHint = showInputMessage || Boolean(charLimit);

  const hasPrefix = prefix !== '';

  return (
    <InputRoot>
      <InputWrapper isInvalid={isInvalid} isValid={isValid} disabled={disabled}>
        {hasPrefix && isActive && <Prefix>{prefix}</Prefix>}
        <InputLabel
          htmlFor={id}
          isInvalid={isInvalid}
          isValid={isValid}
          disabled={disabled}
          isActive={isActive}
        >
          {label}
          {required && ' *'}
        </InputLabel>
        <InputField
          defaultValue={defaultValue}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          id={id}
          name={id}
          disabled={disabled}
          maxLength={charLimit}
          type={type}
          ref={composeRefs(registerRef, elementRef)}
          min={min}
          max={max}
          {...rest}
        />
      </InputWrapper>
      {hasHint && (
        <HintsWrapper isInvalid={isInvalid}>
          <InputMessage>{inputMessage}</InputMessage>
          {charLimit && (
            <CharactersCounter>{`${valueLength}/${charLimit}`}</CharactersCounter>
          )}
        </HintsWrapper>
      )}
    </InputRoot>
  );
};

export { ValidState, TextField };
