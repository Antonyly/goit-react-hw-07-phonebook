import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className='container'>
      <div className={s.wrapper}>
        <h2 className={s.title}>Please, create your personal Phonebook.</h2>
      </div>
    </div>
  );
};
export default HomePage;
