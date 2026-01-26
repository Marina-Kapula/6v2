import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => (
  <div>
    <h2>Anecdotes</h2>
    <Notification />      {/* ← вот здесь появится сообщение */}
    <Filter />
    <AnecdoteList />
    <AnecdoteForm />
  </div>
)

export default App
