interface InfoBadgeProps {
  label: string;
  value: string;
}

export function InfoBadge({ label, value }: InfoBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#1d3557] rounded-2xl px-4 py-2 min-w-[80px] flex items-center justify-center">
        <span className="text-white text-sm font-medium">{label}</span>
      </div>
      <div className="bg-[#f5f3ef] rounded-2xl px-4 py-1 min-w-[70px] flex items-center justify-center">
        <span className="text-[#2e2e2e] text-sm">{value}</span>
      </div>
    </div>
  );
}
