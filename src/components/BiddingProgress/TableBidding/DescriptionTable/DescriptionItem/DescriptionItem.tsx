import style from "./DescriptionItem.module.css";
import { DescriptionItemProps } from "./interfaces/DescriptionItemProps";

export const DescriptionItem: React.FC<DescriptionItemProps> = ({ text, height, color }: DescriptionItemProps) => {
    return (
        <div 
            style={{height: `${height}px`, backgroundColor: color}} 
            className={style.dt_events}
            >
            {text}
        </div>
    );
};