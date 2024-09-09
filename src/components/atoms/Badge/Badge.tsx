

interface BadgeProps {
    text: string;
}
export default function Badge({text}:BadgeProps) {
    return (
        <>
      <span className="inline-flex items-center rounded-md bg-primary-1 px-2 py-1 text-xs font-medium text-primary-2 ring-1 ring-inset ring-gray-500/10 mr-1 mb-2 mt-2">
        {text}
      </span>
        </>
    )
}