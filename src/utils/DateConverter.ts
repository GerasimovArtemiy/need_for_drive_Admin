export const dateConverter = (date: string | number) => {
    const converterDate = new Date(date)
        .toLocaleTimeString(navigator.language, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
        .replace(',', ' ')
    return converterDate
}
