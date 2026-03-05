export default function Parent() {
  function handleSearch(text) {
    console.log("User searched:", text);
  }

  return <SearchBar onSearch={handleSearch} />;
}

