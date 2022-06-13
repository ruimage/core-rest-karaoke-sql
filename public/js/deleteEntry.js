document.querySelector('#delete-action').addEventListener('click', async (event) => {


  const entry = event.target.closest('.entry');
  const isDelete = event.target.dataset.isdel;
  const id = entry.dataset.id;
  if (isDelete) {
    event.preventDefault();
    const response = await fetch(`/entries/${id}`, {
      method: "DELETE"
    });
    const st = await response.json();
    if (st.success) entry.remove();
  }
})

