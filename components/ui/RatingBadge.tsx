interface RatingBadgeProps {
  score: number;
  count?: number;
}

export function RatingBadge({ score, count }: RatingBadgeProps) {
  const formattedCount = count ? count.toLocaleString(undefined, { notation: "compact", maximumFractionDigits: 1 }) : null;

  return (
    <div className="inline-flex items-center gap-1">
      <span className="text-yellow-500">★</span>
      <span className="text-lg font-semibold text-gray-900">{score.toFixed(1)}</span>
      {formattedCount && (
        <span className="text-body-sm text-gray-500">{formattedCount} ratings</span>
      )}
    </div>
  );
}
