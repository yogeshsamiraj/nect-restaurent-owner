import tempData from '../utils/tempData.json'
import custData from '../utils/customers.json'
import deliveryData from '../utils/deliverypartner.json'



export const getFieldsofSource = (source) => {

    if (source === 'Orders') {
        return Object.keys(tempData[0]).filter(keys => keys !== 'Items')
    }

    if (source === 'Customers') {
        return Object.keys(custData[0])
    }

    if (source === 'Delivery_Partners') {
        return Object.keys(deliveryData[0])
    }

    return []
}