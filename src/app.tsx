import './app.css'
import { Combobox, ComboboxOption } from './combobox/combobox'

const colorOptions: ComboboxOption[] = [
  { value: 'red', label: 'Red'},
  { value: 'green', label: 'Green'},
  { value: 'blue', label: 'Blue'},
  { value: 'yellow', label: 'Yellow'},
  { value: 'orage', label: 'Orange'},
  { value: 'pink', label: 'Pink'},
  { value: 'purple', label: 'Purple'},
  { value: 'gray', label: 'Gray'}
]

export const App = () => {
  const isSearchable = window.location.href.includes('?isSearchable=true')
  console.log('url:', window.location.href, isSearchable)
  return (
    <>
      <Combobox 
        label="Select a color"
        options={colorOptions}
        onChange={(option) => console.log(`Combobox example 1: ${option.value}`)}
        isSearchable={isSearchable}
      />
    </>
  )
}

export default App
