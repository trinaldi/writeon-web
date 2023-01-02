import React, { useState, useEffect } from 'react'
import { POSTS_QUERY } from '../../../graphql/queries/POSTS_QUERY'
import { useMutation } from '@apollo/client'
import { ADD_MOOD_MUTATION } from '../../../graphql/mutations/ADD_MOOD_MUTATION';

const RadioInput = ({ myMood, postId }) => {
  const [mood, setMood] = useState(myMood)
  const [disabled, setDisabled] = useState()

  const handleChange = (e) => {
    if(e.target.checked) {
      setMood(e.target.value)
    }
  }

  const [addMood] = useMutation(ADD_MOOD_MUTATION, {
    variables: {
      postId,
      mood
    },

    update: (cache, { data: { addMood } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });

      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [addMood, ...data.posts]
        }})
    },
    onCompleted: () => setDisabled(true)
  })

  useEffect(() => {
    addMood()
  }, [addMood,mood])

  return(
    <>
      <form disabled={disabled} className="flex justify-center bn">
        <div className="flex flex-column">
          <label htmlFor="very_bad" className="f3 pa2">😢</label>
          <input
            name="mood"
            checked={mood === 'very_bad'}
            onClick={handleChange}
            type="checkbox"
            value="very_bad" />
        </div>
        <div className="flex flex-column">
          <label htmlFor="bad" className="f3 pa2">🙁</label>
          <input
            name="mood"
            checked={mood === 'bad'}
            onClick={handleChange}
            type="checkbox"
            value="bad" />
        </div>
        <div className="flex flex-column">
          <label htmlFor="neutral" className="f3 pa2">😐</label>
          <input
            name="mood"
            checked={mood === 'neutral'}
            onClick={handleChange}
            type="checkbox"
            value="neutral" />
        </div>
        <div className="flex flex-column">
          <label htmlFor="good" className="f3 pa2">🙂</label>
          <input
            checked={mood === 'good'}
            name="mood"
            onClick={handleChange}
            type="checkbox"
            id="good"
            value="good" />
        </div>
        <div className="flex flex-column">
          <label htmlFor="very_good" className="f3 pa2">😁</label>
          <input
            name="mood"
            checked={mood === 'very_good'}
            onClick={handleChange}
            type="checkbox"
            value="very_good" />
        </div>
      </form>
    </>
  )
}

export default RadioInput
