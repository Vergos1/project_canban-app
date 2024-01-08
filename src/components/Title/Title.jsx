import styles from './title.module.scss';



const Title = ({ children, size, sx }) => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <h1
          style={{
            fontSize: size,
            ...sx,
          }}
          className={styles.title}
        >
          {children}
        </h1>
      </div>
    </>
  );
};
export default Title;