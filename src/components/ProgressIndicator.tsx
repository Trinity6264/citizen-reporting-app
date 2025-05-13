

interface ProgressBarProps {
    current: number;
    total: number;
  }

const ProgressBar = ({ current, total }: ProgressBarProps) => {
    const progress = total > 0 ? Math.min(100, (current / total) * 100) : 0;

    return (
       <div className="w-full mb-4 flex flex-col">
        <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500 font-bold">Step {current} of {total}</span>
                <span className="text-sm text-blue-600 font-bold">{progress.toFixed(0)}%</span>
        </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
       </div>
    );
};

export default ProgressBar;
