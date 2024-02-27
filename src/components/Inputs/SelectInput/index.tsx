interface SelectProps {
  name: string;
  value: string | number;
  label: string;
  list: Array<{ label: string; value: string | number }>;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * @prop { string } name - Input name and id
 * @prop { string } value - Input value
 * @prop { string } label - Input label
 * @prop { Array<{ label: string; value: string }> } list - Items to drop down list
 * @prop { string | undefined} error - Error message to display
 * @prop { () => void } handleChange - Function for onChange input
 */
export default function SelectInput({
  name,
  value,
  label,
  list,
  error,
  handleChange,
}: SelectProps) {
  return (
    <div className="form-floating">
      <select
        id={name}
        name={name}
        className={`form-select ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={handleChange}
      >
        <option value="">Seleccionar</option>
        {list &&
          list.map((item, i) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <small>{error}</small>
    </div>
  );
}
