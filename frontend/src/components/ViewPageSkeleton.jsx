const ViewPageSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {[...Array(4)].map((_, index) => {
          return (
            <div
              key={index}
              className="w-full h-8 rounded-full bg-noteoo-200 animate-pulse"
            ></div>
          );
        })}
        <div className="w-3/4 h-8 rounded-full bg-noteoo-200 animate-pulse"></div>
      </div>

      <div className="flex flex-col gap-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full h-4 rounded-full animate-pulse bg-noteoo-200"
          ></div>
        ))}

        <div className="w-3/4 h-4 rounded-full bg-noteoo-200 animate-pulse mb-1"></div>

        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full h-4 rounded-full animate-pulse bg-noteoo-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ViewPageSkeleton;
