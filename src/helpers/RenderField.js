import React from 'react';

//RenderField
export const RenderField = (props) => {
  const { input, meta, label, type } = props;
  const hasError = meta.touched && meta.error;
  return (
    <div className="row form-group">
      <div className="offset-md-5 col-md-3 text-left">
      <label>{label}</label>:
        <input {...input} type={type} className="form-control" />
        {hasError && <span className="text-danger">{meta.error}</span>}
      </div>
    </div>
  );
};
