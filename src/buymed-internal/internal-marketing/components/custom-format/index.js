import NumberFormat from 'react-number-format';

export function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        allowNegative={false}
        decimalSeparator={"."}
        thousandSeparator={","}
        suffix={"đ"}
        isNumericString
      />
    );
  }
