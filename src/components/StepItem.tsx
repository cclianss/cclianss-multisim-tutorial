
interface StepItemProps {
  number: number;
  content: string;
}

export default function StepItem({ number, content }: StepItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}
