type StarRadioProps = {
  value: number;
  checked: boolean;
  disabled: boolean;
  onChange: (value: number) => void;
};


function StarRadio({value, checked, disabled, onChange}: StarRadioProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio" name="rating"
        value={value}
        onChange={({target}) => onChange(Number(target.value))}
        disabled={disabled}
        checked={checked}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}


export default StarRadio;
