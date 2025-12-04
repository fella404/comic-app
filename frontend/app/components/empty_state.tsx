export default function EmptyState({ text = "No data found" }) {
  return <div className="text-center text-gray-500 py-20">{text}</div>;
}
