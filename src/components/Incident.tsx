interface IncidentProps  {
    icon: string;
    label: string;
    id: string;
    onClick: () => void;
    isSelected: boolean;
}

const Incident = (props: IncidentProps) => {
    const { icon, label, id, onClick, isSelected } = props;
    return (
        <div key={id} className={`flex flex-col  items-center justify-center border gap-1 ${isSelected
                ? 'bg-blue-100 border-blue-500'
                : 'border-gray-200 hover:bg-gray-50'
              } px-1 py-5 rounded-lg text-center hover:bg-gray-50 transition duration-200 cursor-pointer`} onClick={onClick}>
            <span className="text-2xl">{icon}</span>
            <span className="text-sm">{label}</span>
        </div>
    );
};

export default Incident;
  