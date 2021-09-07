const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
		const input = document.querySelector('#searchByID')

    console.log(input.value)

		fetch(`http://localhost:3000/movies/${input.value}`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			const title = document.querySelector('#movieDetails h4')
			const summary = document.querySelector('#movieDetails p')

			title.innerText = data.title;
			summary.innerText = data.summary;
		});

		inputForm.reset()
  });
  
}

document.addEventListener('DOMContentLoaded', init);