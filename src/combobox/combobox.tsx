import { FC, useEffect, useRef, useState } from 'react'
import './combobox.css'
export interface ComboboxOption{
  value: string
  label: string
}

export interface ComboboxProps{
  isSearchable?: boolean
  label: string
  options: ComboboxOption[]
  onChange: (value: ComboboxOption) => void
}
export const Combobox: FC<ComboboxProps> = (props) => {
  const {isSearchable, label, options, onChange} = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<ComboboxOption | undefined>(undefined)
  const [filter, setFilter] = useState<string>('')

  const filterInputRef = useRef<HTMLInputElement>(null)

  const getComboboxDisplayValue = () => {
    return selectedOption ? selectedOption.label : label
  }

  const handleOnChange = (option: ComboboxOption) => {
    console.log('inside handleOnChange:', option)
    setSelectedOption(option)
    setIsOpen(false)
    onChange(option)
  }

  useEffect(() => {
    if (isOpen && isSearchable) {
      setTimeout(() => {
        filterInputRef.current?.focus()
      }, 200)
    }
    if (!isOpen) {
      setFilter('')
    }
  }, [isOpen, isSearchable])
  return (
    <div className='combobox-wrapper'>
      <div 
        className={`combobox-overlay ${!isOpen ? 'hidden' : ''}`} 
        onClick={() => {
          console.log('overlay clicked')
          setIsOpen(false)
        }}
      />
      <div 
        className='combobox-input'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <div className='combobox-input-text'>{getComboboxDisplayValue()}</div>
      </div>
      { !isOpen ? null : (
        <div className='combobox-option-list'>
          { !isSearchable ? null : (
            <input 
              className='combobox-searchable-input'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const newFilter = event.currentTarget.value ?? ''
                setFilter(newFilter)
              }}
              ref={filterInputRef}
              placeholder={"Filter results"}
            />
          )}
          { options.filter(option => {
            return option.label.toLowerCase().includes(filter.toLowerCase())
          }).map(option => {
            return (
              <div 
                key={`combobox-option-value-${option.value}`}
                className={`combobox-option${selectedOption?.value === option.value ? ' selected' : ''}`}
                onClick={(event) => {
                  event.stopPropagation()
                  handleOnChange(option)
                }}
              >
                <div className='combobox-option-text'>
                {`${option.label}`}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>

  )
}