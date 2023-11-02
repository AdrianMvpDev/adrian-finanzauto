export default function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor={name} className="w-1/6 text-left font-semibold text-gray-700">
        {label}:
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="px-2 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none text-gray-600"
      />
    </div>
  );
}
