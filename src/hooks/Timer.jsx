export const timer = () => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    const month = date.toLocaleString('en', { month: 'long' });
    const weekDay = date.getDate()
    const year = date.getFullYear()
    let dayWeek = 'th'

    if(hour < 10){
        hour = '0' + hour
    }

    if(minute < 10){
        minute = '0' + minute
    }

    if (weekDay == 1 || weekDay == 21 || weekDay == 31) {
        dayWeek = 'st'
    } else if (weekDay == 2 || weekDay == 22) {
        dayWeek = 'nd'
    } else if (weekDay == 3 || weekDay == 23) {
        dayWeek = 'rd'
    }else{
        dayWeek = 'th'
    }

    const hourMinute = hour + ":" + minute
    const monthDayYear = month + ' ' + weekDay + dayWeek + ', ' + year


    return {
        hourMinute, monthDayYear
    }

}
