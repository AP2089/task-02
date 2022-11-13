export default function autocompleteDocuments(array, phrase) {
  const result = [];
  const keys = ['title', 'description'];

  const selected = (val) => {
    const regexp = new RegExp('(' + phrase + ')', 'gi');

    if (val) {
      return val.replace(regexp, '<span class="phrase-selected">$1</span>');
    }

    return null;
  }

  const filter = (dataset, category = null) => {
    if (phrase === '') return null;

    dataset.filter(data => {
      for (const key of keys) {
        const value = data[key];
  
        if (!result.filter(v => v.id === data.id).length && typeof value === 'string' && value.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())) {
          const id = data.id;
          let title = selected(data.title);
          let description = selected(data.description);

          if (category) {
            category = {
              id: category.id,
              title: category.title
            }
          }

          result.push({
            id,
            title,
            description,
            category
          });
        }
  
        if (data.children) {
          filter(data.children, data);
        }
      }
    });
  }

  filter(array);

  return result;
}