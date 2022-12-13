import { DescriptionItem } from "./DescriptionItem/DescriptionItem";
import style from "./DescriptionTable.module.css";

export const DescriptionTable: React.FC = () => {
    return (
        <div className={style.dt_wrapper}>
            <div className={style.dt_motion}>
                ХОД
            </div>
            <div className={style.dt_descriptions}>
                ПАРАМЕТРЫ И ТРЕБОВАНИЯ
            </div>
            <DescriptionItem 
                text={"Наличие комплекса мероприятий, повышающих стандарты качества изготовления"} 
                height={60}
                color={"#F4F4F4"}
                />
            <DescriptionItem 
                text={"Срок изготовления лота, дней"} 
                height={40}
                color={"white"}
                />
            <DescriptionItem 
                text={"Гарантийные обязательства, мес"} 
                height={40}
                color={"#F4F4F4"}
                />
            <DescriptionItem 
                text={"Условия оплаты"} 
                height={40}
                color={"white"}
                />
            <DescriptionItem 
                text={"Стоймость изготовления лота, руб (без НДС)"} 
                height={90}
                color={"#F4F4F4"}
                />
            <DescriptionItem 
                text={"Действия:"} 
                height={40}
                color={"white"}
                />
        </div>
    );
};