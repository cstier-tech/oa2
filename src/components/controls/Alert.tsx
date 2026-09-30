import React from 'react'
import BSAlert, {AlertProps as BSAlertProps} from 'react-bootstrap/Alert';

export interface AlertProps extends BSAlertProps {
    ref?: React.Ref<HTMLDivElement>;
}

export default function Alert({children, ref, ...props}: AlertProps) {
  return (
    <BSAlert ref={ref} {...props}>{children}</BSAlert>
  )
}
