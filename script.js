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
const noteBgs = ['rgb(13, 73, 184)', '#c2950f', 'rgb(98, 12, 148)']
const notesTitlesList = []
const notesList = []
const notesInfo = document.querySelector('.notes__info')

//KOD
const searchItem = e => {
	const text = e.target.value.toLowerCase()
	console.log(note)
	notesTitlesList.forEach(noteTitle => {
		if (noteTitle.textContent.toLowerCase().indexOf(text) !== -1) {
			noteTitle.closest('div.note').style.display = 'block'
		} else {
			noteTitle.closest('div.note').style.display = 'none'
		}
	})
}

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
		note = document.createElement('div')
		createNote()
		noteTitle.textContent = titleInput.value
		noteText.textContent = textInput.value
		chooseNoteBg()
		notes.append(note)
		toolsError.textContent = ''
		titleInput.value = ''
		textInput.value = ''
		closeTools()
		notesTitlesList.push(noteTitle)
		notesList.push(note)
		notesInfo.textContent = ''
	} else {
		toolsError.textContent = 'Podaj treść!'
	}
}

const chooseNoteBg = () => {
	let x = Math.floor(Math.random() * 3)
	note.style.backgroundColor = noteBgs[x]
}

const createNote = () => {
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
}

const checkClick = e => {
	if (e.target.matches('.fa-xmark')) {
		e.target.closest('div').remove()
		notesList.pop()
		if (notesList.length == 0) {
			notesInfo.textContent = 'Brak notatek...'
		}
	}
}

search.addEventListener('keyup', searchItem)
notes.addEventListener('click', checkClick)
createNoteBtn.addEventListener('click', addNote)
closeToolsBtn.addEventListener('click', closeTools)
tools.addEventListener('click', showTools)
searchIcon.addEventListener('click', showSearch)
closeSearchIcon.addEventListener('click', showSearch)
