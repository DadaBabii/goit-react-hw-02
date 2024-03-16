import css from "./Descriptions.module.css";

const Descriptions = () => {
  return (
    <>
      <h1 className={css.header}>Sip Happens Café</h1>
      <div className={css.desc}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </div>
    </>
  );
};

export default Descriptions;
