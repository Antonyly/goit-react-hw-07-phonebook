import { memo } from "react";
import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button";

import s from "./ContactItem.module.css";

const ContactItem = (props) => {

  const { name, number, onClick, id } = props;

  return (
    <li className={s.item}>
      {/* <a className={s.link} href={`tel:${number}`}>
        <div className={s.wrapper}>
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.wrapper}>
          <p className={s.number}>{number}</p>
        </div>
      </a> */}
      <div className={s.wrapper}>
        {name} : {number}
      </div>

      <Button
        className={s.button}
        text="Detele"
        type="button"
        onClick={(e) => {onClick(id);}}
      />
    </li>
  );
}
ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactItem);
