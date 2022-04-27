const searchIcon = document.querySelector('.search-icon')
const search = document.querySelector('.nav__search')
const pageHeading = document.querySelector('.nav__title')
const closeSearchIcon = document.querySelector('.close-search')
//TOOLS
const tools = document.querySelector('.tools__box')
const toolsActive = document.querySelector('.tools__box--clicked')
const closeToolsBtn = document.querySelector('.tools__button-close')
//create Note
const createNoteBtn = document.querySelector('.tools__button-accept')
const titleInput = document.querySelector('.tools__box-title')
const textInput = document.querySelector('.tools__box-textarea')
const toolsError = document.querySelector('.error-note')
const notes = document.querySelector('.notes')
let noteText, noteTitle, deleteNoteBtn, note



const showSearch = () => {
	search.classList.toggle('nav__search--active')
	pageHeading.classList.toggle('nav__title--active')
	searchIcon.classList.add('fa-xmark')
	searchIcon.classList.toggle('icon--active')
	closeSearchIcon.classList.toggle('icon--active')
}

const showTools = () => {
	toolsActive.classList.add('tools__box--active')
	tools.classList.remove('tools__box--active')
}

const closeTools = () => {
	toolsActive.classList.remove('tools__box--active')
	tools.classList.add('tools__box--active')
	toolsError.textContent = ''
}

const addNote = () => {
	if (titleInput.value !== '' && textInput.value !== '') {
		createNote()
		noteTitle.textContent = titleInput.value
		noteText.textContent = textInput.value
		notes.append(note)
		toolsError.textContent = ''
		titleInput.value = ''
		textInput.value = ''
		closeTools()
	} else {
		toolsError.textContent = 'Podaj treść!'
	}
}



const createNote = () => {
	note = document.createElement('div')
	note.classList.add('note')
	deleteNoteBtn = document.createElement('button')
	deleteNoteBtn.classList.add('delete-note')
	deleteNoteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	const titleBox = document.createElement('div')
	titleBox.classList.add('title-box')
	noteTitle = document.createElement('h2')
	noteTitle.classList.add('note-title')
	titleBox.append(noteTitle)
	const hr = document.createElement('hr')
	noteText = document.createElement('p')
	noteText.classList.add('note-text')
	note.append(deleteNoteBtn, titleBox, hr, noteText)
	
	const deleteNote = () => {
		note.remove()
	}
	deleteNoteBtn.addEventListener('click', deleteNote)
}




createNoteBtn.addEventListener('click', addNote)
closeToolsBtn.addEventListener('click', closeTools)
tools.addEventListener('click', showTools)
searchIcon.addEventListener('click', showSearch)
closeSearchIcon.addEventListener('click', showSearch)