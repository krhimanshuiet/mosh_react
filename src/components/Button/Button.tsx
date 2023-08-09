import styles from "./Button.module.css"
type ButtonProps = {
    children: string,
    btnClass?: "primary" | "secondary" | "success" | "warning" | "danger", 
    setShowAlert:React.Dispatch<React.SetStateAction<boolean>>
}

const Button = ({children , btnClass , setShowAlert}:ButtonProps) => {
  return (
    <button 
      type="button"
      onClick={() => setShowAlert(prev => !prev)}
      className={[styles.btn , styles['btn-' + btnClass]].join(' ')}
    >
      {children}

    </button>
  );
};

export default Button;
