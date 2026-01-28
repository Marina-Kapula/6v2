import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteSlice'
import { setNotification, clearNotification } from '../reducers/notificationSlice.js'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const lower = filter.toLowerCase()
    return anecdotes.filter(a => a.content.toLowerCase().includes(lower))
  })

const handleVote = (anecdote) => {
  dispatch(voteForAnecdote(anecdote.id))
  dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
}


  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
