const FormInput = ({ label, name, type }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={name} />
    </>
  )
}
export default FormInput
