interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

function SearchInput({ value, onChange }: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Поиск"
      value={value}
      onChange={handleChange}
      className="search"
    />
  )
}

export default SearchInput
