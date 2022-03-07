import { React } from '@webpack/common';
const Lodash = window._;

export default React.memo((props) =>
   <svg
      {...Lodash.omit(props, ['width', 'height', 'color', 'foreground'])}
      aria-hidden={props['aria-hidden'] ?? false}
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox='0 0 24 24'
   >
      <path
         className={props.foreground}
         fill={props.color ?? 'currentColor'}
         fillRule='evenodd'
         clipRule='evenodd'
         d='M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z'
      />
   </svg>
);
