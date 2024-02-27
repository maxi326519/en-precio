interface InputProps {
  name: string;
  value: string;
  label: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @prop { string } name - Input name and id
 * @prop { any } value - Input value
 * @prop { string } label - Input label
 * @prop { string | undefined } type - Input type
 * @prop { string | undefined} error - Error message to display
 * @prop { boolean | undefined} disabled - If input should be disabled
 * @prop { () => void } handleChange - Function for onChange input
 */
export default function Input({
  name,
  value,
  label,
  type = "text",
  error = "",
  disabled = false,
  handleChange,
}: InputProps) {
  return (
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
  );
}
