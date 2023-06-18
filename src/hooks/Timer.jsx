import React from 'react'

export const timer = () => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const month = date.toLocaleString('en', { month: 'long' });
    const weekDay = date.getDate()
    const daysWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayWeek = daysWeek[date.getDay()];
    const year = date.getFullYear()

    const hourMinute = hour + ":" + minute
    const monthDayYear = month + ' ' + weekDay + dayWeek + ', ' + year


    return {
        hourMinute, monthDayYear
    }

}
