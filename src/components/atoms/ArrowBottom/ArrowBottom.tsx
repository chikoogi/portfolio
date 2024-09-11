export default function ArrowBottom({
  className,
  width = 16,
  height = 30,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`relative bg-black ${className ? className : ""}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <div
        className={`absolute top-full left-0 w-0 h-0 border-transparent border-t-black`}
        style={{
          height: `${width / 2}px`,
          borderLeftWidth: `${width / 2}px`,
          borderRightWidth: `${width / 2}px`,
          borderTopWidth: `${width / 2}px`,
        }}
      />
    </div>
  );
}
