import { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from 'redux/operations'
import s from '../ContactList/ContactList.module.css'

export const ContactItem = ({ name, number, id }) => {
  const isLoading = useSelector(state => state.contacts.isLoading)
  const error = useSelector(state => state.contacts.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error?.id === id) Notify.failure(error.message)
  }, [error, id])
  

  return (
    <li>
      {name}: {number} <button className={s.button} type="button" disabled={isLoading === id} onClick={() => dispatch(deleteContact(id))}>{isLoading === id ? 'Removal...' : 'Delete'}</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
