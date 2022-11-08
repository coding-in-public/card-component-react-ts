
import { PaperAirplaneIcon, CameraIcon, DocumentIcon } from '@heroicons/react/24/solid'
import './App.css'
import Badge from './components/Badge'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <section className="card-container">
        <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Read Post Now'
          image='https://source.unsplash.com/random'
          badge={{
            text: "New Post",
            filled: false,
          }}
          indicator="Sold"
          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon />
          }} />
        <Card
          body='Irure culpa quis in mollit nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='This is a Great Photo!'
          image='https://source.unsplash.com/random/500X400'
          badge={{
            text: "New Photo Alert",
            filled: false,
          }}
          indicator="New"
          subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
            icon: <CameraIcon />
          }} />
        <Card
          body='hi'
          title='hi2'
          btn={{
            text: "Button",
            href: '#',
            type: 'primary',
            filled: false,
          }} />
      </section>
    </div>
  )
}

export default App
