const markAll = document.querySelector("#mark-all");
const numberNotifications = document.querySelector('#numberNotifications');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
	post.addEventListener('click', () => {
		post.querySelector('.not-read').classList.remove('not-read');
		updateNumberNotifications();
	});
});

// Eliminar la clase que le da el aspecto de notificación

markAll.addEventListener('click', () => {

	const notReadElements = document.querySelectorAll('.not-read');

	// Realizar recorrido al NodeList para quitarle la clase 'not-read'
	notReadElements.forEach(notReadElement => {
		notReadElement.classList.remove('not-read');

	});

	updateNumberNotifications();

});

function updateNumberNotifications() {
	// Conusltar de nuevo los elementos que cuentes con la clase 'not-read' y conocer la longitus del NodeList para atualizar el número correspondiente a las notificaciones
	const notReadElementsAfter = document.querySelectorAll('.not-read');
	numberNotifications.innerText = notReadElementsAfter.length
}