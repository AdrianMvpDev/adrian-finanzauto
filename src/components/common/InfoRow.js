export default function InfoRow({ label, value }) {
  return (
    <div className="flex gap-2">
      <dt className="text-gray-600 font-bold text-[#1a6e6a]">{label}:</dt>
      <dd className="text-[#444b6e]">{value}</dd>
    </div>
  );
}
