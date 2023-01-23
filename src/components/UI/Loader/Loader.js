import React from 'react'

const Loader = ({ loading, data }) => {
  return(
    <>
      {loading &&
        <div class="mw5 mw7-ns center tc pa3 ph5-ns">
          <p class="tracked f5 measure-narrow center">
        loading...
          </p>
        </div>
      }

      {!loading && !data &&
        <div class="mw5 mw7-ns center tc pa3 ph5-ns">
          <p class="f5 measure-narrow center">
            no WriteOn found.
          </p>
          <p class="f5 measure-narrow center">
            go ahead, it's free.
          </p>
        </div>
      }

    </>
  )
}

export default Loader
