import svgPaths from "@/assets/svg/svg-rhim2zmhv2";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-2 items-center" role="img" aria-label={`${rating} star categorization`}>
      {Array.from({ length: rating }, (_, index) => (
        <div
          key={index}
          className="bg-[#f5f3ef] rounded-full p-1.5 w-6 h-6 flex items-center justify-center"
          aria-hidden="true"
        >
          <svg 
            className="w-3 h-3" 
            fill="none" 
            preserveAspectRatio="none" 
            viewBox="0 0 12 12"
          >
            <path 
              d={svgPaths.p2d8dea0} 
              fill="#F28C38" 
            />
          </svg>
        </div>
      ))}
    </div>
  );
}