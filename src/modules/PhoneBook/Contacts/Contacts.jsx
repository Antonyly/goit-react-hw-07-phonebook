import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

import s from "./Сontacts.module.css";

const Contacts = ({ items, onClick }) => {

  const elements = items.map((item) => {
    const { number, name, id } = item;
    return (
      <ContactItem
        key={id}
        id={id}
        onClick={onClick}
        number={number}
        name={name}
      />
    );
  });

  return <ul className={s.list}>{elements}</ul>;
}

Contacts.defaultProps = {
  items: [],
};

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
