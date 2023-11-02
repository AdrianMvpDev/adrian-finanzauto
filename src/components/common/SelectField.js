export default function SelectField({ label, name, value, onChange }) {
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor={name} className="w-1/6 text-right font-semibold text-gray-700">
        {label}:
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600 capitalize"
      >
        <option value="mr.">Mr</option>
        <option value="ms">Ms</option>
        <option value="mrs">Mrs</option>
        <option value="mis">Miss</option>
        <option value="dr">Dr</option>
      </select>
    </div>
  );
}
