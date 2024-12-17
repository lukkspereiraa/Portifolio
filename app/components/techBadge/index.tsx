type techBadgeProps  = {
 name: String;
};
export const TechBadge = ({name}: techBadgeProps) => {
    return ( 
        <div className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </div>
    );
}