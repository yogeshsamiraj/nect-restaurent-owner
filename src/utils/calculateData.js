import tempData from '../utils/tempData.json'
import customers from '../utils/customers.json'


export const calcualteData = (data) =>{
    data.forEach(item => {
        if (item.type === 'Indicators') {
            if (item.key === 'Orders'){
                item.value = tempData.length
            }

            if (item.key === 'Customers'){
                item.value = customers.length
            }

            if (item.key === 'Delivery_Partners'){
                item.value = customers.length
            }
        }

    })

return data
}


export const generateRandomDate = () => {
    const today = new Date()
    const pastMonth = new Date()
    pastMonth.setMonth(today.getMonth() - 1)
  
    const randomTime =
      pastMonth.getTime() +
      Math.random() * (today.getTime() - pastMonth.getTime())
    return new Date(randomTime).toISOString().split("T")[0]
  }

export const addDateToorders = (data) => {
    data.forEach(item => {
       item.Order_Date = generateRandomDate()
    })

    return data
}  