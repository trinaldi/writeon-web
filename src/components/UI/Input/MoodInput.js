import React, { useState, useEffect } from 'react'
import { POSTS_QUERY } from '../../../graphql/queries/POSTS_QUERY'
import { useMutation } from '@apollo/client'
import { ADD_MOOD_MUTATION } from '../../../graphql/mutations/ADD_MOOD_MUTATION';

const MoodInput = ({ myMood, postId }) => {
  const [mood, setMood] = useState(myMood)

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
    }
  })

  useEffect(() => {
    addMood()
  }, [addMood,mood])

  return(
    <>
      <form className="flex bn">
        <div
          className={`flex flex-column ${mood === 'very_bad' ? 'mood very_bad' : ''}`}>
          <label htmlFor="very_bad" className="f3 pa2">😢</label>
          <input
            name="mood"
            checked={mood === 'very_bad'}
            onClick={handleChange}
            type="checkbox"
            value="very_bad" />
        </div>
        <div
          className={`flex flex-column ${mood === 'bad' ? 'mood bad' : ''} `}>
          <label htmlFor="bad" className="f3 pa2">🙁</label>
          <input
            name="mood"
            checked={mood === 'bad'}
            onClick={handleChange}
            type="checkbox"
            value="bad" />
        </div>
        <div
          className={`flex flex-column ${mood === 'neutral' ? 'mood neutral' : ''}`}>
          <label htmlFor="neutral" className="f3 pa2">😐</label>
          <input
            name="mood"
            checked={mood === 'neutral'}
            onClick={handleChange}
            type="checkbox"
            value="neutral" />
        </div>
        <div
          className={`flex flex-column ${mood === 'good' ? 'mood good' : ''}`}>
          <label htmlFor="good" className="f3 pa2">🙂</label>
          <input
            checked={mood === 'good'}
            name="mood"
            onClick={handleChange}
            type="checkbox"
            id="good"
            value="good" />
        </div>
        <div
          className={`flex flex-column ${mood === 'very_good' ? 'mood very_good' : ''}`}>
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

export default MoodInput
