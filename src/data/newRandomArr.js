import data from './data'

const newRandomArr = () => {
	// Создаем копию массива индексов всех вопросов
	const indices = Array.from({ length: data.length }, (_, i) => i)
	
	// Алгоритм Фишера-Йетса для более качественного перемешивания
	for (let i = indices.length - 1; i > 0; i--) {
		// Генерируем случайный индекс от 0 до i
		const j = Math.floor(Math.random() * (i + 1))
		// Меняем местами элементы
		;[indices[i], indices[j]] = [indices[j], indices[i]]
	}
	
	// Возвращаем первые 15 элементов (или меньше, если вопросов меньше 15)
	return indices.slice(0, 15)
}

export default newRandomArr
