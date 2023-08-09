import { ReactNode } from "react";


const Alert = ({children , onClose}:{children:JSX.Element | string | ReactNode  , onClose:() => void}) => {
  return (
    <div className="alert alert-success alert-alert-dismissible" role="alert">
      {children}
    <button type="button"  className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
