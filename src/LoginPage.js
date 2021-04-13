import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './App.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-input" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const LoginPage = props => {
  console.log("test comment")
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit(props.validateFun)} className="login-form">
      <h2 className="login-header" > Login </h2>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" className="button" disabled={submitting}>
          Sign in
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'loginPageValidation'
})(LoginPage)