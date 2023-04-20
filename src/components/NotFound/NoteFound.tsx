import './NotFound.scss'

type Props = {}

const NoteFound = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h3>404 Page NotFound</h3>
    </div>
  )
}

export default NoteFound
