import Toast from 'react-bootstrap/Toast';
import Alert from './Alert';

export interface ToastProps {
    ref?: React.Ref<HTMLDivElement>;
}

export default function ErrorAlert({ref, ...props}: ToastProps) {
  return (
    <Toast ref={ref} {...props} delay={3000} autohide>
        <Alert>
            
        </Alert>
    </Toast>
  )
}
