import React, { useState, useEffect } from 'react'
import { ADD_MOOD_MUTATION } from '../../graphql/mutations/ADD_MOOD_MUTATION';
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { useMutation } from '@apollo/client'
import MoodInput from './MoodInput';

const MoodPanel = ({ myMood, postId }) => {
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
        <div className={`flex flex-column ${mood === 'very_bad' ? 'mood very_bad' : ''}`}
        >
          <MoodInput
            checked={mood}
            mood="very_bad"
            handleChange={handleChange}
            emoji="😢" />
        </div>
        <div
          className={`flex flex-column ${mood === 'bad' ? 'mood bad' : ''} `}>
        
        <MoodInput
          checked={mood}
          mood="bad"
          handleChange={handleChange}
        emoji="🙁" />
        </div>
        <div className={`flex flex-column ${mood === 'neutral' ? 'mood neutral' : ''} `}>
        <MoodInput
          checked={mood}
          mood="neutral"
          handleChange={handleChange}
        emoji="😐" />
        </div>
        <div className={`flex flex-column ${mood === 'good' ? 'mood good' : ''} `}>
        <MoodInput
          checked={mood}
          mood="good"
          handleChange={handleChange}
        emoji="🙂" />
        </div>
        <div className={`flex flex-column ${mood === 'very_good' ? 'mood very_good' : ''} `}>
        <MoodInput
          checked={mood}
          mood="very_good"
          handleChange={handleChange}
        emoji="😁" />
        </div>

      </form>
    </>
  )
}

export default MoodPanel
