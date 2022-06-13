document.querySelector('#delete-action').addEventListener('click', async (event) => {

  event.preventDefault();

  const id = event.target.closest('.entry').dataset.id;
  const response = await fetch(`/entries/${id}`, {
    method: "DELETE"
  });
  const st = await response.json();
  if (st.success) window.location.href = '/';
})

