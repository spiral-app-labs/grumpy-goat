interface StarRatingProps {
  rating: number;
  max?: number;
  size?: string;
}

export default function StarRating({ rating, max = 5, size = "w-5 h-5" }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <svg
            key={i}
            className={`${size} text-amber`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              <linearGradient id={`star-${rating}-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="#4a4a4a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${rating}-${i})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      })}
    </div>
  );
}
