document.querySelector('#edit-entry-form').addEventListener('submit',async (evt)=>{

  evt.preventDefault();
  const form = evt.target;
  const id = evt.target.dataset.id;
  const singer = evt.target.singer.value;
  const songTitle = evt.target.songTitle.value;

  const response = await fetch(`/entries/${id}`,{
    method:"PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({singer,songTitle})
  })

  const st = await response.json();
  if (st.success) window.location.href = '/';

})



