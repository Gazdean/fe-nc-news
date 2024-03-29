export default function FilterOptions({filter, searchParams, setSearchParams}) {
    
    
      function handleSelectSortBy(event) {
        const sortBy = event.target.value;
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", sortBy);
        setSearchParams(newParams);
      }
    
      function handleSelectOrder(event) {
        const order = event.target.value;
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", order);
        setSearchParams(newParams);
      }

    return (
        <>
       
          {!filter ? (
            <div id="filter-container">
              <label htmlFor="select-sort-by">Sort by: {}</label>
              <select
                id="select-sort-by"
                className="drop-down"
                onChange={handleSelectSortBy}
              >
                <option value="date">Date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
              </select>

              <label htmlFor="select-order">order: {}</label>
              <select
                id="select-order"
                className="drop-down"
                onChange={handleSelectOrder}
              >
                <option className="option" value="desc">Descending</option>
                <option className="option" value="asc">Ascending</option>
              </select>
            </div>
          ) : null}
        
        </>
    )
}