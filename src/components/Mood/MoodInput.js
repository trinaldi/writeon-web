import React from 'react'

const MoodInput = ({ emoji, mood, checked, handleChange }) => {
  return(
    <>
      <label htmlFor="very_bad" className="f3 pa2">{ emoji }</label>
      <input
        className="o-0 m-25"
        name="mood"
        checked={checked === mood}
        onClick={handleChange}
        type="checkbox"
        value={ mood } />
    </>
  )
}

export default MoodInput
