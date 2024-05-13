const Box = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 18 18"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.375 5.45825L8.99998 8.99992M8.99998 8.99992L2.62498 5.45825M8.99998 8.99992L9 16.1249M15.75 12.0439V5.95603C15.75 5.69904 15.75 5.57055 15.7121 5.45595C15.6786 5.35457 15.6239 5.26151 15.5515 5.18299C15.4697 5.09424 15.3574 5.03184 15.1328 4.90704L9.58277 1.8237C9.37007 1.70553 9.26372 1.64645 9.15109 1.62329C9.05141 1.60278 8.9486 1.60278 8.84891 1.62329C8.73628 1.64645 8.62993 1.70553 8.41723 1.8237L2.86723 4.90704C2.64259 5.03184 2.53026 5.09424 2.44847 5.18299C2.37612 5.26151 2.32136 5.35457 2.28786 5.45595C2.25 5.57055 2.25 5.69904 2.25 5.95603V12.0439C2.25 12.3008 2.25 12.4293 2.28786 12.5439C2.32136 12.6453 2.37612 12.7384 2.44847 12.8169C2.53026 12.9056 2.64259 12.968 2.86723 13.0928L8.41723 16.1762C8.62993 16.2943 8.73628 16.3534 8.84891 16.3766C8.9486 16.3971 9.05141 16.3971 9.15109 16.3766C9.26372 16.3534 9.37007 16.2943 9.58277 16.1762L15.1328 13.0928C15.3574 12.968 15.4697 12.9056 15.5515 12.8169C15.6239 12.7384 15.6786 12.6453 15.7121 12.5439C15.75 12.4293 15.75 12.3008 15.75 12.0439Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Box;
