import style from "./NoteBidding.module.css";

export const NoteBidding:React.FC = () => {
    return (
        <div className={style.note_wrapper}>
            <span className={style.note_text}>
                Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
            </span>
        </div>
    );
};