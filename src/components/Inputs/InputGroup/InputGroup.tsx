interface InputProps {
  name: string;
  value: any;
  label: string;
  simbol: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @prop { string } name - Input name and id
 * @prop { any } value - Input value
 * @prop { string } label - Input label
 * @prop { string } simbol - Simbol for input group
 * @prop { string | undefined } type - Input type
 * @prop { string | undefined} error - Error message to display
 * @prop { boolean | undefined} disabled - If input should be disabled
 * @prop { () => void } handleChange - Function for onChange input
 */
export default function InputGroup({
  name,
  value,
  label,
  simbol,
  type = "text",
  error = "",
  disabled = false,
  handleChange,
}: InputProps) {
  return (
    <div className="input-group">
      <span className="input-group-text">{simbol}</span>
      <div className="form-floating">
        <input
          id={name}
          name={name}
          className={`form-control ${error ? "is-invalid" : ""}`}
          value={value}
          type={type}
          step="any"
          onChange={handleChange}
          disabled={disabled}
        />
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <small>{error}</small>
      </div>
    </div>
  );
}
