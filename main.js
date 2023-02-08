
const btn = document.querySelector('button')

const getData = () => {
	fetch('https://akademia108.pl/api/ajax/get-post.php',{
        method: 'GET',
    })
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
            const pId = document.createElement('p')
            const pUserId = document.createElement('p')
            const pTitle = document.createElement('p')
            const pBody = document.createElement('p')
            const hr = document.createElement('hr')

            pId.textContent = `Post ID: ${data.id}`
            pUserId.textContent = `User ID: ${data.userId}`
            pTitle.textContent = `Post ID: ${data.title}`
            pBody.textContent = `Post ID: ${data.body}`

            document.body.append(pId, pUserId, pTitle, pBody, hr)
          
		}).catch(error => {
            console.error(error);
        })
};

btn.addEventListener('click', getData);
